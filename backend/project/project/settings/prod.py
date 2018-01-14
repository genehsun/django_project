from base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['0.0.0.0', '127.0.0.1', 'localhost', 'dev.myblog.com', '30.7.91.227', '115.198.103.53', '192.168.16.105', '67.218.132.52']

STATIC_ROOT = os.path.join(BASE_DIR, "static")

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "blog/assets"),
]

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'blog/webpack/webpack-stats.prod.json'),
    }
}