from rest_framework import serializers;
from .models import Pet;



class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model= Pet
        fields = ('id', 'user', 'breed', 'name', 'age', 'temperament', 'user_id')
        depth = 1
    user_id = serializers.IntegerField(write_only=True)
