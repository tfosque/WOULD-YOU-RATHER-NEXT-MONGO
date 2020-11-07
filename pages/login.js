import React, { Component } from 'react';
import Login from '../components/Login';

import { connectToDatabase } from '../util/mongodb';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Login to play
        <Login data={this.props.users} />
      </div>
    );
  }
}
/* Fetch Data and add to props (this is a Redux/ Reflux pattern) */
// TODO: catch 200
export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const users = await db
    .collection('users')
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

export default LoginContainer