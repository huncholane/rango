from django.urls import include, re_path
from .views import ApiRoot
from api.users.urls import router as user_router


urlpatterns = [
    re_path('$', ApiRoot.as_view(), name='api-root'),
    re_path('', include(user_router.urls)),
]