import React from "react";
import depressionCard from "assets/img/card_images/depressed.png"
import FocusCard from "assets/img/card_images/focus.png"
import RelaxedCard from "assets/img/card_images/relaxed.png"
import detectCard from "assets/img/card_images/camera_1.png"

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { useState } from "react";
function Home(){
    const [mainCards,setMainCards] = useState([
    {
        id: 1,
        cardName : "Detect",
        imgsrc: detectCard
    },
    {
        id: 2,
        cardName : "Depressed",
        imgsrc: depressionCard
    },
    {
        id: 3,
        cardName : "Focus",
        imgsrc: FocusCard
    },
    {
        id: 4,
        cardName : "Relaxed",
        imgsrc: RelaxedCard
    }
]);
const styleObj = {
  color: "#FFFFFF",
  alignContent: "center",
  textAlcign: "center",
  paddingTop: "100px",
}
    return(
        <div className="area" style={{padding: 50}}>
          <>
        <div className="content">
        
        <Row>
        <Col>
            </Col>
        </Row>
          <Row>
              {mainCards.map((mainCard) => (
                <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                  <Col md="8" xs="7">
                    </Col>
                    <Col md="8" xs="7" >
                      <div className="numbers" style= {{alignContent: "center"}}>                           
                            <div className="image shake" style={{alignItems:"center"}}><img src={mainCard.imgsrc} alt= {mainCard.cardName} /></div>                              
                        <CardTitle tag="p" style={{alignContent: "center"}}>{mainCard.cardName}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  <div className="nc-icon nc-button-play text-success"style={{alignContent:"right"}}></div>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                </CardFooter>
              </Card>
            </Col>
              ))}
            
            </Row>
            <Row>
              <Col>
              <div className="content" style={styleObj}><h1><i class="fas fa-solid fa-moon"></i></h1></div>
              </Col>
              <Col>
              <div className="content"><h1 className="" style={styleObj}>How are you Feeling?</h1></div>
              </Col>
              <Col></Col>
            </Row>
            </div>
            </>
  
            </div>
    );
}
export default Home;