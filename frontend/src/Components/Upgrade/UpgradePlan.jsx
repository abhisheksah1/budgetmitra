import React from "react";
import { CheckCircle } from "lucide-react";

export default function UpgradePlan() {
  return (
    <section className="relative w-full h-screen  overflow-hidden  pb-14">
      <div className="relative  z-10 mx-auto max-w-7xl px-4">
        <span className="items-center justify-center flex ">
          <h2 className=" mt-10 border-[#0066cc] lg:border-2 px-3 py-2 text-[2em] font-bold rounded-lg ">
            Up<span className="text-[#0066cc]">grade</span> {" "}
          </h2>
        </span>
        <div className="mx-auto lg:mt-32 md:max-w-4xl">
          <div className=" border-2 p-12 -m-14  flex flex-wrap">
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b border-[#0066cc]">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Standard
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        3 Team Members
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        1200+ UI Blocks
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        10 GB Cloud Storage
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Individual Email Account
                      </p>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Premium Support
                      </p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span className="ml-2 text-gray-900">$49/mo</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Start your free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b border-[#0066cc]">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-[#0066cc]">
                      Pro
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Lorem ipsum dolor sit amet, consect etur adipiscing maror.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8 backdrop:blur-md">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        3 Team Members
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        1200+ UI Blocks
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        10 GB Cloud Storage
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Individual Email Account
                      </p>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Premium Support
                      </p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                    <span>Starting from</span>
                    <span className="ml-2 text-gray-900">$99/mo</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Start your free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
