import { Account, Client, Databases } from "appwrite";
import config from "./config";

const client = new Client();

client
	.setEndpoint(config.appwriteUrl) // API Endpoint
	.setProject(config.appwriteProjectId); // Project ID

const account = new Account(client);
const databases = new Databases(client);
export { account, databases };
