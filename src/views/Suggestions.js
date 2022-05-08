import { Row } from "reactstrap";

const Suggestions = () => {

    const listResults = [{
        title: "Video Title",
        image: "imagesrc",
        link: "link to youtube video",
        duration: "length of video"
    }];
    return ( 
        <Row>
            <Col>
            {listResults.map((suggestion) => (
                <Col md="8">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                    <p className="card-category">Line Chart with Points</p>
                  </CardHeader>
                  <CardBody>
                    <Line
                      data={dashboardNASDAQChart.data}
                      options={dashboardNASDAQChart.options}
                      width={400}
                      height={100}
                    />
                  </CardBody>
                  <CardFooter>
                    <div className="chart-legend">
                      <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                      <i className="fa fa-circle text-warning" /> BMW 5 Series
                    </div>
                    <hr />
                    <div className="card-stats">
                      <i className="fa fa-check" /> Data information certified
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            ))}
            </Col>
        </Row>

     );
}
 
export default Suggestions;