from flask import Flask
import json
from os.path import join, dirname
from ibm_watson import TextToSpeechV1
from ibm_watson.websocket import SynthesizeCallback
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator


app = Flask(__name__)

@app.route("/learning")
def synthesize(data):
    authenticator = IAMAuthenticator("api key") # api key to remain private
    service = TextToSpeechV1(authenticator=authenticator)
    service.set_service_url("https://api.us-south.text-to-speech.watson.cloud.ibm.com") # change to middle east

    voices = service.list_voices().get_result()
    print(json.dumps(voices, indent=2))

    pronounciation = service.get_pronunciation("Watson", format="spr").get_result()
    print(json.dumps(pronounciation, indent=2))

    voice_models = service.list_custom_models().get_result()
    print(json.dumps(voice_models, indent=2))


if __name__ == "__main__":
    app.run(port=3000)