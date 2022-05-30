import os
from django.http import HttpResponse, HttpResponseRedirect
from .models import Question, Choice
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from django.urls import reverse

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
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
        print(request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))