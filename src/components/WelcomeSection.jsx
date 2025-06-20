import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Briefcase, Mail, Sparkles, TrendingUp, Zap, Calendar } from 'lucide-react';

export const WelcomeSection = () => {
  const stats = [
    { label: 'Applications Tracked', value: '24', icon: Briefcase },
    { label: 'Response Rate', value: '18%', icon: TrendingUp },
    { label: 'Interviews Scheduled', value: '6', icon: Calendar },
    { label: 'AI Insights Generated', value: '42', icon: Sparkles },
  ];

  const features = [
    {
      title: 'Smart Job Tracking',
      description: 'Kanban-style board to track applications from applied to offer',
      icon: Briefcase,
    },
    {
      title: 'Gmail Integration',
      description: 'Automatically sync job-related emails and update statuses',
      icon: Mail,
    },
    {
      title: 'AI-Powered Analysis',
      description: 'Get insights on job descriptions, resume matching, and cover letters',
      icon: Sparkles,
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track your progress with detailed charts and metrics',
      icon: BarChart3,
    },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
      {/* Welcome Header */}
      <div className="text-center py-4 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
          Welcome to JobTracker AI
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
          Your intelligent companion for managing job applications, powered by AI insights and automation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto">
            <Briefcase className="mr-2 h-4 w-4" />
            Start Tracking Jobs
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Sparkles className="mr-2 h-4 w-4" />
            Try AI Tools
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-600 truncate">{stat.label}</p>
                    <p className="text-xl sm:text-2xl font-bold text-slate-800">{stat.value}</p>
                  </div>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0 ml-2" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 text-sm sm:text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Get started with these common tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <Button variant="outline" className="h-auto p-3 sm:p-4 flex flex-col items-center space-y-2">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm">Add New Job</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 sm:p-4 flex flex-col items-center space-y-2">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm">Connect Gmail</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 sm:p-4 flex flex-col items-center space-y-2">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm">Generate Cover Letter</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
