const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'build' );
const listingsRouter = require('./api/routes/listings');

// const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;


app.use(express.static(publicPath));

app.get('/test', (req, res)=> {
  res.send('SERVER HIT!!!')
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'))
// });

app.use('/api/listings', listingsRouter);

app.listen(port, ()=> {
  console.log(`Server is up on port ${port}!`)
})