import os
import config

# CSV file path
csv_file_path = 'commander_masters_boosters_.csv'
csv_trimmed_file_path = 'trimmed.csv'

# MongoDB information
mongodb_url = 'mongodb://playquestadmin:94uBeLzGx2XeMwm4KvZHkqNRCMrk7uj7y8@216.155.152.212:27017/'
mongo_host = 'pqdb.vanderstraeten.me'
mongo_username = 'playquestadmin'
mongo_password = '94uBeLzGx2XeMwm4KvZHkqNRCMrk7uj7y8'
database_name = 'admin'
db_name = 'card_inventory'
collection_name = 'imported_cards'

# Properly formatted MongoDB URI with default database
mongo_uri = f'mongodb://{mongo_username}:{mongo_password}@{mongo_host}:27017/{database_name}'