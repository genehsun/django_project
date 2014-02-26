from django.conf.urls import patterns, url
from blogapp.views import IndexView, DetailPost, CategoryView, AboutView, MenuView, TagsView

urlpatterns = patterns('',
    url(r'^$',IndexView.as_view(), name = 'index'),
    url(r'^blog/(?P<categoryslug>[-\w]+)/(?P<postslug>[-\w]+)/$', DetailPost.as_view(), name = 'detail'),
    url(r'^blog/(?P<slug>[-\w]+)/$', CategoryView.as_view(), name = 'category'),
    url(r'^about/$', AboutView.as_view(), name = 'about'),
    url(r'^menu/$', MenuView.as_view(), name = 'menu'),
    url(r'^tag/(?P<tagslug>[-\w]+)/$', TagsView.as_view(), name = 'showtag'),
)
