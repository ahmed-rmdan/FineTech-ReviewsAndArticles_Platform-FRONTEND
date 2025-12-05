import {MongoClient} from 'mongodb'

export async function  dbconnection(){
    console.log(process.env.MONGO_URI)
    const db=await MongoClient.connect(process.env.MONGO_URI as string)
    return db
}