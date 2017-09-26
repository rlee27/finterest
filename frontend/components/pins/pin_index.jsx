import React from 'react';
import { values } from 'lodash';
import NewPinContainer from './new_pin_container';
import EditPinContainer from './edit_pin_container';
import SavePinContainer from './save_pin_container';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: 20
    };

    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  componentDidMount() {
    window.bottom = false;
    window.addEventListener("scroll", this.infiniteScroll);

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  infiniteScroll() {
    $(window).scroll(() => {
      if($(window).scrollTop() <= $(document).height() - $(window).height() &&
          $(window).scrollTop() >= $(document).height() - $(window).height() - 50) {
            window.bottom = true;
          }
    });

    if (window.bottom) {
      if (this.state.cards < values(this.props.userPins).length) {
        this.setState({
          cards: this.state.cards + 10
        });
      }
      window.bottom = false;
    }
  }

  pinList() {
    const allUserPins = values(this.props.userPins).slice(0, this.state.cards);
    return allUserPins.map((pin) => {
      return (
        <li className="pin-card" key={pin.id}>
          <div className="pin-options">
            <div className="pin-edit-button">
              <EditPinContainer pin={pin} />
            </div>
            <div className="save-button">
              <SavePinContainer pin={pin} />
            </div>
          </div>
          <Link to={`/pins/${pin.id}`}>
            <div className="pin-cover">
              <img src={pin.image_url} className="pin-image"/>
            </div>
          </Link>
        </li>
      );
    });
  }

  protectedPinCreate() {
    if (this.props.user) {
      if (this.props.user.id === this.props.currentUser.id) {
        return <NewPinContainer /> ;
      }
    } else {
      return null;
    }
  }

  render() {
    let options = {
      transitionDuration: 0
    };

    return (
      <div>
        <Masonry
          className="pin-index"
          elementType="ul"
          options={ options }
          disableImagesLoaded={ false }
          updateOnEachImageLoad={ false }>
          {this.protectedPinCreate()}
          {this.pinList()}
        </Masonry>
      </div>
    );
  }
}

export default PinIndex;
