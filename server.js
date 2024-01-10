const app = require('./app');

require('dotenv').config();

app.listen(process.env.PORT, () => `App is running on port 7040`);