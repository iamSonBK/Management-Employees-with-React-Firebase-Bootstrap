import React from "react";
import firebase from "../../firebase/firebase.utils";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
class AddForm extends React.Component {
  state = {
    newPost: {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
    },
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      newPost: {
        id: nextProps.id,
        name: nextProps.name,
        email: nextProps.email,
        phone: nextProps.phone,
      },
    });
  }
  handleSubmit = async (event) => {
    var sum = 0;
    event.preventDefault();
    if (this.state.newPost.id === "") {
      for (var i = 0; i < 100; i++) {
        var t0 = performance.now();
        await firebase
          .firestore()
          .collection("posts")
          .add({
            name: `${this.state.newPost.name} ${i}`,
            email: `${this.state.newPost.email}`,
            phone: this.state.newPost.phone,
          })
          .then(() => {
            const t1 = performance.now();
            sum += t1 - t0;
            console.log(sum / 50);
          });
      }
    } else {
      for (var i = 0; i < 100; i++) {
        var t0 = performance.now();
        await firebase
          .firestore()
          .collection("posts")
          .doc(this.state.newPost.id)
          .update({
            name: `${this.state.newPost.name} ${i}`,
            email: this.state.newPost.email,
            phone: this.state.newPost.phone,
          })
          .then((rel) => {
            const t1 = performance.now();
            sum += t1 - t0;
            console.log(sum / 50);
          });
      }
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ newPost: { ...this.state.newPost, [name]: value } });
  };

  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.newPost.name}
                  placeholder="Enter Name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Enter Your Email..."
                  value={this.state.newPost.email}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="number"
                  onChange={this.handleChange}
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={this.state.newPost.phone}
                />
              </InputGroup>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddForm;
