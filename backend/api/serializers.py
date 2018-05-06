# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import Blog, Category, About, Dailys

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class BlogSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Blog
        fields = ('id', 'title', 'slug', 'owner', 'short_content', 'body', 'posted', 'category')

class CategorySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:
        model = Category
        fields = ('id', 'title', 'slug', 'owner')

class AboutSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    class Meta:
        model = About
        fields = ('title', 'slug', 'owner', 'body', 'posted')

class DailysSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Dailys
        fields = (
            'id', 
            'owner', 
            'slug',
            'posted',
            'title_1', 'short_content_1', 'sourceLogo_1', 'sourceDomain_1', 'originalLink_1',
            'title_2', 'short_content_2', 'sourceLogo_2', 'sourceDomain_2', 'originalLink_2',
            'title_3', 'short_content_3', 'sourceLogo_3', 'sourceDomain_3', 'originalLink_3')