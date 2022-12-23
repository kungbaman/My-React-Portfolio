import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrFacebook} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/natchapol-kamonchanoktham-551b18190/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/kungbaman" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/kungbaman" target="_blank"><GrFacebook /></a>
    </div>
  )
}

export default HeaderSocials