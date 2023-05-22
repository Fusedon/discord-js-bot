const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`AI ALIVE`)
})
 
function keep_alive() {
  server.listen(3000, () => { console.log("AI SERVER STARTED" + Date.now()) });
}
 
module.exports = keep_alive;