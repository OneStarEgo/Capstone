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
    wants_obedience_training = models.BooleanField(default=False)
    wants_performance_training = models.BooleanField(default=False)
    wants_protection_training = models.BooleanField(default=False)
    wants_coat_trimming = models.BooleanField(default=False)
    wants_coat_styling = models.BooleanField(default=False)
    wants_full_service = models.BooleanField(default=False)