import { ID, OAuthProvider, Query } from 'appwrite'
import { account, appwriteConfig, avatars, databases } from './config'

export async function signUpAccount(user) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    )

    if (!newAccount) {
      throw Error;
    }
    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDb({
      name: newAccount.name,
      accountId: newAccount.$id,
      email: newAccount.email,
      imageUrl: avatarUrl,
    })

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function signUpWithGoogle() {
  try {
    account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:5173/google-callback",
      "http://localhost:5173/sign-in"
    )
  } catch (error) {
    console.log(error);
  }
}

export async function saveUserToDb(user) {
  try {
    const existing = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", user.accountId)]
    );

    if (existing.documents.length > 0) {
      console.log("User already exists in DB — skipping another save");
      return existing.documents[0];
    }

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      user,
    )

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function signInAccount(user) {
  try {
    const loginAccount = await account.createEmailPasswordSession(
      user.email,
      user.password
    )

    if (!loginAccount) {
      throw Error
    }

    return loginAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccount() {
  try {
    const acc = await account.get()

    return acc;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    )

    if (!currentUser.documents.length) return null;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signOutAccount() {
  try {
    const logout = account.deleteSession("current")

    return logout;
  } catch (error) {
    console.log(error);
  }
}