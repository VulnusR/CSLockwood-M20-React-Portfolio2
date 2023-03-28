import React from 'react';
import Project from './Project.js';
import MovieFinder from './assets/Imgs/MovFinder.png'
import WorkWrangler from './assets/Imgs/WorkWranglerSS.png';



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
          />
         
        </div>
        <div className='portfolio-col-2'>
          <Project
            picture={WorkWrangler}
            alt='Work Wrangler Log in page'
            description='Work-Wrangler'
            link='https://work-wrangler.herokuapp.com/login'
          />
         
        </div>
      </div>
    </div>
  );
}

export default Portfolio;