from django.db import models

# Create your models here.
class Question(models.Model):
    # create some text -> stored in our db
    question_text: models.CharField = models.CharField(max_length=200)
    # publication date -> create a field like this in our db
    pub_date: models.DateTimeField = models.DateTimeField("date published")

    # make return type more easy to read
    def __str__(self):
        return self.question_text

#  class for choice
class Choice(models.Model):
    # using question as a foregion key to get selected q from db
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default = 0)
    # return an easy to read choice type
    def __str__(self):
        return self.choice_text


