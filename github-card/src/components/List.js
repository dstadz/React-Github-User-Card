import React from 'react'


class List extends React.Component {
    render() {
        return (
            <List>
                <h2>Followers</h2>
                {this.props.followers.map((follower, index) => {
                return <div key={index}>
                    <img src={follower.avatar_url} />
                    {follower.login}
                </div>
                })}
            </List>
        );
    }
}

export default List