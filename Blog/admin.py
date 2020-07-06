from django.contrib import admin

from .models import Post


class AdminPost(admin.ModelAdmin):
    model = Post
    list_display = ('title', 'author', 'published_date')
    list_filter = ('author','published_date',)

admin.site.register(Post, AdminPost)