import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../../img/logo.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="text-center mt-5">
      <h1 className="titulo pt-5">Producciones ACME</h1>
      <img src={logo} className="pt-5 rounded-3" />
      <div>
        <Button
          variant="danger"
          size="lg"
          className="mt-5"
          onClick={handleShow}
        >
          Login
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
            <Form.Control
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
            <Form.Control
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
