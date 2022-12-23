import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio7.png'
import IMG2 from '../../assets/portfolio8.jpg'
import IMG3 from '../../assets/portfolio9.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>E-Commerce Website by React/Redux</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kungbaman/E-Commerce-Website-React-Redux" className='btn' target='_blank'>Github</a>
            <a href="https://ecommerce-natchapol-dev.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is my portfolio website by React</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="https://reactportfolio-natchapol.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My portfolio website (Dark/Light Mode)</h3>
          <div className="portfolio__item-cta">
            <a href="#" className='btn' target='_blank'>Github</a>
            <a href="https://myportfolio-natchapol.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>My family business website (Bootstrap)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kungbaman/my-family-business-bootstrap" className='btn' target='_blank'>Github</a>
            <a href="https://namwhanshop375.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Shopping Cart by React/Redux</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kungbaman/ShoppingCart-Redux" className='btn' target='_blank'>Github</a>
            <a href="https://reduxlogic-project-natchapol.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio