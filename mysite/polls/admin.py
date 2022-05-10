from django.contrib import admin
from .models import Question

# make question editable in adminstration window
admin.site.register(Question)
