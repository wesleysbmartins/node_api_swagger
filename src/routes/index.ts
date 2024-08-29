import express from "express";
import HealthCheck from "./HealthCheck";
import Users from "./Users";

const router = express.Router();

router.use("/", HealthCheck);

router.use("/users", Users);

export default router;
