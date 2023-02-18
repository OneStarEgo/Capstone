from django.db import models;
from authentication.models import User;

# Create your models here.
class Pet(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE)
    owner_name= models.CharField(max_length=255, default='blank')
    breed= models.CharField(max_length=255)
    name= models.CharField(max_length=255)
    age= models.IntegerField()
    temperament= models.CharField(max_length=255)