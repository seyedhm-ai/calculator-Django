from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return HttpResponse(request, 'wellcome')


def calculator1(request):
    return render(request, 'index.html')