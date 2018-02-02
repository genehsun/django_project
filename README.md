目录里的requirements.txt用于指定项目的依赖包，进入backend目录，用以下命令进行安装：

	pip install -r requirements.txt

整个方案里很重要的一个原则是要把Django退化成一个纯提供RESTful API的工具，舍弃框架本身提供的template模板和static静态文件，这部分交给React前端框架来做。

### 基于Django和ReactJS构建前后端分离的Web应用
---
使用Django和ReactJS构建前后端分离的单页应用，Django为所有url提供唯一的视图出口，并且负责提供RESTFul API，摒弃掉Django自带的template，用ReactJS作为视图层，并且由ReactJS负责路由。

项目分为backend和frontend两部分，其中backend是Django后端所在的目录，frontend是ReactJS前端所在的目录。

首先，要在系统中安装Django：

	pip install django	
	
安装之后，在项目目录下使用以下命令来创建一个Django工程：

	django-admin.py startproject backend
	
项目创建之后，进入backend目录，可以输入以下命令启动一个本地服务器：
	
	cd backend
	python manage.py migrate
	python manage.py runserver
	
migrate命令用来在数据库中创建相关的表，因为Django默认集成了一个admin应用用于后台管理，所以我们要执行这条命令在数据库中生成admin model相关的table。此时如果一切正常，在浏览器中访问 <http://127.0.0.1:8000>，可以看到“It worked!”。一个Django服务这么简单、这么快就跑起来了。
	
换个url访问 <http://127.0.0.1:8000/admin>，可以看到一个后台管理系统的登录界面。我们需要创建一个超级管理员：

	python manage.py createsuperuser
	
按提示输入信息，即可完成创建，回到浏览器输入用户名和密码进行登录。

前面提到用Django提供RESTFul API，这依赖于[Django Rest Framework](https://github.com/encode/django-rest-framework)这个强大且灵活的工具包，我们用这个包构建RESTful API返回JSON响应数据给前端调用并渲染页面。这也是前后端分离的重要一步：

	pip install djangorestframework

打开settings.py，将'rest_framework'添加到'INSTALLED_APPS'的设置里。然后配置Django REST Framework的全局变量，存放在一个配置字典中，名为REST_FRAMEWORK：

	REST_FRAMEWORK = {
	    'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
         ]
	}
	
现在我们已经做好准备，可以开始封装API了。创建一个专门用于提供API的应用，就命名为api：

	python manage.py startapp api
	
同样的，在'INSTALLED_APPS'中添加'api'，每次要使用新的应用都需要在'INSTALLED_APPS'中添加。我们来封装用于获取admin信息的API。在api目录下，创建serializers.py如下：

	from django.contrib.auth.models import User, Group
	from rest_framework import serializers

	class UserSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
        	model = User
        	fields = ('url', 'username', 'email', 'is_staff')

	class GroupSerializer(serializers.HyperlinkedModelSerializer):
        class Meta:
        	model = Group
	       	fields = ('url', 'name')
	       	
修改api目录下的views.py：
	
	from django.contrib.auth.models import User, Group
	from rest_framework import viewsets
	from api.serializers import UserSerializer,GroupSerializer

	class UserViewSet(viewsets.ModelViewSet):
	    queryset = User.objects.all()
        serializer_class = UserSerializer

	class GroupViewSet(viewsets.ModelViewSet):
    	queryset = Group.objects.all()
	    serializer_class = GroupSerializer

然后在api目录下，创建urls.py文件：

	from django.conf.urls import url, include
	from rest_framework import routers
	from api.views import UserViewSet,GroupViewSet

	router = routers.DefaultRouter()
	router.register(r'users', UserViewSet)
	router.register(r'groups', GroupViewSet)

	urlpatterns = [
        url(r'^', include(router.urls)),
    ]
	
为了使用可视化的API，在urls.py文件里，添加下面的内容：

	urlpatterns = [
        ...
	    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
	]
	
最后，我们还需要修改项目根目录下的urls.py，把api应用的urls.py文件include进来：

	urlpatterns = [
        ...
	    url(r'^api/', include('api.urls')),
	]
	
至此，通过访问<http://127.0.0.1:8000/api>可以看到用于获取admin信息的API已经可用了。

我们还需要创建一个应用作为站点的访问入口，以blog应用为例：

    python manage.py startapp blog
		
同样的，要添加blog应用到'INSTALLED_APPS'配置中，在blog目录里创建urls.py文件如下：

	from django.conf.urls import url
	from django.views.generic import TemplateView

	urlpatterns = [
    	url(r'^', TemplateView.as_view(template_name="index.html")),
	]

