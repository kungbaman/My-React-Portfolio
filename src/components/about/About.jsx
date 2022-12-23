import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BiSupport} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>1 More Yrs Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

            <article className='about__card'>
              <BiSupport className='about__icon'/>
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>

          <p>
            I graduated about from English Major, my other favorite is programming. Because every time I'm programming, it's kind a beating in my mind and I'm so very excited. Before, I was the experience about IT Support more 1yrs. And I'm literate and be familiar programming language with HTML5, CSS, JavaScript, Bootstrap and React JS nowadays.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About