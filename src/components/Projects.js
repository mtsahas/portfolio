import React from 'react';
import "../styles/projects.css"
const Projects = () => {
  
return (
    <><h1> projects </h1>
    <body>
    <div class="grid">
    <div class="box"><a href="https://princeton-imuseum.onrender.com/login" target="_blank">
            <img class = "proj_ss" src={require("../assets/images/imuseum.png")} alt="Princeton iMuseum homepage"></img>
            </a>
        </div>
        <div class="box" ><b>Princeton iMuseum.</b> Princeton iMuseum is an interactive way to experience Princeton's art museum collections. The art museum is currently closed for construction 
        and will be until 2026, so we wanted to create a way for people to appreciate what the museum has to offer. This website makes use of the art museum's extensive and accurate API to display art pieces and important information. Users can browse through the art pieces,
        add to their favorites, and create their own personalized collections. I worked on this website
        as a semester-long project with 4 others. As a fullstack developer, I used HTML, Javascript, Python,
        SQL, databases, and more. Click <a href="https://princeton-imuseum.onrender.com/login" target="_blank">here</a> to visit Princeton iMuseum.</div>
    
    <div class="box"><a href="https://mtsahas.github.io/ultralight/local_website/index.html" target="_blank">
            <img class = "proj_ss" src={require("../assets/images/humans_of_quad.jpg")} alt="Humans of 33 Prospect homepage"></img>
            </a>
        </div>
        <div class="box" ><b>Humans of 33 Prospect.</b> Humans of 33 Prospect, inspired by Humans of New York, is a website dedicated my friends at the Princeton Quadrangle Club. I interviewed many seniors in the club asking about their life and goals. This website was meant to be hosted locally on an Arduino so that it could only be accessed on a local network inside Quadrangle Club. This constraint made it such that the entire website needed to be under 1 MB, a fun challenge that really affected the design of the site.</div>
        <div class="box"><a href="https://github.com/mtsahas/e2e" target="_blank">
            <img class = "proj_ss" src={require("../assets/images/e2e.jpg")} alt="e2e homepage"></img>
            </a>
        </div>
        <div class="box" ><b>e2e.</b> e2e is an end-to-end encrypted messaging web app that I made as a final project for a systems class. We used Olm, a double ratchet encryption library, to ensure that 
        only end users can read messages sent to them. For the front-end, we used HTML, CSS, and Javascript. For the server, we used Python Flask and websockets.</div>
        
        <div class="box"><a href="https://mtsahas.github.io/cos471-webapp/" target="_blank" alt="Tiger DElection homepage">
            <img class = "proj_ss" src={require("../assets/images/delection.jpg")}></img>
            </a>
        </div>
        <div class="box" ><b>Tiger DElection.</b> This web application is a decentralized voting app that uses Ethereum smart contracts as the backend. Users must can use Metamask to vote for each election with their wallet ID. For each election, we published a smart contract to the Ethereum testnet. We then used Web3 JS to connect the 
        smart contract with the frontend, displaying the election name, candidates, and vote counts. Using smart contracts for voting can make voting more transparent, preventing fraud and corruption, while maintaining pseudononymity. </div>

        <div class="box"><a href="https://mtsahas.github.io/ultralight" target="_blank" alt="Ultralight homepage">
            <img class = "proj_ss" src={require("../assets/images/ultralight.jpg")}></img>
            </a>
        </div>
        <div class="box" ><b>Ultralight Website.</b> This website showcases web pages I designed each week in response to different prompts, highlighting the importance of simplicity, lightness, and creativity on the web. The webpages start simple, using no CSS, but advance weekly. Some of my favorites are CSS Library and Haikus.</div>
    
        
        <div class="box"> <img class = "proj_ss" src={require("../assets/images/mywebsite.png")} alt="Portfolio homepage"></img></div>
        <div class="box"><b>This website!</b> I developed this website in my free time during the summer of 2023. I wanted to
        have a website that displayed my work and experience to share with others. I also wanted to improve my front-end development
        skills. I used technologies like React Native, HTML, and CSS. Check out my <a href= "https://github.com/mtsahas/portfolio"> github </a> for the code.</div>
        
        <div class="box"> <img class = "proj_ss" src={require("../assets/images/iwreport.png")} alt="Independent work report"></img></div>
        <div class="box"><b>Foreign Song Lyric Analysis.</b> During my spring semester of 2023, I did research on foreign song lyrics as an independent work project.
        As an enjoyer of foreign music, I was interested in seeing how English words function in songs that are primarily not in English and if lyric topics differ across languages. To do this, I gathered songs from 7 
        different billboard charts by webscraping the pages. Next, I gathered lyric data for all of the songs using the Genius API and webscraping Genius pages. Finally, I used Python and Pandas
        for the analysis, which included word count frequencies and different kinds of data representation. I summarized my project and findings in a 30 page final report. Visit my <a href="https://github.com/mtsahas/lyricsAnalysis"> github repo </a> to see some of the work I did.</div>
    </div>
    </body>
    </>
  )
};
  
export default Projects;