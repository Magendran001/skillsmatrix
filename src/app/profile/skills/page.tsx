export default function SkillsPage() {
  return (
      <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
              <div className="card">
                  <div className="card-header">
                      <h3 className="card-title">Skills</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 justify-evenly gap-5 p-5">
                      {/* Skill Level Cards */}
                      <SkillCard 
                          iconClass="text-blue-400"
                          level="Novice"
                          description="Some knowledge, but would need support"
                      />
                      <SkillCard 
                          iconClass="text-red-400"
                          level="Proficient"
                          description="Can comfortably complete work independently"
                      />
                      <SkillCard 
                          iconClass="text-green-400"
                          level="Expert"
                          description="Would be comfortable training in this subject"
                      />
                  </div>
                  <hr />
                  <div className="p-10">
                      <div className="grid gap-5">
                          {/* Skill List Item */}
                          <SkillListItem 
                              logoSrc="/assets/media/brand-logos/rails-2.svg"
                              skillName="Rails"
                              skillLevel="Expert"
                              iconClass="text-green-400"
                              
                          />
                          <SkillListItem 
                              logoSrc="/assets/media/brand-logos/figma.svg"
                              skillName="Figma"
                              skillLevel="Novice"
                              iconClass="text-blue-400"
                              
                          />
                          <SkillListItem 
                              logoSrc="/assets/media/brand-logos/nodejs.svg"
                              skillName="Nodejs"
                              skillLevel="Proficient"
                              iconClass="text-red-400"
                              
                          />
                             <SkillListItem 
                              logoSrc="/assets/media/brand-logos/react.svg"
                              skillName="React"
                              skillLevel="Novice"
                              iconClass="text-blue-400"
                              
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

function SkillCard({ iconClass, level, description }: {  iconClass: string, level: string, description: string }) {
  return (
      <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-2 gap-1">
              <div className="relative size-[50px] shrink-0">
                  <svg className="w-full h-full stroke-primary-clarity fill-primary-light" fill="none" height="48"
                      viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="" />
                      <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="" />
                  </svg>  
                  <div className={`absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 ${iconClass}`}>
                      <i className="ki-filled ki-abstract-39 text-1.5xl ps-px"></i>
                  </div>
              </div>
              <span><strong>{level}</strong></span>
          </div>
          <p className="mb-0">{description}</p>
      </div>
  );
}

function SkillListItem({ iconClass,logoSrc, skillName, skillLevel }: { iconClass:string,logoSrc: string, skillName: string, skillLevel: string }) {
  return (
      <div className="flex items-center space-x-4 justify-between">
          <div className="flex gap-5">
              <div className="symbol symbol-50px">
                  <span className="symbol-label">
                      <img src={logoSrc} className="h-10 object-cover" alt={`${skillName} Logo`} />
                  </span>
              </div>
              <div>
                  <a href="#" className="text-gray-900 font-semibold hover:text-primary text-lg">{skillName}</a>
                  <div><span className="text-gray-500 font-medium text-sm">{skillLevel}</span></div>
              </div>
          </div>
          <div className="flex-shrink-0">
              {/* Optional additional icon or content */}
              <div className="relative size-[50px] shrink-0">
                  <svg className="w-full h-full stroke-primary-clarity fill-primary-light" fill="none" height="48"
                      viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="" />
                      <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="" />
                  </svg>  
                  <div className={`absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 ${iconClass}`}>
                      <i className="ki-filled ki-abstract-39 text-1.5xl ps-px"></i>
                  </div>
              </div>
          </div>
      </div>
  );
}
