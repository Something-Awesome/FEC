import React from "react";
import moment from "moment";

import RewardDescriptionsList from "./mini_components/RewardDescriptionsList.jsx";
import ExtraInfoBox from "./mini_components/ExtraInfoBox.jsx";
import BackerInfo from "./mini_components/BackerInfo.jsx";
import Header from "./mini_components/Header.jsx";

class PledgeDefault extends React.Component {
  render() {
    return (
      <div className='pledge-default'>
        <Header
          name={this.props.pledge.name}
          currency={this.props.currency}
          description={this.props.pledge.description}
          amount={this.props.pledge.amount}
        />
        {this.props.pledge.rewards && this.props.pledge.rewards.length > 0 ? (
          <RewardDescriptionsList list={this.props.pledge.rewards} />
        ) : null}
        <ExtraInfoBox
          shipDate={moment(this.props.pledge.estimatedDelivery).format(
            "MMMM YYYY"
          )}
          shipsTo={this.props.pledge.shipsTo}
        />
        <BackerInfo
          totalSlots={this.props.pledge.backerLimit}
          numberOfBackers={this.props.pledge.currentNumberOfBackers}
        />
      </div>
    );
  }
}

export default PledgeDefault;
