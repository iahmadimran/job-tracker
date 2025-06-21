import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { JobBoard } from '@/components/JobBoard';
import { Header } from '@/components/Header';
import { WelcomeSection } from '@/components/WelcomeSection';

const Home = () => {
  // const [currentView, setCurrentView] = useState('dashboard');
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const renderContent = () => {
  //   switch (currentView) {
  //     case 'jobs':
  //       return <JobBoard />;
  //     case 'analytics':
  //       return <div classNameNameName="p-4 sm:p-6">Analytics Dashboard (Coming Soon)</div>;
  //     case 'ai-tools':
  //       return <div classNameNameName="p-4 sm:p-6">AI Tools (Coming Soon)</div>;
  //     case 'settings':
  //       return <div classNameName="p-4 sm:p-6">Settings (Coming Soon)</div>;
  //     default:
  //       return <WelcomeSection />;
  //   }
  // };

  return (
    // <div classNameName="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    //   <Sidebar
    //     currentView={currentView}
    //     onViewChange={setCurrentView}
    //     isOpen={sidebarOpen}
    //     onToggle={() => setSidebarOpen(!sidebarOpen)}
    //   />
    //   <div classNameName="flex-1 flex flex-col overflow-hidden min-w-0">
    //     <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
    //     <main classNameName="flex-1 overflow-y-auto">
    //       {renderContent()}
    //     </main>
    //   </div>
    // </div>

    <div className="relative flex size-full min-h-screen h-screen w-screen flex-col bg-neutral-50 group/design-root" style={{fontFamily: "Manrope", "Noto Sans": "sans-serif"}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-neutral-50 p-4">
              <div className="flex flex-col gap-4 hidden lg:block">
                <div className="flex gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAEr2nKTx8xlgP62lXe4wHCG5hndkcF5_yruBsLOm_Sbb1O2nwsh6qYNKkmOoE9BeL2s-lKd-gEJXv17Bh-ejhcryYsMgD4AEBu-p6UlGMEhL913jyGDzptaD3Tpv3zxky1IQymt2KNYPbJNu3Thqf3DYjY8lXCNAJjycCv7f0So7wMF04TVED0HCTOvAgk8p-O015XB8pogmGDZto2-QWg_C8qIPPQMUf8zj8YsmGswI-Oy7K_SIyzUt0bdwu5zZ2qmlFWOr5xGQ")'}}
                  ></div>
                  <div className="flex flex-col">
                    <h1 className="text-[#141414] text-base font-medium leading-normal">Sophia</h1>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">Product Designer</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#ededed]">
                    <div className="text-[#141414]" data-icon="House" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">Dashboard</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#141414]" data-icon="Briefcase" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">Applications</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#141414]" data-icon="File" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#141414] text-sm font-medium leading-normal">Resumes</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col w-screen h-screen max-h-screen lg:max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">Dashboard</p></div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#ededed]">
                <p className="text-[#141414] text-base font-medium leading-normal">Applications Submitted</p>
                <p className="text-[#141414] tracking-light text-2xl font-bold leading-tight">15</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#ededed]">
                <p className="text-[#141414] text-base font-medium leading-normal">Interviews Scheduled</p>
                <p className="text-[#141414] tracking-light text-2xl font-bold leading-tight">3</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#ededed]">
                <p className="text-[#141414] text-base font-medium leading-normal">Resume Score</p>
                <p className="text-[#141414] tracking-light text-2xl font-bold leading-tight">85%</p>
              </div>
            </div>
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Application Overview</h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#dbdbdb] p-6">
                <p className="text-[#141414] text-base font-medium leading-normal">Applications by Status</p>
                <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight truncate">15</p>
                <div className="flex gap-1">
                  <p className="text-neutral-500 text-base font-normal leading-normal">Total</p>
                  <p className="text-[#078807] text-base font-medium leading-normal">+20%</p>
                </div>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{height: '30%',}}></div>
                  <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Applied</p>
                  <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{height: "80%",}}></div>
                  <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Interviewing</p>
                  <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{height: "90%",}}></div>
                  <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Offered</p>
                  <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{height: "30%",}}></div>
                  <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Rejected</p>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#dbdbdb] p-6">
                <p className="text-[#141414] text-base font-medium leading-normal">Application Trends</p>
                <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight truncate">15</p>
                <div className="flex gap-1">
                  <p className="text-neutral-500 text-base font-normal leading-normal">Last 6 Months</p>
                  <p className="text-[#078807] text-base font-medium leading-normal">+15%</p>
                </div>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#737373"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ededed"></stop>
                        <stop offset="1" stopColor="#ededed" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Jan</p>
                    <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Feb</p>
                    <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Mar</p>
                    <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Apr</p>
                    <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">May</p>
                    <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Jun</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Resume Feedback</h2>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg bg-neutral-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#141414] text-base font-bold leading-tight">Resume Improvement Suggestions</p>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">
                      Your resume is well-structured but could benefit from stronger action verbs and quantified achievements. Consider adding specific metrics to showcase your
                      impact in previous roles.
                    </p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#ededed] text-[#141414] pr-2 gap-1 text-sm font-medium leading-normal w-fit"
                  >
                    <div className="text-[#141414]" data-icon="ArrowRight" data-size="18px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                        ></path>
                      </svg>
                    </div>
                    <span className="truncate">View Details</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoxU0trpxi1AVjmf__W_9kuq1h2GmXH3KUPfDm7AryJLoTqAvs9XYbGhO-NalqsMg-OgVfvRf3n4LgR4BMQzDkCuhw_OV6T3P-NsJkq40LiuemYip-6ihGk558opAfyVqh_QQctzyc5umhBbjnkaUj2S2bIjcAu03uL4uy540IZ6e_uGfZHdWNUv8nXUtxT0aJwZo44dJs6h77PQt6iAPB58b6T1ISxqreGVNsHNJumcrrZVxbPlbVTsAUcti3rhF9c1UliJePVxg")'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
