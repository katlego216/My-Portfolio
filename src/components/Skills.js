import Kat11 from "../components/assets/img/Kat11.JPG";

export const Skills = () => {

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>•JAVA<br></br>•PYTHON<br></br>•HTML5<br></br>•CSS3<br></br>•SQL<br></br>•JAVASCRIPT</p>
                        <div class="cont">
                        <img src={Kat11} alt="Header Img" />
                        <div class="text">I won first place at the SheHacks Hackathon hosted by Mukuru and WeThinkCode_. By using the skills I have obtained at WeThinkCode_ thus far. Which I would love to expand during the SovTech graduate programme.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}