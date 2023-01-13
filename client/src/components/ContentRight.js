import React from "react";
import { Link } from "react-router-dom";

const ContentRight = () => {
  const dataTask = [
    {
      name: "Menyapu",
      desc: "Menyapu Menyapu Menyapu ",
    },
    {
      name: "Menyapu",
      desc: "Menyapu Menyapu Menyapu ",
    },
    {
      name: "Menyapu",
      desc: "Menyapu Menyapu Menyapu ",
    },
  ];
  return (
    <div className=" h-full bg-slate-100 dark:bg-slate-900   px-4 flex flex-col w-5/12">
      <div className="flex flex-col flex-1 mb-4 ">
        <div className="px-4 flex flex-row items-center justify-between">
          <Link to="/task" className="text-semibold">
            Task
          </Link>
          <Link to="/task" className="text-xs">
            All Task
          </Link>
        </div>
        <div className="px-4  text-xs text-slate-400 mb-2">You have 3 Task</div>

        <div className="flex flex-col gap-2 flex-1">
          {dataTask.map((data) => (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex rounded-3xl py-2 px-6 shadow-md items-center flex-row justify-between flex-1">
              <div className="text-white flex flex-col ">
                <Link to="/task" className="w-fit">
                  Menyapu
                </Link>
                <Link to="/task" className="w-fit text-xs text-slate-300">
                  Menyapu Menyapu Menyapu
                </Link>
              </div>
              <button className="bg-white p-2 hover:scale-110 duration-200 dark:bg-slate-800 rounded-2xl h-12 w-12 items-center flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col h-64 mb-4">
        <div className="rounded-3xl shadow-lg flex-1 bg-gradient-to-bl from-violet-500 to-fuchsia-500 p-4">
          <div className="text-white flex flex-row justify-between items-center mb-4">
            <span>Balance</span>
            <span className="text-xs">This month</span>
          </div>
          <div className="flex flex-row gap-4">
            <Link
              to="/finance"
              className="bg-white  dark:bg-slate-800 hover:scale-105 duration-200 flex flex-col gap-2 flex-1 h-32 p-4 rounded-3xl"
            >
              <div className="flex flex-row justify-between">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
                <div className="text-xs flex flex-row ">
                  <span>12% </span>
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                  <div>this month</div>
                </div>
              </div>
              <div className="text-xl">$2400.9 USD</div>
              <div className="text-xs">Income</div>
            </Link>
            <Link
              to="/finance"
              className="text-white bg-violet-700 hover:scale-105 duration-200 flex flex-col gap-2 flex-1 h-32 p-4 rounded-3xl"
            >
              <div className="flex flex-row justify-between">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
                <div className="text-xs flex flex-row ">
                  <span>12% </span>
                  <div className="mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      fill="currentColor"
                      class="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div>
                  <div>this month</div>
                </div>
              </div>
              <div className="text-xl">$2400.9 USD</div>
              <div className="text-xs">Outcome</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
