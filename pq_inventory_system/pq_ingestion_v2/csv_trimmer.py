from config import csv_file_path
import pandas as pd
# Read the CSV file
df = pd.read_csv(csv_file_path)

# Select the desired columns
columns_to_keep = [1, 3, 4, 5, 6, 7, 8, 9]
trimmed_df = df.iloc[:, columns_to_keep]

# Save the trimmed DataFrame to a new CSV file
trimmed_df.to_csv('trimmed.csv', index=False)