import React from 'react'
import "./Phones.css"
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
function PhonesDetails({device}) {
  return (
    <Container className="mt-5">
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Body>
            <Card.Title>{device.Launch.Announced} - {device.Body.Build}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{device.Network.Technology}</Card.Subtitle>
            
            <Card.Text>
              <strong>Display:</strong> {device.Display.Type}, {device.Display.Size}<br />
              <strong>OS:</strong> {device.Platform.OS}<br />
              <strong>Chipset:</strong> {device.Platform.Chipset}<br />
              <strong>Battery:</strong> {device.Battery.Type}<br />
            </Card.Text>
            
            <Button variant="primary" onClick={() => alert('Full specs coming soon!')}>
              See Full Specs
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}
const deviceData = {
  "Network": {
    "Technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G"
  },
  "Launch": {
    "Announced": "2024, August",
    "Status": "Available"
  },
  "Body": {
    "Dimensions": "162.5 x 74.8 x 8.5 mm",
    "Weight": "195g",
    "Build": "Glass front, glass back, aluminum frame",
    "SIM": "Dual SIM (Nano-SIM, dual stand-by)",
    "IP_Rating": "IP68 dust/water resistant"
  },
  "Display": {
    "Type": "Super AMOLED, 120Hz, HDR10+",
    "Size": "6.7 inches",
    "Resolution": "1080 x 2400 pixels",
    "Protection": "Corning Gorilla Glass Victus"
  },
  "Platform": {
    "OS": "Android 14",
    "Chipset": "Qualcomm SM8350 Snapdragon 888"
  },
  "Battery": {
    "Type": "Li-Ion 5000 mAh, non-removable"
  }
};

const Phone = () => (
  <PhonesDetails device={deviceData} />
);

export default Phone