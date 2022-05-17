import React from "react";
import depressionCard from "assets/img/card_images/depressed.png"
import FocusCard from "assets/img/card_images/focus.png"
import RelaxedCard from "assets/img/card_images/relaxed.png"
import detectCard from "assets/img/card_images/camera_1.png"
import play from "assets/img/play.png"
import { Button } from 'react-bootstrap';
import Footer from "components/Footer/Footer";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  CardLink
} from "reactstrap";
import { useState } from "react";
import {Link} from "react-router-dom"
import logo from "logo.svg";
import Background from "variables/custombackgroud";
import { isContinueStatement } from "typescript";
function Home(){
    const [mainCards,setMainCards] = useState([
    {
        id: 1,
        cardName : "Detect",
        imgsrc: detectCard,
        link: "http://127.0.0.1:5000",
        info: "info"
    },
    {
        id: 2,
        cardName : "Depressed",
        imgsrc: depressionCard,
        link: '/admin/Suggestions?emotion="depressed"',
        info: "info"
    },
    {
        id: 3,
        cardName : "Focused",
        imgsrc: FocusCard,
        link: '/admin/Suggestions?emotion="focused"',
        info: "info"
    },
    {
        id: 4,
        cardName : "Relaxed",
        imgsrc: RelaxedCard,
        link: '/admin/Suggestions?emotion="relaxed"',
        info: "info"
    }
]);
const styleObj = {
  color: "#FFFFFF",
  alignContent: "center",
  textAlcign: "center",
  paddingTop: "100px",
}
const handleClick = (e) => {
  e.preventDefault();
  console.log(window.location);
  window.location.replace = "http://127.0.0.1:5000";
}
    return(
        <div className="area" style={{padding: 50}}>
          <>
        <div className="content">
        

          <Row>
              {mainCards.map((mainCard) => (
    
                <Col lg="3" md="6" sm="6">
                 
              <Card className="card-stats" key={mainCard.id}>
              <CardLink href={mainCard.link}>
                <CardBody>
                  <Row>
                  <Col md="8" xs="7">
                    </Col>
                    <Col md="8" xs="7" >
                      <div className="numbers" style= {{alignContent: "center"}} >                           
                            <div className="image" style={{alignItems:"center"}} ><img src={mainCard.imgsrc} alt= {mainCard.cardName} /></div>                             
                        <CardTitle tag="p" style={{alignContent: "center", color:"black"}}>{mainCard.cardName}</CardTitle>
                        <p />
                      </div>
                    </Col>

                
                  <div className="text-success"style={{alignContent:"right"}}><i className="fas fa-play fa-lg"></i></div>
                 
                  </Row>
                </CardBody>
                </CardLink>
                <CardFooter>
                  <hr />
                  
                </CardFooter>
              </Card>
       
            </Col>
              ))}
            
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
              <div className="content"><div><h2 className="" style={styleObj}>How are you Feeling?</h2></div></div>
              </Col>
              <Col> </Col>
   
            </Row>
            {mainCards.map((mainCard) => (

            <Row>
              <Col>

              </Col>
              <Col>
              <div className="content"><a href ="#">
                  <div className="text-success logo-img" style={{alignSelf:"center"}}><img src={mainCard.imgsrc} alt="react-logo" /></div>
                  </a></div>
                  <div className="content">{mainCard.info}</div>
              </Col>
              <Col> </Col>

            </Row>
            ))}

            </div>

            </>


            <Footer fluid />
</div>

    );
}
export default Home;