import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
interface IUsers {
  name: string;
  username: string;
  password: string;
}
export const GET_ALL_USERS = {
  // Returning a list of users.
  type: new GraphQLList(UserType),
  resolve(): Promise<IUsers[]> {
    return Users.find();
  },
};
