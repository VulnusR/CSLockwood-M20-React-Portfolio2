import React from 'react';
import Project from './Project.js';
import MovieFinder from '../assets/Imgs/MovFinder.png'
import WorkWrangler from '../assets/Imgs/WorkWranglerSS.png';
import eTracker from '../assets/Imgs/EmployeeTracker.png';
import dREADME from '../assets/Imgs/DynamicREADME.png'
import picnic from '../assets/Imgs/Picnicweather.png'
import randomPass from '../assets/Imgs/Randompass.png'



function Portfolio() {
  return (
    <div className='main-article'>
      <h2 className='page-title'>Portfolio</h2>
      <div className='portfolio-parent'>
        <div className='portfolio-col-1'>
          <Project
            picture={MovieFinder}
            alt='Movie Finder Homepage'
            description='MovieFinder is an application that recommends movie based on user input--showing trailers, related media, and reviews.'
            repo="https://github.com/VulnusR/MovieFinder-TM"
            link='https://kabdomora.github.io/MovieFinder-TM/'
            h4="MovieFinder"
          />

          <Project
            picture={eTracker}
            alt='Employee Tracker Program on Boot-up'
            description='Employee Tracker is a backend application that allows a user to manage multiple levels of employees, departments, and more. Since this is a back-end application, there is no deployed link but you can use the program by forking the repo and following the README instructions.'
            repo="https://github.com/VulnusR/CSLockwood-M12-EmployeeTrackerCMS"
            h4="Employee Tracker"
          />    

          <Project
            picture={dREADME}
            alt='A README file generated used the Dynamic README program'
            description='Dynamic README is a backend program that can be used to dynamically generate README files for projects. Since this is a back-end application it is not deployed, you can use this program by forking the repo and following the README instructions.'
            repo="https://github.com/VulnusR/CSLockwood-M9-DynamicREADME"
            h4="Dynamic README"
          />
         
        </div>
        <div className='portfolio-col-2'>
          <Project
            picture={WorkWrangler}
            alt='Work Wrangler Log in page'
            description='Work-Wrangler is a time management tool used to plan projects and allocate time to them in an efficent manner, allowing users to track how much time has been expended on a task.'
            link='https://work-wrangler.herokuapp.com/login'
            repo="https://github.com/VulnusR/Personal-Task-Manager"
            h4="Work Wrangler"
          />

          <Project
            picture={picnic}
            alt='A picture of the Picnic Weather program.'
            description='Picnic Weather allows users to view weather forecasts, it saves data of cities requested allowing a user to more easily account for the weather conditions of a multi-destination trip'
            link='https://vulnusr.github.io/CSLockwood-M6-PicnicWeather/'
            repo="https://github.com/VulnusR/CSLockwood-M6-PicnicWeather"
            h4="Picnic Weather"
          />

          <Project
            picture={randomPass}
            alt='The RandomPass random password generator.'
            description='RandomPass is a random password generator that can be adjusted for multiple settings to fit the requirements and needs of the user.'
            link='https://vulnusr.github.io/CSLockwood-M3-Randompass/'
            repo="https://github.com/VulnusR/CSLockwood-M3-Randompass"
            h4="RandomPass"
          />
         
        </div>
      </div>
    </div>
  );
}

export default Portfolio;