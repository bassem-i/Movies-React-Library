import React from "react";
import styled from "styled-components";
import { Search } from "../assets/styled";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { search } from "../actions/movieAction";

const HeaderWrapper = styled.header`
  padding: 0 100px;
  background-color: ${props => props.theme.Secondary};
`;
const Wrapper = styled.div`
  text-align: ${props => (props.right ? "right" : "left")};
  margin: 15px 0;
  width: 50%;
  display: inline-block;
`;
const SiteName = styled.h3`
  margin: 0;
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.theme.Primary};
  text-decoration: none;
  vertical-align: middle;
  :hover {
    color: ${props => props.theme.Primary};
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Wrapper>
          <Link to="/">
            <SiteName>Movies Library</SiteName>
          </Link>
        </Wrapper>
        <Wrapper right>
          <Search
            placeholder="Search"
            onChange={e => this.props.search(e.target.value)}
          ></Search>
        </Wrapper>
      </HeaderWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    search: key => dispatch(search(key))
  };
};
export default connect(null, mapDispatchToProps)(Header);
