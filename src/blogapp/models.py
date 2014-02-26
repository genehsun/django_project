from django.db import models
from django.contrib.auth.models import User
from tinymce.models import HTMLField
from taggit.managers import TaggableManager
from django.core.urlresolvers import reverse

# Create your models here.
class Category(models.Model):
    name        = models.CharField(max_length = 100, unique = True)
    slug        = models.SlugField(max_length = 100, unique = True)
    description = models.TextField()
    parent      = models.ForeignKey('self', null = True, blank = True)
    
    class Meta:
        verbose_name_plural = "Categories"        # better than 'Categorys'
        
    def __unicode__(self):
        return "%s" % self.name
    
    def get_absolute_url(self):
        return reverse('category', args = [str(self.slug)])
    
class Post(models.Model):
    title       = models.CharField(max_length = 100, unique = True)
    slug        = models.SlugField(max_length = 100, unique = True)
    content     = HTMLField()
    tags        = TaggableManager(blank = True)
    published   = models.DateTimeField(db_index = True)
    author      = models.ForeignKey(User)
    category    = models.ForeignKey('Category')
    
    def __unicode__(self):
        return "%s" % self.title
    
    def get_absolute_url(self):
        return reverse('detail', args = [str(self.category.slug),str(self.slug)])
    
    def get_published_YMD(self):
        return self.published.strftime("%Y-%m-%d")
    
class About(models.Model):
    subject     = models.CharField(max_length = 100, unique = True)
    detail      = HTMLField()
    author      = models.ForeignKey(User)
    
    def __unicode__(self):
        return "%s" % self.subject
    
    def get_absolute_url(self):
        return reverse('about') 
    