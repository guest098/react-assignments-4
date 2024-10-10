import React, { useEffect, useState } from "react";
import './ProfileList.css';
import profiles from '../profiles.json'
const ProfileCard=({profile})=>{
  const [isStared,setIsStared]=useState(false);
  const handleClick=()=>{
    if(profile.id===2){
      setIsStared(!isStared);
    }
  };
  return (
      <div className="card">
         <div className="profile-image">
          <img src={profile.image} alt={profile.name}/>
             {profile.id===2 && (<div className={`star-below-image ${isStared ? "gold":""}`}onClick={handleClick}>★</div>)}
         </div>
         <h3>{profile.profession}</h3>
         <p className="rate">{profile.rate}</p> 
         <div className="profile-info">      
          <div className="profile-details">
          <p className="name">{profile.name}, {profile.age}</p>
          <p className="location">
            <span className="location-icon">
              <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
            </span>
            {profile.location}
          </p>
          <p className="description">{profile.description}</p>
         </div>
         <div className="buttons">
          <button className="btn-outline">VIEW CV</button><br/>
          <button className="btn-primary">MAKE OFFER</button>
         </div>
         <div className="status">
          {profile.status==="Online"?(<h3 className="onlinetext"><span className="online">●&nbsp;</span>Online</h3>):(<span className="offline">Last Seen:{profile.lastseen}</span>)}
         </div>
         </div>
         </div>
  );
};
const ProfileList=()=>{
    const [profileList,setProfileList]=useState([]);
    useEffect(()=>{
        setProfileList(profiles);
    },[]); 
     return (
        <div className="profile-list">
          {profileList.map(profile=>(
            <ProfileCard key={profile.id} profile={profile}/>
          ))}
        </div>
     );
};
export default ProfileList;