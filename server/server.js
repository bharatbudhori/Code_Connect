<<<<<<< HEAD
//hello
=======
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

//testing commits
>>>>>>> 731aa112e6d0a1b2ef2dc86253df01082889918f
