from rest_framework import serializers;
from .models import Services;


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ('user', 'pet_name', 'start_date', 'end_date', 'wants_obedience_training', 'wants_performance_training', 'wants_protection_training', 'wants_coat_trimming', 'wants_coat_styling', 'wants_full_service')
