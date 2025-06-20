import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthContext } from '../context/AuthContext';

export const Header = ({ onMenuClick }) => {
  const { logoutUser, user } = useAuthContext()
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            JobTracker AI
          </h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search applications..."
              className="pl-10 w-48 sm:w-64"
            />
          </div>

          {user.imageUrl !== '' ? (
            <img src={user.imageUrl} className='h-8 w-8 rounded-full' />
          ) : (
            <User className="h-4 w-4" />
          )}

          <Button variant="ghost" onClick={logoutUser} size="sm" className="sm:flex rounded-full h-10 w-10">
            <img src='/src/assets/logout.png' className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </header>
  );
};
