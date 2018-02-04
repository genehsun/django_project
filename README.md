
### README
---
本项目实践了一个前后端分离的站点，使用Django、Django Rest Framework、ReactJS、Material-UI，部署在Apache服务上。

要在开发环境中运行本项目可以把代码clone到本地，在终端执行：

	cd backend
	pip install -r requirements.txt
	python manage.py migrate --settings=project.settings.dev
	python manage.py runserver --settings=project.settings.dev
	
同时打开另一个终端：

	cd frontend
	npm run start
	
然后在浏览器中访问：
	
	http://127.0.0.1:8000/






