import React from 'react';
import "../styles/resume.css"
const Resume = () => {
  
return (
  <>
  <body>
    <h1>resume</h1>
    <div class="resume">
    <h3> Click <a href="https://drive.google.com/file/d/1z_6UkB4gHfvOMoE4RmYI0dvGG2IZyDUa/view?usp=sharing" target="_blank">here</a> to see my resume. </h3>
      <div class="category"> work experience </div>
        <div class ="title"> Offensive Security Researcher - Intel <span class="date"> Summer 2023</span></div> 
          <div class = "description"> This summer, I worked on the Intel Product Assurance and Security team doing hardware
          security research. My work was focused on software-accessible power side channels and frequency throttling side channels. 
          Much of my internship was focused on expanding the functionality of internal validation and threat analysis software tool using C++.<br/>
          <b>Skills: C++, VMs, hardware security, cryptography, side-channels, research</b>
        </div>
        <div class ="title"> COS 226 Precept Assistant - Princeton CS <span class="date"> January 2022-May 2023</span></div> 
          <div class = "description"> For the past 3 semesters, I have been on the course staff for COS 226, Princeton's data structures and algorithms course.
          Some topics covered are searching, sorting, trees, graph algorithms, and more. As a precept assistant, I attend weekly precepts and help students on
           course material as they work through practice exercises or assisgnments. This has been a great way for me to help younger students discover their passion for CS.<br/>
          <b>Skills: Java, data stuctures, algorithms, teaching, complexity</b>
        </div>
        <div class ="title"> Researcher - Princeton-Intel REU <span class="date"> Summer 2022</span></div> 
          <div class = "description"> Last summer, I conducted research along under Professor Malik and his graduate students 
          in the Princeton Electrical and Computer Engineering Department. I worked on Sequestered Encryption, a hardware 
          solution meant to sequester sensitive data more effectively than secure enclaves like Intel SGX. Using Chisel, I implemented a 
          multiplier design with purposeful timing side channels to test the validity of formal verifcation systems. <br/>
          <b>Skills: Chisel, Scala, hardware security, research</b>
        </div>
        <div class ="title"> Intern - Zeus LN <span class="date"> Summer 2021</span></div> 
          <div class = "description"> The summer after my freshman year, I worked as an intern for a bitcoin startup focused on lightning nodes as payment methods.
          Having limited experience, I developed skills through weekly challenges,like Github and Javascript. With the help of my mentor, I coded a new feature 
          that allows users to sign messages as they send payments.<br/>
          <b>Skills: Github, bitcoin, React Native, Javascript</b>
        </div>
      <div class="category"> extracurriculars </div>
        <div class ="title"> Activities Officer & House Officer - Quadrangle Club <span class="date"> February 2022-Present</span></div> 
            <div class = "description"> One of my major extracurriculars is being an officer in my eating club, Quad. As an activities officer, I 
            am responsible for planning weekly events for around 150 club members. As House Officer, my respsonsibilities include maintaining the clubhouse 
            and communicating with the hefs and house manager about food, accomodations, and events. We also host events open to the entire undergraduate population,
            for which I help to plan and run.<br/>
            <b>Skills: Leadership, communication, organization</b>
          </div>
          <div class ="title"> Outreach Chair - ACM<span class="date"> July 2023-Present</span></div> 
            <div class = "description"> As the outreach chair for ACM, I am responsible for reaching out and establishing lines
            of communication with potential sponsors that would fund events like COSCON.<br/>
            <b>Skills: Communication, outreach</b>
          </div>
  
    </div> 
  </body>
  </>
  )
};
  
export default Resume;