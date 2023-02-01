import { Col } from "react-bootstrap";
import navIcon from '../assets/img/nav-icon3.svg';
import navIcon2 from '../assets/img/meter8.svg';


export const ProjectCard = ({ title, description, imgUrl,url, website  }) => {
  return (
    /* HERE WHERE YOU CAN CHABGE THE SIZE OF IMAGE NOT IN APP.CSS OK */
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="social-iconprojects">
            <a href={url}><img src={navIcon}  /></a>
            <a href={website}><img src={navIcon2}  /></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
