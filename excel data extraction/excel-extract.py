from cmath import nan
import string
import pandas as pd
import sys
import re

file_name = r'C:\Users\User\OneDrive\Accenture Git\Travel-App\excel data extraction\Travel Restrictions - travel4.csv'

workbook = pd.read_csv(file_name, encoding='utf-8')


def country_name(number):
    return ((workbook['adm0_name'].iloc[number]))

def country_info(number):
    if (type(workbook['info'].iloc[number]) != str):
        data = "No information available"
    else:
        data = (workbook['info'].iloc[number])
        data = str((re.sub(r'<.*?>', '', data))) #removes html tags from string
    return str(data)

def latest_news(number):
    data = country_info(number)
    latest_news = data.split("International Restrictions:")
    return latest_news[0]

def international_restrictions(number):
    data = country_info(number)
    international_restrictions = data.split("Internal Restrictions:")
    return international_restrictions[0]

def internal_restrictions(number):
    data = country_info(number)
    international_restrictions = data.split("Internal Restrictions:")
    return international_restrictions[0]


# i=1
# print(country_name(i))     
# print("Latest News: " + latest_news(i))
# print("International Restrictions: " + international_restrictions(i))
# print("Internal Restrictions: " + internal_restrictions(i))
