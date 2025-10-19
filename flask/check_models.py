import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join("..", "backend", ".env"))

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

models = genai.list_models()
for m in models:
    print(m)
