from base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'd#j_is2-0!ymjh)z%+njj&zb^u8$_v!6)0q&1ofu-n^ay15(s+'

ALLOWED_HOSTS = []

WSGI_APPLICATION = 'project.wsgidev.application'

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'blog/bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack/blog/webpack-stats.dev.json'),
    }
}

# WEBPACK_LOADER = {
#     'DEFAULT': {
#         'BUNDLE_DIR_NAME': 'daily/bundles/',
#         'STATS_FILE': os.path.join(BASE_DIR, 'webpack/daily/webpack-stats.dev.json'),
#     }
# }

