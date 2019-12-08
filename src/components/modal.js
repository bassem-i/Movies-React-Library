import React from 'react';
import Img from 'react-image'
import styled from 'styled-components';
import {TextWrapper, Date, Desc} from '../assets/styled'
import { Modal } from 'semantic-ui-react';

const btnStyles = {
  position        : 'absolute',
  right           : '1.5rem',
  top             : '1.5rem',
  cursor          : 'pointer',
  fontWeight      : 'bold',
  color           : '#fff',
  backgroundColor : 'transparent',
  border          : '0',
  fontSize        : '25px' 
}
const Title = styled.h3`
    margin: 0;
    font-size: 23px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    :hover {
        color: #fff;
    }
`;

export default class MovieModal extends React.Component {
  render() {
    return (
        <Modal open={this.props.IsOpen} basic={true}>
          <Modal.Content>
            <Img src={this.props.icon} />
            <TextWrapper>
                <Title>{this.props.title}</Title>
                <Date>{this.props.date}</Date>
                <Desc>{this.props.desc}</Desc>
            </TextWrapper>
            <button onClick={this.props.action} style={btnStyles}>X</button>
          </Modal.Content>
        </Modal>
    );
  }
}