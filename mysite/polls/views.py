import os
from django.http import HttpResponse
from .models import Question
from django.template import loader
from django.shortcuts import render
from django.http import Http404

# return some basic rendering for index page
def index(request):
    latest_questions = Question.objects.order_by("-pub_date")[:5]
    template = loader.get_template("polls/index.html")
    context = {
        "latest_questions": latest_questions,
    }
    return render(request, "polls/index.html", context)


# view index for detail page
def detail(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
        context = {"question": question}
    except Question.DoesNotExist:
        raise Http404(f"the question {question_id} does not exist")

    return render(request, "polls/detail.html", context)


# view for result page
def result(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


# the vote page
def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
