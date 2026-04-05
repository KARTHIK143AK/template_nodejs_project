import dotenv from 'dotenv';
const env = process.env.NODE_ENV;
if(env){
    dotenv.config({ path: `./app/environments/.env.${env}`, override: true });
} else {
    dotenv.config({ path: `./app/environments/.env`, override: true });
}

const config = {
    PORT: process.env.PORT || 3000,
    VAULT: {
        endpoint: process.env.VAULT_ADDR || 'http://localhost:8200',
        token: process.env.VAULT_TOKEN || 'your-vault-token',
    },
    REDIS: {
        enabled:(process.env.REDIS_ENABLED === 'true') ? true : false,
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
    },
    MONGODB: {
        enabled:(process.env.MONGODB_ENABLED === 'true') ? true : false,
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/myDb',
    }
}

export { config };