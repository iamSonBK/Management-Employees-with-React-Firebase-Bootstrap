import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import AddForm from "../../component/add-form/add-form.component";
import firebase from "../../firebase/firebase.utils";
function Blog({ isLoading, collections }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postId, setPostId] = useState("");
  const handleClick = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setPostId(post.id);
  };
  async function handleDelete(postId) {
    await firebase
      .firestore()
      .collection("posts")
      .doc(postId)
      .delete()
      .then(() => {
        window.location.reload();
      });
  }
  return (
    <div>
      <div></div>
      <Card style={{ borderBottom: "none" }}>
        <Card.Body>
          <Card.Title>TO DO LIST</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <AddForm id={postId} title={title} body={body} />
        </Card.Body>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Container>
            <Row>
              {collections.length > 0 &&
                collections.map((post) => (
                  <Col xs={3} key={post.id}>
                    <Card style={{ width: "17rem", marginBottom: "1rem" }}>
                      <Card.Header>{post.title}</Card.Header>

                      <Card.Body>
                        <Card.Subtitle>{post.id}</Card.Subtitle>
                        <Card.Text>{post.body}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => handleClick(post)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          style={{ marginLeft: "0.5rem" }}
                          onClick={() => {
                            handleDelete(post.id);
                          }}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        )}
      </Card>
      <div
        className="footer"
        style={{
          position: "absolute",
          bottom: "0rem",
          backgroundColor: "rgba(0, 0, 0, 0.03)",
          width: "100%",
          padding: "1rem 0rem",
        }}
      >
        Copyright by TSM Team | 2020 | Sponsor by SonBK
      </div>
    </div>
  );
}

const mapStateToProps = ({ post: { collections, isLoading } }) => ({
  collections,
  isLoading,
});

export default connect(mapStateToProps, null)(Blog);
