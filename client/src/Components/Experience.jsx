import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
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
          <h2 className="vertical-timeline-element-title">Cognizant Technology Solutions</h2>
          <h4 className="vertical-timeline-element-subtitle">
            Senior software-dev(level-3) - May 2021 to till date
          </h4>
          <p>
            Below are my roles & Responsibilities
          </p>

          <ul>
            <li>
            Responsible for maintaining and developing the front end application.
            </li>
            <li>
            Responsible for implementing user stories as per the business requirements.
            </li>
            <li>
            Responsible for fixing issues and bugs raised by QA team.
            </li>
            <li>
            Handling the IVR(interactive voice response) module.
            </li>
            <li>
              Monitoring the production logs and fixing the issues for better user experience.
            </li>
            <li>
              Work with CTI(call transfer interface) team. Integrate and merge the latest code 
              into our application for stable release.
            </li>
            <li>
             Ensuring to write good quality and reusable code to avoid bugs and issues.
            </li>
            <li>
            Closely collaborated with project members to identify and quickly address problems.
            </li>
            <li>
            Responsible for unit testing and debugging.
            </li>
            <li>
            Provide the daily updates to project managers and stakeholders.
            </li>
          </ul>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2018 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2 className="vertical-timeline-element-title">Cognizant Technology Solutions</h2>
          <h4 className="vertical-timeline-element-subtitle">
            Programmer Analyst - January 2021 to April 2022
          </h4>
          <p>
            Below are my roles & Responsibilities
          </p>

          <ul>
            <li>
            Responsible for maintaining and developing the front end application.
            </li>
            <li>
            Responsible for implementing user stories as per the business requirements.
            </li>
            <li>
            Responsible for fixing issues and bugs raised by QA team.
            </li>
            <li>
            Handling the IVR(interactive voice response) module.
            </li>
            <li>
              Monitoring the production logs and fixing the issues for better user experience.
            </li>
            <li>
              Work with CTI(call transfer interface) team. Integrate and merge the latest code 
              into our application for stable release.
            </li>
            <li>
             Ensuring to write good quality and reusable code to avoid bugs and issues.
            </li>
            <li>
            Closely collaborated with project members to identify and quickly address problems.
            </li>
            <li>
            Responsible for unit testing and debugging.
            </li>
            <li>
            Provide the daily updates to project managers and stakeholders.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2018 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h2 className="vertical-timeline-element-title">LRN Co-opertion</h2>
          <h4 className="vertical-timeline-element-subtitle">
            Junior Web Developer - September 2019 to January 2021
          </h4>
          <p>
            I have 2.5 years of work experience as junior web developer.
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
            I had completed my full stack development course from NIIT(dadar).
           </p>
    
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
          <p>I had completed my graduation in the year 2016 with 62%</p>
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
                <strong>Percentage %</strong> : 62%
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
          <p>I had completed my intermediate in the year 2012 with 77%</p>
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
          <p>I had completed my SSC in the year 2010 with 56%</p>
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
