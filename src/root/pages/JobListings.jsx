import React, { useEffect, useRef, useState } from 'react';
import { useJobContext } from '../../context/JobContext';
import Modal from '../../components/shared/Modal';
import { ArrowRight, X } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

const JobListings = () => {
  const { getJobData, jobData, isLoading, page, setPage, filters, setFilters, query, setQuery } = useJobContext();
  const jobQuery = useRef();
  const countryQuery = useRef();
  const [location, setLocation] = useState(filters.location || "");
  const [employmentType, setEmploymentType] = useState(filters.employmentType || "");
  const [selectedJob, setSelectedJob] = useState(null);
  const [datePosted, setDatePosted] = useState(filters.date_posted || "all");
  const [jobInput, setJobInput] = useState('')
  const [countryInput, setCountryInput] = useState('')

  useEffect(() => {
    if (jobQuery.current) jobQuery.current.value = query;
    if (countryQuery.current) countryQuery.current.value = filters.country;
  }, [query, filters]);

  useEffect(() => {
    if (query) {
      const updatedFilters = { ...filters, location, employmentType, date_posted: datePosted };
      setFilters(updatedFilters);
      getJobData(query, 1, updatedFilters);
    }
  }, [location, employmentType, datePosted]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    setFilters(prev => ({ ...prev, location: e.target.value }));
  };

  const handleTypeChange = (e) => {
    setEmploymentType(e.target.value);
    setFilters(prev => ({ ...prev, employmentType: e.target.value }));
  };

  const handleDateChange = (e) => {
    setDatePosted(e.target.value);
    setFilters(prev => ({ ...prev, datePosted: e.target.value }));
  };

  const handleSearch = () => {
    const q = jobQuery.current.value.trim();
    const c = countryQuery.current.value.trim();

    if (q.length === 0 || c.length === 0) return;

    if (q.length > 0) {
      setQuery(q);
      const updatedFilters = { location, employmentType, country: c };
      setFilters(updatedFilters);
      getJobData(q, 1, updatedFilters);
    }
  };

  const handleNext = () => {
    const updatedPage = page + 1;
    setPage(updatedPage);
    getJobData(query, updatedPage, filters);
  };

  const handlePrev = () => {
    if (page > 1) {
      const updatedPage = page - 1;
      setPage(updatedPage);
      getJobData(query, updatedPage, filters);
    }
  };

  const handleResetSearch = () => {
    const isJobQueryFilled = jobQuery.current?.value.trim().length > 0;
    const isCountryQueryFilled = countryQuery.current?.value.trim().length > 0;

    if (!isJobQueryFilled && !isCountryQueryFilled) return;

    localStorage.removeItem('jobListings');
    setJobInput('');
    setCountryInput('');
    setLocation('');
    setEmploymentType('');
    setDatePosted('all');
    setQuery('');
    setFilters({
      location: '',
      employmentType: '',
      country: '',
      date_posted: 'all'
    });
    setPage(1);
    getJobData('', 1, {
      location: '',
      employmentType: '',
      country: '',
      date_posted: 'all'
    });
  }

  return (
    <div className="px-4 flex flex-1 justify-center pt-22">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">Job Listings</p>
            <p className="text-neutral-500 text-sm md:text-lg font-normal leading-normal">Explore opportunities that match your skills and experience.</p>
          </div>
        </div>
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full mb-3">
            <div className="flex w-full flex-1 items-center justify-between rounded-lg h-full bg-[rgb(248,248,248)]">
              <input
                placeholder="Search by keywords"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#141414] focus:outline-0 focus:ring-0 border-none focus:border-none h-full placeholder:text-neutral-500 px-4 rounded-l-none pl-4 border-l-0 text-base font-normal leading-normal"
                ref={jobQuery}
                value={jobInput}
                onChange={(e) => setJobInput(e.target.value)}
              />
              <X className={` ${jobInput.length === 0 ? 'hidden' : 'block'} items-center h-8 w-8 pr-4 cursor-pointer`} onClick={() => setJobInput('')} />
            </div>
          </label>
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-center justify-between rounded-lg h-full bg-[rgb(248,248,248)]">
              <input
                placeholder="Enter country (e.g. us, pk, in)"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#141414] focus:outline-0 focus:ring-0 border-none focus:border-none h-full placeholder:text-neutral-500 px-4 rounded-l-none border-l-0 pl-4 text-base font-normal leading-normal"
                ref={countryQuery}
                value={countryInput}
                onChange={(e) => setCountryInput(e.target.value)}
              />
              <X className={`${countryInput.length === 0 ? 'hidden' : 'block'} items-center h-8 w-8 pr-4 cursor-pointer`} onClick={() => setCountryInput('')} />
            </div>
          </label>
          <div className="flex gap-3 pt-4 justify-between">
            <div className='flex gap-4'>
              <select value={location} onChange={handleLocationChange} className="px-3 py-2 rounded bg-[rgb(248,248,248)] text-sm">
                <option value="">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
              </select>
              <select value={employmentType} onChange={handleTypeChange} className="px-3 py-2 rounded bg-[rgb(248,248,248)] text-sm">
                <option value="">All Types</option>
                <option value="FULLTIME">Full-Time</option>
                <option value="PARTTIME">Part-Time</option>
                <option value="INTERN">Intern</option>
              </select>
              <select value={datePosted} onChange={handleDateChange} className="px-3 py-2 rounded bg-[rgb(248,248,248)] text-sm">
                <option value="all">Any time</option>
                <option value="past_24hr">Past 24 Hours</option>
                <option value="past_week">Past Week</option>
                <option value="past_month">Past Month</option>
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="bg-[#141414] text-white px-10 py-2 text-sm rounded-md hover:bg-[#2a2a2a] transition cursor-pointer"
            >
              Search
            </button>
          </div>
          <div className='w-full flex justify-end items-center mt-4'>
            <button
              onClick={handleResetSearch}
              className="text-sm px-5 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center py-8">
            <div className="border-4 border-neutral-300 border-t-[#141414] rounded-full w-10 h-10 animate-spin" />
          </div>
        ) : jobData.length > 0 ? (
          jobData.map((job) => (
            <div className="p-4 max-w-4xl" key={job.job_id}>
              <div className="flex items-stretch justify-between gap-4 rounded-lg bg-neutral-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-neutral-500 text-sm font-normal leading-normal">{job.job_publisher} &#x2022; {job.job_posted_at || "Not specified"}</p>
                    <p className="text-[#141414] text-base font-bold leading-tight">{job.job_title}</p>
                    <p className="text-neutral-500 text-sm font-normal leading-normal">{job.employer_name} | {job.job_location} | {job.job_employment_type}</p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#ededed] text-[#141414] text-sm font-medium leading-normal w-fit"
                  >
                    <span className="truncate">View Details</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                  style={{ backgroundImage: `url(${job.employer_logo})` }}
                ></div>
              </div>
            </div>
          ))
        ) : (
          <div className='w-full flex justify-center items-center'>
            <p className="px-4 text-neutral-500">No job listings to show.</p>
          </div>
        )}

        <div className="flex bg-white rounded-lg px-4 py-2 items-center justify-center p-4 gap-3 bottom-4 right-4 fixed">
          <button onClick={handlePrev} disabled={page === 1} className="text-sm h-10 w-10 flex justify-center items-center bg-[rgb(248,248,248)] rounded-full cursor-pointer duration-100 transition-all hover:bg-[rgb(244,244,244)]"><ArrowLeft /></button>
          <span className="text-sm font-medium">{page}</span>
          <button onClick={handleNext} className="text-sm h-10 w-10 flex justify-center items-center cursor-pointer bg-[rgb(248,248,248)] duration-100 transition-all hover:bg-[rgb(244,244,244)] rounded-full"><ArrowRight /></button>
        </div>
        <Modal job={selectedJob} onClose={() => setSelectedJob(null)} />
      </div>
    </div>
  );
};

export default JobListings;