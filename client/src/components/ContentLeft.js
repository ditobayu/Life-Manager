import React from "react";
import { Link } from "react-router-dom";

const ContentLeft = () => {
  const dataProject = [
    {
      name: "Rutter",
      progress: 50,
      date: "25 Dec",
    },
    {
      name: "Rutter",
      progress: 50,
      date: "25 Dec",
    },
    {
      name: "Rutter",
      progress: 50,
      date: "25 Dec",
    },
  ];
  const dataTanggal = [
    { tanggal: 1, acara: false },
    { tanggal: 2, acara: false },
    { tanggal: 3, acara: false },
    { tanggal: 4, acara: false },
    { tanggal: 5, acara: false },
    { tanggal: 6, acara: false },
    { tanggal: 7, acara: false },
    { tanggal: 8, acara: false },
    { tanggal: 9, acara: false },
    { tanggal: 10, acara: false },
    { tanggal: 11, acara: false },
    { tanggal: 12, acara: false },
    { tanggal: 13, acara: false },
    { tanggal: 14, acara: false },
    { tanggal: 15, acara: false },
    { tanggal: 16, acara: false },
    { tanggal: 17, acara: true },
    { tanggal: 18, acara: false },
    { tanggal: 19, acara: false },
    { tanggal: 20, acara: false },
    { tanggal: 21, acara: false },
    { tanggal: 22, acara: false },
    { tanggal: 23, acara: false },
    { tanggal: 24, acara: false },
    { tanggal: 25, acara: false },
    { tanggal: 26, acara: false },
    { tanggal: 27, acara: false },
    { tanggal: 28, acara: true },
    { tanggal: 29, acara: true },
    { tanggal: 30, acara: true },
  ];
  return (
    <div className="h-full bg-slate-100 dark:bg-slate-900 flex flex-col w-7/12 ">
      <div>
        <div className="px-4 flex flex-row items-center justify-between">
          <Link to="/project" className="text-semibold">
            Your Projects
          </Link>
          <Link to="/project" className="text-xs">
            All projects
          </Link>
        </div>
        <div className="px-4  text-xs text-slate-400 mb-2">
          You have 4 Projects
        </div>
        <div className="w-full overflow-hidden">
          <div className="px-4  flex flex-row gap-4 bg-transparent h-36 pb-4">
            {dataProject.map((data) => (
              <Link
                to="/project"
                className="hover:scale-105 duration-200 mt-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white flex flex-col justify-between shadow-lg rounded-3xl h-full p-4 flex-1"
              >
                <div className="flex flex-row ">
                  <div>{data.name}</div>
                </div>
                <div className="text-xs flex flex-row justify-between">
                  <div className="flex flex-col-reverse text-lg">50%</div>

                  <div className="flex flex-col-reverse">Dec 25</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 mt-2 px-4 pb-4 ">
        <div className=" flex flex-col bg-gradient-to-tr from-sky-500 to-cyan-500 shadow-lg rounded-3xl p-4 pb-6 h-full w-full">
          <div className=" text-white flex flex-row justify-between">
            <Link to="/task">Schedule</Link>
            <div>December</div>
          </div>
          <div className="h-full">
            <div className="grid h-full grid-cols-7  gap-1  grid-flow-row mt-1  noScrollbar ">
              {dataTanggal.map((data) => (
                <div className="relative w-full">
                  <Link
                    className={
                      data.acara
                        ? "flex-col h-12 overflow-hidden focus:pointer-events-none focus:absolute focus:z-30 focus:bottom-0 focus:-left-20 focus:h-64 focus:w-64 focus:scale-110 focus:duration-200 shadow-md rounded-xl p-2 focus:justify-start focus:items-start focus:p-4 items-center flex bg-green-400"
                        : "flex-col h-12 overflow-hidden focus:pointer-events-none focus:absolute focus:z-30 focus:bottom-0 focus:-left-20 focus:h-64 focus:w-64 focus:scale-110 focus:duration-200 shadow-md rounded-xl p-2 focus:justify-start focus:items-start focus:p-4 items-center flex bg-white dark:bg-slate-800"
                    }
                  >
                    <div className="">{data.tanggal}</div>
                    <div className="mt-3">Menyapu</div>
                    <div className="">Menyapu</div>
                    <div className="">Menyapu</div>
                    <div className="">Menyapu</div>
                    <div className="">Menyapu</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
