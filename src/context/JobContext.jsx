import { useContext, useState, createContext } from "react";
import axios from 'axios';
import { useEffect } from "react";

const jobContext = createContext();

export const useJobContext = () => useContext(jobContext);

export const JobProvider = ({ children }) => {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [filters, setFilters] = useState({
    location: '',
    employmentType: '',
    country: '',
    datePosted: 'all'
  });
  const [selectedJob, setSelectedJob] = useState(null);

  // Load from localStorage on first mount
  useEffect(() => {
    const savedData = localStorage.getItem('jobListings');
    if (savedData) {
      const { query, filters, jobData, page } = JSON.parse(savedData);
      setQuery(query);
      setFilters(filters);
      setJobData(jobData);
      setPage(page);
    }
  }, []);

  async function getJobData(jobQuery, pageNum = 1, filterOverrides = {}) {
    setIsLoading(true);

    const mergedFilters = {
      ...filters,
      ...filterOverrides
    };

    const { location, employmentType, country, datePosted } = mergedFilters;

    const params = {
      query: jobQuery,
      page: pageNum,
      num_pages: '1',
      country: country,
      date_posted: datePosted || 'all'
    };

    if (location) params.location = location;
    if (employmentType) params.employment_types = employmentType;

    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params,
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_JOB_TRACKER_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_JOB_TRACKER_HOST
      }
    };

    try {
      const response = await axios.request(options);
      const jobs = response?.data?.data || [];

      const validJobs = Array.isArray(jobs) ? jobs : [];

      // Update states
      setJobData(validJobs);
      setQuery(jobQuery);
      setPage(pageNum);
      setFilters(mergedFilters);

      // Save to localStorage here
      localStorage.setItem(
        'jobListings',
        JSON.stringify({
          query: jobQuery,
          filters: mergedFilters,
          jobData: validJobs,
          page: pageNum
        })
      );
    } catch (error) {
      console.error("Error fetching job data:", error);
      setJobData([]);
    } finally {
      setIsLoading(false);
    }
  }

  const values = {
    jobData,
    setJobData,
    getJobData,
    isLoading,
    page,
    setPage,
    filters,
    setFilters,
    selectedJob,
    setSelectedJob,
    query,
    setQuery
  };

  return (
    <jobContext.Provider value={values}>
      {children}
    </jobContext.Provider>
  );
};