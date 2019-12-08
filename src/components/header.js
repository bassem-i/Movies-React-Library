import React from "react";
import styled from "styled-components";
import { Search } from "../assets/styled";
import { connect } from "react-redux";
import { search } from "../actions/movieAction";

const HeaderWrapper = styled.header`
  padding: 15px 50px;
  background-color: ${props => props.theme.Secondary};
`;
const Wrapper = styled.div`
  text-align: ${props => (props.right ? "right" : "left")};
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
          <SiteName>Movies Library</SiteName>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bassemmohamed.me/"
            >
              Build by Bassem{" "}
              <span role="img" aria-label="emoji">
                ❤️
              </span>
            </a>
          </span>
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
