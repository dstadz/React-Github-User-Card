import React from 'react'


class Card extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <section className='card-header'>
          <img src={this.props.image} alt='User Card' />
          <h2>{this.props.login}</h2>
        </section>


        <section className='card-body'>
          <h4>Followers: {this.props.followers}</h4>
          <h4>Following: {this.props.following}</h4>
          {this.props.email !== null && (
          <h4>Email: {this.props.email}</h4>
          )}
          <a href={`https://github.com/${this.props.login}`}>GitHub</a>
        </section>
      </div>
    );
  }
}

export default Card;