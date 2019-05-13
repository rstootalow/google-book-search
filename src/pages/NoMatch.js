import React from "react";
import { Col, Row, Container } from "../components/Layout";
import MainContent from "../components/MainContent";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <MainContent>
                        <h1 className="text-white">404 Page Not Found</h1>
                    </MainContent>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;