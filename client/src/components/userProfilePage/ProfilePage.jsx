import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Heatmap from "./Heatmap";
import ApexChart from "./questionProgress/PieChart";
import CircularProgress from "./questionProgress/CircularProgress";
import DifficultyProgressBar from "./questionProgress/DifficultyProgressBar";
import GlobalContext from "../../context/GlobalContext";
import useUserDetails from "../hooks/useUserDetails";
import EditProfileModal from "./EditProfileModal";
import ProblemContext from "../../context/ProblemContext";

const ProfilePage = () => {
  const { username } = useParams();
  const { user, loading } = useUserDetails(username);
  // console.log(user);
  const { problems } = useContext(GlobalContext);
  const { statusList, attemptedList } =
    useContext(ProblemContext);
  const [topics, setTopics] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    // console.log("Modal Test");
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // console.log(username);
  const wrongSubmissions = 15;
  const correctSubmissions = 32;
  useEffect(() => {
    const topicSet = new Map();
    const topicTemp = user?.problemsSolved
      ?.filter((problem) => problem.testCasesPassed === problem.totalTestCases)
      ?.map((problem) => problem.problem.tags);
    topicTemp?.forEach((topic) => {
      topic?.forEach((tag) => {
        if (topicSet.has(tag)) {
          topicSet.set(tag, topicSet.get(tag) + 1);
        } else {
          topicSet.set(tag, 1);
        }
      });
    });
    // console.log(topicSet);
    setTopics(Array.from(topicSet).map(([name, count]) => ({ name, count })));

    const languageSet = new Map();

    const languageTemp = user?.problemsSolved
      ?.filter((problem) => problem.testCasesPassed === problem.totalTestCases)
      .map((problem) => problem.language);
    languageTemp?.forEach((language) => {
      if (languageSet.has(language)) {
        languageSet.set(language, languageSet.get(language) + 1);
      } else {
        languageSet.set(language, 1);
      }
    });
    // console.log(languageSet);
    setLanguages(
      Array.from(languageSet).map(([name, count]) => ({ name, count }))
    );
  }, [user]);

  // console.log(user?.problemsSolved);
  const easySolved = user?.problemsSolved?.filter(
    (problem) =>
      problem.problem.difficulty === "Easy" &&
      problem.testCasesPassed === problem.totalTestCases
  ).length;
  const mediumSolved = user?.problemsSolved?.filter(
    (problem) =>
      problem.problem.difficulty === "Medium" &&
      problem.testCasesPassed === problem.totalTestCases
  ).length;
  const hardSolved = user?.problemsSolved?.filter(
    (problem) =>
      problem.problem.difficulty === "Hard" &&
      problem.testCasesPassed === problem.totalTestCases
  ).length;
  const codeScore = easySolved * 1 + mediumSolved * 3 + hardSolved * 5;
  const easyTotal = problems.filter(
    (problem) => problem.difficulty === "Easy"
  ).length;
  const mediumTotal = problems.filter(
    (problem) => problem.difficulty === "Medium"
  ).length;
  const hardTotal = problems.filter(
    (problem) => problem.difficulty === "Hard"
  ).length;
  const questionsTrack = {
    totalQuestions: {
      total: problems.length,
      solved: easySolved + mediumSolved + hardSolved,
    },

    easy: { total: easyTotal, solved: easySolved },
    medium: { total: mediumTotal, solved: mediumSolved },
    hard: { total: hardTotal, solved: hardSolved },
  };
  const calculatePercentage = (count, total) => {
    return (count / total) * 100;
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  function toDate(submittedOn) {
    const timestamp =
      submittedOn._seconds * 1000 + submittedOn._nanoseconds / 1000000;
    const date = new Date(timestamp);
    const now = new Date();

    const diffInMillis = now - date;
    const diffInSeconds = Math.floor(diffInMillis / 1000);

    if (diffInSeconds < 60) {
      return "Just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  }
  // console.log(statusList, attemptedList);
  // console.log(statusList.length, attemptedList.length);
  return (
    <>
      {modalIsOpen && <EditProfileModal />}
      <div className="">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div className="bg-gray-800 p-3 border-t-4 border-green-400 rounded-lg">
                <div className="image overflow-hidden border-bottom">
                  <img
                    className="h-52 w-52 rounded-full mx-auto border-x-gray-300 border-y-gray-800 border-4"
                    src={`https://api.dicebear.com/7.x/bottts/svg?seed=${localStorage.getItem(
                      "username"
                    )}`}
                    alt=""
                  />
                </div>
                <div className="relative">
                  {/* <h2 className="absolute right-0  p-2">
                    <span className="text-green-600 ">Rank</span>{" "}
                    <span className="text-green-400 font-semibold">23</span>
                  </h2> */}
                </div>
                <h1 className="text-white font-bold text-xl leading-8 my-1 uppercase">
                  {user?.name}
                </h1>
                <p className="text-sm text-gray-200 hover:text-gray-100 leading-6">
                  {user?.userDescription}
                </p>
                <div className="flex items-center mt-4 text-gray-400">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                    <g>
                      <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
                    </g>
                  </svg>
                  <h1 className="px-2 text-sm">{user?.designation}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-400">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                  </svg>
                  <h1 className="px-2 text-sm">{user?.location}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-400">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                  </svg>
                  <h1 className="px-2 text-sm">{user?.email}</h1>
                </div>
                <button
                  className="w-full cursor-pointer text-white bg-green-500 hover:bg-green-600 py-2 px-3 mt-3 rounded shadow-sm text-center"
                  onClick={openModal}
                >
                  <i className="fa-solid fa-pen mr-2" />
                  Edit Profile
                </button>
                {modalIsOpen && (
                  <EditProfileModal
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                  />
                )}
                {/* <div className="cursor-pointer text-white bg-green-500 hover:bg-green-600 py-2 px-3 mt-3 rounded shadow-sm text-center">
                  <i className="fa-solid fa-pen mr-2"></i>Edit Profile
                </div>
                <EditProfileModal
                  isOpen={modalIsOpen}
                  closeModal={closeModal}
                /> */}
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
              {/* <!-- Topics card --> */}
              <div className="bg-gray-800 p-3 hover:shadow rounded-lg">
                <div className="flex items-center space-x-3 font-semibold text-white text-xl leading-8 mb-4">
                  <span className="text-green-500">
                    <i className="fa-solid fa-list-check"></i>
                  </span>
                  <span>Topics</span>
                </div>
                {topics.map((topic, index) => (
                  <span className="mr-4 leading-10 inline-block" key={index}>
                    <span className="px-2 py-1 bg-gray-600 rounded text-main-color">
                      {topic.name}
                    </span>
                    <span> x {topic.count}</span>
                  </span>
                ))}
              </div>
              {/* <!-- End of Topics card --> */}
              <div className="my-4"></div>
              {/* <!-- Languages card --> */}
              <div className="bg-gray-800 p-3 hover:shadow rounded-lg">
                <div className="flex items-center space-x-3 font-semibold text-white text-xl leading-8 mb-4">
                  <span className="text-green-500">
                    <i className="fa-solid fa-code"></i>
                  </span>
                  <span>Languages</span>
                </div>
                {languages.map((language, index) => (
                  <div className="mb-2  flex flex-row">
                    <div className="px-2 py-1 bg-gray-600 rounded text-main-color">
                      {language.name}
                    </div>
                    <div className="ml-auto">
                      {" "}
                      {language.count} problems solved
                    </div>
                  </div>
                ))}
              </div>
              {/* <!-- End of Languages card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div className="my-4"></div>

            <div className="w-full md:w-9/12 mx-2 h-64">
              {/* <!-- Progress tab --> */}

              {/* <!-- Question progress --> */}

              <div className="flex flex-row bg-gray-1000">
                <div className="bg-gray-800 p-3 shadow-sm rounded-lg mr-2 flex">
                  <div className="flex justify-between">
                    {/* <!-- Circular Progress Bar --> */}
                    <div className="my-auto">
                      <CircularProgress
                        calculatePercentage={calculatePercentage}
                        solved={questionsTrack.totalQuestions.solved}
                        total={questionsTrack.totalQuestions.total}
                      />
                    </div>
                    <div className=" my-auto rounded flex-col">
                      <div className="w-[200px]  bg-slate-700 mb-3 rounded px-2 py-2 ">
                        Coding Score: {codeScore}
                      </div>
                      <div className="w-[200px] bg-slate-700 mt-3 rounded px-2 py-2 text-sm ">
                        <div className="text-green-400">
                          Accepted Submissions: {statusList.length}
                        </div>
                        <div className="text-red-400">
                          Wrong Submissions: {attemptedList.length}
                        </div>
                      </div>
                    </div>
                    {/* <!-- Circular Progress Bar End --> */}
                  </div>
                </div>

                <div className="bg-gray-800 p-3 shadow-sm rounded-lg flex ml-2 w-full">
                  {/* <!-- Difficulty Pie Chart --> */}
                  <div className="my-auto mx-[-30px] ">
                    <ApexChart
                      easy={questionsTrack.easy.solved}
                      medium={questionsTrack.medium.solved}
                      hard={questionsTrack.hard.solved}
                    />
                  </div>
                  {/* <!-- Difficulty Pie Chart End --> */}
                  {/* <!-- Difficulty Progress Bar --> */}
                  <div className="flex-1">
                    <DifficultyProgressBar
                      questionsTrack={questionsTrack}
                      calculatePercentage={calculatePercentage}
                    />
                  </div>
                  {/* <!-- Difficulty Progress Bar End --> */}
                </div>
              </div>

              {/* <!-- Question progress End --> */}

              <div className="my-4"></div>

              {/* <!-- Heat map --> */}
              <div className="bg-gray-800 p-3 shadow-sm rounded-lg mt-5">
                <Heatmap heatmapData={user?.heatmapData} />
              </div>

              {/* <!-- List of solved question --> */}
              <div className="bg-gray-800 p-3 shadow-sm rounded-lg mt-5">
                <div className="grid ">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Problem
                          </th>

                          <th scope="col" className="px-6 py-3">
                            Difficulty
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Submiited on
                          </th>
                        </tr>
                      </thead>
                      {/* <tbody> */}
                      <tbody>
                        {user?.problemsSolved
                          ?.sort(
                            (a, b) =>
                              b.submittedOn._seconds - a.submittedOn._seconds
                          )

                          .map(({ problem, submittedOn }, index) => (
                            <tr
                              key={index}
                              className={`border-b hover:text-green hover:bg-gray-800 ${
                                index % 2 === 0
                                  ? "bg-gray-800"
                                  : "bg-neutral-900"
                              }  `}
                            >
                              <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                <Link
                                  to={`/problems/ ${problem.id}`}
                                  className="hover:text-blue-600"
                                >
                                  {problem.title}
                                </Link>
                              </td>

                              <td
                                className={`text-sm font-light px-6 py-4 whitespace-nowrap ${
                                  problem.difficulty === "Easy"
                                    ? "text-green-500"
                                    : problem.difficulty === "Medium"
                                    ? "text-yellow-500"
                                    : "text-red-500"
                                }`}
                              >
                                {problem.difficulty}
                              </td>
                              {submittedOn && (
                                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                  {toDate(submittedOn)}
                                </td>
                              )}
                            </tr>
                          ))}
                      </tbody>
                      {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple MacBook Pro 17"
                          </th>
                          <td className="px-6 py-4">Silver</td>
                          <td className="px-6 py-4">Laptop</td>
                        </tr>

                        <tr>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple Watch 5
                          </th>
                          <td className="px-6 py-4">Red</td>
                          <td className="px-6 py-4">Wearables</td>
                        </tr> */}
                      {/* </tbody> */}
                    </table>
                  </div>
                </div>
                {/* <!-- End of List of solved question grid --> */}
              </div>

              {/* <!-- End of Progress tab --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
