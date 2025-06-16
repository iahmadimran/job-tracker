import { ID } from 'appwrite'
import { account } from './config'

export async function signUpAccount(user) {
  try {
    const createAcc =  await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    )

    if (!createAcc) {
      throw Error;
    }

    return createAcc;
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
    const acc = account.get()

    return acc;
  } catch (error) {
    console.log(error);
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