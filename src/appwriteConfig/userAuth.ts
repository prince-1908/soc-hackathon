import { account } from "./appwriteConfig";
import { ID } from "appwrite";

// User Login
export const SignIn = async (email: string, password: string) => {
	const login = await account.createEmailPasswordSession(email, password);
	return login;
};
// User Registration
export const Register = async (email: string, password: string, name: string | "") => {
	const register = await account.create(ID.unique(), email, password, name);
	return register;
};

// get User
export const isLoggedIn = async () => {
	const user = await account.get();
	return user;
};
