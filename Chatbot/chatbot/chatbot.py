from flask import Flask, request, jsonify

app = Flask(__name__)


responses = {
    "hello": "Hi there!",
    "how are you": "I'm doing well, thanks for asking!",
    "what's your name": "My name is ChatBot!",
    "Tell me about Tixtor?": "Tixtor is a digital content production company",
}

@app.route('/chatbot', methods=['POST'])
def chatbot():
    
    user_input = request.json['message']

    
    chatbot_response = responses.get(user_input.lower(), "I'm sorry, I don't understand.")

    
    return jsonify({'message': chatbot_response})

if __name__ == '__main__':
    app.run(debug=True)
