const { PORT = 5000 } = ProcessingInstruction.env;

const app = require("./app");

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));