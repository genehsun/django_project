from base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['WAKIM_SITE_SECRET_KEY']

ALLOWED_HOSTS = ['0.0.0.0', '127.0.0.1', 'localhost', 'wakim.site', 'www.wakim.site', '67.218.132.52']

WSGI_APPLICATION = 'project.wsgiprod.application'

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'blog/bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack/blog/webpack-stats.prod.json'),
    }
}

# WEBPACK_LOADER = {
#     'DEFAULT': {
#         'BUNDLE_DIR_NAME': 'daily/bundles/',
#         'STATS_FILE': os.path.join(BASE_DIR, 'webpack/daily/webpack-stats.prod.json'),
#     }
# }