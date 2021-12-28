import { FeedController } from "./controller/FeedController";
import { apiKey } from "./middleware/apikey";
import { feedSchema } from "./middleware/feedSchema";

export const Routes = [
    {
        method: "post",
        route: "/api/getFeed",
        controller: FeedController,
        action: "getFeed",
        middleware: [apiKey, feedSchema]
    },
];
