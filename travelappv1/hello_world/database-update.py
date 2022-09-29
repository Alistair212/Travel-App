import boto3
import exceldocfetch

db = boto3.resource('dynamodb')
table = db.Table("travelAppDB")


for x in range(exceldocfetch.amount_of_countries()):
    print("(" + str + "/" + exceldocfetch.amount_of_countries() + ") adding in country: " + exceldocfetch.country_name(x))
    table.put_item(
        Item={
            'countryID': x,
            'countryName': exceldocfetch.country_name(x),
            'latest_news': exceldocfetch.latest_news(x),
            'international_restrictions': exceldocfetch.international_restrictions(x),
            'internal_restrictions': exceldocfetch.internal_restrictions(x)
        }
    )

