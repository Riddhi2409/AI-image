const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');

const connectdb=require('./mongodb/connect.js');
const dalleRouter=require('./router/dalleRoutes.js')
const postRouter=require('./router/postRoutes.js')

dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));

app.use(cors());

app.use('/api/v1/dalle',dalleRouter);
app.use('/api/v1/post',postRouter);

const startServer = async () => {
    try {
      connectdb.connectdb(process.env.MONGO_URL);
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };

startServer();