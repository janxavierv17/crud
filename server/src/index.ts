import express from "express";
import { graphqlHTTP } from "express-graphql";
import { createConnection } from "typeorm";
import cors from "cors";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";
const main = async () => {
  // Typeorm creates a connection to our mysql database.
  await createConnection({
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "lykalyka17",
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

  app.listen(3001, () => {
    console.log("Server running in port 3001.");
  });
};

main().catch((error) => console.log(error));
