from django.urls import path
from . import views

app_name = "shop"

urlpatterns = [
    path("categories/", views.Categories.as_view(), name="caegories"),
    path("products/", views.Products.as_view(), name="caegories"),
]
