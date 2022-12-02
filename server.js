const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const createTablesModel = require('./models/createTables.js').createTables;

require('./routes/index.js')(app);

app.use(cors());
app.use(bodyParser.json());
app.listen(3000, () => {
    console.log('Server on in port 3000');

    // Create tables if doesn' exists
    createTablesModel().then(({ err, data }) => {
        if (err) {
            console.log('Tables already created');
        } else {
            console.log('Tables User_VG and Movies_VG created successfully');
        }
    })
<<<<<<< Updated upstream
});
=======
});
>>>>>>> Stashed changes
