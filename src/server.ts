import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { SwaggerConfig } from "./infra/swagger/Swagger";
import router from "./routes";
import { Store } from "./infra/store/Store";

dotenv.config();

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json())

app.use(router);

const swagger = new SwaggerConfig();

const port = parseInt(`${process.env.PORT || 3000}`);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swagger.config)));

const UserStore = new Store()

app.listen(port, () => console.log(`Server Running on PORT: ${port}.`));

export default UserStore;
