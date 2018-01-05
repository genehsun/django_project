# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from api.models import Blog, Category

# Register your models here.

class BlogAdmin(admin.ModelAdmin):
    exclude = ['posted']
    prepopulated_fields = {'slug': ('title',)}

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Blog, BlogAdmin)
admin.site.register(Category, CategoryAdmin)
