import React, { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import axios from "axios";
import { Form, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

import { ReactComponent as ReactLogo } from "../image/loading.svg";
import Footer from "./setting/Footer";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const submitEmail = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const mailData = { name, email, subject, message };

    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/contact/send`, mailData)
      .then((res) => {
        resetForm();
        if (res.data.success === "success") {
          setIsLoading(false);

          // alert("Message Sent!");
        } else if (res.data.success === "fail") {
          alert("Message failed to send");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Message failed to send");
      })
      .finally(() => {
        setIsSent(true);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  }, [isSent]);

  return (
    <>
      {isLoading && <ReactLogo className="contact-con-loading-logo" />}

      <div className="contact-con ">
        <div className="contact-con-form ">
          <div className="contact-con-form-center ">
            <Form
              method="POST"
              id="contactForm"
              name="contactForm"
              onSubmit={submitEmail}
              className="contact-con-form-center-contactForm"
            >
              <h3> Get in touch with me</h3>
              <Row>
                <Col lg="6" md="6" sm="6">
                  <Form.Group className="FormGroup" controlId="formBasicName">
                    <Form.Label> Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <Form.Group className="FormGroup" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="FormGroup" controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="FormGroup" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-submit"
                  />
                  <div className="submitting">
                    {isLoading && <h4>Sending....</h4>}
                    {isSent && <h4>Message Sent!</h4>}
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="contact-con-social ">
          <div className="contact-con-social-comment ">
            <h3>Thank you so much !</h3>
            <h5>I will get back to you as soon as possible.</h5>
            <h5>Please allow me some time to reply. Have a good day.</h5>
          </div>
          <div className="contact-con-social-links ">
            <h3> Connect with me</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/erika-hashizume/"
                  target="_blank"
                  rel="noreferrer"
                  alt="linkdin"
                >
                  <BsLinkedin className="sns-icon linkdin" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/erika-goodwin"
                  target="_blank"
                  rel="noreferrer"
                  alt="GitHub"
                >
                  <BsGithub className="sns-icon github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactMe;
