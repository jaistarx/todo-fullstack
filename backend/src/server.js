const PORT = 5000;
const app = require("./app");
const listener = () => {
  console.log(`port opened on ${PORT}`);
};
app.listen(PORT, listener);
