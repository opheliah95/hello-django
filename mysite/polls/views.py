import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
django.setup()

from django.http import HttpResponse
from .models import Question


# return some basic rendering for index page
def index(request):
    latest_questions = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_questions])
    return output
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
