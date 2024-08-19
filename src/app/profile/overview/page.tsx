import Image from 'next/image';

const OverviewPage = () => {
  return (
    <div className="container-fixed">
      <div className="grid gap-5 lg:gap-7.5">
        
        {/* About Section */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">About</h3>
          </div>
          <div className="card-body pt-4 pb-3 text-start">
            You can use this text area to tell others about yourself, previous projects, interests, your values or more...
          </div>
        </div>
        
        {/* Work Experience Section */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Work Experience</h3>
          </div>
          <div className="card-body">
            <div className="grid gap-y-5">
              
              {/* Current Job */}
              <div className="flex align-start gap-3.5">
                <Image alt="Jira Logo" className="h-9" src="/assets/media/brand-logos/jira.svg" width={36} height={36} />
                <div className="flex flex-col gap-1">
                  <a className="text-sm font-semibold text-primary leading-none hover:text-primary-active" href="#">
                    Esprito Studios
                  </a>
                  <span className="text-sm font-medium text-gray-800">Senior Project Manager</span>
                  <span className="text-xs font-medium text-gray-500 leading-none">2019 - Present</span>
                </div>
              </div>
              
              {/* Previous Jobs Header */}
              <div className="text-start text-gray-600 font-semibold text-sm leading-none">
                Previous Jobs
              </div>
              
              {/* Previous Job 1 */}
              <div className="flex align-start gap-3.5">
                <Image alt="Paccion Logo" className="h-9" src="/assets/media/brand-logos/paccion.svg" width={36} height={36} />
                <div className="flex flex-col gap-1">
                  <a className="text-sm font-semibold text-primary leading-none hover:text-primary-active" href="#">
                    Pesto Plus
                  </a>
                  <span className="text-sm font-medium text-gray-800">CRM Product Lead</span>
                  <span className="text-xs font-medium text-gray-500 leading-none">2012 - 2019</span>
                </div>
              </div>
              
              {/* Previous Job 2 */}
              <div className="flex align-start gap-3.5">
                <Image alt="Perrier Logo" className="h-9" src="/assets/media/brand-logos/perrier.svg" width={36} height={36} />
                <div className="flex flex-col gap-1">
                  <a className="text-sm font-semibold text-primary leading-none hover:text-primary-active" href="#">
                    Perrier Technologies
                  </a>
                  <span className="text-sm font-medium text-gray-800">UX Research</span>
                  <span className="text-xs font-medium text-gray-500 leading-none">2010 - 2012</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OverviewPage;
