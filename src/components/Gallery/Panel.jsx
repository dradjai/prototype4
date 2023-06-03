import { Col, Image } from "react-bootstrap";

export default function Panel({element: {title, content, image}}) {

  return(

    <Col xs={11} md={6} lg={3}>
      <div>
        <Image src={image} fluid/>
        <h3>{title}</h3>
      </div>

    </Col>
    
  )
}