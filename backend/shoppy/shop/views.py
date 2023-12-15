from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category, Product
from .serializer import CategorySerializer, ProductSerializer


class Categories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        set_data = CategorySerializer(instance=categories, many=True).data
        return Response(set_data, status=status.HTTP_200_OK)


class Products(APIView):
    def get(self, request):
        products = Product.objects.all()
        set_data = ProductSerializer(instance=products, many=True).data
        return Response(set_data, status=status.HTTP_200_OK)
