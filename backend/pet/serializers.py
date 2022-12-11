from rest_framework import serializers;
from .models import Pet;



class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model= Pet
        fields = ('owner', 'breed', 'name', 'age', 'temperament')