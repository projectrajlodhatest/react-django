from django.db import models

# Create your models here.
class Shoping(models.Model):
	product_name=models.CharField(max_length=100)
	created_on = models.DateField(auto_created=True)
	description = models.TextField()
	image= models.ImageField(upload_to ='uploads/')




class UserDetails(models.Model):
	name = models.CharField(max_length=50,blank=True,null=True)
	contact = models.IntegerField()
	email = models.EmailField(max_length=50,blank=True,null=True)
	address = models.CharField(max_length=100,blank=True,null=True)
