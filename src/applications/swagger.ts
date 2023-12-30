import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express, Request, Response } from "express";

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "BrandBiz Rest API",
        version: "1.0.0",
        description: "Rest Api for Brandbiz website",
        contact: {
          author: "Bayu Dwi Satriyo",
          email: "bayudsatriyo@gmail.com",
          github: "github.com/bayudsatriyo"
        },
      },
      servers: [
        {
          url: "http://localhost:8080",
          description: 'Development server'
        },
      ],
    },
    apis: ["./src/routes/*ts", "./src/validations/*ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
    // Swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
    // Docs in JSON format
    app.get("/docs.json", (_req: Request, res: Response) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
  
    console.info(`Docs available at http://localhost:8080`);
  }
  
export default swaggerDocs;
  