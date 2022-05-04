from django.shortcuts import render
from django.http import HttpResponse
# return some basic rendering for index page
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")