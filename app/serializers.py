from rest_framework import serializers
from .models import *

class GetShopingSerializer(serializers.ModelSerializer):
   class Meta:
        model = Shoping
        fields="__all__"



class ShopingSerializer(serializers.Serializer):
   product_name = serializers.CharField(max_length=100)
   image = serializers.ImageField(max_length=None,allow_null=True, required=False)
   create_on = serializers.IntegerField(required=False)
   description = serializers.CharField(max_length=256)
   def create(self,validated_data):
      obj =Shoping.objects.create(**validated_data)
      return obj	
        

class UserDetailsSerializer(serializers.Serializer):
   name = serializers.CharField(max_length=100)
   contact =serializers.IntegerField()
   email = serializers.EmailField(max_length=100)
   address = serializers.CharField(max_length=100)        

   def create(self,validated_data):
      obj =UserDetails.objects.create(**validated_data)
      return obj	
        