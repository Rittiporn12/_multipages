import React from 'react';
import Student from '../../assets/stdempimg.jfif'
import './Home.css';

const StudentProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-photo">
          <img src={Student} alt="Student" style={{ backgroundSize: 'cover', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}/>
          <p className='profile-all'><b>RITTIPORN PHUNGPHAI</b></p>
          <p className='profile-about'>
            <b>Student ID:</b> 66088346 <br />
            <br />
            <b>Subject:</b> CSI205 <br />
            <br />
            <b>Section:</b> 001 <br />
            <br />
            <b>University:</b> Sripatum
          </p>
        </div>

        <div className="profile-info">
          <div className="general-info">
            <h3><b>Information</b></h3>
            <table>
              <tbody>
                <tr>
                  <td>Nickname</td>
                  <td>Earth</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Birth of Date</td>
                  <td>03/06/2004</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>Religion</td>
                  <td>Buddhism</td>
                </tr>
                <tr>
                  <td>Blood</td>
                  <td>O</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="other-info">
            <h3><b>Other Information</b></h3>
            <p>I am a person who always likes to learn new things, likes to socialize, likes to eat Thai food such as tom yum kung. Foreign food, likes to eat pizza, is a programming person.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
