import sys
import json
import numpy as np
from tensorflow.keras.models import load_model

model = load_model('my_trained_model.h5')
input_data = json.loads(sys.argv[1])
input_array = np.array(input_data).reshape(1, -1)
prediction = model.predict(input_array)
print(json.dumps(prediction.tolist()))