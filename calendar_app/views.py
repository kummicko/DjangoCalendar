import calendar
from django.shortcuts import render
from .models import Event


def index(request, year, month):
    events = Event.objects.filter(start_time__year=year, start_time__month=month)
    calend = calendar.Calendar()
    day_names = [day for day in calendar.day_name]
    days = [[day, [event for event in events if event.start_time.date() == day]] for day in calend.itermonthdates(year, month)]
    month_name = calendar.month_name[month]
    return render(request, 'calendar_app/index.html', {"days":days,
                                                       "day_names":day_names,
                                                       "month_name":month_name,
                                                       "year":year})
