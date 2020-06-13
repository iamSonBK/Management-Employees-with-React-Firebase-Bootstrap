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
      title: this.props.title,
      body: this.props.body,
    },
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      newPost: {
        id: nextProps.id,
        title: nextProps.title,
        body: nextProps.body,
      },
    });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.newPost.id === "") {
      await firebase
        .firestore()
        .collection("posts")
        .add({ title: this.state.newPost.title, body: this.state.newPost.body })
        .then(console.log("Add success"));
    } else {
      console.log(this.state.newPost);

      await firebase
        .firestore()
        .collection("posts")
        .doc(this.state.newPost.id)
        .update({
          title: this.state.newPost.title,
          body: this.state.newPost.body,
        })
        .then(console.log("Update success"));
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
                  <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.newPost.title}
                  placeholder="Enter Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">Body</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  as="textarea"
                  type="text"
                  onChange={this.handleChange}
                  name="body"
                  placeholder="Enter Somethings..."
                  value={this.state.newPost.body}
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
