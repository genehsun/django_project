# -*- coding: utf-8 -*-
from rest_framework.permissions import BasePermission, SAFE_METHODS
from api.models import Blog

class IsOwner(BasePermission):
    """Custom permission class to allow only Blog owners to edit them."""

    def has_object_permission(self, request, view, obj):
        """Return True if permission is granted to the Blog owner."""
        if isinstance(obj, Blog):
            return obj.owner == request.user
        return obj.owner == request.user

class IsOwnerOrReadOnly(BasePermission):
    """
    游客访问权限及创建者编辑权限
    """

    def has_object_permission(self, request, view, obj):
        # 游客权限
        if request.method in SAFE_METHODS:
            return True

        # 编辑权限
        return obj.owner == request.user