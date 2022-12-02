import Kat1 from "../components/assets/img/Kat1.jpeg";

export const Projects = () => {

  return (
    <section className="project" id="projects">
              <div>
                <h2>Projects</h2>
             
              
                <p>
                   
                    <a href="https://momentum-quiz.vercel.app/">
                      Momentum Quiz
                    </a>
                </p>
                <p>
                    <a href="https://github.com/katlego216">
                      GitHub
                    </a>
                    
                </p>
                <p>
                   
                   <a href="https://www.youtube.com/channel/UCUOKHZD9P4cZBnEb_qEfT6w">
                     YouTube
                   </a>
               </p>
               <p>
                   
                   <a href="https://www.freecodecamp.org/KAT_LIEE">
                     FreeCodeCamp
                   </a>
               </p>
                <p><div class="cont">
                        <img src={Kat1} alt="My team and I were invited to the Momentum Science of Success Festival. We were asked to create a quiz for the event." />
                        <div class="text">We were invited to the Momentum Science of Success Festival and asked to create a quiz that was used at the event. I would love to create more applications using React at SovTech.</div>
                        </div></p>
                

              </div>
    </section>
  )
}