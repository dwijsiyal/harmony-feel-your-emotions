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
    return(
        <>
        <div className="content">
          <Row>
              {mainCards.map((mainCard) => (
                <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                  <Col md="8" xs="7">
                    <div className="nc-icon nc-button-play text-success"style={{alignContent:"right"}}></div>
                    </Col>
                    <Col md="8" xs="7" >
                      <div className="numbers" style= {{alignContent: "center"}}>                           
                            <div className="image shake" style={{alignItems:"center"}}><img src={mainCard.imgsrc} alt= {mainCard.cardName} /></div>                              
                        <CardTitle tag="p" style={{alignContent: "center"}}>{mainCard.cardName}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />

                </CardFooter>
              </Card>
            </Col>
              ))}
            
            </Row>
            </div>
            </>
    );
}
export default Home;