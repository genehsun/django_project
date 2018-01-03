
本文讲述如何用Python写的Web应用框架Django结合Facebook推出的前端框架React搭建一个前后端分离的站点。

工程的目录结构分为backend和frontend两部分。

其中backend是Django后端项目所在的目录。目录里的requirements.txt用于指定项目的依赖包，进入backend目录，用以下命令进行安装：
    
    pip install -r requirements.txt
    
安装之后，可以使用以下命令来创建一个Django项目：

	django-admin.py startproject project
	
创建之后，进入project目录，可以输入以下命令启动一个本地服务器：
	
	python manage.py runserver
	
此时，在浏览器中访问 <http://127.0.0.1:8000>，如果一切正常，可以看到“It worked!”。

Django的一个方便之处是，它默认帮我们集成了一个admin应用用于后台管理。在使用它之前，我们需要先在数据库中创建相关的表，执行以下命令：
	
	python manage.py migrate	
	
此时，在浏览器中访问 <http://127.0.0.1:8000/admin>，可以看到一个后台管理系统的登录界面。我们还需要创建一个超级管理员。

	python manage.py createsuperuser
	
按提示输入信息，即可完成创建。回到浏览器输入用户名和密码进行登录。

打开requirements.txt会发现我们使用了djangorestframework这个依赖。Django REST Framework是一个强大且灵活的工具包，用以构建Web APIs。我们用这个包构建RESTful API给前端调用，并且返回JSON响应数据用于页面渲染。这也是前后端分离的重要一步。

接下来，我们使用Django REST Framework来封装用于获取后台管理员账号的API。

打开settings.py，将'rest_framework'添加到'INSTALLED_APPS'的设置里。

为了使用可视化的API，在urls.py文件里，添加下面的内容：

	urlpatterns = [
    	...
	    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
	]
	
任何Django REST Framework的全局设置，都需要存放在一个配置字典中，名为REST_FRAMEWORK：

	REST_FRAMEWORK = {
	    'DEFAULT_PERMISSION_CLASSES': [
    	    'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    	]
	}
	
现在我们已经做好准备，可以开始创建API了。

首先，我们要创建一个专门用于提供api的应用。

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
	
最后，我们还需要修改项目根目录下的urls.py：

	urlpatterns = [
    	...
	    url(r'^api/', include('api.urls')),
	]
	
至此，通过访问<http://127.0.0.1:8000/api>可以看到用于获取后台管理员账号的API已经可用了。
	
