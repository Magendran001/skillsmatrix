import Image from 'next/image';

export default function DocumentPage() {
  return (
    <div className="container-fixed text-start">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between">
        <div className="border border-gray-100 grow">
          <div className="card h-50 w-[250px]">
            <div className="flex flex-col items-center text-center p-8">
              <a href="#" className="text-gray-800 hover:text-primary flex flex-col">
                <div className="w-20 h-20 mb-6">
                  <Image
                    src="/assets/media/file-types/pdf.svg"
                    alt="PDF file icon"
                    width={80} // Adjust as needed
                    height={80} // Adjust as needed
                    className="object-cover"
                  />
                </div>
                <div className="text-xl font-bold mb-2">Resume</div>
              </a>
              <div className="text-sm font-semibold text-gray-500 mt-auto">3 days ago</div>
            </div>
          </div>
        </div>

        <div className="card grow">
          <div className="card-header">
            <h3 className="card-title">Certificates</h3>
            <div className="menu" data-menu="true">
              {/* Menu code */}
            </div>
          </div>
          <div className="card-body">
            <div className="grid gap-2.5 lg:gap-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center grow gap-2.5">
                  <Image
                    src="/assets/media/file-types/pdf.svg"
                    alt="Azure PDF file"
                    width={24} // Adjust as needed
                    height={24} // Adjust as needed
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                      Azure Certificate
                    </span>
                    <span className="text-xs font-normal text-gray-600">
                      4.7 MB 26 Sep 2024 3:20 PM
                    </span>
                  </div>
                </div>
                {/* Menu code */}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center grow gap-2.5">
                  <Image
                    src="/assets/media/file-types/doc.svg"
                    alt="Report DOC file"
                    width={24} // Adjust as needed
                    height={24} // Adjust as needed
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                      Report-v1.docx
                    </span>
                    <span className="text-xs font-normal text-gray-600">
                      2.3 MB 1 Oct 2024 12:00 PM
                    </span>
                  </div>
                </div>
                {/* Menu code */}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center grow gap-2.5">
                  <Image
                    src="/assets/media/file-types/ai.svg"
                    alt="Framework App JS file"
                    width={24} // Adjust as needed
                    height={24} // Adjust as needed
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                      Framework-App.js
                    </span>
                    <span className="text-xs font-normal text-gray-600">
                      0.8 MB 17 Oct 2024 6:46 PM
                    </span>
                  </div>
                </div>
                {/* Menu code */}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center grow gap-2.5">
                  <Image
                    src="/assets/media/file-types/js.svg"
                    alt="Mobile Logo JS file"
                    width={24} // Adjust as needed
                    height={24} // Adjust as needed
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                      Mobile-logo.ai
                    </span>
                    <span className="text-xs font-normal text-gray-600">
                      0.2 MB 4 Nov 2024 11:30 AM
                    </span>
                  </div>
                </div>
                {/* Menu code */}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
