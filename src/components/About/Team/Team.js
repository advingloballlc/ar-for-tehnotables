import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import './Team.scss'

import TeamList from './TeamList'
import TeamSlider from './TeamSlider'

import sprite from '../../../icons/sprite.svg'

const Team = ({ ourTeamTitle, ourTeamList, team }) => {
  let [ isHiddenSlider, setHiddenSlider ] = useState(true)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let teamTl = null

    ScrollTrigger.matchMedia({
      '(min-width: 769px)': () => {
        setHiddenSlider(true)

        teamTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.team',
            start: 'center bottom'
          }
        })

        teamTl
          .from('.team__title', .5, { y: '100%', onComplete() {
            teamTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.team-item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
            teamTl.set(this.targets(), { clearProps: 'all' })
          }})
      },
      '(min-width: 481px) and (max-width: 768px)': () => {
        setHiddenSlider(false)

        teamTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.team',
            start: 'center bottom'
          }
        })

        teamTl
          .from('.team__title', .5, { y: '100%', onComplete() {
            teamTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.team-slider__nav > *', .5, { scale: 0, stagger: .1, ease: 'back', onComplete() {
            teamTl.set(this.targets(), { clearProps: 'all' })
          }})
      },
      '(max-width: 480px)': () => {
        setHiddenSlider(true)

        teamTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.team',
            start: '200px bottom'
          }
        })

        teamTl
          .from('.team__title', .5, { y: '100%', onComplete() {
            teamTl.set(this.targets(), { clearProps: 'all' })
          }})
          .from('.team-item', .6, { y: 100, opacity: 0, stagger: .1, onComplete() {
            teamTl.set(this.targets(), { clearProps: 'all' })
          }})
      }
    })

    return () => {
      teamTl.kill()
    }
  }, [])

  return (
    <section className="team">
      <div className="container">
        <div className="team__top">
          <div className="team__title-wrapper title-wrapper">
            <div className="team__title title title--small">{ourTeamTitle}</div>
          </div>
          <div className="team-slider__nav">
            <div className="team-slider__btn team-slider__prev">
              <svg><use href={`${sprite}#prev-arrow`} /></svg>
            </div>
            <div className="team-slider__btn team-slider__next">
              <svg><use href={`${sprite}#next-arrow`} /></svg>
            </div>
          </div>
        </div>
        { isHiddenSlider && <TeamList ourTeamList={ourTeamList} /> }
        { !isHiddenSlider && <TeamSlider ourTeamList={ourTeamList} team={team} /> }
      </div>
    </section>
  )
}

export default Team