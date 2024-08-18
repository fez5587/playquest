from pymongo import MongoClient
from config import mongo_uri

def test_mongodb_connection():
    try:
        client = MongoClient(mongo_uri)
        db = client.get_database()
        print("Connected to MongoDB successfully!")

        # Retrieve and print the list of databases
        database_names = client.list_database_names()
        print("List of databases:")
        for name in database_names:
            print(name)

    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")

if __name__ == "__main__":
    test_mongodb_connection()