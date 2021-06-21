import React from 'react';
import { faBell, faBook, faChartPie, faCog, faLightbulb, faMinus, faRibbon, faSearch, faTicketAlt, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import courseLogo from '../../logoImg/courseLogo.png';
import CourseItem from '../CourseItem/CourseItem';
import logo from '../../logoImg/d_icon_(blue).svg.png';
import userLogo from '../../logoImg/muslim-icon-15.jpg';


const availableCourse = [
    {id: 1, img: courseLogo, count: "Your first course", instructor: "By Abdul Matin"},
    {id: 2, img: courseLogo, count: "Your first course", instructor: "By Abdul Matin"},
    {id: 3, img: courseLogo, count: "Your first course", instructor: "By Abdul Matin"}
  ]

const Dashboard = () => {
    return (
        <div className="grid grid-cols-5">
      <div className="col-span-1 bg-gray-800 h-screen">
        <div className="mt-5">
          <div className="ml-8 flex space-x-1">
            <img className="h-8 w-8 rounded-full" src={logo} alt="" />
            <p className="text-gray-300 text-xl">Deep learn</p>
          </div>
        </div>
        <div className="mt-10">
          <a href="/" className=" text-gray-300 bg-gray-600 border-l-2 border-gray-100 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faChartPie} /> Overview</a>
          <a href="/" className=" text-gray-300 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faTicketAlt} /> Sales</a>
          <a href="/" className=" text-gray-300 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faLightbulb} /> Ideas</a>
          <a href="/" className=" text-gray-300 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faUsers} /> Users</a>
          <a href="/" className=" text-gray-300 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faUserTie} /> Agents</a>
          <a href="/" className=" text-gray-300 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faBook} /> Docs</a>
          <div className="border-b border-gray-600 mt-5 mb-5"></div>
          <a href="/" className=" text-gray-300 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faCog} /> Settings</a>
          <a href="/" className=" text-gray-300 block py-3 px-8 text-lg"><FontAwesomeIcon className="mr-1" icon={faRibbon} /> Certificates</a>
        </div>
      </div>

      <div className="col-span-4 p-10 pt-5 h-full">

        <div className="flex items-center justify-between pb-3">
          <p className="text-xl text-gray-700 font-semibold">Overview</p>
          <div className="ml-36 border-b border-gray-300">
            <input className="w-96 pt-2 pb-2 border-none focus:outline-none px-3" type="text" />
            <FontAwesomeIcon className="text-gray-300 mr-3" icon={faSearch} />
            <FontAwesomeIcon className="text-gray-300 mr-3" icon={faBell} />
          </div>
          <div className="border-r border-gray-300 h-8"></div>
          <div className="flex items-center justify-around space-x-3">
            <p className="text-gray-700">Umar Faruq</p>
            <img className="h-8 w-8 rounded-full" src={userLogo} alt="" />
          </div>          
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-4 space-x-4">
            <div className="text-center border border-gray-300 rounded-md shadow p-8">
              <p className="text-gray-700 font-semibold text-xl">Courses</p>
            </div>
            <div className="text-center border border-gray-300 rounded-md shadow p-8">
              <p className="text-gray-700 font-semibold text-xl">Membership</p>
            </div>
            <div className="text-center border border-gray-300 rounded-md shadow p-8">
              <p className="text-gray-700 font-semibold text-xl">Patron</p>
            </div>
            <div className="text-center border border-gray-300 rounded-md shadow p-8">
              <p className="text-gray-700 font-semibold text-xl">Bundles</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="">
            <p className="text-gray-700 text-xl font-semibold">Showing Courses</p>
            <div className="flex justify-between">
              <p className="text-gray-400 text-sm">Upgrade to the basic plan now to get unlimited courses</p>
              <div className="space-x-4">
                <a href="/"><FontAwesomeIcon className="text-xs" icon={faMinus} /> Running</a>
                <a href="/"><FontAwesomeIcon className="text-xs" icon={faMinus} /> Draft</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex space-x-8">
          {
            availableCourse.map(course => <CourseItem key={course.id} course={course}></CourseItem>)
          }
        </div>

      </div>
    </div>
    );
};

export default Dashboard;