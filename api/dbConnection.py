from flask import g
import pymongo

def get_db():
    if 'db' not in g:
        client = pymongo.MongoClient("mongodb://172.21.0.2/greenship_db?authSource=admin")
        g.db = client.greenship_db
    return g.db

def close_db(e=None):
    db = g.pop('db', None)
    if db is not None:
        db.close()
