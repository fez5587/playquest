import requests
import config

endpoint = "https://svcs.ebay.com/services/search/FindingService/v1"
headers = {
    "X-EBAY-SOA-OPERATION-NAME": "findItemsByKeywords",
    "X-EBAY-SOA-SERVICE-VERSION": "1.13.0",
    "X-EBAY-SOA-SECURITY-APPNAME": config.EBAY_APP_ID,
    "X-EBAY-SOA-RESPONSE-DATA-FORMAT": "JSON",
}

params = {
    "keywords": "magic the gathering",
    "paginationInput.entriesPerPage": "10",
    "paginationInput.pageNumber": "1"
}

response = requests.get(endpoint, headers=headers, params=params)

# Print the response status code
print(f"Response Status Code: {response.status_code}")

# Print the raw JSON response
print("Raw JSON Response:")
print(response.text)

data = response.json()

# Extract and split item names, then print the words
if 'findItemsByKeywordsResponse' in data:
    items = data['findItemsByKeywordsResponse'][0]['searchResult'][0]['item']
    for item in items:
        title = item['title'][0]
        words = title.split()
        for word in words:
            print(word)
else:
    print("No items found")