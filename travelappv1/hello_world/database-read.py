import boto3

db = boto3.resource('dynamodb')
table = db.Table("travelAppDB")

def get_all_countries():
    for x in (range (290)):
        response = table.get_item(
            Key={
                'countryID': x
            }
        )
        item = response['Item'].get('countryName')
        return(item)


def get_country_name(id):
    response = table.get_item(
        Key={
            'countryID': id
        }
    )
    return response['Item'].get('countryName')

def get_latest_news(id):
    response = table.get_item(
        Key={
            'countryID': id
        }
    )
    return response['Item'].get('latest_news')

def get_international_restrictions(id):
    response = table.get_item(
        Key={
            'countryID': id
        }
    )
    return response['Item'].get('international_restrictions')

def get_internal_restrictions(id):
    response = table.get_item(
        Key={
            'countryID': id
        }
    )
    return response['Item'].get('internal_restrictions')


# # # For Testing Purposes, leave commented out for final version
# x=1
# print(get_country_name(x))
# print(get_international_restrictions(x))
# print(get_internal_restrictions(x))










