import React from "react";
import dhanshree from "../../assets/dhanashree.jpg";
import akshay from "../../assets/akshay.jpg";
import praduymn from "../../assets/pradhyumn.jpeg";
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full flex flex-col md:flex-row justify-center">
          <ul
            className="md:px-2 lg:px-0 lg:w-1/3 flex mb-0  xl:pl-20 list-none flex-wrap pt-3 pb-4 flex-col gap-6 items-start"
            role="tablist"
          >
            <h1 className="px-5 font-bold text-headGreen text-3xl mx-auto md:mx-0 md:text-3xl lg:text-4xl xl:text-5xl lg:w-10/12 my-8">
              The Salam Kisan Team.
            </h1>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-2xl font-bold uppercase px-5 block leading-normal " +
                  (openTab === 1
                    ? " text-headGreen bg-" + color + "-600"
                    : "text-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Core Team
              </a>
              <p
                className={
                  openTab === 1
                    ? "block ml-5 text-base text-subHeadGreen"
                    : "hidden"
                }
              >
                Our Leadership Team
              </p>
            </li>
            {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-2xl font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-headGreen bg-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Our Team
              </a>
              <p
                className={
                  openTab === 2
                    ? "block ml-5 text-base text-subHeadGreen"
                    : "hidden"
                }
              >
                Pillars of Salam Kisan
              </p>
            </li> */}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white md:w-full lg:w-1/2 mb-6 rounded">
            <div className=" py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-wrap justify-center gap-12">
                    <a href="https://www.linkedin.com/in/dhanashri-mandhani-978aa9200/" target="_blank">
                      <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                        <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black">
                          <img
                            src={dhanshree}
                            className="h-full w-full rounded-xl"
                          />
                        </div>
                        <div className="text-center my-4">
                          <p className="font-bold">Dhanashree Mandhani</p>
                          <p className="font-light">
                            Founder and Managing Director
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black">
                        <img
                          src={praduymn}
                          className="h-full w-full rounded-xl"
                        />
                      </div>
                      <div className="text-center my-4">
                        <p className="font-bold">Praduymn Mandhani</p>
                        <p className="font-light">Director</p>
                      </div>
                    </div>
                    <a href="https://www.linkedin.com/in/akshaykhobragade/" target="_blank">
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black">
                        <img
                          src={akshay}
                          className="h-full w-full rounded-xl"
                        />
                      </div>
                      <div className="text-center my-4">
                        <p className="font-bold">Akshay Khobragade</p>
                        <p className="font-light">Chief Operating Officer</p>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-wrap justify-center gap-12">
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black"></div>
                      <div className="text-center my-4">
                        <p className="font-bold">Paresh</p>
                        <p className="font-light">
                          Founder and Managing Director
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black"></div>
                      <div className="text-center my-4">
                        <p className="font-bold">Pradhyumn Mandhani</p>
                        <p className="font-light">Director</p>
                      </div>
                    </div>
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black"></div>
                      <div className="text-center my-4">
                        <p className="font-bold">Akshay Khobragade</p>
                        <p className="font-light">Chief Operating Officer</p>
                      </div>
                    </div>
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black"></div>
                      <div className="text-center my-4">
                        <p className="font-bold">Dhanashree Mandhani</p>
                        <p className="font-light">CEO</p>
                      </div>
                    </div>
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black"></div>
                      <div className="text-center my-4">
                        <p className="font-bold">Dhanashree Mandhani</p>
                        <p className="font-light">CEO</p>
                      </div>
                    </div>
                    <div className="rounded-xl w-48 md:w-32 lg:w-32 xl:w-48">
                      <div className="w-48 md:w-32 lg:w-32 xl:w-48 rounded-xl w-48 md:w-32 lg:w-32 xl:h-48 bg-black"></div>
                      <div className="text-center my-4">
                        <p className="font-bold">Dhanashree Mandhani</p>
                        <p className="font-light">CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Teams() {
  return (
    <>
      <Tabs color="pink" />;
    </>
  );
}
