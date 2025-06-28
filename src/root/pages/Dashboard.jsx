const Dashboard = () => {
  return (
    <>
      <div className="layout-content-container flex flex-col px-4 pt-22 sm:px-6 max-w-[960px] -py-8 flex-1">
        <div className="flex flex-wrap justify-between gap-3 mb-3 p-4"><p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">Dashboard</p></div>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[rgb(248,248,248)]">
            <p className="text-[#141414] text-base font-medium leading-normal">Applications Submitted</p>
            <p className="text-[#141414] tracking-light text-2xl font-bold leading-tight">15</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[rgb(248,248,248)]">
            <p className="text-[#141414] text-base font-medium leading-normal">Interviews Scheduled</p>
            <p className="text-[#141414] tracking-light text-2xl font-bold leading-tight">3</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[rgb(248,248,248)]">
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
              <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{ height: "30%" }}></div>
              <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Applied</p>
              <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{ height: "80%" }}></div>
              <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Interviewing</p>
              <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{ height: "90%" }}></div>
              <p className="text-neutral-500 text-[13px] font-bold leading-normal tracking-[0.015em]">Offered</p>
              <div className="border-neutral-500 bg-[#ededed] border-t-2 w-full" style={{ height: "30%" }}></div>
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
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoxU0trpxi1AVjmf__W_9kuq1h2GmXH3KUPfDm7AryJLoTqAvs9XYbGhO-NalqsMg-OgVfvRf3n4LgR4BMQzDkCuhw_OV6T3P-NsJkq40LiuemYip-6ihGk558opAfyVqh_QQctzyc5umhBbjnkaUj2S2bIjcAu03uL4uy540IZ6e_uGfZHdWNUv8nXUtxT0aJwZo44dJs6h77PQt6iAPB58b6T1ISxqreGVNsHNJumcrrZVxbPlbVTsAUcti3rhF9c1UliJePVxg")' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
