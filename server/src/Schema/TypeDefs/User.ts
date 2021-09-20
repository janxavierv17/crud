import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
export const UserType = new GraphQLObjectType({
  name: "User",
  // Columns
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
