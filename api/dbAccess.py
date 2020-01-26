from dbConnection import get_db
from bson import ObjectId

def ships():
    query = {} 
    contents = {
        "_id" : False
    }
    return get_db().ships.find(query,contents)