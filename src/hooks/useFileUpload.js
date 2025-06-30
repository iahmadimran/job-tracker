import { useState } from 'react';
// import { useToast } from '@/hooks/use-toast';
import { uploadFile } from '../appwrite/storage';
import { toast } from 'sonner';

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileId, setUploadedFileId] = useState(null);

  const handleUpload = async (file) => {
    setIsUploading(true);
    try {
      const response = await uploadFile(file);
      setUploadedFileId(response.$id);
      toast("Resume uploaded successfully!");
      return response;
    } catch (error) {
      toast("Failed to upload resume. Please try again.");
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const resetUpload = () => {
    setUploadedFileId(null);
  };

  return {
    handleUpload,
    isUploading,
    uploadedFileId,
    resetUpload,
  };
};