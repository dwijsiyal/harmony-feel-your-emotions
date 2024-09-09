import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    CardLink,
  } from "reactstrap";
import Camera from "assets/img/card_images/camera_1.png"
import { useEffect} from "react";
import { useState } from "react";
import Footer from "components/Footer/Footer";
import BgImage from "assets/img/mountain.jpg"

const Suggestions = () => {

    const [listResults, setBlogs] = useState(null)
    const queryParams = new URLSearchParams(window.location.search)
    const emotion = queryParams.get("emotion")
    console.log(emotion) 

    useEffect(() => {
        fetch('http://localhost:8000/emotions')
          .then(res => {
            return res.json();
          })
          .then(data => {
              switch(emotion.toLocaleLowerCase()){
                  case '"happy"':
                      setBlogs(data.happy);
                      break;
                    case '"sad"':
                        setBlogs(data.sad);
                        break;
                    case '"angry"':
                        setBlogs(data.angry);
                            break;
                            case '"disgust"':
                                setBlogs(data.relaxed);
                                break;
                                case '"fear"':
                                    setBlogs(data.fear);
                                    break;
                                    case '"neutral"':
                                        setBlogs(data.depressed);
                                        break;
                                        case '"surprised"':
                                            setBlogs(data.happy);
                                            break;
                                            case '"depressed"':
                                                setBlogs(data.depressed);
                                                break;
                                                case '"relaxed"':
                                                    setBlogs(data.relaxed);
                                                    break;
                                                    case '"focused"':
                                                        setBlogs(data.focused);
                                                        break;
                
                
              }
                 
          })
      }, [])
     
    return ( 
        <div className="area">
        <>
        
        <div className="wrapper" style={{padding: 50,  backgroundImage :`url(${BgImage})`, scrollBehavior:"smooth"}}>

        <Row>
            {listResults && listResults.map((suggestion) => (
                <Col md="8">
                <Card className="card-chart">
                    <CardLink href= {suggestion.link}>
                  <CardHeader>
                    <CardTitle tag="h5" style={{alignContent: "center", color:"black"}}>{suggestion.title}</CardTitle>
                   
                  </CardHeader>
                  <CardBody>
                    <Row>
                        <Col>
                        <div className="content"><img src={process.env.PUBLIC_URL + suggestion.imgsrc} alt="Linked to Youtube" /></div>
                        </Col>
                        <Col style={{alignContent: "start", color:"black"}}>
                        {suggestion.description}
                        </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <div className="chart-legend" style={{alignContent: "center", color:"black"}}>
                    <i class="fab fa-youtube" style={{color: "red"}}></i>{" Youtube" } 
                    
                    </div>
                    <hr />
                    <div className="card-stats" style={{alignContent: "center", color:"black"}}>
                    <i class="far fa-clock">{" "+suggestion.duration}</i>
                    </div>
                  </CardFooter>
                  </CardLink>
                </Card>
              </Col>
            ))}
        </Row>
        <Footer fluid />
        </div>
        </>
        </div>
     );
}
 
export default Suggestions;