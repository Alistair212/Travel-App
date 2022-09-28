from cmath import nan
from itertools import count
import pandas as pd
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
    return str(data).replace("*", "")

def latest_news(number):
    data = country_info(number)
    latest_news = data.split("International Restrictions:")
    latest_news = latest_news[0].split("Latest News:")
    if (len(latest_news[0]) == 0):
        return "No information available"
    else:
        return latest_news[0]

def international_restrictions(number):
    data = country_info(number)
    international_restrictions = data.split("International Restrictions:")
    international_restrictions = international_restrictions[1].split("Internal Restrictions:")
    return international_restrictions[0]

def internal_restrictions(number):
    data = country_info(number)
    international_restrictions = data.split("Internal Restrictions:")
    if (len(international_restrictions) == 1):
        internal_restrictions = "No information available"
        return internal_restrictions
    else:
        return international_restrictions[1]

# for i in range(290):
#     print(country_name(i))
#     print("Latest News:")
#     print(latest_news(i))
#     print("International Restrictions:")
    # print(international_restrictions(i))
#     print("Internal Restrictions:")
#     print(internal_restrictions(i))
#     print("----------------------------------------------------------------------------------------------------------------")


for i in range(290):
    if (country_name(i) == "United Kingdom of Great Britain & Northern Ireland"):
        print("***Country Name:")
        print(country_name(i))
        print("***Latest News:")
        print(latest_news(i))
        print("***International Restrictions:")
        print(international_restrictions(i))
        print("***Internal Restrictions:")
        print(internal_restrictions(i))
        print("----------------------------------------------------------------------------------------------------------------")
# print(country_name(i))
# print(country_info(i))
# print(latest_news(i))
# print(international_restrictions(i))
# print(internal_restrictions(i))

