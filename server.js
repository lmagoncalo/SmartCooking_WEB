const express = require('express');
const path = require('path')
// set port 
const port = process.env.PORT  || 8080

express()
.use(express.static(path.join(__dirname, 'public')))
.get('/', (req, res) => res.render('index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
