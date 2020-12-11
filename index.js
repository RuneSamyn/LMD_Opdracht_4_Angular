const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.get('/', (req, res) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    let rawdata = fs.readFileSync('persons.json');
    res.send(rawdata);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

