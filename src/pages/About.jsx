import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "../layout/AppLayout";

export default function About() {

  return(
    <AppLayout>
      <Container>
        <Row>
          <Col>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptatibus non velit. Neque numquam voluptas, dolorem autem possimus, consequuntur alias commodi nisi explicabo ex soluta repellat sint, accusamus esse vel?</p>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  )
}