import json
from random import randrange, random, choice, uniform
from datetime import datetime, timedelta

def get_random_id():
    ship_id = ''.join(choice('0123456789abcdef') for i in range(24))
    return ship_id

locations = [
    {'city' : "Houston",
        'location': {
            'type': "Point",
            'coordinates' : [-95.36, 29.76]
        }
    },
    {'city' : "College Station",
        'location': {
            'type': "Point",
            'coordinates' : [-96.33, 30.62]
        }
    },
    {'city' : "Austin",
        'location': {
            'type': "Point",
            'coordinates' : [-97.74, 30.26]
        }
    },
    {'city' : "San Antonio",
        'location': {
            'type': "Point",
            'coordinates' : [-98.49, 29.42]
        }
    },
    {'city' : "Dallas",
        'location': {
            'type': "Point",
            'coordinates' : [-96.79, 32.77]
        }
    },
]

costs = {
    '01' : {
        'distance': 96,
        'duration': 90,
    },
    '02' : {
        'distance': 160,
        'duration': 150,
    },
    '03' : {
        'distance': 197,
        'duration': 180,
    },
    '04' : {
        'distance': 260,
        'duration': 240,
    },
    '12' : {
        'distance': 110,
        'duration': 110,
    },
    '13' : {
        'distance': 170,
        'duration': 172,
    },
    '14' : {
        'distance': 175,
        'duration': 165,
    },
    '23' : {
        'distance': 80,
        'duration': 77,
    },
    '24' : {
        'distance': 195,
        'duration': 175,
    },
    '34' : {
        'distance': 274,
        'duration': 240,
    },

}

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
        'company' : "t.u.",
        'city' : "Austin",
        'location': {
            'type': "Point",
            'coordinates' : [-97.74, 30.26]
        }
    },
]

def get_origin_destination():
    a = randrange(0, 5)
    b = randrange(0, 5)
    while (a==b):
        b = randrange(0, 5)
    return a, b

def order(a,b):
    if (a<b):
        return str(a)+str(b)
    else:
        return str(b)+str(a)

def get_duration(origin, destination):
    return costs[order(origin, destination)]['duration']

def get_distance(origin, destination):
    return costs[order(origin, destination)]['distance']

def get_depart_time():
    return datetime(2020, 1, randrange(26, 32), hour=randrange(0, 24), minute=randrange(0, 60), second=0, microsecond=0, tzinfo=None)

def get_arrival_time(depart_time, duration):
    return depart_time + timedelta(minutes=duration)

def score(a,b):
    return int(a*uniform(0.9,1.1) + b*uniform(0.9,1.1))

def shipGenerator():
    ship_id = get_random_id()
    origin, destination = get_origin_destination()
    depart_time = get_depart_time()
    distance = get_distance(origin, destination)
    duration = get_duration(origin, destination)
    return json.dumps({
        "_id":{
            "$oid": ship_id
        },
        "owner":companies[randrange(0, 3)],
        "shipNumber":ship_id,
        "origin": locations[origin],
        "destination": locations[destination],
        "distance": distance,
        "duration":duration,
        "departureTime": str(depart_time),
        "arrivalTime": str(get_arrival_time(depart_time, duration)),
        "cargoType": randrange(0,3),
        "maxSpeed":"90",
        "weight":randrange(1,10),
        "dimension": {
            "length":random()*10,
            "height":random()*2,
            "width":random()*2,
        },
        "fullCargo":randrange(0,2),
        "sustainabilityScore": score(distance, duration),
        "stage":0,   
    })

def print_samples(n_samples):
    file = open('data.json','w') 
    for i in range (0, n_samples):  
        file.write(shipGenerator()+'\n') 

print_samples(500)