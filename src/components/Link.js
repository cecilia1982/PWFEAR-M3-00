import React from "react";
import "./Link.css";
import { Button } from "reactstrap";

class Link extends React.Component {
  render() {
    return (
      <Button outline color="success" className="mx-3">
        {this.props.text}
      </Button>
    );
  }
}
export default Link;
