from django.db import models

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    bio = models.TextField()
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(TeamMember, on_delete=models.CASCADE, related_name='posts')  # Link to TeamMember
    date = models.DateField()
    excerpt = models.TextField()
    content = models.TextField()  # HTML content as a string

    def __str__(self):
        return self.title

class About(models.Model):
    content = models.TextField()  # Editable "About Us" text
    updated_at = models.DateTimeField(auto_now=True)  # Track last update

    def __str__(self):
        return "About Us"