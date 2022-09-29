from itertools import count
import databaseRead
from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.logging import correlation_paths
from aws_lambda_powertools.event_handler import APIGatewayRestResolver, CORSConfig
from aws_lambda_powertools.utilities.validation import validate
from aws_lambda_powertools.event_handler.exceptions import NotFoundError, BadRequestError

print("loaded dependencies")
# import requests


tracer = Tracer()
logger = Logger()


cors_config = CORSConfig()
app = APIGatewayRestResolver(cors=cors_config)


@app.get("/ping")
@tracer.capture_method
def ping():
    print("Running ping")
    return {"message": "pong"}


@app.get("/updatedb")
@tracer.capture_method
def call_data_update():
    print("Importing database update file")
    import databaseUpdate
    return {"message": "updated"}

@app.get("/latest_news/<country_id>")
@tracer.capture_method
def get_user(country_id):
    print("Checking latest news for country: ")
    print(country_id)
    if country_id == "":
        raise BadRequestError("no id provided")
    return databaseRead.get_latest_news(country_id)


@app.get("/get_country/<country_id>")
@tracer.capture_method
def get_user(country_id):
    print("getting country name: ")
    print(country_id)
    if country_id == "":
        raise BadRequestError("no id provided")
    return databaseRead.get_country(country_id)

@app.get("/international_restrictions/<country_id>")
@tracer.capture_method
def get_user(country_id):
    print("Checking international restrictions for country: ")
    if country_id == "":
        raise BadRequestError("no id provided")
    return databaseRead.get_international_restrictions(country_id)

@app.get("/internal_restrictions/<country_id>")
@tracer.capture_method
def get_user(country_id):
    print("Checking internal restrictions for country: ")
    if country_id == "":
        raise BadRequestError("no id provided")
    return databaseRead.get_internal_restrictions(country_id)



# You can continue to use other utilities just as before
@logger.inject_lambda_context(correlation_id_path=correlation_paths.API_GATEWAY_REST)
@tracer.capture_lambda_handler
def lambda_handler(event, context):
    return app.resolve(event, context)

# def lambda_handler(event, context):
#     """Sample pure Lambda function

#     Parameters
#     ----------
#     event: dict, required
#         API Gateway Lambda Proxy Input Format

#         Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

#     context: object, required
#         Lambda Context runtime methods and attributes

#         Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

#     Returns
#     ------
#     API Gateway Lambda Proxy Output Format: dict

#         Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
#     """

#     # try:
#     #     ip = requests.get("http://checkip.amazonaws.com/")
#     # except requests.RequestException as e:
#     #     # Send some context about this error to Lambda Logs
#     #     print(e)

#     #     raise e

#     return {
#         "statusCode": 200,
#         "body": json.dumps({
#             "message": "hello world",
#             # "location": ip.text.replace("\n", "")
#         }),
#     }
