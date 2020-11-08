import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: '',
      },
    };
    this.login = this.login.bind(this);
    this.handleInputChangeUsername = this.handleInputChangeUsername.bind(this);
    this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
  }
  componentDidMount () {
    console.log('Login:Props:', this.props);
  }
  componentWillUnmount () {
    /* Logout? */
  }
  login(e) {
    e.preventDefault();
    const collectionUsers = this.props.users;
    const form = this.state.form;
    /* Filter thru users */
    const hasCredentials = collectionUsers.find((usr) => {
      return usr.username === form.username && usr.password === form.password;
    });
    // console.log({ hasCredentials });
    hasCredentials
      ? (console.log('logging in....'),
        this.createSession(),
        sessionStorage.setItem('user:', JSON.stringify(form.username)),
        this.props.router.push('/game'))
      : alert('please enter valid credentials');
  }
  handleInputChangeUsername(event) {
    const currState = this.state.form;
    this.setState({
      form: { ...currState, username: event.target.value },
    });
  }
  handleInputChangePassword(event) {
    const currState = this.state.form;
    this.setState({
      form: { ...currState, password: event.target.value },
    });
  }
  createSession() {
    console.log('creating session.....');
    /* Create localStorage userSession */
  }
  render() {
    return (
      <div>
        <Form
          id='loginForm'
          onSubmit={this.login}
          className='mt-5'
          style={{ border: 'solid thin #e9e9e9; padding: 15px' }}
        >
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter username'
              onChange={this.handleInputChangeUsername}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={this.handleInputChangePassword}
            />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <div className='text-center'>
              <Form.Check type='checkbox' label='Keep logged in' />
            </div>
          </Form.Group>
          <div>
            <Button variant='primary' type='submit' className='btn-block'>
              Login to Play
            </Button>
          </div>
        </Form>
        <Form>
          <div className='mt-3 text-center'>
            <b>Forget Password</b>
          </div>
          <div className='mt-3'>
            New to Would You Rather&nbsp;
            <a className='text-primary btn btn-link' href='#'>
              {' '}
              <b>Join</b>
            </a>
          </div>
        </Form>
      </div>
    );
  }
}
Login.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
};

export default withRouter(Login);
