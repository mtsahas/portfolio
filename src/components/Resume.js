import React from 'react';
import "../styles/resume.css"
import resumePDF from "../assets/images/Resume.pdf"
const Resume = () => {
  
return (
  <>
  <body>
    <h1>resume</h1>
    <div class="resume">
    <h3> Click <a href={resumePDF} target="_blank">here</a> to see my full resume. </h3>
      <div class="category"> Work experience </div>
      <div class ="title"> Economics and Computing Grader @ Princeton CS <span class="date"> January 2024-May 2024</span></div> 
          <div class = "description"> Last semester, I worked as a course grader for COS 445, an upper-level proof-based CS class called Economics and Computing.
            This course covered topics like stable matching algorithms, game theory, auction theory, voting theory, and more. As a grader, I attended weekly grading meetings
            where we would go over and score weekly problem sets. <br/>
          <b>Skills: Mathematical proofs, game theory, voting theory, auction theory, bitcoin</b>
        </div>
        <div class ="title"> Offensive Security Researcher @ Intel <span class="date"> Summer 2023</span></div> 
          <div class = "description"> Last summer, I worked on the Intel Product Assurance and Security team doing hardware
          security research. My work was focused on software-accessible power side-channels and frequency throttling side-channels. 
          After intiial research stages, I worked primarily on expanding the functionality of internal validation and threat analysis software tool using C++.<br/>
          <b>Skills: C++, VMs, hardware security, cryptography, side-channels, research</b>
        </div>
        <div class ="title"> Data Structures and Algorithms Precept Assistant @ Princeton CS <span class="date"> January 2022-May 2023</span></div> 
          <div class = "description"> As a sophomore and junior, I was on the course staff for COS 226, Princeton's data structures and algorithms course.
          Some topics covered are searching, sorting, trees, graph algorithms, and more. As a precept assistant, I attended weekly precepts and helped students on
           course material as they work through practice exercises or assisgnments. When I took COS 226, the amount of available resources and support was a big strength of the class. I enjoy being able to bring that experience to younger students and help them discover their passion for CS.<br/>
          <b>Skills: Java, data stuctures, algorithms, teaching, complexity</b>
        </div>
        <div class ="title"> Undergraduate Researcher @ Princeton-Intel Research Experience for Undergraduates <span class="date"> Summer 2022</span></div> 
          <div class = "description"> I conducted research under Professor Malik and his graduate students 
          in the Princeton Electrical and Computer Engineering Department. I worked on Sequestered Encryption, a hardware 
          solution meant to sequester sensitive data more effectively than secure enclaves like Intel SGX. Using Chisel, I implemented a 
          multiplier design with purposeful timing side-channels to test the validity of formal verifcation systems. <br/>
          <b>Skills: Chisel, Scala, hardware security, side-channels, research</b>
        </div>
        <div class ="title"> Intern @ Zeus LN <span class="date"> Summer 2021</span></div> 
          <div class = "description"> The summer after my freshman year, I worked as an intern for a bitcoin startup focused on lightning nodes as payment methods.
          I developed technical skills through weekly challenges,like Github and Javascript. With the help of my mentor, I coded a new feature 
          that allows users to sign messages as they send payments.<br/>
          <b>Skills: Github, bitcoin, React Native, Javascript</b>
        </div>
      <div class="category"> Extracurriculars </div>
        <div class ="title"> Activities Officer & House Officer @ Princeton Quadrangle Club <span class="date"> February 2022-December 2023</span></div> 
            <div class = "description"> One of my major extracurriculars in college was being an officer in my eating club, Quad. As an activities officer, I 
            was responsible for planning weekly events for around 150 club members. As House Officer, my respsonsibilities included maintaining the clubhouse 
            and communicating with the chefs and house manager about food, accomodations, and events. We also hosedt events open to the entire undergraduate population,
            for which I helped to plan and run.<br/>
            <b>Skills: Leadership, communication, organization</b>
          </div>
          <div class ="title"> Outreach Chair @ Princeton Association for Computing and Machinery<span class="date"> July 2023-May 2024</span></div> 
            <div class = "description"> As the outreach chair for ACM, I am responsible for reaching out and establishing lines
            of communication with potential sponsors that would fund events. I was involved in organizing logistics and running Princeton's biggest CS competition called COSCON.<br/>
            <b>Skills: Communication, outreach, organization</b>
          </div>
    </div> 
  </body>
  </>
  )
};
  
export default Resume;