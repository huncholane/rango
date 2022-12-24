from rest_framework.response import Response
from rest_framework.routers import APIRootView
from rest_framework.reverse import reverse

# Create your views here.
class ApiRoot(APIRootView):

    def get(self, request, *args, **kwargs):
        return Response({
            'user': reverse('user-list', request=request),
            # Auto-generated: a keyword used by the createapi command to know where to add new urls
        })