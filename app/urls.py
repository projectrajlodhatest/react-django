from django.urls import path

from . import views
from .views  import ShopingApi,ShopingList,UserDetailApi
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
     path('shoping',ShopingApi.as_view(),name='staff'),
     path('token',
         jwt_views.TokenObtainPairView.as_view(),
         name ='token_obtain_pair'),
     path('token/refresh/',
         jwt_views.TokenRefreshView.as_view(),
         name ='token_refresh'),
     path ('listapi',ShopingList.as_view(),name='listapi'),

     path('userdetails/',UserDetailApi.as_view(),name='userdetails') 
   

]