import React from 'react';
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';

const { Meta } = Card;

class UserCard extends React.Component {

  increse(){
    Meteor.call('editProfile',this.props.user.userID,{rating:this.props.user.rating + 1})
  }

  decrese(){
    Meteor.call('editProfile',this.props.user.userID,{rating:this.props.user.rating - 1})
  }

  ban(){
    Meteor.call('editProfile',this.props.user.userID,{isBaned:true})
  }

  unban(){
    Meteor.call('editProfile',this.props.user.userID,{isBaned:false})
  }

  render() {

    if (this.props.current.type === 'admin')
    return (
      <Card
        style={{ width: 300, marginTop: 16, display: "inline-block", margin:"5px"}}
        actions={[<Icon onClick={this.increse.bind(this)} type="like" />, <Icon onClick={this.decrese.bind(this)} type="dislike" />,
          <span onClick={this.ban.bind(this)}>Ban</span>,<span onClick={this.unban.bind(this)} >Unban</span>]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={this.props.user.username}
          description={<div>   {"Rating - "+(this.props.user.rating)} <br/> {"Ban "+this.props.user.isBanned} </div>}
        />

      </Card>
    );
    else
      return(

        <Card
          style={{ width: 300, marginTop: 16, display: "inline-block", margin:"5px"}}
          actions={[<Icon onClick={this.increse.bind(this)} type="like" />, <Icon onClick={this.decrese.bind(this)} type="dislike" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={this.props.user.username}
            description={"Rating - "+(this.props.user.rating)}
          />

        </Card>
      )
  }
}

export default UserCard;