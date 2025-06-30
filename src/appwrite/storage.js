import { ID, OAuthProvider, Query } from 'appwrite'
import { appwriteConfig, storage } from './config'

export const uploadFile = async (file) => {
  try {
    const response = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );
    return response;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const getFilePreview = (fileId) => {
  return storage.getFilePreview(appwriteConfig.storageId, fileId);
};

export const deleteFile = async (fileId) => {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId);
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};