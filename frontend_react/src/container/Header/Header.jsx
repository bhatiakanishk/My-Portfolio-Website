import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1, ease: 'easeInOut'
    }
  }
}

function Header() {
  return (
    <div className="app__header app__flex" >
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} 
      transition={{ duration: 0.75}} className="app__header-info">
        <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Kanishk Bhatia</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Master's Student</p>
          <p className="p-text">Northeastern University</p>
          <p className="p-text">Looking for a full-time job</p>
        </div>
      </div>
      </motion.div>
      
      <motion.div whileInView={{ opacity: [0, 1] }} 
      transition={{ duration: 0.75, delayChildren: 0.75 }} className="app__header-img">
        <img src={images.profile} alt="profile_bg" />
        <motion.img whileInView={{ scale: [0, 1] }} 
        transition={{ duration: 1.25, ease: 'easeInOut' }} src={images.circle} alt="profile_circle" className="overlay_circle" />
      </motion.div>

      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView}
      className="app__header-circles">
        {[images.react, images.swift, images.aws].map((circle, index) =>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')