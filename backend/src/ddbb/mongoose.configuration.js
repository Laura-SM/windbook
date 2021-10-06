const mongoose = require('mongoose');

mongoose.connect(process.env.DDBB_URL).catch((error) => handleError(error));

mongoose.connection.on('error', (err) => {
  logError(err);
});
