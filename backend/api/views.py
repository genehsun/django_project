# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer
from api.models import Blog, Category, About, Dailys
from api.serializers import BlogSerializer, CategorySerializer, AboutSerializer, DailysSerializer
from api.permissions import IsOwner, IsOwnerOrReadOnly
from rest_framework import generics
from rest_framework.decorators import detail_route, list_route, api_view
from rest_framework.response import Response
import json

# Create your views here.

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by("-posted")
    serializer_class = BlogSerializer

    # permission_classes = (
    #     permissions.IsAuthenticatedOrReadOnly, 
    #     IsOwnerOrReadOnly
    # )

    @list_route(methods=['post'])
    def detail(self, request, *args, **kwargs):
        post_id = json.loads(request.data['json'])['post_id']
        queryset = Blog.objects.filter(id=post_id)
        return Response(queryset.values())

# 待优化
class CategoryBlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()

    @list_route(methods=['post'])
    def recent(self, request, *args, **kwargs):
        category = json.loads(request.data['json'])['category']
        queryset = Blog.objects.filter(category=category).order_by("-posted")
        return Response(queryset.values())

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, 
        IsOwnerOrReadOnly
    )

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, 
        IsOwnerOrReadOnly
    )

class DailysViewSet(viewsets.ModelViewSet):
    queryset = Dailys.objects.all().order_by("-posted")
    serializer_class = DailysSerializer

    @list_route(methods=['post'])
    def detail(self, request, *args, **kwargs):
        daily_id = json.loads(request.data['json'])['daily_id']
        queryset = Dailys.objects.filter(id=daily_id)
        return Response(queryset.values())