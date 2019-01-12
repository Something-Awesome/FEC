const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7777;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server up and running at: http://localhost:${port}`);
});