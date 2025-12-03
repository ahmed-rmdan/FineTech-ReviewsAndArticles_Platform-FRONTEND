import {MongoClient} from 'mongodb'

export async function  dbconnection(){
    const db=await MongoClient.connect(process.env.MONGO_URI as string)
    return db
}