# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.db.models import permalink

from django.db.models.signals import post_save
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.dispatch import receiver

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    short_content = models.TextField(default="default")
    body = models.TextField()
    posted = models.DateTimeField(db_index=True, auto_now_add=True)
    category = models.ForeignKey('Category')
    owner = models.ForeignKey('auth.User',
        related_name='postlists', 
        on_delete=models.CASCADE,
        default=1
    )

    def __unicode__(self):
        return '%s' % self.title

    @permalink
    def get_absolute_url(self):
        return ('view_blog_post', None, { 'slug': self.slug })

    # This receiver handles token creation immediately a new user is created.
    @receiver(post_save, sender=User)
    def create_auth_token(sender, instance=None, created=False, **kwargs):
        if created:
            Token.objects.create(user=instance)

class Category(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, db_index=True)
    owner = models.ForeignKey('auth.User',
        related_name='categorylists', 
        on_delete=models.CASCADE,
        default=1
    )

    def __unicode__(self):
        return '%s' % self.title

    @permalink
    def get_absolute_url(self):
        return ('view_blog_category', None, { 'slug': self.slug })

class About(models.Model):
    title = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    body = models.TextField()
    posted = models.DateTimeField(db_index=True, auto_now_add=True)
    owner = models.ForeignKey('auth.User',
        related_name='abouts', 
        on_delete=models.CASCADE,
        default=1
    )

    def __unicode__(self):
        return '%s' % self.title

    @permalink
    def get_absolute_url(self):
        return ('view_about', None, { 'slug': self.slug})

class Dailys(models.Model):
    title = models.CharField(max_length=100, unique=True, default="default title")
    slug = models.SlugField(max_length=100, unique=True)
    posted = models.DateTimeField(db_index=True, auto_now_add=True)

    title_1 = models.CharField(max_length=10, unique=True)
    sourceLogo_1 = models.URLField(max_length=200)
    sourceDomain_1 = models.CharField(max_length=200)
    originalLink_1 = models.URLField(max_length=200, unique=True)
    short_content_1 = models.TextField(max_length=180, default="default review")
    body_1 = models.TextField()

    title_2 = models.CharField(max_length=10, unique=True)
    sourceLogo_2 = models.URLField(max_length=200)
    sourceDomain_2 = models.CharField(max_length=200)
    originalLink_2 = models.URLField(max_length=200, unique=True)
    short_content_2 = models.TextField(max_length=180, default="default review")
    body_2 = models.TextField()

    title_3 = models.CharField(max_length=10, unique=True)
    sourceLogo_3 = models.URLField(max_length=200)
    sourceDomain_3 = models.CharField(max_length=200)
    originalLink_3 = models.URLField(max_length=200, unique=True)
    short_content_3 = models.TextField(max_length=180, default="default review")
    body_3 = models.TextField()

    owner = models.ForeignKey('auth.User',
        related_name='dailys', 
        on_delete=models.CASCADE,
        default=1
    )

    def __unicode__(self):
        return '%s' % self.title

    @permalink
    def get_absolute_url(self):
        return ('view_dailys', None, { 'slug': self.slug })

    # This receiver handles token creation immediately a new user is created.
    @receiver(post_save, sender=User)
    def create_auth_token(sender, instance=None, created=False, **kwargs):
        if created:
            Token.objects.create(user=instance)

