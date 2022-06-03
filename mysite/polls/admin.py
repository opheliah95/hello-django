from django.contrib import admin
from .models import Question, Choice

# make question editable in adminstration window
admin.site.register(Question)

# we will register choice as edible as well
admin.site.register(Choice)