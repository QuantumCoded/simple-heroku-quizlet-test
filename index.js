const https = require('https');
const http = require('http');


http.createServer((req, res) => {
    https.request(
        'https://quizlet.com/106508204/testout-practice-questions234-4103-flash-cards/',
        req_res => {
            req_res.on('error', e => {
                console.error(e);
            });

            req_res.pipe(
                res.writeHead(
                    200,
                    'OK',
                    {'content-type': 'text/plain'}
                )
            );
        }
    ).setHeader('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0').end();
})
.listen(process.env.PORT || 8008);