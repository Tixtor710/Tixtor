from flask import Flask, request, jsonify

app = Flask(__name__)

# Define the chatbot's responses
responses = {
    "hello": "Hi there!",
    "how are you": "I'm doing well, thanks for asking!",
    "what's your name": "My name is ChatBot!",
    # Add more responses here
}

@app.route('/chatbot', methods=['POST'])
def chatbot():
    # Get the user input from the request
    user_input = request.json['message']

    # Get the chatbot's response
    chatbot_response = responses.get(user_input.lower(), "I'm sorry, I don't understand.")

    # Return the chatbot's response as a JSON object
    return jsonify({'message': chatbot_response})

if __name__ == '__main__':
    app.run(debug=True)
