# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from rest_framework.test import APIClient
from django.core.urlresolvers import reverse
from rest_framework import status
from django.contrib.auth.models import User

# Create your tests here.
from .models import Blog, Category

class ModelTestCase(TestCase):
    """This class defines the test suite for the bloglist model."""

    def setUp(self):
        """Define the test client and other test variables."""
        user = User.objects.create(username="root")

        self.category = Category(title="make")
        self.category.save()

        # specify owner of a bloglist
        self.bloglist = Blog(body="Write world class code", owner=user, title="ddd", short_content="ioweoif", slug="iiii444", category=self.category)

    def test_model_can_create_a_bloglist(self):
        """Test the bloglist model can create a bloglist."""
        old_count = Blog.objects.count()
        self.bloglist.save()
        new_count = Blog.objects.count()
        self.assertNotEqual(old_count, new_count)

# class ViewTestCase(TestCase):
#     """This class defines the test suite for the bloglist model."""

#     def setUp(self):
#         """Define the test client and other test variables."""
#         user = User.objects.create(username="root")

#         self.client = APIClient()
#         self.client.force_authenticate(user=user)

#         self.category = Category(title="make")
#         self.category.save()

#         self.blog_data = {'owner': user.id, 'title': 'ddd', 'short_content': 'Write world class code', 'slug': "aaa", 'body': 'iiooo', 'category': 1}
#         self.response = self.client.post(
#             reverse('create'),
#             self.blog_data,
#             format="json"
#         )

#     def test_model_can_create_a_bloglist(self):
#         """Test the bloglist model can create a bloglist."""
#         self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

#     def test_authorization_is_enforced(self):
#         """Test that the api has user authorization."""

#         new_client = APIClient()
#         bloglist = Blog.objects.get()
#         response = new_client.get(
#             reverse('details', kwargs={'pk': bloglist.id}), 
#             format="json"
#         )
#         # response = new_client.get('/postlists/', kwargs={'pk': bloglist.id}, format="json")
#         self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

#     def test_api_can_get_a_bloglist(self):
#         """Test the api can get a given bloglist."""
#         bloglist = Blog.objects.get()
#         response = self.client.get(
#             reverse('details',
#             kwargs={'pk': bloglist.id}), format="json"
#         )
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertContains(response, bloglist)

#     def test_api_can_update_bloglist(self):
#         """Test the api can update a given bloglist."""
#         bloglist = Blog.objects.get()
#         change_bloglist = {'title': 'ddd', 'short_content': 'Write world class code', 'slug': "aaa", 'body': 'something new', 'category': 1}
#         res = self.client.put(
#             reverse('details', kwargs={'pk': bloglist.id}),
#             change_bloglist, format='json'
#         )
#         self.assertEqual(res.status_code, status.HTTP_200_OK)

#     def test_api_can_delete_bloglist(self):
#         """Test the api can delete a bloglist."""
#         bloglist = Blog.objects.get()
#         response = self.client.delete(
#             reverse('details', kwargs={'pk': bloglist.id}),
#             format='json',
#             follow=True
#         )
#         self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)

class ViewTestCase(TestCase):
    """This class defines the test suite for the bloglist model."""

    def setUp(self):
        """Define the test client and other test variables."""
        user = User.objects.create(username="root")

        self.client = APIClient()
        self.client.force_authenticate(user=user)

        self.category = Category(title="make")
        self.category.save()

        self.blog_data = {'owner': user.id, 'title': 'ddd', 'short_content': 'Write world class code', 'slug': "aaa", 'body': 'iiooo', 'category': 1}
        self.response = self.client.post('/api/blogs/', self.blog_data, format='json')

    def test_model_can_create_a_bloglist(self):
        """Test the bloglist model can create a bloglist."""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    # def test_authorization_is_enforced(self):
    #     """Test that the api has user authorization."""

    #     new_client = APIClient()
    #     bloglist = Blog.objects.get()
    #     response = new_client.get('/api/blogs/' + str(bloglist.id) + '/', format='json')
    #     # response = new_client.get('/api/postlists/', kwargs={'pk': bloglist.id}, format="json")
    #     self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_api_can_get_a_bloglist(self):
        """Test the api can get a given bloglist."""
        bloglist = Blog.objects.get()
        response = self.client.get('/api/blogs/' + str(bloglist.id) + '/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, bloglist)

    def test_api_can_update_bloglist(self):
        """Test the api can update a given bloglist."""
        bloglist = Blog.objects.get()
        self.blog_data['title'] = 'iiiii'
        res = self.client.put('/api/blogs/' + str(bloglist.id) + '/', self.blog_data, format='json')
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_api_can_delete_bloglist(self):
        """Test the api can delete a bloglist."""
        bloglist = Blog.objects.get()
        old_count = Blog.objects.count()
        response = self.client.delete('/api/blogs/' + str(bloglist.id) + '/', format='json')
        new_count = Blog.objects.count()
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertNotEqual(old_count, new_count)