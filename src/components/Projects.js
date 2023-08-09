import React from 'react';
import "../styles/projects.css"
const Projects = () => {
  
return (
    // style={{'padding-top': '50px'}}
    <><h1> projects </h1>
    <body>
    <div class="grid">
        <div class="box box--1"><a href="https://princeton-imuseum.onrender.com/login" target="_blank">
            <img class = "proj_ss" src={require("../assets/images/imuseum.png")}></img>
            </a>
        </div>
        <div class="box box--2" ><b>Princeton iMuseum.</b> Princeton iMuseum is an interactive way to experience Princeton's art museum collections. The art museum is closed for construction 
        and will be until 2026. This website makes use of the art museum's extensive and accurate API to display art pieces and important information. Users can browse through the art pieces,
        add to their favorites, and create their own personalized collections. I worked on this website
        as a semester long project with 4 others. As a fullstack developer, I used HTML, Javascript, Python,
        SQL, databases, and more. Click <a href="https://princeton-imuseum.onrender.com/login" target="_blank">here</a> to visit Princeton iMuseum.</div>
        <div class="box box--3"> <img class = "proj_ss" src={require("../assets/images/mywebsite.png")}></img></div>
        <div class="box box--4"><b>This website!</b> I developed this website in my free time during the summer of 2023. I wanted to
        have a website that displayed my work and experience to share with others. I also wanted to improve my front-end development
        skills. I used technologies like React Native, HTML, and CSS. Check out my github for the code.</div>
        <div class="box box--5"> <img class = "proj_ss" src={require("../assets/images/iwreport.png")}></img></div>
        <div class="box box--6"><b>Foreign Song Lyric Analysis.</b> As part of an independent work project, during spring 2023 I did research on foreign song lyrics.
        As an enjoyer of foreign music, I was interested in seeing how English words function in songs that are primarily not in English. To do this, I gathered songs from 7 
        different billboard charts by webscraping the pages. Next, I gathered lyric data for all of the songs using the Genius API and more webscraping. Finally, I used Python and Pandas
        for the analysis, which included word count frequencies and different kinds of data representation. </div>
    </div>
    </body>
    </>
  )
};
  
export default Projects;