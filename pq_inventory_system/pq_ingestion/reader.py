import sqlite3

try:
    # Connect to the database
    conn = sqlite3.connect('database.db')

    # Create a cursor object to execute SQL queries
    cursor = conn.cursor()

    # Execute a SELECT query to retrieve data from a table
    cursor.execute('SELECT * FROM your_table_name')

    # Fetch all the rows returned by the query
    rows = cursor.fetchall()

    # Check if any rows were returned
    if rows:
        # Iterate over the rows and print the data
        for row in rows:
            print(row)
    else:
        print("No data found in the table.")

except sqlite3.Error as e:
    print(f"An error occurred: {e}")

finally:
    # Close the cursor and the connection
    if cursor:
        cursor.close()
    if conn:
        conn.close()