import Router from 'koa-router';
import { buildRestRoutes } from './route.builder';
import { buildServerHealthCheckRoute } from './server_check_route';

export async function createServerHealthCheckRouter(): Promise<Router> {
    const ServerHealthCheckRouter = new Router({
        prefix: '/'
    })
    const serverHealthCheckRoute = buildServerHealthCheckRoute();
    buildRestRoutes(ServerHealthCheckRouter, [serverHealthCheckRoute]);
    return ServerHealthCheckRouter;
}

export async function createCricbuzzRouter(): Promise<Router> {
    const CricbuzzRouter = new Router({
        prefix: '/cricbuzz'
    })

    return CricbuzzRouter;
}