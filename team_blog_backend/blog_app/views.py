from rest_framework import generics
from .models import TeamMember, BlogPost, About
from .serializers import TeamMemberSerializer, BlogPostSerializer, AboutSerializer

class TeamMemberList(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class BlogPostList(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

class BlogPostDetail(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

class AboutDetail(generics.ListAPIView):
    queryset = About.objects.all()[:1]  # Limit to the first instance
    serializer_class = AboutSerializer