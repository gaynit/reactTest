import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isProfilePage, setIsProfilePage] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pathName = url.pathname;
    console.log("Log Z url has changes", pathName);

    if (pathName.includes("user")) {
      setIsProfilePage(true);
    } else {
      setIsProfilePage(false);
    }
  }, [location]);

  return (
    <Container>
      

      <Row style={{ marginTop: "20px" }}>
        <Col>
          <h5 style={{ marginRight: "600px" }}>Logo</h5>
        </Col>
        <Col>
          {isProfilePage ? (
            <Link to="/">
              <Button
                variant="primary"
                size="sm"
                style={{ marginLeft: "340px", color: "black" }}
              >
                Back
              </Button>
            </Link>
          ) : (
            <Button
              variant="primary"
              size="sm"
              active
              style={{ marginLeft: "320px" }}

            >
              Get New Users
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
