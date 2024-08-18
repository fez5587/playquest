from mtgsdk import Card
from config import initial_csv_path, mongo_uri, database_name, collection_name
from pymongo import MongoClient
import csv

# Connect to MongoDB
client = MongoClient(mongo_uri)
db = client[database_name]
collection = db[collection_name]

# Create an index on the 'id' field to use it as the shard key
collection.create_index('id', unique=True, name='shard_key')

# Rest of the code
with open(initial_csv_path, 'r') as file:
    reader = csv.reader(file)
    card_quantity_dict = {}  # Dictionary to store card_id and total quantity

    for row in reader:
        card_set = row[4]
        card_name = row[3]
        card_number = row[6]
        card_quantity = row[1]
        card_condition = row[7]
        card_language = row[8]

        print(f"Discovered a Match: Set: {card_set}, Name: {card_name}, Number: {card_number}")

        # Search for cards in the MTG SDK that match the set, name, and number
        cards = Card.where(set=card_set).where(name=card_name).where(number=card_number).all()
        if cards:
            for card in cards:
                card_id = card.id
                if card_id in card_quantity_dict:
                    # If card_id already exists in the dictionary, add the quantity
                    card_quantity_dict[card_id] += int(card_quantity)
                    # Update the quantity in the existing document in MongoDB
                    collection.update_one({'id': card_id}, {'$set': {'quantity': card_quantity_dict[card_id]}})
                else:
                    # If card_id doesn't exist in the dictionary, initialize the quantity
                    card_quantity_dict[card_id] = int(card_quantity)

                    # Create a document to insert into MongoDB
                    document = {
                        'id': card.id,
                        'name': card.name,
                        'set': card.set,
                        'number': card.number,
                        'quantity': card_quantity_dict[card_id],  # Use the updated quantity
                        'condition': card_condition,
                        'language': card_language,
                        'image_url': card.image_url
                    }

                    # Insert the document into the collection
                    collection.insert_one(document)
                print(f"id: {card.id}, Name: {card.name}, Set: {card.set}, Number: {card.number}, Quantity: {card_quantity_dict[card_id]}, Condition: {card_condition}, Language: {card_language}, Image_URL: {card.image_url}")
                print('-------------------------------------------------')
        else:
            print("No results found.")
