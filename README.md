### Technical Point

网站采用前后端分离的技术方案，前端使用React全家桶，还用了Material-UI组件库，用Webpack构建SPA应用。后台使用Django Web框架，并接入Django REST Framework提供RESTFul API，还用了Django Webpack Loader实现前后端的绑定。项目部署在Apache服务上，服务器目前用的是搬瓦工购买的VPS，在namesilo购买了域名，并且在上面把域名映射到服务器的IP。

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

### Who Am I

- 我是一名软件开发工程师，目前在杭州一家互联网公司工作。2012年毕业以来，先后在厦门和杭州两个城市工作。第一份工作在厦门一家日资企业，参与开发多款车载导航仪的音频软件，基于WinCE嵌入式系统。2014年4月转向移动互联网，在厦门一家创业公司做Android开发，与iOS组的同事一起开发了一套自研自用的跨平台框架，业务层使用Lua进行编写。机缘巧合，2016年9月来到了现在的公司。这里大牛云集，做出来的产品每天被百万级别的用户使用，要经常思考如何以更高效的方式去支撑业务的快速发展。在这里我开始使用基于Javascript打造的跨平台框架开发业务。虽然在2012年初实习的那几个月开发的是Html5游戏，但是那时候写的Javascript代码是最原生的写法，项目组织的也比较混乱。几年过去Javascript的技术栈已经发生了巨大的变化，加上当时用的时间短，后来的工作中也没再用到，所以这次使用Javascript可以说是重新开始。说到实习那段时光，也是我第一次接触Python。当时负责后端的哥们儿用的是web.py，他们是来自香港中文大学的学生，看中web.py的小巧和灵活，并且能够快速搭建起一个RESTFul Web Service。
- 2017年12月底，我这一年的年假一天都还没休，眼看着再不休掉就要作废了，于是请了两天年假，加上周末两天，在家里休息了四天。这四天一半是休息，一半是对职业生涯的思考。我发现一年到头这样加班加点地干活，停下来的时候心里竟然是空落落的。再回过头来看自己的工作经历，似乎涉猎了挺多技术方向，但是工作了这么多年还没有自己做过一个Side Project，想想觉得不应该。于是我决定给自己启动一个Side Project，一个属于自己的产品，给自己的想法和技术一个落脚点。作为一名软件开发者，如果只是在不停地实现别人提出的需求，并且只是产品技术开发中的某一个环节，我觉得是遗憾的。而且这样重复的劳动，也会容易让人感到乏味。相比之下，自己去主导一个轻量级的业余项目，为它找到发展方向，为它做各种决定，最后去实现它，会是一件更酷的事情，从中能得到更多的成就感。从技术上说，一个项目的后端开发、前端开发、前后端接口设计、服务器购买搭建、域名申请、IP映射、系统部署、上线监控、系统运维、内容运营、数据分析，这一整条链路值得每一个软件开发者都去全面了解和实践一遍。开发一个个人站点是实践这条链路的不二之选。上线之后，还可以写几篇文章把过程总结下来，有助于深度思考背后的原理。而且信息爆炸的时代，每天都有应接不暇的信息产生，一直在做输入，却少有沉淀和输出。如果能提炼出一些有价值的信息并归纳好记录下来，将会是受益无穷的。所以这个个人站点既能锻炼技术、实现产品，还能记录文字和思考，那么就让它诞生吧。

### Contact Me

WeChat：WakimSun<br/>
Email：genehsun@gmail.com<br/>



