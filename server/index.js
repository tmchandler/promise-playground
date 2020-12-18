const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());
app.use(express.static('../client'));

app.get('/pies', (req, res) => {
  console.log('Received a request for pies.');
  setTimeout(() => {
    res.send(`I have ${~~(Math.random() * 10)} pies for sale today.`);
  }, 500);
});

app.get('/peanuts', (req, res) => {
  console.log('Received a request for peanuts.');
  const allergic = Math.random() >= .5;
  if(allergic) {
    res.send('Hate \'em, they could kill me!');
  } else {
    res.send('Peanut butter is my one true love.');
  }
});

// ================= Work Starts Below ================== //

/* Invoke the promisified saveMessage function and handle the response */
app.post('/messages', (req, res) => {
  // below is how the server is expecting to find the message--make sure you structure your axios post data so this works
  const message = req.body.msg; 
  // Fill me in with the below function's invocation and chaining.
});

/* Write a promise-wrapped writeFile here to store the incoming message */
const saveMessage = (message) => {
  // FILL ME IN
};

/* Invoke the promisified readMessage function and send it back to the client */
app.get('/messages', (req, res) => {
  // Fill me in with the below function's invocation and chaining.
});

/* Write a promise-wrapped readFile here to read the message already stored in the message.txt file */
const readMessage = () => {
  // FILL ME IN
};

app.listen(port, (err) => {
  if(err) throw err;
  else console.log(`Listening on port ${port}...`);
});
