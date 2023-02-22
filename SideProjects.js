require('dotenv').config({path: 'apikey.env'});
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/chatbot', (req, res) => {
  const prompt = req.body.prompt;
  const api_key = process.env.API_KEY;
  axios.post("https://api.openai.com/v1/engines/davinci/completions", {
    prompt: prompt,
    api_key: api_key
  }).then(response => {
    res.json(response.data.choices[0].text);
  }).catch(error => {
    res.status(500).json({ error: error.message });
  });
});

