from django.shortcuts import render
from django.http import HttpResponse

# return some basic rendering for index page
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

# view index for detail page
def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)