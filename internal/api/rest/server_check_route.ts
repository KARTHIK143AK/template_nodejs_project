import { GroupedRoutes } from "./route.type"

export function buildServerHealthCheckRoute(): GroupedRoutes {
    return {
        group : { prefix : '/' },
        routes : [
            {
                method : 'get',
                path : '/',
                handler : (ctx: any) => {
                    ctx.status = 200;
                    ctx.body = {
                        status : 'ok',
                        message : 'Server is up and running'
                    }
                }
            }
        ]
    }
}