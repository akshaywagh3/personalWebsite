import React from 'react'
import './Projects.css';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const projectDetail=[
    {
      id:1,
      name:'QuoteGenerator',
      details:'Created Quote generator website.Created array of obects containing quotes and using mapping and javascript displayed them.',
      tech:'HTML,CSS,Javascript',
      link:'https://github.com/akshaywagh3/QuoteGenerator',
      level:'beginner'
    },
    {
      id:2,
      name:'UserAdder',
      details:'Created website for user addition.Used react and practiced working of some hooks.',
      tech:'html,css,ReactJs',
      link:'https://github.com/akshaywagh3/userAdder',
      level:'beginner'
    },
    {
      id:3,
      name:'Stopwatch',
      details:'Created Stopwatch using html,css and javascript added buttons for stop start and reset features. ',
      link:'https://github.com/akshaywagh3/stopwatch',
      tech:'HTML,CSS,Javascript',
      level:'medium'
    },
    {
      id:4,
      name:'Investment Calculator',
      details:'Created investment Calculator with React Js created mathematical formulas to finding the correct calculations.',
      tech:'html,css,Reactjs',
      link:'https://github.com/akshaywagh3/investmentCalculator',
      level:'medium'
    },
  ]
  
  return (
    <>
      <div className='class'>
          <h1>My Projects</h1>
          <ul className='projects'> 
            {projectDetail.map((project)=>(
              <li key={project.id}>
                <h2>{project.name}</h2>
                <h4>{project.details}</h4>
                <h4>Tech Used: {project.tech}</h4>
                <NavLink to={project.link}><button>Github Link</button></NavLink>
              </li>
            ))}
          </ul>
      </div>
    </>
    
  )
}

export default Projects