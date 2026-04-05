import { Middleware } from "koa";

export type HTTPMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export interface RouteGroup {
    prefix: string;
    groupMiddleware?: Middleware[];
}

export interface RouteDefinition {
    method: HTTPMethod;
    path: string;
    handler: Middleware;
    middlewares?: Middleware[];
}

export interface GroupedRoutes {
    group: RouteGroup;
    routes: RouteDefinition[];
}