import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import re


# CLEANR = re.compile('<.*?>') 

# def cleanhtml(raw_html):
#   cleantext = re.sub(CLEANR, '', raw_html)
#   return cleantext



# Set the URL you want to webscrape from
url = 'https://www.health.gov.au/health-alerts/covid-19/international-travel'

# Connect to the URL
response = requests.get(url)

print(response)

# # Parse HTML and save to BeautifulSoup object¶
soup = BeautifulSoup(response.text, "html.parser")
one_a_tag = soup.findAll('p')[1]
print((one_a_tag))