import { MongoClient } from 'mongodb';

export class MongoConnection {
    private mongoClient?: MongoClient;

    async connect(uri: string) {
        try {
            console.log('Connecting to MongoDB...');
            this.mongoClient = new MongoClient(uri);
            await this.mongoClient.connect();
            console.log('Connected to MongoDB!!!!!');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    getDb(){
        if (!this.mongoClient) {
            throw new Error('MongoDB client is not connected');
        }
        return this.mongoClient.db();
    }
}