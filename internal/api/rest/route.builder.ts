import Router from 'koa-router';
import { GroupedRoutes } from './route.type';

export function buildRestRoutes(router: Router, groupedRoutes: GroupedRoutes[]) {
    console.log('Building REST routes...');
    groupedRoutes.forEach((groupedRoute) => {
        const { group, routes } = groupedRoute;
        const groupRouter = new Router({
            prefix: group.prefix
        });
        routes.forEach((route) => {
            const { method, path, handler, middlewares } = route;
            groupRouter[method](path, ...(middlewares || []), handler);
        });
        router.use(groupRouter.routes());
    });
}