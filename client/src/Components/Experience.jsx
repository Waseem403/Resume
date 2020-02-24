import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import { Typography } from "@material-ui/core";

export default function Experience() {
  return (
    <React.Fragment>
      <Typography variant="h4" align="center" gutterBottom>
        Work experience & Education
      </Typography>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2018 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2 className="vertical-timeline-element-title">LRN Co-opertion</h2>
          <h4 className="vertical-timeline-element-subtitle">
            Junior Web Developer
          </h4>
          <p>
            I have 1.5 years of work experience as junior web developer.
            Currently working at LRN, Work mostly on front end technologies
          </p>
          <ul>
            <li>
              JavaScript,Ajax,Json,XML,Redux,Fetch Api,Axios Api.
            </li>
            <li>
            HTML5,CSS3,Bootstrap, material design (Google),Material UI.
            </li>
            <li>
            React Js.jQuery and other Js libraries
            </li>
            <li>
            NPM,GIT,Github,Postman,React dev tool,Redux dev tool,
            </li>
            <li>
              Node js, Express js,Mongodb
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2016 - Jan 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">NIIT</h2>
          <h4 className="vertical-timeline-element-subtitle">
            Full stack development diploma course
          </h4>
           <p>
           I had completed my B.tech with 62% from jntua ananthapur university
           </p>
          <p>
            <ul>
              <li>
                <strong>Degree</strong>: Post graduation diploma
              </li>
              <li>
                <strong>University/School</strong> : NIIT
              </li>
               <li>
              <strong>Programming lang</strong> : JavaScript ,React js ,Redux, Node js, Express js, Ajax, Json, axios 
              Ms sql, MongoDB,HTML5,CSS3, Bootstrap, material design (Google),Material UI.
               </li>
               <li>
                <strong>Dev Tools </strong>:Eclipse,NPM,GIT,Github,Postman,React dev tool,Redux dev tool,
               </li>
               <li>
                 <strong>IAAS Platforms </strong> : Heroku, Google App Engine.
               </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2012 - Apr 2016"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            Bheema institute of technology and science
          </h2>
          <h4 className="vertical-timeline-element-subtitle">B.Tech</h4>
          <p>User Experience, Visual Design</p>
            <ul>
              <li>
                <strong>Degree</strong> : B.Ed
              </li>
              <li>
                <strong>University</strong> : JNTU(Ananthapuram)
              </li>
              <li>
                <strong>College</strong> : Bheema institute of technology and science
              </li>
              <li>
                <strong>Branch/specialization</strong> : Electronics & Communication Engineering
              </li>
              <li>
                <strong>Percentage %</strong> : 61.96%
              </li>
              <li>
                <strong>Passout Year </strong> : 2016
              </li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2010 - Mar 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            Vishwanarayana junior college
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            Higher secondary school certificate
          </h4>
          <p>User Experience, Visual Design</p>
          <ul>
              <li>
                <strong>Degree</strong> : Higher secondary school certificate
              </li>
              <li>
                <strong>University</strong> : State Board
              </li>
              <li>
                <strong>College</strong> : Vishwanarayana junior college
              </li>
              <li>
                <strong>Branch/specialization</strong> : Maths,Physics,Chemistry(MPC)
              </li>
              <li>
                <strong>Percentage %</strong> : 77%
              </li>
              <li>
                <strong>Passout Year </strong> : 2012
              </li>
            </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun 2006 - Mar 2010"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h2 className="vertical-timeline-element-title">
            Municipal High School
          </h2>
          <h4 className="vertical-timeline-element-subtitle">
            Secondary school certificate
          </h4>
          <p>Strategy, Social Media</p>
          <ul>
              <li>
                <strong>Degree</strong> : Secondary school certificate
              </li>
              <li>
                <strong>University</strong> : State Board
              </li>
              <li>
                <strong>School</strong> : Municipal High School
              </li>
              <li>
                <strong>Branch/specialization</strong> : State Board
              </li>
              <li>
                <strong>Percentage %</strong> : 56%
              </li>
              <li>
                <strong>Passout Year </strong> : 2010
              </li>
            </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}
