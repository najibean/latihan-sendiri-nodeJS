const express = require('express');
const app = express();

app.use(() => {
   console.log('Hello server Najib...');
})

app.listen(4000);