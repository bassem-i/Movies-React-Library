import React from "react";
import LazyImage from "./lazyImage.js";
import styled from "styled-components";
import { TextWrapper, Title, Date, Desc } from "../assets/styled";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  :hover {
    box-shadow: 0 2px 8px ${props => props.theme.Primary};
  }
`;
const MoreBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #000;
  :hover {
    color: #000;
  }
`;
const Anchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  width: 50%;
  span {
    height: 100%;
    img {
      height: 100%;
    }
  }
`;
export default class Card extends React.Component {
  render() {
    return (
      <CardWrapper>
        <Anchor onClick={() => this.props.action(this.props.id)}>
          <LazyImage width={185} src={this.props.icon} />
        </Anchor>
        <TextWrapper>
          <Title onClick={() => this.props.action(this.props.id)}>
            {this.props.title}
          </Title>
          <Date>{this.props.date}</Date>
          <Desc>{this.props.desc.substring(0, 75)}...</Desc>
          <Link to={`/${this.props.id}`}>
            {" "}
            <MoreBtn>More Info</MoreBtn>{" "}
          </Link>
        </TextWrapper>
      </CardWrapper>
    );
  }
}
