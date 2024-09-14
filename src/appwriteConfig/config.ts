const config = {
	appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
	appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
	appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
	appwriteCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID),
};

export default config;
