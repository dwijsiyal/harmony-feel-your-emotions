import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";
import Camera from "assets/img/card_images/camera_1.png"
const Suggestions = () => {

    const listResults = [
        {
        title: "Video Title",
        image: "imagesrc",
        link: "link to youtube video",
        duration: "length of video"
    },
    {
        title: "Video Title",
        image: "imagesrc",
        link: "link to youtube video",
        duration: "length of video"
    }

];
    return ( 
        <div className="area">
        <>
        
        <div className="wrapper" style={{padding: 50}}>
        <Row>
            {listResults.map((suggestion) => (
                <Col md="8">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h5">{listResults.title}</CardTitle>
                   
                  </CardHeader>
                  <CardBody>
                    <Row>
                        <Col>
                        <div className="content"><img src={Camera} alt="Linked to Youtube" /></div>
                        </Col>
                        <Col style={{alignContent: "start"}}>
                        kjhvkhj
                        </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <div className="chart-legend">
                    <i class="fab fa-youtube" style={{color: "red"}}></i>{" Youtube" } 
                    
                    </div>
                    <hr />
                    <div className="card-stats">
                    <i class="far fa-clock">{" "+listResults.duration}</i>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            ))}
        </Row>
        </div>
        </>
        </div>
     );
}
 
export default Suggestions;