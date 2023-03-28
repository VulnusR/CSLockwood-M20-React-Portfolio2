import React from 'react';
import profilePic from '../assets/Imgs/pfp.JPG'

function AboutMe() {
  return (
    <div className='main-article'>
        <h2 className='page-title'>About Me</h2>
        <div className='paragraph-about'>
          <div className='pfp-parent'>
            <img className = "pfp" src= {profilePic} alt = "Caleb Lockwood"></img>
          </div>
          <div className='About-textbox'>
            <p>
              Hello, my name is Caleb Lockwood and I am a 24 year old aspiring web developer from Los Angeles, currently based in the Salt Lake City area.
              In 2022 I graduated from the University of California, Santa Barbara with a B.A. in Political Science with a concentration in American Politics and an emphasis in Philosophy and Political Theory.
              I once desired to enter into the American polical system and eventually run for political office.
              Disillusioned with the state of American politics I decided to make a career change into web development, where I would eventually like to develop websites, computer utility software, IOS applications, and more. 
              I'm friends with some more experienced programmers, and just for fun we've made some plans to develop our own computer game together, this is an area that also interests me. 
            </p>

            <p>
              I am currently enroled in the University of California, Los Angeles full-stack program where I am learning the fundementals of web development and coding principles. Prior to taking this course I did have some limited prior exerience with HTML and R, but the vast majority of coding realitively is new to me.
              I am happy to say I have learned a lot about front and back end web development over the duration of my course with UClA.
              My studies with the UCLA full-stack bootcamp progam have been difficult at times but well-worth the effort, I have learned so much in the past several months.
              I understand that this program is only an introduction to the world of programming and that it will take many years of constant practice and study to truly master programming languages, however I am commited to learning and refining my skills.
              As one expects of a new web developer I spent several hours a day in front of my computer, honing my new craft. It is well worth the effort, I am commited to keep developing my skills, and has been a very rewarding expereince. 
            </p>

            <p>
              At present I particulary enjoy developing UI systems, which so far has been my favorite aspect of web development. 
              Independely, I am exploring C and C++ mainly but I have also dabbled in the basics of Python.
              C and C++ particularly interest me because I am currently interested in simple game design--2D sprite models and such. I have some experience with pixel art and sprite design.
              Once my skills are more up to par with some friends of mine we plan to develop and indie game as a passion project.
            </p>

            <p>
              Currently and for the past 5 years I have worked as a TA at Pasadena City College, Social Science Department where I work within the Psychology wing.
              Here I work with professors to teach classes and concepts to developing students the basics of psychology, research methods, statistics & others.
              With my educational background in Political Science and work experience at PCC I have a good understanding of stastical concepts and practices.
              I hope to expand my understanding of statistical research programs like R in an effort to expand my potential in the field of research.
            </p>

            <p>
              For more information regarding what skills I have developed over the course of my program with UCLA please view my resume section of this webpage--feel free to review the portfolio of projects that I have completed as part of the program's course work.
              I am social-media adverse in general, but you can view my Github, Linkedin, and Twitter accounts by clicking on the icons at the bottom of this page--but be warned that I do not generally maintain a social media presence.
              Feel free to contact me via the contact section if you would like to get to know me further, collaberate on a project, or develop a professional relationship.
            </p>
            
          
          </div>

  
        </div>
    </div>
    
  );
}
  
export default AboutMe;