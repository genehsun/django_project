# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url, include

from rest_framework import routers
from api.views import UserViewSet, GroupViewSet
from api.views import BlogViewSet, CategoryViewSet, AboutViewSet

from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()
# router.register(r'users', UserViewSet)
# router.register(r'groups', GroupViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'categorys', CategoryViewSet)
router.register(r'about', AboutViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^get-token/', obtain_auth_token)
]
