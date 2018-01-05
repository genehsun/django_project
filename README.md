
本文讲述如何用Python写的Web应用框架Django结合Facebook推出的前端框架React搭建一个前后端分离的站点。

工程的目录结构分为backend和frontend两部分。

其中backend是Django后端项目所在的目录。目录里的requirements.txt用于指定项目的依赖包，进入backend目录，用以下命令进行安装：
    
    pip install -r requirements.txt
    
安装之后，可以使用以下命令来创建一个Django项目：

	django-admin.py startproject project
	
创建之后，进入project目录，可以输入以下命令启动一个本地服务器：
	
	python manage.py runserver
	
此时，在浏览器中访问 <http://127.0.0.1:8000>，如果一切正常，可以看到“It worked!”。

Django的一个方便之处，默认帮我们集成了一个admin应用用于后台管理。在使用它之前，我们需要先在数据库中创建相关的表，执行以下命令：
	
	python manage.py migrate	
	
此时，在浏览器中访问 <http://127.0.0.1:8000/admin>，可以看到一个后台管理系统的登录界面。我们还需要创建一个超级管理员。

	python manage.py createsuperuser
	
按提示输入信息，即可完成创建。回到浏览器输入用户名和密码进行登录。

打开requirements.txt会发现我们使用了[djangorestframework](https://github.com/encode/django-rest-framework)这个依赖。Django REST Framework是一个强大且灵活的工具包，用以构建Web APIs。我们用这个包构建RESTful API给前端调用，并且返回JSON响应数据用于页面渲染。这也是前后端分离的重要一步。

接下来，我们使用Django REST Framework来封装用于获取后台管理员账号的API。

打开settings.py，将'rest_framework'添加到'INSTALLED_APPS'的设置里。

任何Django REST Framework的全局设置，都需要存放在一个配置字典中，名为REST_FRAMEWORK：

	REST_FRAMEWORK = {
	    'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
         ]
	}
	
现在我们已经做好准备，可以开始创建API了。我们先用Django框架自带的admin应用来暴露用于获取后台管理员用户和分组的API。

首先，要创建一个专门用于提供API的应用，该应用就命名为api吧。

	python manage.py startapp api
	
在'INSTALLED_APPS'中添加'api'，每次要使用新的应用都需要在'INSTALLED_APPS'中添加。

然后在api目录下，创建serializers.py如下：

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
	       	
修改views.py如下：
	
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
	
至此，通过访问<http://127.0.0.1:8000/api>可以看到用于获取后台管理员账号的API已经可用了。
	
整个方案里很重要的一个原则是要把Django退化成一个纯提供RESTful API的工具，舍弃框架本身提供的template模板和static静态文件，这部分交给React前端框架来做。

接下来，我们再创建一个blog应用：

    python manage.py startapp blog
		
同样的，要修改'INSTALLED_APPS'配置添加blog应用、修改根目录下的urls.py文件引入blog应用的urls.py。
    	
在blog目录里创建urls.py文件如下，其中，index.html作为应用的主入口。：

	from django.conf.urls import url
	from django.views.generic import TemplateView

	urlpatterns = [
    	url(r'^', TemplateView.as_view(template_name="index.html")),
	]

我们还需要给index.html设置寻找路径。在settings.py里修改TEMPLATES配置：

	TEMPLATES = [
        {
           ...
           'DIRS': ['blog/templates'],
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

我们再访问<http://127.0.0.1:8000/blog>就可以看到页面的内容了。

接下来还有两件事要做，一个是封装blog所需的API，另一个是用React构建一个动态的前端页面。

先来创建和注册blog应用所需的models，我们分别创建一个Blog和一个Category两个model。修改api目录下的models.py

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
            
然后在admin.py里注册这两个model：

    from django.contrib import admin
    from api.models import Blog, Category

    class BlogAdmin(admin.ModelAdmin):
        exclude = ['posted']
        prepopulated_fields = {'slug': ('title',)}

    class CategoryAdmin(admin.ModelAdmin):
        prepopulated_fields = {'slug': ('title',)}

    admin.site.register(Blog, BlogAdmin)
    admin.site.register(Category, CategoryAdmin)
    
还需要在执行以下两条命令创建对应的数据库和应用字段更改：

	python manage.py makemigrations
	python manage.py migrate    
	
至此，可以在 <http://127.0.0.1:8000/admin> 后台对Blogs和Categorys进行增删改查了。

类似于暴露admin应用API的做法，我们可以同样的暴露blog应用的API。一样的步骤，不再赘述。

再次访问 <http://127.0.0.1:8000/api>，可以看到如下四个API了：

    {
        "users": "http://127.0.0.1:8000/api/users/",
        "groups": "http://127.0.0.1:8000/api/groups/",
        "blogs": "http://127.0.0.1:8000/api/blogs/",
        "categorys": "http://127.0.0.1:8000/api/categorys/"
    }

接下我们借助Facebook的脚手架工具[create-react-app](https://github.com/facebookincubator/create-react-app)来创建React项目：
	
	npm install -g create-react-app
	
	create-react-app frontend
	cd frontend
	npm run eject
	npm run start
	
其中，npm run eject是为了可以自己修改一些配置文件，执行之后可以看到多了config和scripts两个目录。

接下来整合React和Django，使得只要启动Django的服务就可以访问React写的前端页面。requirements.txt里已经添加了[django-webpack-loader](https://github.com/ezhome/django-webpack-loader)依赖包，用于实现Django和Webpack的绑定。

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
    
参照：<http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/>