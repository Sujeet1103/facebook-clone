import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";


function Profile() {
  

  const handlePlaySong = ()=>{
    let audio = new Audio()
    audio.src="/facebook-clone/public/O Mahi O Mahi(PagalWorld.com.sb).mp3"
    audio.play()
    console.log(audio)
  }
    return (
    <div className="profile">
      <Topbar />
      <div className="fbIcon">
        <Link  to="/" style={{textDecoration:'none'}}>
        <img height='60px' src={"../images/icon.png"} alt="" />
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileCenter">
          <div className="profileCenterTop">
            <img
              src={"../images/coverpic.jpeg"}
              alt="coverphoto"
              className="coverPhoto"
            />
            <button className="editCoverPhotoBtn">
              <CameraAltIcon />
              <b>Edit <span className="editPicText">Cover Photo</span></b>
            </button>
          </div>
          <div className="profileCenterDown" onClick={handlePlaySong}>

            <div className="profileCenterDownCont">
              <div className="profilePhotoCont">
                <img
                
                  src={"../images/person/1.jpeg"}
                  alt="profiephoto"
                  className="profilePhoto"
                />
              </div>
              <h4 className="profileUsername">
                Adamya Pathak{" "}
                <p style={{ fontSize: "16px", margin: "0", opacity: "0.5" }}>
                  50K friends
                </p>
              </h4>
            </div>
          </div>
        </div> 

        <div className="profileBottom">
          <div className="profileBottomLeft">
            <div className="profileUserInfo">
              <h4 style={{ position:'absolute',top:'50px',marginLeft:'5px'}}>Intro</h4>
              <pre>
                {
             `             
     🎉🎉W€|©°m€❤🎉🎉
  😊😊
   ♥[Cricket Lover]♥
   
     🆈🆃🅱 🅻🅸🅽🅺:-
https://www.youtube.com/c/FutureTechnical88
             `
                }
              </pre>
           
      <button type="button" className="editBioButton"><b>Edit Bio</b></button>
            </div>
            <div className="profileMutualFriendCont">
              <h4
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "5px",
                  margin: "0",
                }}
              >
                Mutual Friends
              </h4>
              {Users.filter(function (user) {
                return user.id > 1 && user.id <= 7;
              }).map(function (user) {
                return (
                  <div key={user.id} className="mutualFriend">
                    <img
                      className="profileMutualFriendImg"
                      src={user.profilePicture}
                      alt=""
                    />
                    <span className="profileMutualFriendName">
                      {user.username}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="profileBottomRight">
            <Feed className="profileFeed" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;