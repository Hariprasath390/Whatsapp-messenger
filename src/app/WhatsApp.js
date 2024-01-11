"use client";

import React, { useState } from "react";

import "./scrollbar.css";
// import TemporaryDrawer from "./components/TemporaryDrawer";

import Modal from "./components/Modal";
import Image from "next/image";

function WhatsappUI() {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const handleDrawerClick = () => {
  //   // Toggle the state to open/close the drawer
  //   setDrawerOpen(!drawerOpen);
  // };

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClick = () => {
    // Toggle the state to open/close the drawer
    setModalOpen(!modalOpen);
  };

  const [isSearch, setIsSearch] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const toggleIcon = () => {
    setIsSearch((prev) => !prev);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [showEmojiDiv, setShowEmojiDiv] = useState(false);

  const toggleEmojiDiv = () => {
    setShowEmojiDiv(!showEmojiDiv);
  };

  return (
    <div>
      <div className=" w-[100%]  h-[20%] absolute bg-[#00a883] hidden md:block"></div>
      <div className="flex justify-center items-center">
        <div className="main-container md:mt-6 ">
          <div className="md:relative w-[30%] h-[100%] flex-[30%] bg-[#fff] sticky top-0 ">
            <div className="sm:relative sticky top-0 z-50  flex items-center w-[100%] h-[60px] bg-[#ededed] px-[15px] justify-between">
              <div className="relative w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                <Image
                  className="absolute top-0 left-0 w-[100%] height-[100%] object-cover cursor-pointer"
                  src="/images/virat1.jpg"
                  alt=""
                  width={1000}
                  height={800}
                />
              </div>

              <div className="flex items-center ">
                <div className="flex items-center md:space-x-2">
                  <div className=" transform scale-100 opacity-100">
                    <div
                      role="button"
                      tabIndex="0"
                      className="p-2 rounded-full hover:bg-gray-200"
                      onClick={handleModalClick}
                    >
                      <span className="text-blue-500">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          fill="currentColor"
                          className="text-gray-600"
                        >
                          <title>business-advertise</title>
                          <path d="m18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zm4.4-12.01c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zm-16.4 3.4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3v-12l-5 3zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div
                      role="button"
                      tabIndex="0"
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <span className="text-blue-400">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          preserveAspectRatio="xMidYMid meet"
                          className="text-gray-600"
                          fill="none"
                        >
                          <title>community-tab</title>
                          <g clipPath="url(#clip0_20095_12594)">
                            <path
                              d="M4.7595 14.0357C4.65644 14.0313 4.55139 14.029 4.44446 14.029C3.65152 14.029 2.96238 14.1558 2.41872 14.3088C1.95159 14.4403 1.42115 14.656 0.975466 14.9996C0.521192 15.3498 0.107939 15.8739 0.0263682 16.5959C-0.0117388 16.9332 2.95136e-05 17.6554 0.00922726 18.0644C0.0256195 18.7935 0.623061 19.3623 1.33916 19.3623H4.31303C4.13562 18.9875 4.03074 18.5698 4.01771 18.1256C4.00494 17.6905 3.97075 16.5163 4.05525 15.893C4.09928 15.5682 4.17628 15.2639 4.27738 14.982C4.40496 14.6263 4.57082 14.3123 4.7595 14.0357Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M19.6869 19.3623H22.6608C23.3769 19.3623 23.9744 18.7935 23.9908 18.0644C24 17.6554 24.0117 16.9332 23.9736 16.5959C23.8921 15.8739 23.4788 15.3498 23.0245 14.9996C22.5788 14.656 22.0484 14.4403 21.5813 14.3088C21.0376 14.1558 20.3485 14.029 19.5555 14.029C19.4486 14.029 19.3435 14.0313 19.2405 14.0357C19.4291 14.3123 19.595 14.6263 19.7226 14.982C19.8237 15.2639 19.9007 15.5682 19.9447 15.893C20.0292 16.5163 19.995 17.6905 19.9822 18.1256C19.9692 18.5698 19.8643 18.9875 19.6869 19.3623Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.52831 13.6265C9.36687 13.3837 10.5649 13.1401 12 13.1401C13.4351 13.1401 14.6331 13.3837 15.4716 13.6265C15.9039 13.7517 16.4206 13.9288 16.8826 14.2131C17.352 14.5019 17.8167 14.934 18.0492 15.5821C18.1097 15.751 18.1563 15.9344 18.183 16.1318C18.243 16.5742 18.22 17.5691 18.2052 18.0735C18.184 18.7987 17.5884 19.3623 16.8756 19.3623H7.12434C6.41155 19.3623 5.81599 18.7987 5.79472 18.0735C5.77992 17.5691 5.75694 16.5742 5.81691 16.1318C5.84367 15.9344 5.89021 15.751 5.95079 15.5821C6.18324 14.934 6.64793 14.5019 7.11736 14.2131C7.57933 13.9288 8.09602 13.7517 8.52831 13.6265Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.8889 9.97001C16.8889 8.49726 18.0828 7.31001 19.5555 7.31001C21.0283 7.31001 22.2222 8.49726 22.2222 9.97001C22.2222 11.4428 21.0283 12.64 19.5555 12.64C18.0828 12.64 16.8889 11.4428 16.8889 9.97001Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.44443 8.20001C8.44443 6.23634 10.0363 4.64001 12 4.64001C13.9636 4.64001 15.5555 6.23634 15.5555 8.20001C15.5555 10.1637 13.9636 11.75 12 11.75C10.0363 11.75 8.44443 10.1637 8.44443 8.20001Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.77777 9.97001C1.77777 8.49726 2.97168 7.31001 4.44444 7.31001C5.91719 7.31001 7.1111 8.49726 7.1111 9.97001C7.1111 11.4428 5.91719 12.64 4.44444 12.64C2.97168 12.64 1.77777 11.4428 1.77777 9.97001Z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_20095_12594">
                              <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div
                      role="button"
                      tabIndex="0"
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <span className="text-blue-500">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          preserveAspectRatio="xMidYMid meet"
                          className="text-gray-600"
                          fill="none"
                        >
                          <title>status-v3</title>
                          <circle
                            cx="12"
                            cy="12"
                            r="6"
                            fill="currentColor"
                          ></circle>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 12C20 12.9267 19.8424 13.8166 19.5526 14.6444C19.3824 15.1305 19.5352 15.6866 19.9709 15.9613C20.4736 16.2782 21.1446 16.0964 21.3551 15.5406C21.7719 14.44 22 13.2466 22 12C22 7.15998 18.5615 3.12307 13.9941 2.19883C13.4118 2.08101 12.9 2.55153 12.9 3.14558C12.9 3.66061 13.2896 4.08652 13.7916 4.20139C17.3473 5.0149 20 8.19767 20 12ZM12 20C14.2014 20 16.1951 19.1108 17.6416 17.672C18.0063 17.3094 18.5733 17.208 19.0083 17.4823C19.5115 17.7995 19.6362 18.4841 19.2249 18.9138C17.4045 20.8156 14.8406 22 12 22C9.13243 22 6.54677 20.793 4.72334 18.8594C4.31526 18.4266 4.44515 17.7429 4.95068 17.4295C5.38777 17.1585 5.95401 17.2641 6.31591 17.6295C7.76573 19.0933 9.77697 20 12 20ZM3.9996 15.9013C4.43726 15.63 4.59424 15.075 4.42776 14.5877C4.15046 13.776 4 12.9056 4 12C4 8.19767 6.65269 5.0149 10.2084 4.20139C10.7104 4.08652 11.1 3.66061 11.1 3.14558C11.1 2.55153 10.5882 2.08101 10.0059 2.19883C5.4385 3.12307 2 7.15998 2 12C2 13.2201 2.21851 14.3892 2.61853 15.4702C2.82479 16.0276 3.49447 16.2145 3.9996 15.9013ZM12.0438 2.00009L12 2L11.9562 2.00009H12.0438Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div
                      role="button"
                      tabIndex="0"
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <span className="text-blue-500">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          preserveAspectRatio="xMidYMid meet"
                          className="text-gray-600"
                          fill="none"
                        >
                          <title>newsletter-tab</title>
                          <path
                            fill="currentColor"
                            d="M21.9218 10.6469C21.321 6.08949 17.5557 2.45561 12.9894 2.04404C7.06124 1.50197 2.16447 6.05937 2.05432 11.982C2.01426 14.1101 2.82538 15.9371 3.23595 16.7201L2.0443 20.6651C1.81398 21.4281 2.52497 22.1408 3.28602 21.9099L7.17139 20.7455C8.65344 21.5686 10.3157 22.0002 12.0181 22.0002C17.9663 22.0002 22.7129 16.7602 21.9118 10.6469H21.9218ZM8.06262 14.6823C8.333 15.0838 8.30296 15.6259 7.96249 15.9672C7.51186 16.429 6.76082 16.3386 6.40033 15.7966C5.66931 14.7124 5.23872 13.3974 5.23872 11.992C5.23872 10.5867 5.69936 9.17125 6.49045 8.057C6.84093 7.56512 7.57195 7.53501 8.00254 7.96665C8.35302 8.318 8.38307 8.86007 8.10268 9.2616C7.56193 10.0346 7.2515 10.9782 7.2515 11.992C7.2515 13.0059 7.56193 13.9093 8.08265 14.6723L8.06262 14.6823ZM12.0682 13.4978C11.237 13.4978 10.5661 12.8252 10.5661 11.992C10.5661 11.1588 11.237 10.4863 12.0682 10.4863C12.8993 10.4863 13.5702 11.1588 13.5702 11.992C13.5702 12.8252 12.8993 13.4978 12.0682 13.4978ZM17.5257 15.9471C17.1752 16.439 16.4442 16.4691 16.0236 16.0375C15.6731 15.6861 15.6431 15.1441 15.9235 14.7425C16.4642 13.9696 16.7847 13.0159 16.7847 12.0021C16.7847 10.9882 16.4542 10.0145 15.9035 9.24152C15.6131 8.82995 15.6331 8.27784 15.9836 7.91646C16.4042 7.49485 17.1252 7.51493 17.4857 8.00681C18.3068 9.1311 18.7875 10.5064 18.7875 12.0121C18.7875 13.5179 18.3168 14.8429 17.5257 15.9572V15.9471Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div
                      role="button"
                      tabIndex="0"
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <span className="text-blue-500">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          preserveAspectRatio="xMidYMid meet"
                          className="text-gray-600"
                          fill="none"
                        >
                          <title>new-chat</title>
                          <path
                            fill="currentColor"
                            d="M18.8333 3.75C20.3061 3.75 21.5 4.94391 21.5 6.41667V17.5833C21.5 19.0561 20.3061 20.25 18.8333 20.25H5.16667C3.69391 20.25 2.5 19.0561 2.5 17.5833V8.75L0.254242 5.29499C-0.178171 4.62974 0.299248 3.75 1.09269 3.75H18.8333ZM9.03279 12.9911H11.0086V14.9671C11.0086 15.3999 11.2634 15.8175 11.6762 15.9488C12.3609 16.1661 12.991 15.6613 12.991 15.009V12.9911H14.9672C15.4005 12.9911 15.8181 12.7358 15.949 12.3226C16.1659 11.6381 15.6606 11.0089 15.0087 11.0089H12.991V9.03332C12.991 8.60007 12.7361 8.18252 12.3233 8.05119C11.6391 7.83391 11.0086 8.33872 11.0086 8.991V11.0089H8.9909C8.33943 11.0089 7.83413 11.6381 8.05099 12.3226C8.18146 12.7358 8.59949 12.9911 9.03279 12.9911Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div
                      role="button"
                      tabIndex="0"
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <span className="text-blue-500">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          preserveAspectRatio="xMidYMid meet"
                          className="text-gray-600"
                          fill="none"
                          version="1.1"
                          x="0px"
                          y="0px"
                          enableBackground="new 0 0 24 24"
                        >
                          <title>menu</title>
                          <path
                            fill="currentColor"
                            d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {modalOpen && (
                <div className="fixed z-50">
                  <Modal />
                </div>
              )}

              {/* {drawerOpen && (
                <div className="z-50 fixed ">
                  <TemporaryDrawer />
                </div>
              )} */}
            </div>

            <div
              className="flex justify-between items-center bg-[#f6f6f6]"
              onClick={toggleIcon}
            >
              {isSearch ? (
                <form className="w-full">
                  <label
                    for="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative p-2 bg-[#f6f6f6]  ">
                    <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none ">
                      <svg
                        className="w-3 h-3 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search"
                      className="block w-full p-1.5 ps-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-white outline-none"
                      value={inputValue}
                      onChange={handleChange}
                      placeholder="Search or start new chat"
                      required
                    />
                  </div>
                </form>
              ) : (
                <form className="w-full">
                  <label
                    for="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative p-2 bg-[#f6f6f6]  ">
                    <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none ">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      >
                        <title>back</title>
                        <path
                          fill="currentColor"
                          d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search"
                      className="block w-full p-1.5 ps-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-white outline-none"
                      value={inputValue}
                      onChange={handleChange}
                      placeholder="Search or start new chat"
                      required
                    />
                  </div>
                </form>
              )}
              <button className=" p-2   rounded-full  focus:outline-none   ">
                <span className="text-gray-600" data-icon="filter">
                  <svg viewBox="0 0 24 24" className="h-6 w-6">
                    <title>filter</title>
                    <path
                      fill="currentColor"
                      d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            <div className=" overflow-y-scroll scrollbar sm:h-[calc(100%-110px)]  ">
              <div className=" flex items-center  border-b border-gray-200 p-[10px]">
                <div className="img-box ">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/vijay.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className=" flex flex-col ml-4 w-full">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Vijay</h4>

                    <p className="  text-[#06e744]  text-sm font-bold">11:49</p>
                  </div>
                  <div className="text-message flex justify-between items-center">
                    <p className="text-gray-500">“How are you?”</p>
                    <b className="bg-[#06e744] text-white rounded-full w-5 h-5 flex justify-center items-center">
                      1
                    </b>
                  </div>
                </div>
              </div>

              <div className="chat-box flex items-center border-b border-gray-200 p-[15px]">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/rogers.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className="chat-details flex flex-col ml-4 w-full">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Rogers</h4>
                    <p className="text-[#06e744]  text-sm font-bold">10:49</p>
                  </div>
                  <div className="text-message flex justify-between items-center">
                    <p className="text-gray-500">“I’ll be there.”</p>
                    <b className="bg-[#06e744] text-white rounded-full w-5 h-5 flex justify-center items-center">
                      4
                    </b>
                  </div>
                </div>
              </div>

              <div className="chat-box flex items-center border-b border-gray-200 p-[15px] ">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/roshna.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className="chat-details flex flex-col ml-4 w-full">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Roshna</h4>
                    <p className=" text-[#06e744]  text-sm font-bold">09:49</p>
                  </div>
                  <div className="text-message flex justify-between items-center">
                    <p className="text-gray-500">“Make somebody’s day.”</p>
                    <b className="bg-[#06e744] text-white rounded-full w-5 h-5 flex justify-center items-center">
                      2
                    </b>
                  </div>
                </div>
              </div>

              <div className="chat-box flex items-center  border-b border-gray-200 p-[15px] ">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/zendaya.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className="chat-details flex flex-col ml-4 w-full ">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Zendaya</h4>
                    <p className="time text-sm">08:49</p>
                  </div>
                  <div className="text-message">
                    <p className="text-gray-500">“Dreams come true.”</p>
                  </div>
                </div>
              </div>
              <div className="chat-box flex items-center p-[15px]  border-b border-gray-200">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/thor.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className="chat-details flex flex-col ml-4 w-full ">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Thor</h4>
                    <p className="time text-sm">07:49</p>
                  </div>
                  <div className="text-message">
                    <p className="text-gray-500">
                      Awesome! I&apos;ll start a vid..
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex items-center  border-b border-gray-200 p-[15px]">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/alia.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className=" flex flex-col ml-4 w-full">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">
                      Alia bhat
                    </h4>
                    <p className="  text-[#06e744]  text-sm font-bold">6:59</p>
                  </div>
                  <div className="text-message flex justify-between items-center">
                    <p className="text-gray-500">“i Love you ”</p>
                    <b className="bg-[#06e744] text-white rounded-full w-5 h-5 flex justify-center items-center">
                      1
                    </b>
                  </div>
                </div>
              </div>
              <div className="chat-box flex items-center p-[15px]  border-b border-gray-200">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/natasha.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className="chat-details flex flex-col ml-4 w-full">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Natasha</h4>
                    <p className="time text-sm">06:49</p>
                  </div>
                  <div className="text-message">
                    <p className="text-gray-500">“Love, light, laughter.”</p>
                  </div>
                </div>
              </div>

              <div className="chat-box flex items-center p-[15px] border-b border-gray-200">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/virat.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className="chat-details flex flex-col ml-4 w-full">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Virat</h4>
                    <p className="text-[#06e744]  text-sm font-bold">
                      Yesterday
                    </p>
                  </div>
                  <div className="text-message flex justify-between items-center">
                    <p className="text-gray-500">“Appreciate the mome..”</p>
                    <b className="bg-[#06e744] text-white rounded-full w-5 h-5 flex justify-center items-center">
                      2
                    </b>
                  </div>
                </div>
              </div>
              <div className="chat-box flex items-center p-[15px] border-b border-gray-200">
                <div className="img-box w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/jeslin.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <div className="chat-details flex flex-col ml-4 w-full">
                  <div className="text-head flex justify-between items-center mb-1">
                    <h4 className="text-md text-black/80 font-bold">Jeslin</h4>
                    <p className="time">Yesterday</p>
                  </div>
                  <div className="text-message">
                    <p className="text-gray-500">“Now or never.”</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[70%] h-[100%] flex-[70%] bg-[#e5ddd5] hidden md:block">
            <div className="bg-image"> </div>

            <div className="relative flex items-center w-[100%] h-[60px] bg-[#ededed] px-[15px] justify-between">
              <div className=" flex gap-3 ">
                <div className="relative w-[40px] h-[40px] overflow-hidden rounded-[50%]">
                  <Image
                    className="relative top-[-2px] left-[0px] w-[40px] h-auto overflow-hidden object-cover"
                    src="/images/thor.jpg"
                    alt=""
                    width={1000}
                    height={800}
                  />
                </div>
                <h4 className="font-bold text-black/70 font-sans text-[14px]">
                  Thor
                  <br />
                  <span className="font-sans text-gray-500 text-xs">
                    Online
                  </span>
                </h4>
              </div>
              <div className="flex justify-end pl-[110px]">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 hover:bg-gray-200 rounded-full">
                      <span className="text-gray-600">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          preserveAspectRatio="xMidYMid meet"
                          className=""
                          version="1.1"
                          x="0px"
                          y="0px"
                          enableBackground="new 0 0 24 24"
                        >
                          <title>search-alt</title>
                          <path
                            fill="currentColor"
                            d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="p-2 hover:bg-gray-200 rounded-full">
                      <span className="text-gray-600">
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          preserveAspectRatio="xMidYMid meet"
                          className=""
                          version="1.1"
                          x="0px"
                          y="0px"
                          enableBackground="new 0 0 24 24"
                        >
                          <title>menu</title>
                          <path
                            fill="currentColor"
                            d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative w-[100%] p-[50px] overflow-y-auto scrollbar "
              style={{ height: "calc(100% - 120px)" }}
            >
              <div className="relative flex w-full my-5 justify-center">
                <p className="relative right-0 text-right max-w-2/3 p-2  rounded-lg text-xs bg-[#ffffff]">
                  Wednesday !
                </p>
              </div>

              {/* {showEmojiDiv && (
                <div className="emojianimationn">
                  <div className="flex bg-white  w-[308px] h-[56px] p-3 shadow-2xl gap-2 rounded-full ">
                    <div className=" left-4 bg-white">
                      <div
                        role="button"
                        tabIndex="0"
                        className="emoji-button like-button"
                      >
                        <h2
                          className="text-2xl"
                          role="img"
                          aria-label="Thumbs Up"
                        >
                          👍
                        </h2>
                      </div>
                    </div>

                    <div className="">
                      <div
                        role="button"
                        tabIndex="0"
                        className="emoji-button love-button"
                      >
                        <h2 className="text-2xl" role="img" aria-label="Heart">
                          ❤️
                        </h2>
                      </div>
                    </div>

                    <div className="">
                      <div
                        role="button"
                        tabIndex="0"
                        className="emoji-button laugh-button"
                      >
                        <h2
                          className="text-2xl"
                          role="img"
                          aria-label="Laughing"
                        >
                          😂
                        </h2>
                      </div>
                    </div>

                    <div className=" ">
                      <div
                        role="button"
                        tabIndex="0"
                        className="emoji-button wow-button"
                      >
                        <h2 className="text-2xl" role="img" aria-label="Wow">
                          😮
                        </h2>
                      </div>
                    </div>

                    <div className=" ">
                      <div
                        role="button"
                        tabIndex="0"
                        className="emoji-button sad-button"
                      >
                        <h2 className="text-2xl" role="img" aria-label="Sad">
                          😢
                        </h2>
                      </div>
                    </div>

                    <div className=" ">
                      <div
                        role="button"
                        tabIndex="0"
                        className="emoji-button pray-button"
                      >
                        <h2
                          className="text-2xl"
                          role="img"
                          aria-label="Praying"
                        >
                          🙏
                        </h2>
                      </div>
                    </div>

                    <div
                      role="button"
                      aria-label="More reactions"
                      className="border rounded-full bg-gray-100 text-gray-600 flex items-center justify-center p-2"
                    >
                      <span data-icon="add-alt-2" className="flex items-center">
                        <svg
                          viewBox="0 0 18 18"
                          width="14"
                          preserveAspectRatio="xMidYMid meet"
                          fill="none"
                          className="text-gray-600"
                        >
                          <title>add more reactions</title>
                          <path
                            d="M0.779492 9.77945C0.345435 9.34539 0.354642 8.64524 0.789127 8.21075C1.00194 7.99794 1.27674 7.88259 1.57806 7.90017L7.88829 7.87934L7.90025 1.57797C7.89154 1.26779 7.99803 1.00185 8.21083 0.789044C8.64532 0.354559 9.32774 0.363086 9.7618 0.797143C9.99211 1.02746 10.0895 1.2667 10.0805 1.59463L10.0862 7.89598L16.4053 7.90173C16.7598 7.90156 16.9991 7.99893 17.2116 8.21153C17.6457 8.64558 17.6542 9.34573 17.2197 9.78022C17.0069 9.99302 16.7499 10.0906 16.4308 10.0908L10.1117 10.1028L10.0998 16.4041C10.1085 16.7143 10.002 16.9803 9.78031 17.2019C9.34582 17.6364 8.64567 17.6456 8.20275 17.2027C7.97244 16.9724 7.87508 16.6977 7.8841 16.3875L7.8872 10.095L1.60356 10.107C1.27564 10.116 1.00981 10.0098 0.779492 9.77945Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              )} */}

              <div className="group relative flex w-full my-5 justify-end items-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div
                    className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1"
                    onClick={toggleEmojiDiv}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>

                <p className="relative right-0 text-right max-w-2/3 p-3  rounded-lg text-sm bg-[#dcf8c6]">
                  I&apos;ve been waiting to see that show asap!
                  <span className="block mt-2 text-xs opacity-50">07:43</span>
                </p>
              </div>

              <div className="group relative flex w-full my-5 items-center">
                <p className="text-right max-w-2/3 p-3  rounded-lg text-sm bg-[#ffffff]">
                  Ahh, I can&apos;t believe you do too!
                  <span className="block mt-2 text-xs opacity-50">07:45</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group relative flex w-full my-5 items-center">
                <p className="text-right max-w-2/3 p-3  rounded-lg text-sm bg-[#ffffff]">
                  The trailer looks good
                  <span className="block mt-2 text-xs opacity-50">07:45</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group relative flex w-full my-5 items-center">
                <p className="text-right max-w-2/3 p-3 rounded-lg text-sm bg-[#ffffff]">
                  I&apos;ve been waiting to watch it!!
                  <span className="block mt-2 text-xs opacity-50">07:45</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group relative flex w-full my-5 justify-end items-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>

                <p className="relative right-0 text-right max-w-2/3 p-3  rounded-lg text-sm bg-[#dcf8c6]">
                  😐😐😐
                  <span className="block mt-2 text-xs opacity-50">07:46</span>
                </p>
              </div>

              <div className="group relative flex w-full my-5 justify-end items-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>

                <p className="relative right-0 text-right max-w-2/3 p-3  rounded-lg text-sm bg-[#dcf8c6]">
                  Mee too! 😊
                  <span className="block mt-2 text-xs opacity-50">07:46</span>
                </p>
              </div>

              <div className="group relative flex w-full my-5 justify-start items-center">
                <p className="text-right max-w-2/3 p-3 bg-white rounded-lg text-sm">
                  We should video chat to discuss, if you&apos;re up for it!
                  <span className="block mt-2 text-xs opacity-50">07:48</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group relative flex w-full my-5 justify-end items-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>

                <p className="relative right-0 text-right max-w-2/3 p-3  rounded-lg text-sm bg-[#dcf8c6]">
                  Sure
                  <span className="block mt-2 text-xs opacity-50">07:48</span>
                </p>
              </div>

              <div className="group relative flex w-full my-5 justify-end items-center">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>

                <p className="relative right-0 text-right max-w-2/3 p-3  rounded-lg text-sm bg-[#dcf8c6]">
                  I&apos;m free now!
                  <span className="block mt-2 text-xs opacity-50">07:48</span>
                </p>
              </div>

              <div className="group relative flex w-full my-5 justify-start items-center">
                <p className="text-right max-w-2/3 p-3 bg-white rounded-lg text-sm">
                  Awesome! I&apos;ll start a video chat with you in a few.
                  <span className="block mt-2 text-xs opacity-50">07:49</span>
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-white p-3 rounded-lg shadow-sm items-center">
                  <div className="font-bold text-lg mb-2 bg-black/10 rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white fill-current"
                    >
                      <title>smiley</title>
                      <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[100%] h-[60px] bg-[#f0f0f0] flex justify-between items-center">
              <div className="relative">
                <button className="p-2 rounded-full focus:outline-none">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-700 fill-current"
                  >
                    <title>attach-menu-plus</title>
                    <path
                      d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>

              <svg
                viewBox="0 0 24 24"
                className="w-10 h-[36.5px] p-2 text-gray-700 fill-current bg-white rounded-l-md -mx-2 ml-2"
              >
                <title>smiley</title>
                <path d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path>
              </svg>
              <input
                type="text"
                placeholder="Type a message"
                className="relative w-[90%]   mx-[4px] p-[6px] rounded-lg text-base border-none outline-none"
              />

              <div className="relative">
                <button className="p-2  rounded-full focus:outline-none">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-700 fill-current"
                  >
                    <title>ptt</title>
                    <path d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885L18.237,11.412z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsappUI;
