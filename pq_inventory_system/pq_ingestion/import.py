import csv
from pymongo import MongoClient

def import_csv_to_mongo(csv_file_path, mongo_uri, db_name, collection_name):
    # Connect to MongoDB
    client = MongoClient(mongo_uri)
    db = client[db_name]
    collection = db[collection_name]

    # Open and read the CSV file
    with open(csv_file_path, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        
        documents = []
        row_count = 0  # Initialize row count

        # Insert data into the collection
        for row in csv_reader:
            folder_name = row['Folder Name']
            quantity = int(row['Quantity'])
            trade_quantity = int(row['Trade Quantity'])
            card_name = row['Card Name']
            set_code = row['Set Code']
            set_name = row['Set Name']
            card_number = row['Card Number']
            condition = row['Condition']
            printing = row['Printing']
            language = row['Language']
            price_bought = float(row['Price Bought'])
            date_bought = row['Date Bought']
            low = float(row['LOW'])
            mid = float(row['MID'])
            market = float(row['MARKET'])
            
            # Create separate documents for each quantity
            for _ in range(quantity):
                document = {
                    'folder_name': folder_name,
                    'quantity': 1,
                    'trade_quantity': trade_quantity,
                    'card_name': card_name,
                    'set_code': set_code,
                    'set_name': set_name,
                    'card_number': card_number,
                    'condition': condition,
                    'printing': printing,
                    'language': language,
                    'price_bought': price_bought,
                    'date_bought': date_bought,
                    'low': low,
                    'mid': mid,
                    'market': market
                }
                documents.append(document)
                row_count += 1  # Increment row count for each inserted document

        # Insert all documents into the collection
        if documents:
            collection.insert_many(documents)

    # Print the row count
    print(f'Total documents inserted: {row_count}')

# Example usage
csv_file_path = 'commander_masters_boosters_.csv'
mongo_uri = 'mongodb://localhost:27017/'
db_name = 'card_inventory'
collection_name = 'imported_cards'

import_csv_to_mongo(csv_file_path, mongo_uri, db_name, collection_name)