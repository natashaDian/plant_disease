from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

import tensorflow as tf
print(tf.__version__)


app = FastAPI()

# Allow CORS from frontend (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # specify your frontend URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

model = load_model('plant_disease10e.h5')  # load your model
class_names = [
    'Tomato_healthy', 'Potato___Early_blight', 'Tomato__Tomato_YellowLeaf__Curl_Virus',
    'Tomato_Early_blight', 'Tomato__Target_Spot', 'Potato___Late_blight', 'Tomato_Leaf_Mold', 
    'Tomato_Spider_mites_Two_spotted_spider_mite', 'Tomato_Septoria_leaf_spot', 
    'Tomato__Tomato_mosaic_virus', 'Pepper__bell___Bacterial_spot', 'Tomato_Bacterial_spot', 
    'Tomato_Late_blight', 'Pepper__bell___healthy', 'Potato___healthy'
]  # replace with your actual classes

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")

    try:
        # Read image file
        img_bytes = await file.read()  # Asynchronously read the file
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB').resize((128, 128))  # Resize to match model input
        img_array = np.expand_dims(np.array(img) / 255.0, axis=0)

        # Make prediction
        predictions = model.predict(img_array)
        predicted_class = class_names[np.argmax(predictions)]
        confidence = float(np.max(predictions))

        # Return prediction as JSON response
        return JSONResponse(content={'prediction': predicted_class, 'confidence': confidence})
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing the image: {str(e)}")

# If you want to run the app locally, use the following command
# uvicorn app:app --reload
