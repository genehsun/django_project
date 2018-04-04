
本项目实践了一个前后端分离的站点，使用Django、Django REST Framework、ReactJS、React Router、React Redux、Material-UI，部署在Apache服务上。

要在开发环境中运行本项目可以把代码clone到本地，在终端运行backend工程：

	cd django_project/backend
	pip install -r requirements.txt
	python manage.py migrate --settings=project.settings.dev
	python manage.py runserver --settings=project.settings.dev
	
同时打开另一个终端运行frontend工程：

	cd django_project/frontend
	npm run start
	
然后在浏览器中访问：
	
	http://127.0.0.1:8000/

为了使用Django自带的后台管理系统，需要创建一个超级管理员：

	python manage.py createsuperuser --settings=project.settings.dev

按提示输入即可完成创建，随后访问登录Django自带的后台管理系统：

	http://127.0.0.1:8000/admin

Django REST Framework提供了一个可视化的API查看界面，要查看项目中都有哪些RESTFul API，可以访问：

	http://127.0.0.1:8000/api

### TodoList

* [x] 代码高亮
* [x] 分类展示
* [ ] markdown转换放在服务端处理
* [ ] 评论组件
* [ ] 数据统计
* [ ] 分页逻辑
* [ ] 视觉优化
* [ ] 服务器迁移提高访问速度





