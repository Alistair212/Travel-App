import boto3
from boto3.dynamodb.conditions import Key

# db = boto3.resource('dynamodb')
# table = db.Table("travelAppDB")
# table = boto3.client('dynamodb')

# client = boto3.resource('dynamodb')
# table = client.Table('travelAppDB')


dynamo_client = boto3.client('dynamodb')
# table = dynamo_client.Table("travelAppDB")


def get_country(id):
    response = dynamo_client.get_item(
        TableName='travelAppDB',
        Key={
            'countryID': {
                'N': str(id),
            }
        }
    )
    return response['Item']['countryName']['S']

# print(get_country(2))
print(get_country(2))


def get_all_countries():
    for x in (range (3)):
        response = table.get_item(
            Key={
                'countryID': x
            }
        )
        item = response['Item'].get('countryName')
        return(item)

# print(get_all_countries())


def get_country_name(id):
    response = table.query(
        KeyConditionExpression=Key('countryID').eq(id)
    )
    if (response['Items'] == []):
        return "Country not found"
    return response['Items'][0].get('countryName')




def get_latest_news(id):
    response = table.query(
        KeyConditionExpression=Key('countryID').eq(id)
    )
    return response['Items'][0].get('latest_news')


def get_international_restrictions(id):
    response = table.query(
        KeyConditionExpression=Key('countryID').eq(id)
    )
    return response['Items'][0].get('International_restrictions')


def get_internal_restrictions(id):
    response = table.query(
        KeyConditionExpression=Key('countryID').eq(id)
    )
    return response['Items'][0].get('internal_restrictions')









# print(get_country_name(88))

print("Loaded database read functions")

# print(get_internal_restrictions2(1))
# # # For Testing Purposes, leave commented out for final version
# x=1
# print(get_country_name(x))
# print(get_international_restrictions(x))
# print(get_internal_restrictions(x))










