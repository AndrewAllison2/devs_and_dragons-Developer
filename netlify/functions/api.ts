// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/campaigns", (req, res) => res.send("Camapigns"));
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

export const handler = serverless(api);
