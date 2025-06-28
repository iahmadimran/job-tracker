import { Link, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import featureImage from '../../assets/feature section image 4.jpg'
import classNames from 'classnames'
// import { CheckIcon } from '@heroicons/react/20/solid'

export default function HomeIntro() {
  const { isAuthenticated, isLoading, user } = useAuthContext()
  const tiers = [
    {
      name: 'Hobby',
      id: 'tier-hobby',
      href: '#',
      priceMonthly: '$29',
      description: "The perfect plan if you're just getting started with our product.",
      features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
      featured: false,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      priceMonthly: '$99',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        'Dedicated support representative',
        'Marketing automations',
        'Custom integrations',
      ],
      featured: true,
    },
  ]

  if (isLoading) return <div className="w-screen h-screen flex justify-center items-center">
    <div className="border-4 border-neutral-300 border-t-[#141414] rounded-full w-10 h-10 animate-spin" />
  </div>

  if (isAuthenticated) return <Navigate to={`/dashboard/${user.id}`} />;

  return (
    <div
      className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}
    >
      <header className="flex z-80 items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] fixed top-0 right-0 left-0 bg-white px-10 py-3">
        <div className="flex items-center gap-4 text-[#141414]">
          <div className="size-5">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
          </div>
          <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">JobTracker AI</h2>
        </div>
        <div className="flex items-center gap-2">
          <a className="text-[rgb(20,20,20)] bg-white rounded-lg px-4 py-2.5 transition-all duration-100 hover:bg-[rgb(244,244,244)] text-md font-medium leading-normal" href="#home">Home</a>
          <a className="text-[rgb(20,20,20)] bg-white rounded-lg px-4 py-2.5 transition-all duration-100 hover:bg-[rgb(244,244,244)] text-md font-medium leading-normal" href="#features">Features</a>
          <a className="text-[rgb(20,20,20)] bg-white rounded-lg px-4 py-2.5 transition-all duration-100 hover:bg-[rgb(244,244,244)] text-md font-medium leading-normal" href="#pricing">Pricing</a>
          <a className="text-[rgb(20,20,20)] bg-white rounded-lg px-4 py-2.5 transition-all duration-100 hover:bg-[rgb(244,244,244)] text-md font-medium leading-normal" href="#contact">Contact</a>
        </div>
      </header>

      <section id='home'>
        <div className="container mb-6 mt-14"> {/* Changed @container to container */}
          <div className="px-8 md:px-14 w-screen flex justify-between gap-14 flex-wrap md:flex-nowrap"> {/* Changed @[480px]:p-4 to p-4 */}
            <div className='flex flex-col gap-5 pt-22 flex-1/2'>
              <div className="flex flex-col gap-2 text-start">
                <h1
                  className="text-black text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]"
                >
                  Track Your Job Search with Ease
                </h1>
                <h2 className="text-black text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal">
                  JobTracker AI helps you manage your job applications, track progress, and get resume improvement recommendations. Sign up today to take control of your career
                  journey.
                </h2>
              </div>
              <div className="gap-3 flex justify-start items-start">
                <Link to='/sign-up'>
                  <button
                    className="bg-black text-white px-6 py-2.5 text-[15px] rounded-lg font-bold cursor-pointer"
                  >
                    <span className="truncate">Sign Up</span>
                  </button>
                </Link>
                <Link to='/sign-in'>
                  <button
                    className="bg-[rgb(237,237,237)] text-[rgb(20,20,20)] px-6 py-2.5 text-[15px] rounded-lg font-bold cursor-pointer"
                  >
                    <span className="truncate">Sign In</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className='flex-1/2 pt-8'>
              <img src='https://lh3.googleusercontent.com/aida-public/AB6AXuCj4OgN5697HAsnNRXZXC8DzSxhDIiiq4wyeyeCN96Yifl5QaDNGC7eBhm4Jn_UJ2mfrx9V3dhGVMWNEhf8YExri6KgItXCtrpbJ0mQLKm6pLfXZq-erTeQM7-jMKokE26jW-e-i1sp1DCz3kSx7dJAI6pZpG6029A6iCtju9__QY3fYOEsMHx4x0JWbrvX7mJWLC8O77yxnLCzrtku-Uql5QEdDY6iQDA0-XXGbglTgT9dpWpBc_IKyj_A15RwTx4CkRu6Az_6wLE' className='h-100 w-110 md:w-120 md:h-120 rounded-lg' />
            </div>
          </div>
        </div>
      </section>

      <section id='features'>
        <div className='w-screen mt-24 flex justify-between flex-wrap-reverse md:flex-nowrap px-8 md:px-14 gap-14'>
          <div className='flex-1/2'>
            <img src={featureImage} className='h-100 w-100 md:w-120 md:h-120' />
          </div>
          <div className='flex-1/2 flex justify-start flex-col gap-4 pt-10'>
            <h1 className='text-black text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em'>
              Features
            </h1>

            <p className='text-black text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal'>
              JobTracker AI is a powerful web application designed to streamline and enhance your job search process. With this app, you can effortlessly track your job applications by recording where you've applied, monitoring responses such as callbacks or rejections, and keeping your entire job hunt organized in one place.
            </p>

            <p className='text-black text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal'>
              It also features an integrated job listing section to help you discover new opportunities directly within the platform. Additionally, JobTracker AI allows you to upload your resume and receive personalized, AI-driven feedback to improve your chances of landing interviews—making it a comprehensive solution for job seekers aiming to stay focused, informed, and ahead in the competitive market.
            </p>
          </div>
        </div>
      </section>

      <section id='pricing'>
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div aria-hidden="true" className="absolute inset-x-0 transform-gpu overflow-hidden px-36 blur-3xl">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-black">Pricing</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-indigo-600 sm:text-6xl">
              Choose the right plan for you
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
            loyalty, and driving sales.
          </p>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-2xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                  tier.featured
                    ? ''
                    : tierIdx === 0
                      ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                      : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                  'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-gray-900',
                      'text-5xl font-semibold tracking-tight',
                    )}
                  >
                    {tier.priceMonthly}
                  </span>
                  <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
                </p>
                <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                    'mt-8 space-y-3 text-sm/6 sm:mt-10',
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      {/* <CheckIcon
                        aria-hidden="true"
                        className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                      /> */}
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                      : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                  )}
                >
                  Get started today
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 ml-2">
              <a href="https://flowbite.com/" className="flex items-center">
                <div className="flex items-center gap-4 text-[#141414]">
                  <div className="size-5">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
                  </div>
                  <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">JobTracker AI</h2>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}