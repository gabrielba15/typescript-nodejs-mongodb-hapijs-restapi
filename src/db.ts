import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/hapidb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log('Db is connected'))
  .catch((err) => console.log(err));
