SECRET_KEY = 'dev-secret-key'

INSTALLED_APPS = [
    'rest_framework',
    'apps.clientes',
    'apps.usuarios',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'db.sqlite3',
    }
}
