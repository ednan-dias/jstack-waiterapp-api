import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://root:root@localhost:27017', {
  dbName: 'waiterapp'
})
  .then(() => {
    const app = express();
    const port = 3001;

    app.use(express.json());
    app.use(router);

    app.listen(port, () =>
      console.log(`🚀 Server is running on http://localhost:${port}`)
    );
  })
  .catch((err) => console.log(`Erro ao conectar ao mongodb: ${err}`));


