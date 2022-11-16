from rest_framework import serializers;
from .models import Services;


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ('user', 'pet_name', 'start_date', 'end_date')
