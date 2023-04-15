from django.urls import path
from . import views

urlpatterns = [
    path('', views.calculator1, name='index'),


    path('admin', views.index, name='hello'),

]
