from rest_framework import serializers
from .models import TeamMember, BlogPost, About


class TeamMemberSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(use_url=True)

    class Meta:
        model = TeamMember
        fields = '__all__'


class BlogPostSerializer(serializers.ModelSerializer):
    author = TeamMemberSerializer()  # Nested serializer to include author details

    class Meta:
        model = BlogPost
        fields = '__all__'


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'
