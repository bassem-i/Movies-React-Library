import React from 'react';
import { connect } from "react-redux";
import { fetchUser } from '../actions/movieAction'
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';
import Header from '../components/header'

const Container = styled.div`
    text-align: center;
    background-image: radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%);
    box-shadow: 0 2px 8px ${props => props.theme.Primary};
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    width : 50%;
    transform: translate(-50%,-50%);
`
const Title = styled.h2`
    color: ${props => props.theme.Primary};
    font-size: 25px;
`
const Input = styled.input`
    padding: 10px;
    display: block;
    width: 200px;
    margin: 0 auto 15px;    
    border: 1px solid ${props => props.theme.Secondary};
    border-radius: 25px;
`
const Button = styled.button`
    display: block;
    padding: 10px;
    width: 200px;
    border: 1px solid ${props => props.theme.Secondary};
    margin: 0 auto 15px;
    border-radius: 25px;
    cursor: pointer;
`

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            username: '',
            password: ''
        };
    }
    submit = (e) =>
    {
        e.preventDefault();
        this.props.fetchUser(this.state.username,this.state.password)
    }
    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        return (
            <div>
            <Header />
            <Container>
                <form>
                    <Title>Login Form</Title>
                    <Input 
                        autoComplete={"off"} 
                        placeholder={"Username"}
                        value={this.state.username} 
                        onChange={evt => this.setState({...this.state,username: evt.target.value})} 
                    />
                    <Input 
                        type={"password"}
                        autoComplete={"off"} 
                        value={this.state.password} 
                        placeholder={"Password"}
                        onChange={evt => this.setState({...this.state,password: evt.target.value})} 
                    />
                    <Button onClick={e => {this.submit(e)}}>Login</Button>
                </form>
            </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authenticated
    };
};
const mapDispatchToProps = (dispatch) => {
    return { 
        fetchUser: (username,password) => dispatch(fetchUser(username,password))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Login)