import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, DollarSign, MapPin } from 'lucide-react';

export const JobBoard = () => {
  const columns = [
    { id: 'applied', title: 'Applied', color: 'bg-blue-100 border-blue-200' },
    { id: 'interview', title: 'Interview', color: 'bg-yellow-100 border-yellow-200' },
    { id: 'offer', title: 'Offer', color: 'bg-green-100 border-green-200' },
    { id: 'rejected', title: 'Rejected', color: 'bg-red-100 border-red-200' },
  ];

  const sampleJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120k - $150k',
      appliedDate: '2024-01-15',
      status: 'applied',
      tags: ['React', 'TypeScript', 'Remote'],
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      salary: '$100k - $130k',
      appliedDate: '2024-01-12',
      status: 'interview',
      tags: ['Node.js', 'React', 'MongoDB'],
    },
    {
      id: 3,
      title: 'AI/ML Engineer',
      company: 'InnovateLabs',
      location: 'Remote',
      salary: '$140k - $180k',
      appliedDate: '2024-01-10',
      status: 'offer',
      tags: ['Python', 'TensorFlow', 'Remote'],
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Job Board</h2>
          <p className="text-slate-600 text-sm sm:text-base">Track your applications with drag-and-drop simplicity</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Job Application
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-3 sm:space-y-4">
            <div className={`p-3 sm:p-4 rounded-lg ${column.color}`}>
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">{column.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {sampleJobs.filter(job => job.status === column.id).length} applications
              </p>
            </div>

            <div className="space-y-3">
              {sampleJobs
                .filter(job => job.status === column.id)
                .map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base sm:text-lg leading-tight">{job.title}</CardTitle>
                      <CardDescription className="font-medium text-sm">{job.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 sm:space-y-3">
                      <div className="flex items-center text-xs sm:text-sm text-slate-600">
                        <MapPin className="mr-1 h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-slate-600">
                        <DollarSign className="mr-1 h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{job.salary}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-slate-600">
                        <Calendar className="mr-1 h-3 w-3 flex-shrink-0" />
                        <span className="truncate">Applied {job.appliedDate}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {job.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
