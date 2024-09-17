import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSearch: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  // Handle clicks outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
         <button   onClick={toggleDropdown} className="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500">
              <i className="ki-filled ki-magnifier"></i>
            </button>
      <Dropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
    </div>
  );
};

export default ProfileSearch;

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose }) => {
  return (
    <div
  
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 `}
      style={{ display: isOpen ? "flex" : "none"}}
    >
      <div className="w-[90%] max-w-[500px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 " style={{border:"1px solid red" ,zIndex:1000}}>
    
   
         <div className="modal-header py-4 px-5">
            <i className="ki-filled ki-magnifier text-gray-700 text-xl">
            </i>
            <input className="input px-0 border-none bg-transparent shadow-none ml-2.5" name="query" placeholder="Tap to start search" type="text" value="" />
            <button className="btn btn-sm btn-icon btn-light btn-clear shrink-0" onClick={onClose}>
               <i className="ki-filled ki-cross">
               </i>
            </button>
         </div>
         <div className="modal-body p-0 pb-5">
         
            <div className="scrollable-y-auto" data-scrollable="true" data-scrollable-max-height="auto" data-scrollable-offset="300px">
               <div className="" id="search_modal_mixed">
                  <div className="flex flex-col gap-2.5">
               
                     <div className="border-b border-b-gray-200">
                     </div>
                     <div>
                        <div className="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5 text-start">
                           Users
                        </div>
                        <div className="menu menu-default p-0 flex-col">
                           <div className="grid gap-1">
                              <div className="menu-item">
                                 <div className="menu-link flex justify-between gap-2">
                                    <div className="flex items-center gap-2.5">
                                       <img alt="" className="rounded-full size-9 shrink-0" src="assets/media/avatars/300-3.png" />
                                       <div className="flex flex-col">
                                          <a className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                                             Tyler Hero
                                          </a>
                                          <span className="text-2sm font-normal text-gray-500">
                                             tyler.hero@gmail.com connections
                                          </span>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                       <div className="badge badge-pill badge-outline badge-success gap-1.5">
                                          <span className="badge badge-dot badge-success size-1.5">
                                          </span>
                                          In Office
                                       </div>
                                       <button className="btn btn-icon btn-light btn-clear btn-sm">
                                          <i className="ki-filled ki-dots-vertical">
                                          </i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className="menu-item">
                                 <div className="menu-link flex justify-between gap-2">
                                    <div className="flex items-center gap-2.5">
                                       <img alt="" className="rounded-full size-9 shrink-0" src="assets/media/avatars/300-1.png" />
                                       <div className="flex flex-col">
                                          <a className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                                             Esther Howard
                                          </a>
                                          <span className="text-2sm font-normal text-gray-500">
                                             esther.howard@gmail.com connections
                                          </span>
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                       <div className="badge badge-pill badge-outline badge-danger gap-1.5">
                                          <span className="badge badge-dot badge-danger size-1.5">
                                          </span>
                                          On Leave
                                       </div>
                                       <button className="btn btn-icon btn-light btn-clear btn-sm">
                                          <i className="ki-filled ki-dots-vertical">
                                          </i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>

 
      </div>
    </div>
  );
};
