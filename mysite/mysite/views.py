from django.http import HttpResponse
from django.shortcuts import render
# return some basic rendering for index page
def index(request):
    return render(request, "home/index.html")

