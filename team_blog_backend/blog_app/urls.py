from django.urls import path
from .views import TeamMemberList, BlogPostList, BlogPostDetail, AboutDetail

urlpatterns = [
    path('team-members/', TeamMemberList.as_view(), name='team-members'),
    path('blog-posts/', BlogPostList.as_view(), name='blog-posts'),
    path('blog-posts/<int:pk>/', BlogPostDetail.as_view(), name='blog-post-detail'),
    path('about/', AboutDetail.as_view(), name='about'),  # Single about endpoint
]