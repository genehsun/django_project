# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-06 05:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20180505_0100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailys',
            name='short_content_1',
            field=models.TextField(default='default review', max_length=140),
        ),
        migrations.AlterField(
            model_name='dailys',
            name='short_content_2',
            field=models.TextField(default='default review', max_length=140),
        ),
        migrations.AlterField(
            model_name='dailys',
            name='short_content_3',
            field=models.TextField(default='default review', max_length=140),
        ),
        migrations.AlterField(
            model_name='dailys',
            name='slug',
            field=models.SlugField(max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='dailys',
            name='title',
            field=models.CharField(default='default title', max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='dailys',
            name='title_1',
            field=models.CharField(max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='dailys',
            name='title_2',
            field=models.CharField(max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='dailys',
            name='title_3',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]