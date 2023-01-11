from rest_framework import serializers;
from .models import Pet;



class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model= Pet
        fields = ('id', 'breed', 'name', 'age', 'temperament', 'user_id', 'wants_coat_trimming', 'wants_coat_styling', 'wants_full_service')
        depth = 1
    user_id = serializers.IntegerField(write_only=True)
