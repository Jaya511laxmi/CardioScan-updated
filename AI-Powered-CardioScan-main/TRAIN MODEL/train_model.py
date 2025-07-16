import tensorflow as tf
import numpy as np
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Conv2D, MaxPooling2D, Flatten, LSTM, Dense, Dropout, Input, Reshape, Concatenate
)
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from preprocessing import preprocess_images

# Preprocess data
# data_dir = '../DATA/combineall'
data_dir = '../DATA/testing'
images_cnn, images_vit, labels = preprocess_images(data_dir)
X_train_cnn, X_val_cnn, X_train_vit, X_val_vit, y_train, y_val = train_test_split(
    images_cnn, images_vit, labels, test_size=0.2, random_state=42
)

# CNN-LSTM branch
cnn_input = Input(shape=(128, 128, 1))
x = Conv2D(32, (3, 3), activation='relu', padding='same')(cnn_input)
x = MaxPooling2D((2, 2))(x)
x = Conv2D(64, (3, 3), activation='relu', padding='same')(x)
x = MaxPooling2D((2, 2))(x)
x = Flatten()(x)
x = Dense(128, activation='relu')(x)
x = Reshape((1, 128))(x)  # Reshape for LSTM
x = LSTM(64, return_sequences=False)(x)
x = Dropout(0.5)(x)
cnn_lstm_output = Dense(64, activation='relu')(x)

# Vision Transformer branch
vit_input = Input(shape=(64, 256))  # 64 patches of size 16x16 flattened
vit_x = tf.keras.layers.MultiHeadAttention(num_heads=4, key_dim=64)(vit_input, vit_input)
vit_x = tf.keras.layers.GlobalAveragePooling1D()(vit_x)
vit_output = Dense(64, activation='relu')(vit_x)

# Combine CNN-LSTM and ViT outputs
combined = Concatenate()([cnn_lstm_output, vit_output])
final_output = Dense(2, activation='softmax')(combined)

# Create and compile the model
ensemble_model = Model(inputs=[cnn_input, vit_input], outputs=final_output)
ensemble_model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
ensemble_model.fit([X_train_cnn, X_train_vit], y_train, validation_data=([X_val_cnn, X_val_vit], y_val), epochs=5, batch_size=32)

# Evaluate the model
y_pred = ensemble_model.predict([X_val_cnn, X_val_vit])
y_pred_classes = np.argmax(y_pred, axis=1)
y_val_classes = np.argmax(y_val, axis=1)
print(classification_report(y_val_classes, y_pred_classes))

# Save the model
ensemble_model.save('../MODELS/tttt.h5')