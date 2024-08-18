import pandas as pd
from pymongo import MongoClient
from config import csv_trimmed_file_path, mongo_uri, db_name, collection_name

def test_mongodb_connection():
    try:
        client = MongoClient(mongo_uri)
        db = client.get_database()
        print("Connected to MongoDB successfully!")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")

if __name__ == "__main__":
    test_mongodb_connection()

    # Read the CSV file into a pandas DataFrame
    df = pd.read_csv(csv_trimmed_file_path)

    # Show the lines being submitted before sending to the database
    print(df)

    # Connect to MongoDB with increased timeout settings
    client = MongoClient(mongo_uri, serverSelectionTimeoutMS=50000, socketTimeoutMS=50000, connectTimeoutMS=50000)
    db = client[db_name]
    collection = db[collection_name]

    # Convert the DataFrame to a list of dictionaries
    data = df.to_dict('records')

    # Insert the data into MongoDB
    if data:
        collection.insert_many(data)
        print("Data inserted successfully!")
    else:
        print("No data to insert.")

    # Close the MongoDB connection
    client.close()