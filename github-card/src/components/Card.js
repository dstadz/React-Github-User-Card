import React from 'react'


class Card extends React.Component {
  render() {
    return (
      <div>
        <div> image={this.props.avatar_url} username={this.props.login} </div>
        <div> followers={this.props.followers} following={this.props.following} </div>
      </div>
    );
  }
}

export default Card;