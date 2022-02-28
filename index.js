const https = require('https');

https.createServer((req, res) => {
    https.request('https://quizlet.com/106508204/testout-practice-questions234-4103-flash-cards/', req_res => {
        req_res.pipe(res).writeHead(200, 'OK').end();
    })
})
.listen(process.env.PORT || 8080);