from pymongo import MongoClient
from config import mongo_uri, db_name, collection_name

# Connect to MongoDB
client = MongoClient(mongo_uri)
db = client[db_name]
collection = db[collection_name]

# Add an entry to the collection
entry = {"name": "John", "age": 30}
collection.insert_one(entry)

# Read the entry from the collection
result = collection.find_one({"name": "John"})
print(result)