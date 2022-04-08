import Form from "react-bootstrap/Form"
import BootstrapSwitchButton from "bootstrap-switch-button-react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {Button} from "react-bootstrap"
import "../stylesheets/Settings.css"
import {Navigate} from "react-router"

export default function Settings() {
  const token = localStorage.getItem("token")
  if (token === "null") {
    return (
      <Navigate to="../Error"/>
    )
  } else {
    return (
      <div className='settings'>
        <h1 className ="setting">User Settings</h1>
        <Form className="info">
          <Form.Label className="name">Name</Form.Label>
          <br></br>
          <Row className="name-info">
            <Form.Group as={Col} controlId='name-info' size='lg'>
              <Form.Control type='name-change' placeholder="Enter name"/>
            </Form.Group>
            <Form.Group as={Col} controlId="nameButton">
              <Button variant="outline-light" size="sm">Edit</Button>
            </Form.Group>
          </Row>
          <Form.Label className="email">Email Address</Form.Label>
          <br></br>
          <Row className="email-info">
            <Form.Group as={Col} controlId='email' size='lg'>
              <Form.Control type="email-change" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group as={Col} controlId="emailButton">
              <Button variant="outline-light" size="sm">Edit</Button>
            </Form.Group>
          </Row>
          <Form.Label className="password">Password</Form.Label>
          <br></br>
          <Row className="password-info">
            <Form.Group as={Col} controlId='password' size='lg'>
              <Form.Control type="password-change" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group as={Col} controlId="passwordButton">
              <Button variant="outline-light" size="sm">Reset</Button>
            </Form.Group>
          </Row>
        </Form>
        <Form>
          <section className="container">
            <h2 className="subs">Subscriptions</h2>
          </section>
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={"LeetCode"}
              />
              <Form.Check
                disabled
                type={type}
                label={"HackerRank"}
                id={`disabled-default-${type}`}
              />
            </div>
          ))}
        </Form>
        <h3 className="notifs">Email Notifications</h3>
        <div className="bootbutton">
          <BootstrapSwitchButton checked={true} size="sm"/>
        </div>
        <div className="col-md-10 text-center">
          <Button variant="outline-light" size="sm">Save Changes</Button>
        </div>
      </div>
    )
  }
}