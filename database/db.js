import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-onyq59w-shard-00-00.wxfneqo.mongodb.net:27017,ac-onyq59w-shard-00-01.wxfneqo.mongodb.net:27017,ac-onyq59w-shard-00-02.wxfneqo.mongodb.net:27017/?ssl=true&replicaSet=atlas-8t5u8y-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;