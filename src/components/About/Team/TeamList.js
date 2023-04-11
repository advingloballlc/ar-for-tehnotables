import React from 'react'

import TeamItem from './TeamItem'

const TeamList = ({ ourTeamList }) => {
  return (
    <div className="team__inner">
      { ourTeamList.map((item, index) => <TeamItem 
          imgSrc={item.photo.localFile} 
          social={{ 
            linkedin: item.socialMedia.linkedinLink, 
            twitter: item.socialMedia.twitterLink,
            facebook: item.socialMedia.facebookLink,
            instagram: item.socialMedia.instagramLink 
          }} 
          name={item.name} 
          position={item.position} 
          key={index++} 
      />) }
    </div>
  )
}

export default TeamList