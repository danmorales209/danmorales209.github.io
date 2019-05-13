import React from 'react';
import data from "./portfolio.json";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Card from "../../components/Card";


class Portfolio extends React.Component {

  state = { repos: data };

  render() {
    return (
      <div className="container center-align">
        <Row>
          {this.state.repos.map(e => {
            return (
              <Col>
                <Card
                  img={e.img}
                  title={e.title}
                  url={e.url}
                  description={e.description}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    );
  };
};

export default Portfolio;