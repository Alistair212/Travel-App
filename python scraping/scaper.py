import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import re

# Set the URL you want to webscrape from
url = 'https://www.health.gov.au/health-alerts/covid-19/international-travel'

# Enter the paragraph number you want to scrape
paragraph_num = 1

# Connect to the URL
response = requests.get(url)

print(response)

# # Parse HTML and save to BeautifulSoup object¶
soup = BeautifulSoup(response.text, "html.parser")
one_a_tag = soup.findAll('p')[paragraph_num]
print((one_a_tag))