import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Container, Row, Button } from "reactstrap";

export function FirstPage() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container>
      <Row>
        <div className="col-md-6 mx-auto py-4 px-0">
          <div className="card p-0">
            <div className="card-title text-center">
              <h5 className="mt-5">HEY, THERE</h5>{" "}
              <small className="para">Login to your cool account below.</small>
            </div>
            <form className="signup">
              <div className="form-group">
                {" "}
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>{" "}
              <Button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  alert("hello " + userName + " your password is :" + password);
                }}
              >
                Login
              </Button>
              <div className="row">
                <div className="col-6 col-sm-6"> </div>
                <div className="col-6 col-sm-6"> </div>
              </div>{" "}
              <span className="text-center">Or</span>{" "}
              <Link to="/signin">Sign in</Link>
              <div className="row">
                <div className="d-flex mx-auto pt-1 pb-3"> </div>
              </div>
            </form>
          </div>
        </div>
      </Row>
    </Container>
  );
}
