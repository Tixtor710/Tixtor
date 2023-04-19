import random

# Define some responses
greetings = ["hello", "hi", "hey", "hi there", "hello there", "yo","hola"]
farewells = ["bye", "goodbye", "see you later", "adios", "ciao", "bye bye"]
thanks = ["thanks", "thank you", "thanks a lot", "thank you very much", "much appreciated"]

# Define a function to generate a response
def generate_response(user_message):
    # Convert the user message to lower case
    user_message = user_message.lower()

    # Check if the user has greeted the chatbot
    if any(greeting in user_message for greeting in greetings):
        return "Hello there! How can I help you today?"

    # Check if the user has thanked the chatbot
    if any(thank in user_message for thank in thanks):
        return "You're welcome!"

    # Check if the user has said goodbye
    if any(farewell in user_message for farewell in farewells):
        return "Goodbye! Have a nice day."

    # If none of the above conditions are met, generate a generic response
    return "I'm sorry, I don't understand. Could you please rephrase that?"

# Define the main function to run the chatbot
def main():
    print("Chatbot: Hello! How can I help you today?")
    while True:
        # Get user input
        user_message = input("You: ")
        # Generate and print response
        chatbot_response = generate_response(user_message)
        print("Chatbot:", chatbot_response)

# Run the chatbot
if __name__ == "__main__":
    main()
