import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, AlertCircle, Star, TrendingUp, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useFileUpload } from '../../hooks/useFileUpload';
import { Toaster } from 'sonner';

const Resumes = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const { handleUpload, isUploading, uploadedFileId, resetUpload: resetFileUpload } = useFileUpload();

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      
      try {
        // Upload to Appwrite storage
        await handleUpload(file);
        
        // Start analysis after successful upload
        setIsAnalyzing(true);
        
        // Simulate analysis
        setTimeout(() => {
          setIsAnalyzing(false);
          setFeedback({
            overallScore: 78,
            strengths: [
              "Strong technical skills section",
              "Clear work experience progression",
              "Relevant education background",
              "Professional email address"
            ],
            improvements: [
              "Add quantifiable achievements with specific metrics",
              "Include more industry-relevant keywords",
              "Optimize formatting for ATS compatibility",
              "Add a professional summary section"
            ],
            atsScore: 65,
            keywordMatches: 12,
            recommendations: [
              "Use bullet points to highlight key accomplishments",
              "Include specific numbers and percentages in achievements",
              "Tailor keywords to match job descriptions",
              "Ensure consistent formatting throughout"
            ]
          });
        }, 3000);
      } catch (error) {
        console.error('Upload failed:', error);
        setUploadedFile(null);
      }
    }
  }, [handleUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    disabled: isUploading
  });

  const resetUpload = () => {
    setUploadedFile(null);
    setFeedback(null);
    setIsAnalyzing(false);
    resetFileUpload();
  };


  return (
    <div className="min-h-screen pt-26 w-full bg-white text-black">
      <Toaster />
      
      {/* Hero Section */}
      <div className="flex justify-start items-start relative overflow-hidden">
        <div className="" />
        <div className="relative max-w-7xl sm:px-6">
          <div className="animate-fade-in pl-2">
            <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">
              Resume Feedback
            </h1>
            <p className="text-neutral-500 mt-2 text-sm md:text-lg font-normal leading-normal">
              Get instant AI-powered feedback to optimize your resume and land your dream job
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {!uploadedFile && !feedback && (
          <Card className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all duration-300 animate-fade-in">
            <CardContent className="p-12">
              <div
                {...getRootProps()}
                className={`text-center cursor-pointer transition-all duration-300 ${
                  isDragActive ? 'scale-105' : 'hover:scale-102'
                } ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <input {...getInputProps()} />
                <div className="mb-6">
                  <Upload className={`mx-auto h-16 w-16 transition-all duration-300 ${
                    isDragActive ? 'text-black scale-110' : 'text-gray-400'
                  }`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  {isUploading ? 'Uploading...' : isDragActive ? 'Drop your resume here' : 'Upload your resume'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {isUploading ? 'Please wait while we upload your file' : 'Drag and drop your resume file, or click to browse'}
                </p>
                <p className="text-sm text-gray-500">
                  Supports PDF, DOC, and DOCX files
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {uploadedFile && (isUploading || isAnalyzing) && (
          <div className="text-center animate-fade-in">
            <Card className="border shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <FileText className="h-12 w-12 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{uploadedFile.name}</h3>
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
                  <p className="text-gray-600">
                    {isUploading ? 'Uploading to storage...' : 'Analyzing your resume...'}
                  </p>
                  {uploadedFileId && (
                    <p className="text-sm text-green-600 mt-2">
                      ✓ File uploaded successfully (ID: {uploadedFileId.slice(0, 8)}...)
                    </p>
                  )}
                </div>
                <Button variant="outline" onClick={resetUpload} disabled={isUploading}>
                  Cancel
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {feedback && (
          <div className="space-y-6 animate-fade-in">
            {/* Display file info */}
            {uploadedFileId && (
              <Card className="border shadow-lg bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Resume stored successfully</span>
                    <span className="text-sm text-green-600">
                      (File ID: {uploadedFileId.slice(0, 12)}...)
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Overall Score */}
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Overall Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold">{feedback.overallScore}/100</div>
                  <div className="flex-1">
                    <Progress value={feedback.overallScore} className="h-3" />
                  </div>
                </div>
                <p className="text-gray-600">
                  {feedback.overallScore >= 80 ? 'Excellent resume!' : 
                   feedback.overallScore >= 60 ? 'Good foundation with room for improvement' : 
                   'Needs significant improvements'}
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold">{feedback.atsScore}%</div>
                  <p className="text-sm text-gray-600">ATS Compatible</p>
                </CardContent>
              </Card>
              <Card className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{feedback.keywordMatches}</div>
                  <p className="text-sm text-gray-600">Keywords Found</p>
                </CardContent>
              </Card>
              <Card className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-2xl font-bold">4.2/5</div>
                  <p className="text-sm text-gray-600">Readability Score</p>
                </CardContent>
              </Card>
            </div>

            {/* Strengths */}
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feedback.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Areas for Improvement */}
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <AlertCircle className="h-5 w-5" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feedback.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feedback.recommendations.map((rec, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <Badge variant="outline" className="mb-2">Tip {index + 1}</Badge>
                      <p className="text-sm">{rec}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button onClick={resetUpload} variant="outline">
                Upload New Resume
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                Download Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resumes
