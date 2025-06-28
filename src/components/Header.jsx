import { Bell, Search, User, Menu, MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthContext } from '../context/AuthContext';

export const Header = () => {
  const { logoutUser, user, isOpen, setIsOpen } = useAuthContext()
  return (
    <header className="bg-white border-b border-slate-200 z-100 fixed top-0 left-0 right-0 px-4 sm:px-6 py-4 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className={`${isOpen ? 'hidden' : 'block md:hidden'} mr-4 cursor-pointer transition-all duration-100 hover:bg-[rgb(240,240,240)]`}>
            <MenuIcon onClick={() => setIsOpen(true)} className='w-6 h-6' />
          </div>
          <div className="size-5">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-black">
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
