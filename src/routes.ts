import { FeedController } from "./controller/FeedController";
import { IndexController } from "./controller/IndexController";
import { apiKey } from "./middleware/apikey";
import { feedSchema } from "./middleware/feedSchema";

export const Routes = [
    {
        method: 'get',
        route: '/',
        controller: IndexController,
        action: 'index'
    },
    {
        method: "post",
        route: "/api/getFeed",
        controller: FeedController,
        action: "getFeed",
        middleware: [apiKey, feedSchema]
    },
];
