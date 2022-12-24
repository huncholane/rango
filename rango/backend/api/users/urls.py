from django.urls import path, include
from api.users.views import UserViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'users', UserViewSet)

