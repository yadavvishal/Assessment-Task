// Installation

-> npm install express translate-google

// Usage
1- Start the server

-> node index.js

-> The server will start running on http://localhost:3000 by default, unless a different port is specified via the PORT environment variable.

2- To translate text, send a POST request to the /translate endpoint with a JSON payload containing the text to be translated:

POST /translate
Content-Type: application/json

{
"text": "Hello, world!"
}

The server will respond with a JSON object containing the translated text:

{
"translation": "Bonjour le monde !"
}

Dependencies
. express: ^4.17.1
. translate-google: ^7.0.0
