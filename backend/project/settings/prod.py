from base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
# You'd better get the secret key from ENV
SECRET_KEY = os.environ['WAKIM_SITE_SECRET_KEY']

ALLOWED_HOSTS = ['0.0.0.0', '127.0.0.1', 'localhost', 'wakim.site', 'www.wakim.site', '67.218.132.52']

WSGI_APPLICATION = 'project.wsgiprod.application'

STATIC_ROOT = os.path.join(BASE_DIR, "static")

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'blog/webpack/webpack-stats.prod.json'),
    }
}