其中，index.html是应用的主入口，我们还需要给index.html设置寻找路径，在settings.py里修改TEMPLATES配置：

	TEMPLATES = [
        {
            ...
			'DIRS': [
            	os.path.join(BASE_DIR, 'blog/templates')
	        ],
            ...
        },
    ]
	
在blog目录下创建templates子目录，暂且实现一个静态的index.html放在里面：

	<!DOCTYPE HTML>
	<html>
        <body>
        	<h1>This is a blog.</h1>
	    </body>
	</html>
	
最后，修改根目录下的urls.py文件引入blog应用的urls.py：

	urlpatterns = [
        ...
	    url(r'^api/', include('api.urls')),
	    url(r'^blog/', include('blog.urls')),
	]

访问<http://127.0.0.1:8000/blog>就可以看到静态的页面内容了。

静态页面不是我们的最终目的，我们来封装blog应用所需的Blog model和Category model。在api目录下的models.py添加如下代码：

    from django.db import models
    from django.db.models import permalink

    class Blog(models.Model):
        title = models.CharField(max_length=100, unique=True)
        slug = models.SlugField(max_length=100, unique=True)
        body = models.TextField()
        posted = models.DateTimeField(db_index=True, auto_now_add=True)
        category = models.ForeignKey('Category')

        def __unicode__(self):
            return '%s' % self.title

        @permalink
        def get_absolute_url(self):
            return ('view_blog_post', None, { 'slug': self.slug })

    class Category(models.Model):
        title = models.CharField(max_length=100, db_index=True)
        slug = models.SlugField(max_length=100, db_index=True)

        def __unicode__(self):
            return '%s' % self.title

        @permalink
        def get_absolute_url(self):
            return ('view_blog_category', None, { 'slug': self.slug })
            
然后在api应用的admin.py里注册这两个model：

    from django.contrib import admin
    from api.models import Blog, Category

    class BlogAdmin(admin.ModelAdmin):
        exclude = ['posted']
        prepopulated_fields = {'slug': ('title',)}

    class CategoryAdmin(admin.ModelAdmin):
        prepopulated_fields = {'slug': ('title',)}

    admin.site.register(Blog, BlogAdmin)
    admin.site.register(Category, CategoryAdmin)
    
执行以下命令创建model对应的table：

	python manage.py makemigrations
	python manage.py migrate    
	
至此，我们可以在 <http://127.0.0.1:8000/admin> 后台操作Blog和Category这两个model了。

类似于暴露admin应用API的做法，我们可以同样的暴露blog应用的API。一样的步骤，不再赘述。

再次访问 <http://127.0.0.1:8000/api>，可以看到如下四个API：

    {
        "users": "http://127.0.0.1:8000/api/users/",
        "groups": "http://127.0.0.1:8000/api/groups/",
        "blogs": "http://127.0.0.1:8000/api/blogs/",
        "categorys": "http://127.0.0.1:8000/api/categorys/"
    }

接下我们借助[create-react-app](https://github.com/facebookincubator/create-react-app)这个脚手架工具来创建ReactJS工程，先要安装create-react-app：
	
	npm install -g create-react-app
	
然后在工程的根目录下执行：

	create-react-app frontend
	
这样一个用Webpack构建的ReactJS工程就创建好了。

为了可以自己修改一些配置文件，我们执行如下命令：

	cd frontend
	npm run eject
	
执行之后可以看到工程下多了config和scripts两个目录，这里存放着Webpack构建工程的脚本。

执行以下命令就可以让ReactJS工程跑起来了：

	npm run start

通过访问 <http://localhost:3000/> 可以看到ReactJS的启动页面。












接下来整合ReactJS工程和Django工程，使得只要启动Django的服务就可以访问React写的前端页面。requirements.txt里已经添加了[django-webpack-loader](https://github.com/ezhome/django-webpack-loader)依赖包，用于实现Django和Webpack的绑定。

先修改'INSTALLED_APPS'配置添加webpack_loader应用。同时，再添加django-webpack-loader所需的一个配置字典，名为WEBPACK_LOADER：

	WEBPACK_LOADER = {
        'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.dev.json'),
        }
    }
    
