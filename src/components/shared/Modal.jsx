import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '../ui/dialog';
import { Button } from '../ui/button';

const Modal = ({ job, onClose }) => {
  return (
    <Dialog open={!!job} onOpenChange={onClose} >
      <DialogContent
        className="scrollbar-hide bg-white shadow-3xl rounded-2xl max-h-[90vh] w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[90vw] xl:w-4/5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 overflow-y-auto shadow-inner-white z-200"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {job && (
          <>
            {/* Close Button */}
            <DialogClose asChild>
              <button
                className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 transition"
                onClick={onClose}
                aria-label="Close"
              >
              </button>
            </DialogClose>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {job.job_title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-neutral-600">
                    {job.employer_name} | {job.job_location} | {job.job_employment_type}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 text-sm text-neutral-700 pt-4 mb-3">
                  <div>
                    <h3 className="font-bold text-base text-black mb-1">Job Description</h3>
                    <p className="whitespace-pre-line">
                      {job.job_description || 'No description available.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Qualifications</h3>
                    <p className="whitespace-pre-line">
                      {job.job_highlights?.Qualifications?.join('\n') || 'Not specified.'}
                    </p>
                  </div>
                </div>

                <DialogFooter className="flex justify-end sticky bottom-0 right-0 left-0 bg-white p-4 border-t border-neutral-200 z-10">
                  <Button asChild variant="outline">
                    <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
