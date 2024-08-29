export class SwaggerConfig {
    config: {
        swaggerDefinition: {
            openapi: string;
            info : {
                title: string;
                version: string;
                description: string;
            };
            servers: [{
                url: string;
                description: string;
            }];
        };
        apis: string[];
    }

    constructor() {
        const port = parseInt(`${process.env.PORT || 3000}`);

        this.config = {
            swaggerDefinition: {
                openapi: "3.0.0",
                info: {
                    title: "API NodeJS/Swagger.",
                    version: "1.0.0",
                    description: "API NodeJS documentada com Swagger."
                },
                servers: [{
                    url: `http://localhost:${port}`,
                    description: "Development Server."
                }],
            },
            apis: ["./src/routes/**/*.ts", './src/controllers/**/*.ts'],
        };
    }
}
