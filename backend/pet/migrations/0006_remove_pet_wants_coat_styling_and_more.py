# Generated by Django 4.1.3 on 2023-02-06 17:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0005_pet_wants_coat_styling_pet_wants_coat_trimming_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pet',
            name='wants_coat_styling',
        ),
        migrations.RemoveField(
            model_name='pet',
            name='wants_coat_trimming',
        ),
        migrations.RemoveField(
            model_name='pet',
            name='wants_full_service',
        ),
    ]
