// pages/dashboard.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';

async function fetchData() {
    // Fetch data from an API or database
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();
    return data;
  }
  

const Dashboard = async() => {
    // const data = await fetchData();
    
  return (
    <main className=" grow content pt-5" id="content" role="content">
      {/* begin: container */}
      <div className="container-fixed" id="content_container">
        {/* Content goes here */}
      </div>
      {/* end: container */}
      {/* begin: container */}
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              Central Hub for Personal Customization
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Link href="/html/demo1/public-profile/profiles/default.html" className="btn btn-sm btn-light">
              View Profile
            </Link>
          </div>
        </div>
      </div>
      {/* end: container */}
      {/* begin: container */}
      <div className="container-fixed">
        <div className="grid gap-5 lg:gap-7.5">
          {/* begin: grid */}
          <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-7.5 items-stretch">
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 gap-5 lg:gap-7.5 h-full items-stretch">
                <div className="card flex-col justify-between gap-6 h-full bg-cover bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                  <Image alt="" className="w-7 mt-4 ms-5" src="/assets/media/brand-logos/linkedin-2.svg" width={28} height={28} />
                  <div className="flex flex-col gap-1 pb-4 px-5">
                    <span className="text-3xl font-semibold text-gray-900">9.3k</span>
                    <span className="text-2sm font-medium text-gray-600">Amazing mates</span>
                  </div>
                </div>
                <div className="card flex-col justify-between gap-6 h-full bg-cover bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                  <Image alt="" className="w-7 mt-4 ms-5" src="/assets/media/brand-logos/youtube-2.svg" width={28} height={28} />
                  <div className="flex flex-col gap-1 pb-4 px-5">
                    <span className="text-3xl font-semibold text-gray-900">24k</span>
                    <span className="text-2sm font-medium text-gray-600">Lessons Views</span>
                  </div>
                </div>
                <div className="card flex-col justify-between gap-6 h-full bg-cover bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
                  <Image alt="" className="w-7 mt-4 ms-5" src="/assets/media/brand-logos/instagram-03.svg" width={28} height={28} />
                  <div className="flex flex-col gap-1 pb-4 px-5">
                    <span className="text-3xl font-semibold text-gray-900">608</span>
                    <span className="text-2sm font-medium text-gray-600">New subscribers</span>
                  </div>
                </div>
                <div className="card flex-col justify-between gap-6 h-full bg-cover bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
        
                  <Image alt="" className=" w-7 mt-4 ms-5" src="/assets/media/brand-logos/tiktok-dark.svg" width={28} height={28} />
                  <div className="flex flex-col gap-1 pb-4 px-5">
                    <span className="text-3xl font-semibold text-gray-900">2.5k</span>
                    <span className="text-2sm font-medium text-gray-600">Stream audience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="card h-full">
                <div className="card-body p-10 bg-[length:80%] [background-position:175%_25%] bg-no-repeat entry-callout-bg">
                  <div className="flex flex-col justify-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="flex">
                        <Image className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-10" src="/assets/media/avatars/300-4.png" width={40} height={40} alt="" />
                      </div>
                      <div className="flex">
                        <Image className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-10" src="/assets/media/avatars/300-1.png" width={40} height={40} alt="" />
                      </div>
                      <div className="flex">
                        <Image className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-10" src="/assets/media/avatars/300-2.png" width={40} height={40} alt="" />
                      </div>
                      <div className="flex">
                        <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-10 text-success-inverse text-xs ring-success-light bg-success">
                          S
                        </span>
                      </div>
                    </div>
                    <h2 className="text-1.5xl font-semibold text-gray-900">
                      Connect Today &amp; Join
                      <br />
                      the
                      <Link href="#">
                        <span className="link">KeenThemes Network</span>
                      </Link>
                    </h2>
                    <p className="text-sm font-medium text-gray-700 leading-5.5">
                      Enhance your projects with premium themes and
                      <br />
                      templates. Join the KeenThemes community today
                      <br />
                      for top-quality designs and resources.
                    </p>
                  </div>
                </div>
                <div className="card-footer justify-center">
                  <Link href="/html/demo1/account/home/get-started.html" className="btn btn-link">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end: grid */}
          {/* begin: grid */}
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-7.5 items-stretch">
            <div className="lg:col-span-1">
              <div className="card h-full">
                <div className="card-header">
                  <h3 className="card-title">Highlights</h3>
                  <div className="menu" data-menu="true">
                    <div className="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                      <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                        <i className="ki-filled ki-dots-vertical"></i>
                      </button>
                      <div className="menu-dropdown menu-default w-full max-w-[200px]" data-menu-dismiss="true">
                        <div className="menu-item">
                          <Link href="/html/demo1/account/activity.html" className="menu-link">
                            <span className="menu-icon">
                              <i className="ki-filled ki-cloud-change"></i>
                            </span>
                            <span className="menu-title">Activity</span>
                          </Link>
                        </div>
                        <div className="menu-item">
                          <Link href="#" className="menu-link" data-modal-toggle="#share_profile_modal">
                            <span className="menu-icon">
                              <i className="ki-filled ki-share"></i>
                            </span>
                            <span className="menu-title">Share</span>
                          </Link>
                        </div>
                        <div className="menu-item" data-menu-item-offset="-15px, 0" data-menu-item-placement="right-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                          <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                            <i className="ki-filled ki-more"></i>
                          </button>
                          <div className="menu-dropdown menu-default w-full max-w-[300px]" data-menu-dismiss="true">
                            <div className="menu-item">
                              <Link href="/html/demo1/account/notifications.html" className="menu-link">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-briefcase"></i>
                                </span>
                                <span className="menu-title">New Job Postings</span>
                                <span className="menu-badge bg-warning text-white">3</span>
                              </Link>
                            </div>
                            <div className="menu-item">
                              <Link href="#" className="menu-link">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-star"></i>
                                </span>
                                <span className="menu-title">Special Offers</span>
                                <span className="menu-badge bg-info text-white">2</span>
                              </Link>
                            </div>
                            <div className="menu-item">
                              <Link href="#" className="menu-link">
                                <span className="menu-icon">
                                  <i className="ki-filled ki-podcast"></i>
                                </span>
                                <span className="menu-title">New Podcasts</span>
                                <span className="menu-badge bg-danger text-white">1</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-5">
                  <div className="flex items-center mb-6">
                    <div className="symbol symbol-50px me-4">
                      <Image src="/assets/media/avatars/300-6.png" alt="" width={50} height={50} className="h-12 object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <Link href="#" className="text-gray-900 font-semibold hover:text-primary text-lg">React</Link>
                      <div>
                        <span className="text-gray-500 font-medium text-sm">Expert</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <div className="symbol symbol-50px me-4">
                      <Image src="/assets/media/avatars/300-7.png" alt="" width={50} height={50} className="h-12 object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <Link href="#" className="text-gray-900 font-semibold hover:text-primary text-lg">Vue.js</Link>
                      <div>
                        <span className="text-gray-500 font-medium text-sm">Intermediate</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="symbol symbol-50px me-4">
                      <Image src="/assets/media/avatars/300-8.png" alt="" width={50} height={50} className="h-12 object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <Link href="#" className="text-gray-900 font-semibold hover:text-primary text-lg">Angular</Link>
                      <div>
                        <span className="text-gray-500 font-medium text-sm">Beginner</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-5 text-center">
                  <Link href="#" className="btn btn-sm btn-primary">View All</Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="card h-full">
                <div className="card-header">
                  <h3 className="card-title">To-Do List</h3>
                </div>
                <div className="card-body p-5">
                  <ul className="list-disc list-inside space-y-3">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="form-check-input" />
                      <span>Finish Next.js migration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="form-check-input" />
                      <span>Review Tailwind CSS updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="form-check-input" />
                      <span>Plan dashboard layout improvements</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer p-5 text-center">
                  <Link href="#" className="btn btn-sm btn-primary">Add New Task</Link>
                </div>
              </div>
            </div>
          </div>
          {/* end: grid */}
        </div>
      </div>

      {/* <div>
        {data.map((ele:object)=>{
            return ele.name;
        })}
      </div> */}
      {/* end: container */}
    </main>
  );
};

export default Dashboard;
