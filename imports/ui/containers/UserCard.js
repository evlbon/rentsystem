import React from 'react';
import axios from 'axios';
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';

const { Meta } = Card;

class UserCard extends React.Component {
  state = {
    rating: this.props.user.rating,
    banned: this.props.user.is_banned
  };


  increse(){
    this.setState({
      rating: this.state.rating+1,

    });

    axios.put(`http://127.0.0.1:8000/profiles/${this.props.user.username}/`, {
      "rating": this.state.rating+1,
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));

  }

  decrese(){
    this.setState({
      rating: this.state.rating-1
    });
    console.log(this.state.rating);
    axios.put(`http://127.0.0.1:8000/profiles/${this.props.user.username}/`, {
      "rating": this.state.rating-1,
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  ban(){
    this.setState({
      banned: true,

    });
    axios.put(`http://127.0.0.1:8000/profiles/${this.props.user.username}/`, {
      "is_banned": true,
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  unban(){
    this.setState({
      banned: false,
    });
    axios.put(`http://127.0.0.1:8000/profiles/${this.props.user.username}/`, {
      "is_banned": false,
    })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  render() {

    if (this.props.current.type_of_user === 'admin')
    return (
      <Card
        style={{ width: 300, marginTop: 16, display: "inline-block", margin:"5px"}}
        actions={[<Icon onClick={this.increse.bind(this)} type="like" />, <Icon onClick={this.decrese.bind(this)} type="dislike" />,
          <span onClick={this.ban.bind(this)}>Ban</span>,<span onClick={this.unban.bind(this)} >Unban</span>]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={this.props.user.username}
          description={<div>   {"Rating - "+(this.state.rating)} <br/> {"Ban "+this.state.banned} </div>}
        />

      </Card>
    )
    else
      return(

        <Card
          style={{ width: 300, marginTop: 16, display: "inline-block", margin:"5px"}}
          actions={[<Icon onClick={this.increse.bind(this)} type="like" />, <Icon onClick={this.decrese.bind(this)} type="dislike" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={this.props.user.username}
            description={"Rating - "+(this.state.rating)}
          />

        </Card>
      )
  }
}

export default UserCard;