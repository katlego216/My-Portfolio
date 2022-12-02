import { Container, Row, Col } from "react-bootstrap";
import Kat3 from "../components/assets/img/Kat3.JPG";

export const Welcome = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to My Portfolio</span>
                  <p>My name is Katlego Rathelele, I am a bubbly, fun person who easily gets along with people. Furthermore, I love outdoor activities and enjoy spending time with friends and family.
I adore the culture at SovTech; therefore, I would do anything to get accepted into the graduate programme.
I completely agree with all the SovTech Spex and I adore how the graduate programme helps its graduates by providing them with all the neccessary resources and training they need to advance and become the best software developers.</p>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <img src={Kat3} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}