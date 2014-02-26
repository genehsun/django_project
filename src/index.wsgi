import os
import sys

import django.core.handlers.wsgi

import sae

root = os.path.dirname(__file__)

os.environ['DJANGO_SETTINGS_MODULE'] = 'HwaKimBlog.settings'

application = sae.create_wsgi_app(django.core.handlers.wsgi.WSGIHandler())

sys.path.insert(0, os.path.join(root, 'tinymce'))

sys.path.insert(0, os.path.join(root, 'taggit'))


