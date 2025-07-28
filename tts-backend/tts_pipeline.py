from TTS.api import TTS
from pydub import AudioSegment
from pydub.playback import play

class TTSPipeline:
    def __init__(self, model, text):
        self.model = model
        self.text = text

    def connect_to_tts_service(self):
        tts_service = TTS(model_name=self.model, progress_bar=True, gpu=False)
        tts_service.tts_to_file(text=self.text, file_path="output.wav", speaker="Ana Florence", language="ar")
        audio = AudioSegment.from_wav("output.wav")
        play(audio)
