from django.http import HttpResponse

# return some basic rendering for index page
def index(request):
    return HttpResponse("Hello you are at the default index page")

