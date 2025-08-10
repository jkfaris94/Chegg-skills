require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});