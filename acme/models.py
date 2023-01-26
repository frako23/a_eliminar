from django.db import models

# Create your models here.

class User(models.Model):
    id = models.CharField(primary_key=True,max_length=50)
    description= models.TextField(blank=True)
    full_name = models.CharField(max_length=50)
    description= models.TextField(blank=True)
    email = models.CharField(max_length=50)
    description= models.TextField(blank=True)
    password = models.CharField(max_length=50)
    description= models.TextField(blank=True)

   