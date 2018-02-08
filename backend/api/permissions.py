from rest_framework.permissions import BasePermission
from api.models import Blog

class IsOwner(BasePermission):
    """Custom permission class to allow only Blog owners to edit them."""

    def has_object_permission(self, request, view, obj):
        """Return True if permission is granted to the Blog owner."""
        if isinstance(obj, Blog):
            return obj.owner == request.user
        return obj.owner == request.user