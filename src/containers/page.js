import React from 'react';
import Img from 'react-image'
import { connect } from "react-redux";
import { fetchOneMovie } from '../actions/movieAction'
import { Title, Date, Desc, TextWrapper } from '../assets/styled'
import styled from 'styled-components';
import Header from "../components/header";

const Container = styled.div`
    padding: 25px;
    margin: 25px auto;
    width: 50%;
    border: 1px solid ${props => props.theme.Secondary};
    border-radius: 25px;
`

class Page extends React.Component {
    componentDidMount() {
        var id = this.props.match.params.id;
        this.props.fetch(id);
      }
    render() {
        return (
        <div className="page">
        <Header />
            <Container>
                <Img src={this.props.movie.poster_path} />            
                <TextWrapper>
                    <Title>{this.props.movie.original_title}</Title>
                    <Date>{this.props.movie.release_date}</Date>
                    <Desc>{this.props.movie.overview}</Desc>
                </TextWrapper>
                <TextWrapper>
                    <p>Language : {this.props.movie.original_language}</p>
                    <p>Revenue : {this.props.movie.revenue}</p>
                </TextWrapper>
            </Container>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.activeMovie 
    };
};
const mapDispatchToProps = (dispatch) => {
    return { 
      fetch: (id) => dispatch(fetchOneMovie(id))
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Page)