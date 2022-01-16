from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from .models import *
# Create your views here.
from app.serializers import *
from rest_framework.response import Response
from rest_framework import generics

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView


from rest_framework.parsers import MultiPartParser, FormParser,JSONParser

class ShopingApi(APIView):
	# serializer =  ShopingSerializer()
	# permission_classes = (IsAuthenticated,)  
	parser_classes = (FormParser,MultiPartParser)
           
	def post(self,request,*args,**kwargs):
		serializer =  ShopingSerializer(data=request.data)
		print('fjfjjfj')
		print(serializer.is_valid())
		if serializer.is_valid():
			print('jjjfjf')
			obj=serializer.save()
			print(obj)
			return Response(
			data={
				'success':True
			},
			status = status.HTTP_200_OK
			)
		else:
				return Response(
				data={
					'list of employee':serializer.errors,
					'success':True
				},
				status = status.HTTP_200_OK
				)		
	def get(self,request,*args,**kwargs):
		emp_obj =Shoping.objects.all()
		serializer =  GetShopingSerializer(emp_obj,many=True)		# serializer = serializer(emp_obj)
		print(serializer.data)
		print(emp_obj)
		list_of_shoping=[]
		for each in emp_obj:
			dict_of_each={}
			dict_of_each['name']=each.product_name
			dict_of_each['created_on'] = each.created_on
			dict_of_each['image'] = 'http://localhost:8000/media/'+str(each.image)
			dict_of_each['description'] = each.description
			list_of_shoping.append(dict_of_each)
		print(list_of_shoping)		
		return Response(
			data={
				'list_of_employee':list_of_shoping,
				'success':True
			},
			status = status.HTTP_200_OK
			)
	

class ShopingList(ListAPIView):
	queryset = Shoping.objects.all()
	serializers_class = ShopingSerializer			


class UserDetailApi(APIView):
	def post(self,request,*args,**kwargs):
		serializer =  UserDetailsSerializer(data=request.data)
		if serializer.is_valid():
			obj=serializer.save()
			return Response(
			data={
				'success':True
			},
			status = status.HTTP_200_OK
			)
		else:
				return Response(
				data={
					'list of employee':serializer.errors,
					'success':True
				},
				status = status.HTTP_200_OK
				)		


	def get(self,request,*args,**kwargs):
		emp_obj =UserDetails.objects.all()
		serializer =  UserDetailsSerializer(emp_obj,many=True)		# serializer = serializer(emp_obj)
		print(serializer.data)		
		return Response(
			data={
				'user_data':serializer.data,
				'success':True
			},
			status = status.HTTP_200_OK
			)

	def delete(self,request,*args,**kwargs):
		print("Hello world")	


		return Response(
			data={
				'success':True
			},
			status = status.HTTP_200_OK
			)

				
	def put(self,request,*args,**kwargs):
		print("Hello world pu")	


		return Response(
			data={
				'success':True
			},
			status = status.HTTP_200_OK
			)			