import React from "react";
import PledgeDefault from "./components/PledgeDefault.jsx";
import PledgeHover from "./components/PledgeHover.jsx";

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "default"
    };
  }

  onMouseOver() {
    this.setState({ view: "hovered" });
  }

  onClick() {
    this.setState({ view: "clicked" });
  }
  renderView() {
    switch (this.state.view) {
      case "default":
        return (
          <PledgeDefault
            pledge={this.props.pledge}
            currency={this.props.currency}
          />
        );
      case "hovered":
        return <PledgeHover />;
    }
  }

  render() {
    return (
      <div
        className="pledge-info"
        onMouseEnter={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
      >
        {this.state.hovered ? <PledgeHover /> : null}
        <PledgeDefault
          pledge={this.props.pledge}
          currency={this.props.currency}
        />
      </div>
    );
  }
}

export default Pledge;
