# Create your views here.
from django.http import HttpResponse
from blogapp.models import Post, Category, About
from django.template import Context, loader
from django.shortcuts import render_to_response, get_object_or_404
from django.views.generic import ListView, DetailView
#from django.core.paginator import Paginator

class IndexView(ListView):
    queryset = Post.objects.order_by('-published')
    context_object_name = 'latest_post_list'
    template_name = 'index.html'
    
    def get_object(self):
        return get_object_or_404(Post.objects.all())

class DetailPost(DetailView):
    template_name = 'detail.html'
    context_object_name='post'
    
    def get_object(self):
        return get_object_or_404(Post.objects.filter(category__slug=self.kwargs['categoryslug'],slug=self.kwargs['postslug']))

class CategoryView(IndexView):
    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs['slug']).order_by('-published')

class TagsView(IndexView):
    def get_queryset(self):
        return Post.objects.filter(tags__name__in=[self.kwargs['tagslug']]).order_by('-published')

class AboutView(DetailView):
    model = About
    template_name = 'about.html'
    
    def get_object(self):
        return get_object_or_404(About.objects.all())

class MenuView(IndexView):
    template_name = 'menu.html'
