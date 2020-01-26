import json
from random import randrange, random, choice
from datetime import datetime, timedelta

def get_random_id():
    ship_id = ''.join(choice('0123456789abcdef') for i in range(24))
    return ship_id

companies = [
    {
        'company' : "Baker Hughes",
        'city' : "Houston",
        'location': {
            'type': "Point",
            'coordinates' : [-95.36, 29.76]
        }
    },
    {
        'company' : "Texas A&M University",
        'city' : "College Station",
        'location': {
            'type': "Point",
            'coordinates' : [-96.33, 30.62]
        }
    },
    {
        'company' : "T.U.",
        'city' : "Austin",
        'location': {
            'type': "Point",
            'coordinates' : [-97.74, 30.26]
        }
    },
]

def get_origin_destination():
    a = randrange(0, 3)
    b = randrange(0, 3)
    while (a==b):
        b = randrange(0, 3)
    return a, b

def get_duration(origin, destination):
    if(origin==0 or destination ==0 and origin==1 or destination==1):
        return 90
    if(origin==0 or destination ==0 and origin==2 or destination==2):
        return 150
    if(origin==1 or destination ==1 and origin==2 or destination==2):
        return 110

def get_distance(origin, destination):
    if(origin==0 or destination ==0 and origin==1 or destination==1):
        return 96
    if(origin==0 or destination ==0 and origin==2 or destination==2):
        return 160
    if(origin==1 or destination ==1 and origin==2 or destination==2):
        return 110

def get_depart_time():
    return datetime(2020, 1, randrange(1, 32), hour=randrange(0, 24), minute=randrange(0, 60), second=0, microsecond=0, tzinfo=None)

def get_arrival_time(depart_time, duration):
    return depart_time + timedelta(minutes=duration)
    

def shipGenerator():
    ship_id = get_random_id()
    origin, destination = get_origin_destination()
    depart_time = get_depart_time()
    duration = get_duration(origin, destination)
    return json.dumps({
        "_id":{
            "$oid": ship_id
        },
        "shipNumber":ship_id,
        "origin": companies[origin],
        "destination": companies[destination],
        "distance": get_distance(origin, destination),
        "duration":duration,
        "departureTime": str(depart_time),
        "arrivalTime": str(get_arrival_time(depart_time, duration)),
        "cargoType": randrange(0,3),
        "maxSpeed":"90",
        "weight":randrange(1,10),
        "dimension": {
            "length":random()*10,
            "height":random()*2,
            "width":random()*2
        },
        "fullCargo":randrange(0,2)
    })

def print_samples(n_samples):
    file = open('data.json','w') 
    for i in range (0, n_samples):  
        file.write(shipGenerator()+'\n') 

print_samples(1000)