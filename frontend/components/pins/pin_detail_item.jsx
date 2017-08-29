import React from 'react';

class PinDetailItem extends React.Component {
  componentDidMount() {
    return this.props.getPin(this.props.pinId);
  }

  render() {
    return(
      <div>
        <img src={this.props.pin.image_url} />
      </div>
    );
  }
}

export default PinDetailItem;
