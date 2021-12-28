import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as cors from 'cors'
import * as bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import { Routes } from "./routes";

const whitelist = ["http://localhost"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
}

createConnection()
    .then(async (connection) => {
        // create express app
        const app = express();
        //app.use(cors(corsOptions))
        app.use(bodyParser.json());

        // register express routes from defined application routes
        Routes.forEach((route) => {
            (app as any)[route.method]( //app.post
                route.route,
                route.middleware
                    ? route.middleware
                    : (req, res, next) => { next() },
                (req: Request, res: Response, next: Function) => {
                    let result = new (route.controller as any)()[route.action](
                        req,
                        res,
                        next,
                    )

                    if (result instanceof Promise) {
                        result.then((result) =>
                            result !== null && result !== undefined
                                ? res.send(result)
                                : undefined,
                        );
                    } else if (result !== null && result !== undefined) {
                        res.json(result);
                    }
                },
            );
        });

        // start express server
        app.listen(5000);

    })
    .catch((error) => { new Error(error) });


