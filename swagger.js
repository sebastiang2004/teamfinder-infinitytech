import swaggerAutogen from "swagger-autogen";
const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "https://atc-2024-infinitytech-be-linux-web-app.azurewebsites.net/",
};

const outputFile = "./swagger-output.json";
const routes = ["api/index.js"];

swaggerAutogen(outputFile, routes, doc);
