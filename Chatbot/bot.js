const form = document.querySelector('form');
const messageInput = document.querySelector('#message');
const chatbox = document.querySelector('#chatbox');

form.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        messageInput.value = '';
        fetch('/chatbot', {
            method: 'POST',
            body: new FormData(form)
        }).then(response => response.json())
          .then(data => {
            const response = data.response;
            const messageEl = document.createElement('div');
            messageEl.innerText = message;
            messageEl.classList.add('message', 'user');
            const responseEl = document.createElement('div');
            responseEl.innerText = response;
            responseEl.classList.add('message', 'chatbot');
            chatbox.appendChild(messageEl);
            chatbox.appendChild(responseEl);
          })
    }
});
