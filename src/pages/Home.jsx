import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../components/Gallery";
import AppLayout from "../layout/AppLayout";

export default function Home(){

  return(
    <AppLayout>
      <Container className="my-4">
        <Row>
          <Col>
            <h2>Home</h2>
          </Col>
        </Row>

        <Row>
          <Col md={11} lg={9} xl={8}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aperiam distinctio numquam nostrum odit necessitatibus laboriosam dolorem accusamus maxime fugit. Fuga labore quo omnis ipsam illo accusamus quidem provident inventore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi assumenda omnis eius delectus autem impedit numquam, veniam beatae error eum voluptatem cumque ut minima ullam, eveniet aut? Praesentium, magnam!</p>
          </Col>
        </Row>
      </Container>
      <Gallery />

    </AppLayout>
  )
}