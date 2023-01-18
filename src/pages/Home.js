import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(0);
  }, []);

  const fetchData = async (selection) => {

    if (selection == 0) {
      const res = await fetch("https://randomuser.me/api/?results=50");
      const { results } = await res.json();
      setData(results);
    }

    if(selection == 1){
      const res = await fetch("https://randomuser.me/api/?gender=male&&results=50");
      const { results } = await res.json();
      setData(results);

    }

    if(selection == 2){
      const res = await fetch("https://randomuser.me/api/?gender=female&&results=50");
      const { results } = await res.json();
      setData(results);

    }

    
    
  };





  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <div style={{ marginRight: "400px" }}>{data.length} New Faces</div>
        </Col>
        <Col>
          <div style={{ marginLeft: "300px" }}>
            <button
              className="btn-primary"
              onClick={() => {
                fetchData(0);
              }}
            >
              All
            </button>
            <button
              className="btn-primary"
              onClick={() => {
                fetchData(1);
              }}
            >
              Nale
            </button>
            <button
              className="btn-primary"
              onClick={() => {
                fetchData(2);
              }}
            >
              Female
            </button>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        {data &&
          data.map((el) => {
            

            return (
              <Card style={{ width: "6.3rem" }}>
                <Link
                  to={el?.id?.name ? `/user/${el?.id?.name}` : "/"}
                  state={{
                    name: el?.name?.first +" " + el?.name?.last,
                    email: el?.email,
                    address: el?.location?.country,
                    phone: el?.phone,
                    avatar: el?.picture?.large,
                  }}
                >
                  <img src={el?.picture?.large} alt={data.gender} />
                </Link>
              </Card>
            );
          })}
      </Row>
    </Container>
  );
}

export default Home;
