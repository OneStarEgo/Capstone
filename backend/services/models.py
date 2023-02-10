from django.db import models;
from authentication.models import User;
from pet.models import Pet;


# Create your models here.
class Services(models.Model):
    user= models.ForeignKey(User, on_delete=models.CASCADE)
    pet_name= models.ForeignKey(Pet, on_delete=models.CASCADE)
    wants_coat_trimming = models.BooleanField(default=False)
    wants_coat_styling = models.BooleanField(default=False)
    wants_full_service = models.BooleanField(default=False)
    start_date= models.DateField(null=True, blank=True)
    end_date= models.DateField(null=True, blank=True)