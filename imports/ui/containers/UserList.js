import React from 'react';
import axios from 'axios';
import {
  Skeleton, Switch, Card, Icon, Avatar,
} from 'antd';
import UserCard from "./UserCard";

const { Meta } = Card;

class UserList extends React.Component {

  state = {
    users: [],
    current: [],

  }


  componentDidMount() {
    axios.get('http://localhost:8000/profiles/')
      .then(res => {
        this.setState({
          users: res.data
        });
      });

    axios.get(`http://localhost:8000/profiles/${localStorage.getItem('user')}/`)
      .then(res => {
        this.setState({
          current: res.data
        });
      })
  }

  render() {
    console.log(this.state.current)
    return (
      <div style={{minHeight:"900px", background:"white", padding:"70px 0 0 0"}}>


        {
          this.state.users.map((user)=>(
            <UserCard key={user.username} user={user} current={this.state.current}/>
          ))
        }


      </div>
    )
  }
}

export default UserList;