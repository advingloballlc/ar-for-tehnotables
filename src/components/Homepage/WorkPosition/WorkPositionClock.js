import React, { useEffect, useRef } from 'react'

import { isBrowser } from '../../../utils/isBrowser'

import clock from "../../../images/clock.svg";

const WorkPositionClock = () => {
  const deg = 6
  const clockArrow = useRef()

  const setClock = () => {
    let day = new Date()
    let seconds = day.getSeconds() * deg

    clockArrow.current.style.transform = `translate(-50%, -100%) rotate(${seconds}deg)`
  };

  useEffect(() => {
    setClock()
    let clockTimer =  isBrowser() && setInterval(setClock, 1000)

    return () => {
      isBrowser() && clearInterval(clockTimer)
    }
  }, [])

  return (
    <div className="work-position__clock">
      <img src={clock} alt=""/>
      <div className="work-position__clock-arrow" ref={clockArrow}>
        <svg width="4" height="142" viewBox="0 0 4 142" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0H3L4 142H0L1 0Z" fill="#E7E7E7"/>
        </svg>
      </div>
    </div>
  )
}

export default WorkPositionClock