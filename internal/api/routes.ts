import { createServerHealthCheckRouter } from './rest'
export class Routes {

    constructor() {
        // Initialize any necessary properties or dependencies here
    }

    async attachRestApiRoutes(app: any) {
        // Implement your logic to attach REST API routes here
        console.log('Attaching REST API routes...');
        // Example: app.use('/api', apiRouter.routes());
        const ServerRouter = await createServerHealthCheckRouter();
        app.use(ServerRouter.routes());
        app.use(ServerRouter.allowedMethods());
    }
}

export default new Routes();