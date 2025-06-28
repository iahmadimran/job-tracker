import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthContext } from '../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const { isOpen, setIsOpen, user } = useAuthContext()

  return (
    <>

      {/* Sidebar */}
      <div className='py-10 w-max'>
        <div className={`layout-content-container flex flex-col w-80 fixed left-0 z-40 h-full transform bg-white px-2 pr-0 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:relative md:block md:w-80`}>
          <div className="flex h-full min-h-[700px] flex-col pt-0 pr-3 justify-between bg-white ">
            <div className="relative flex flex-col pt-16 gap-4">
              <div className="flex gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                >
                  <img className='w-10 h-10 object-cover rounded-full' src={user.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuCAEr2nKTx8xlgP62lXe4wHCG5hndkcF5_yruBsLOm_Sbb1O2nwsh6qYNKkmOoE9BeL2s-lKd-gEJXv17Bh-ejhcryYsMgD4AEBu-p6UlGMEhL913jyGDzptaD3Tpv3zxky1IQymt2KNYPbJNu3Thqf3DYjY8lXCNAJjycCv7f0So7wMF04TVED0HCTOvAgk8p-O015XB8pogmGDZto2-QWg_C8qIPPQMUf8zj8YsmGswI-Oy7K_SIyzUt0bdwu5zZ2qmlFWOr5xGQ"} />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[#141414] text-xl font-bold leading-normal">{user.name}</h1>
                  <p className="text-neutral-500 text-sm font-normal leading-normal">Not yet disclosed</p>
                </div>
                <div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 z-50 md:hidden"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <NavLink to={`/dashboard/${user.id}`} className={({ isActive }) => `${isActive ? 'rounded-lg bg-[rgb(248,248,248)]' : 'bg-white'}`}>
                  <div className="flex items-center gap-3 px-4 py-2.5">
                    <div className="text-[#141414]" data-icon="House" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-lg font-bold leading-normal">Dashboard</p>
                  </div>
                </NavLink>
                <NavLink to={`/job-listings/${user.id}`} className={({ isActive }) => `${isActive ? 'rounded-lg bg-[rgb(248,248,248)]' : 'bg-white'}`}>
                  <div className="flex items-center gap-3 px-4 py-2.5">
                    <div className="text-[#141414]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-lg font-bold leading-normal">Job Listings</p>
                  </div>
                </NavLink>
                <NavLink to={`/resume/${user.id}`} className={({ isActive }) => `${isActive ? 'rounded-lg bg-[rgb(248,248,248)]' : 'bg-white'}`}>
                  <div className="flex items-center gap-3 px-4 py-2.5">
                    <div className="text-[#141414]" data-icon="File" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-lg font-bold leading-normal">Resumes</p>
                  </div>
                </NavLink>
                {/* <div className="flex items-center gap-3 px-3 py-2">
                  <div className="text-[#141414]" data-icon="FileText" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#141414] text-sm font-medium leading-normal">Cover Letters</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="text-[#141414]" data-icon="Gear" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[#141414] text-sm font-medium leading-normal">Settings</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
