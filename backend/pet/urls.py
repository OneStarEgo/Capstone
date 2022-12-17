from django.urls import path
from . import views

urlpatterns = [
    path('', views.dog_list),
    path('<int:user_id>/', views.users_pet),
]