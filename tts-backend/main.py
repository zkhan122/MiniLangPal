# from typing import Union
# from fastapi import FastAPI

# app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}


from tts_pipeline import TTSPipeline


pipeline = TTSPipeline(
    model="tts_models/multilingual/multi-dataset/xtts_v2",
    text="أصدر الروبوت صوت نقرة غير موافقة، ثم دخل لفترة وجيزة إلى داخل المكعب الداخلي الخاص به وأخرج كوبًا صغيرًا من السائل البني"
)
pipeline.connect_to_tts_service()