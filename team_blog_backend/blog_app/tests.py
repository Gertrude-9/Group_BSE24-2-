# C:\...\team_blog_backend\blog_app\tests.py

from django.test import TestCase
from django.utils import timezone
from .models import BlogPost, TeamMember # <-- CORRECTED IMPORT

class BlogPostModelTest(TestCase):
    """
    Test case for the BlogPost model functionality.
    """
    def setUp(self):
        # 1. Create a dependency (TeamMember) first
        self.member = TeamMember.objects.create(
            name="Test Author",
            role="Blogger",
            bio="A dedicated test member."
        )

        # 2. Create the BlogPost object using the TeamMember
        self.post = BlogPost.objects.create(
            title="Test Post Title",
            author=self.member, # <-- Assign the required ForeignKey
            date=timezone.now().date(), # <-- Use today's date
            excerpt="A short summary.",
            content="Test Post Content is here."
        )

    def test_blogpost_creation(self):
        """
        Tests that the BlogPost object was created correctly and has the correct fields.
        """
        # Get the post from the database
        post = BlogPost.objects.get(title="Test Post Title")
        
        # Check that the title, content, and author are correct
        self.assertEqual(post.title, "Test Post Title")
        self.assertEqual(post.content, "Test Post Content is here.")
        self.assertEqual(post.author.name, "Test Author") # Check the foreign key link
        self.assertTrue(isinstance(post, BlogPost)) # Check the instance type

# You can add tests for the TeamMember and About models here too!