STATS_FILE是指定[webpack-bundle-tracker](https://github.com/ezhome/webpack-bundle-tracker)这个Webpack插件生成的文件路径的。使用之前要先安装：

    npm install webpack-bundle-tracker --save-dev
    
刚才执行npm run eject，就是为了根据项目结构修改一些配置，我们修改config/webpack.config.dev.js文件，把publicPath和publicUrl改成：

	const publicPath = 'http://localhost:3000/';
    const publicUrl = 'http://localhost:3000/';

接着指定webpack-bundle-tracker生成webpack-stats.dev.json的路径：
	
	const BundleTracker = require('webpack-bundle-tracker');

    module.exports = {
        entry: [
            ...
            require.resolve('webpack-dev-server/client') + '?http://localhost:3000',
            require.resolve('webpack/hot/dev-server'),
            // require.resolve('react-dev-utils/webpackHotDevClient'),
        ],
        plugins: [
            ...
            new BundleTracker({path: paths.statsRoot, filename: 'webpack-stats.dev.json'}),
        ],
    }
    
接着打开config/paths.js，添加statsRoot变量，指定webpack-stats.dev.json生成的路径与Django服务找寻的路径是一致的：

    module.exports = {
        ...
        statsRoot: resolveApp('../backend/project'),
    }
    
接着修改index.html如下：

	{% load render_bundle from webpack_loader %}
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000">
            <title>Ponynote</title>
        </head>
        <body>
            <noscript>
                You need to enable JavaScript to run this app.
            </noscript>
            <div id="root"></div>
            {% render_bundle 'main' %}
        </body>
    </html>
    
重新启动服务就可以看到<http://127.0.0.1:8000/blog>访问到的是React页面的内容了。
    
参考：<http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/>


### 在VPS环境中部署项目
--------------------

虚拟专用服务器（Virtual Private Server）。可使用容器技术和虚拟化技术在一台服务器中隔离出多个VPS。每个VPS有独立的公网IP、操作系统、CPU资源、内存空间、硬盘空间。给用户和应用程序独占资源的体验。每个VPS可以向独立服务器一样，重装操作系统、安装程序、和单独重启服务器。

不同于虚拟主机（Virtul Host）。虚拟主机要与别人共享一台服务器，其缺陷在于所有使用者同时共享服务器上的全部资源，当其中的一个使用者过度使用资源，负荷过重时即容易造成服务器发生问题，也因此造成危及其它使用者的情况。

为什么不用云服务器？云服务器是在一组集群服务器上虚拟出多个类似独立服务器的部分，集群中每个服务器上都有云服务器的一个镜像，从而大大提高了虚拟服务器的安全稳定性，除非所有的集群内服务器全部出现问题，云服务器才会无法访问。那么为什么不用呢，没别的原因，因为穷。

VPS提供商众多，我选择的是[搬瓦工](https://bwh1.net)。洛杉矶的机房、1024M内存、20G的SSD硬盘容量、1100G每月的流量，月付$4.99。ping了一下，基本在200+ms。另外，还支持随时更换机房。

购买成功之后，进入My Services，搬瓦工提供了一个叫KiwiVM Control Panel的面板用于查看和管理VPS。可以方便的进行重装系统、查看系统资源的使用情况、重置Root密码等。

搬瓦工只提供Linux操作系统，我购买的时候默认安装了CentOS，在安装程序的时候碰到各种问题，加上默认安装的Python版本和Apache版本较低，最后重装成了Ubuntu-16.04-x86_64。

在本地打开终端，用SSH登录就可以进行远程操作了。第一次使用root帐号和密码登录：
	
	ssh root@yourip -p 'sshport'。

然后创建一个新用户：
	
	adduser ‘username’

创建完成后，编辑/etc/sudoers文件，给该用户授以sudo权限：

	'username'    ALL=(ALL:ALL) ALL
	
保存退出后，该用户就有sudo权限了，往后就可以用该用户远程登录了。

需要安装的程序：

	sudo apt install git
	sudo apt install pip
	sudo apt install apache2
	sudo apt install libapache2-mod-wsgi
	
git和apache2可能是已经预装了的。

接着把项目clone到/var/www目录下，pip install项目所需的依赖。

进入/etc/apache2/sites-available这个目录，创建站点的apache配置文件：

	sudo vi yoursite.conf

具体内容如下：

	<VirtualHost *:80>
        LogLevel info

        ErrorLog "/var/www/log/apache2/mysite-error_log"
        CustomLog "/var/www/log/apache2/mysite-access_log" common

        ServerName yoursite.com
        ServerAdmin admin@example.com

        # Static files
        DocumentRoot "/var/www/yoursite"
        Alias /static/ /var/www/yoursite/static/

        <Directory "/var/www/yoursite/static">
            Require all granted
        </Directory>

        # WGSI configuration
        WSGIScriptAlias / /var/www/yoursite/project/wsgi.py

        <Directory /var/www/yoursite/project>
            <Files wsgi.py>
                Require all granted
            </Files>
        </Directory>
    </VirtualHost>
    
使默认的配置文件失效，使自己站点的配置文件生效：
	
	sudo a2dissite 000-default.conf
	sudo a2ensite yoursite.conf 

部署的时候，还需要收集静态文件，到项目目录下之行：

	python manage.py collectstatic
	
最后重启apache服务器：

	sudo apachectl graceful
	