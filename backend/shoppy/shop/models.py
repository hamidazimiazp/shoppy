from django.db import models
from django.utils.html import mark_safe


class Category(models.Model):
    sub_category = models.ForeignKey(
        "self", on_delete=models.CASCADE, related_name="category", blank=True, null=True)
    is_sub = models.BooleanField(default=False)
    title = models.CharField(max_length=120)
    slug = models.CharField(max_length=120)

    class Meta:
        ordering = ("title",)
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.title


class Product(models.Model):

    STATUS_CHOICES = (
        ("draft", "Draft"),
        ("available", "Available"),
        ("done", "Done"),
    )

    title = models.CharField(max_length=120)
    slug = models.CharField(max_length=120)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="shop")
    image = models.ImageField(upload_to="products/%Y/%m/%d/")
    count = models.SmallIntegerField()
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="available")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def image_tag(self):
        return mark_safe(f"<img src='/media/{self.image}' height='150px' width='150px'>")

    image_tag.short_description = "Image"

    class Meta:
        ordering = ("title",)

    def __str__(self):
        return self.title
