from django.shortcuts import render,get_object_or_404
from django.utils import timezone
from .models import Post
import requests
from bs4 import BeautifulSoup
import folium
import pandas as pd
import csv

def home(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'Blog/index.html',{'post':posts})

def about(request):
    return render(request, 'Blog/about.html',{})
    
def contact(request):
    return render(request, 'Blog/contact.html',{})

def blog(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'Blog/blog.html',{'post':posts})

def show(request,pk):

    post = get_object_or_404(Post, pk=pk)
    return render(request,'Blog/show.html',{'post':post})

def covid(request):
    data=covid_data()
    # Map.save('plot_data.html')
    # print(Map)
    iframe = data[0]._repr_html_()
    return render(request, 'Blog/covid_data.html',{'map':iframe,'covid':data[1]})

def covid_data():
    State_With_Loc=pd.read_csv('https://drive.google.com/uc?id=11L8V4ywgRa186AiPxYNfx9Jipuwup8N_&export=download',index_col=0)
    State_With_Covid_Data =pd.read_csv('https://api.covid19india.org/csv/latest/state_wise.csv')
    State_With_Covid_Data=State_With_Covid_Data.iloc[:,:6]

    Location_Data={}
    for name,lat,log in zip(State_With_Loc['State.Name'],State_With_Loc['latitude'],State_With_Loc['longitude']):
        Location_Data[name]=(float(lat),float(log))
    
    Map=folium.Map()

    for data in State_With_Covid_Data.iterrows():
        state=data[1]['State']
        if state.upper() in Location_Data.keys():
            label='State: <b>'+state+'</b><br>'\
                'Confirmed: <b>'+str(data[1]['Confirmed'])+'</b><br>'\
                'Recovered: <b>'+str(data[1]['Recovered'])+'</b><br>'\
                'Deaths: <b>'+str(data[1]['Deaths'])+'</b><br>'\
                'Active: <b>'+str(data[1]['Active'])+'</b><br>'\
                'Last Updated Time: <b>'+data[1]['Last_Updated_Time']+'</b>'
            folium.Marker(Location_Data[state.upper()],popup=label).add_to(Map)

    

    covid={'Confirmed':State_With_Covid_Data.iloc[0]['Confirmed'] ,
            'Recovered':State_With_Covid_Data.iloc[0]['Recovered'],
            'Deaths':State_With_Covid_Data.iloc[0]['Deaths'],
            'Active':State_With_Covid_Data.iloc[0]['Active'],
                }
    return (Map,covid)

