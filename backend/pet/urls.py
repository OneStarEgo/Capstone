from django.urls import path
from . import views

urlpatterns = [
    path('', views.dog_list),
    path('<str:user_id>/', views.users_pet),
]