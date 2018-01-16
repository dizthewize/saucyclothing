const express = require('express');
const app = express();

// import routes
require ('./routes/web')(app)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
