from django.urls import include, re_path
from .views import ApiRoot


urlpatterns = [
    re_path('$', ApiRoot.as_view(), name='api-root'),
    re_path('', include('api.user.urls')),
    # Auto-generated: a keyword used by the createapi command to know where to add new urls
]