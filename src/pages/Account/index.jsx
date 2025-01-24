import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import AddAddress from '../../components/AddAddress';
import Address from '../../components/Address';
import Order from '../../components/Order';
import Profile from '../../components/Profile';
import Logout from '../../components/Logout';
import TopBar from '../../components/TopBar';

export default function Account() {
    // const match = useMatch();

    return (
        <div>
            <TopBar />
            <Container className="p-5" style={{ marginTop: "145px" }}>
                <Card>
                    <Card.Header>
                        Account
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                <ListGroup>
                                    <LinkContainer to="/account" >
                                        <ListGroup.Item action>
                                            Profil
                                        </ListGroup.Item>
                                    </LinkContainer>
                                    <LinkContainer to="orders" >
                                        <ListGroup.Item action>
                                            Pemesanan
                                        </ListGroup.Item>
                                    </LinkContainer>
                                    <LinkContainer to="account/address" >
                                        <ListGroup.Item action>
                                            Alamat
                                        </ListGroup.Item>
                                    </LinkContainer>
                                    <LinkContainer to="logout" >
                                        <ListGroup.Item action>
                                            Logout
                                        </ListGroup.Item>
                                    </LinkContainer>
                                </ListGroup>
                            </Col>
                            <Col md={9}>
                                <Routes>
                                    <Route path={'/'} element={<Profile />} />
                                    <Route path={'logout'} element={<Logout />} />
                                    <Route path={'orders'} element={<Order />} />
                                    <Route path={'account/address'} element={<Address />} />
                                    <Route path={'add-address'} element={<AddAddress />} />
                                </Routes>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
