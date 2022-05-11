from django.urls import path

from . import views

urlpatterns = [
    path('/', views.index, name='index'),
]

default_app_config = 'polls.apps.PollsConfig'


