import React from "react";
import { Card, Col, Row } from "antd";

const Expertise = () => (
  <div>
    <span className="heading-meta">What I do?</span>
    <h2 className="colorlib-heading">Here are some of my expertise</h2>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="WEB DEVELOPMENT" bordered={false}>
          I have experience building websites and chrome extentions using
          JavaScript,React,HTML,CSS
        </Card>
      </Col>
      <Col span={8}>
        <Card title="DATA STRUCTURES & ALGORITHMS" bordered={false}>
          As coming from the CS background, I have good grasp over fundamental
          concepts of DSA
        </Card>
      </Col>
      <Col span={8}>
        <Card title="DEV OPS" bordered={false}>
          I am pursuing my internship with DevOps team at Juniper and working
          with tools like Jenkins, Docker, K8s
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="WEB DEVELOPMENT" bordered={false}>
          I have experience building websites and chrome extentions using
          JavaScript,React,HTML,CSS
        </Card>
      </Col>
      <Col span={8}>
        <Card title="DATA STRUCTURES & ALGORITHMS" bordered={false}>
          As coming from the CS background, I have good grasp over fundamental
          concepts of DSA
        </Card>
      </Col>
      <Col span={8}>
        <Card title="DEV OPS" bordered={false}>
          I am pursuing my internship with DevOps team at Juniper and working
          with tools like Jenkins, Docker, K8s
        </Card>
      </Col>
    </Row>
  </div>
);

export default Expertise;
