
结合Django和ReactJS，实践前后端分离的站点。使用的库有：Django REST Framework、Django Webpack Loader、React Router、React Redux、Material-UI等。

---

### How To Run

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

### Todo List

* [x] 创建Django工程
* [x] 创建ReactJS工程（create-react-app）
* [x] Django工程引入django-rest-framework提供RESTFul API
* [x] Django工程引入django-webpack-loader实现Django和Webpack的绑定
* [x] ReactJS工程引入Materia-UI组件库
* [x] ReactJS工程引入React Router管理应用路由
* [x] ReactJS工程引入React Redux管理应用状态
* [x] 部署到生产环境中的服务器（Apache服务）
* [x] 获取所有文章列表并展示
* [ ] 所有文章列表的分页逻辑
* [x] 获取单篇文章的详细内容
* [x] 获取所有文章类目
* [x] 获取单个类目里的文章列表并展示
* [ ] 单个类目里的文章列表的分页逻辑
* [x] Markdown内容转换
* [ ] 评论功能
* [x] 统计网站访问量和独立访客数
* [ ] 视觉优化
* [ ] 服务器迁移提高访问速度
* [ ] 独立服务器提供API与数据库访问

### Contact Me

WeChat：WakimSun<br/>
Email：genehsun@gmail.com<br/>



