
import { AppServer } from "./server"

async function Main() {
    try {
        const server = new AppServer();
        await server.start();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

Main();