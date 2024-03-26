import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const doctors = [
  {
    name: "Dr. Alice Brown",
    address: "123 Main St, Anytown, CA 12345",
    number: "(555) 555-1234",
    speciality: "Cardiology",
  },
  {
    name: "Dr. David Smith",
    address: "456 Elm St, Anytown, CA 12345",
    number: "(555) 555-5678",
    speciality: "Dermatology",
  },
  {
    name: "Dr. Emily Jones",
    address: "789 Oak St, Anytown, CA 12345",
    number: "(555) 555-9012",
    speciality: "Pediatrics",
  },
  {
    name: "Dr. Michael Lee",
    address: "1011 Maple St, Anytown, CA 12345",
    number: "(555) 555-3456",
    speciality: "Neurology",
  },
  {
    name: "Dr. Sarah Garcia",
    address: "1213 Pine St, Anytown, CA 12345",
    number: "(555) 555-7890",
    speciality: "Orthopedics",
  },
  {
    name: "Dr. Robert Williams",
    address: "1415 Spruce St, Anytown, CA 12345",
    number: "(555) 555-2134",
    speciality: "Oncology",
  },
  {
    name: "Dr. Jennifer Miller",
    address: "1617 Elm St, Anytown, CA 12345",
    number: "(555) 555-6578",
    speciality: "Psychiatry",
  },
];

const DoctorCardList = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {doctors.map((doctor) => (
          <Col style={{ marginBottom: "20px" }} key={doctor.name}>
            <Card bg="white" style={{ minHeight: "100%" }} border="#ccc">
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                  <span>Address:</span> {doctor.address} <br />
                  <span>Phone Number:</span> {doctor.number} <br />
                  <span>Speciality:</span> {doctor.speciality}
                </Card.Text>
                <Button variant="primary" size="sm" href="#">
                  Call Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorCardList;
