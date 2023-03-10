import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import work3 from "../assets/img/work3.png";
import work1 from "../assets/img/work1.png";
import work2 from "../assets/img/work2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    
    {
      title: "Personal Website & Portfolio",
      description: "React.js, Bootstrap, Animate.CSS",
      imgUrl: work3,
      url: 'https://github.com/muhammedhasann/mamo-ai',
      website: 'https://muhammedhasan.tech/',

    },
    {
      title: " Website & Portfolio",
      description: "React.js",
      imgUrl: work1,
      url: 'https://github.com/muhammedhasann/web',
      website: 'https://muhammedhasann.github.io/web/',
    },
    {
      title: "Cloud-Native Application ",
      description: " Python(Django)",
      imgUrl: work2,
      url: 'https://github.com/muhammedhasann',
      website: 'https://burgapp.mybluemix.net/djangoapp/',
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My works, projects & contributions</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="back"></img>
    </section>
  )
}
