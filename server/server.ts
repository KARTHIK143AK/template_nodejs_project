import Koa from 'koa';
import { config } from '../internal/config/config';
import { connect } from '../internal/config/vault';
import Routes from '../internal/api/routes'
import { MongoConnection } from "../internal/repository/mongodb/client";

export class AppServer {
    private app: Koa;
    constructor() {
        this.app = new Koa()
        this.registerConfig();
    }

    private async registerConfig() {
        try{
            console.log('Registering config...',process.env.NODE_ENV);
            if(!process.env.NODE_ENV){
                await this.connectToVault()
            }

            await this.registerServices()



        } catch (error) {
            console.error('Error registering config:', error);
        }
    }

    async registerRoutes() {
        try{
            await Routes.attachRestApiRoutes(this.app);
        } catch (error) {
            console.error('Error registering routes:', error);
        }
    }

    async registerServices() {
        // Implement your logic to register services here
        console.log('Registering services...');
        if(config.REDIS.enabled){
            await this.connectRedisClient()
        }

        if(config.MONGODB.enabled){
            await this.connectMongoDBClient()
        }
        // Example: await serviceRegistry.register(service);
    }

    private async connectRedisClient() {
        // Implement your logic to connect to Redis here
        console.log('Connecting to Redis...');
        // Example: await redisClient.connect();
    }

    private async connectMongoDBClient() {

        const mongoConnection = new MongoConnection();
        await mongoConnection.connect(config.MONGODB.uri);
        await this.registerRoutes()
    }


    async connectToVault(){
        await connect()
    }

    public start() {
        this.app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    }   
}