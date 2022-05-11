from django.shortcuts import render
from django.http import HttpResponse

# return some basic rendering for index page
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

# view index for detail page
def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

# view for result page
def result(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

# the vote page
def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
