# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer
from api.models import Blog, Category, About
from api.serializers import BlogSerializer, CategorySerializer, AboutSerializer
from api.permissions import IsOwner, IsOwnerOrReadOnly
from rest_framework import generics

# Create your views here.

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly, 
        IsOwnerOrReadOnly
    )

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
