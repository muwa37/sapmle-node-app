const userRouter = require('./src/user-router');
const Application = require('./app/Application');
const jsonParser = require('./app/parseJson');
const parseUrl = require('./app/parseUrl');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect();
    app.listen(PORT, () => {
      console.log(`serv started on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
