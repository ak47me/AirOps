from flask import Flask, request, jsonify
import face_recognition
import os

from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, origins="*")


def compare_faces(photo_path, id_card_path):
    # Load images
    photo_image = face_recognition.load_image_file(photo_path)
    id_card_image = face_recognition.load_image_file(id_card_path)
    
    # Encode faces
    photo_encoding = face_recognition.face_encodings(photo_image)
    id_card_encoding = face_recognition.face_encodings(id_card_image)
    
    if not photo_encoding or not id_card_encoding:
        return False

    photo_encoding = photo_encoding[0]
    id_card_encoding = id_card_encoding[0]
    
    # Compare faces
    results = face_recognition.compare_faces([photo_encoding], id_card_encoding)
    return results[0]

@app.route('/upload', methods=['POST'])
def upload_files():
    photo = request.files['photo']
    id_card = request.files['id_card']
    
    # Save files
    photo_path = os.path.join('uploads', 'photo.jpg')
    id_card_path = os.path.join('uploads', 'id_card.jpg')
    photo.save(photo_path)
    id_card.save(id_card_path)
    
    # Compare faces
    result = compare_faces(photo_path, id_card_path)
    
    if result:
        return jsonify({"status": "success", "message": "Authentication successful"})
    else:
        return jsonify({"status": "failure", "message": "Authentication failed"})

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
