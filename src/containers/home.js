import React from 'react';
import Card from '../components/card'
import Modal from '../components/modal'
import { connect } from "react-redux";
import { fetchMovies,openModal,closeModal } from "../actions/movieAction"
import Header from '../components/header'
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    padding: 0 75px;
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 25px;
    overflow: 'scroll';
`;

class Home extends React.Component {
  getLoadMore() {
    return this.props.searchText ? false : true;
  }
  getItems() {
    let filteredMovies = this.props.movies.filter( (movie) => {
      return movie.original_title.toUpperCase().indexOf(this.props.searchText.toUpperCase()) !== -1;
    });
    return filteredMovies;
  }
  render() {
    return (
      <div className="main">
        <Header />
        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.fetch}
          hasMore={this.getLoadMore()}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
        <ContentWrapper>{ 
          this.getItems().map((movie,i) => <Card 
            id={movie.id} 
            key={i} 
            icon={movie.poster_path} 
            title={movie.original_title} 
            date={movie.release_date} 
            desc={movie.overview}
            action={this.props.openModal}/>
          )
        }</ContentWrapper>
        </InfiniteScroll>
        <Modal 
          IsOpen={this.props.modalState}
          icon={this.props.activeMovie.poster_path} 
          title={this.props.activeMovie.original_title} 
          date={this.props.activeMovie.release_date} 
          desc={this.props.activeMovie.overview}
          action={this.props.closeModal}       
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    modalState: state.modalState,
    activeMovie: state.activeMovie,
    movies: state.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { 
    fetch: (page) => dispatch(fetchMovies(page)),
    openModal: (id) => dispatch(openModal(id)),
    closeModal: () => dispatch(closeModal()),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home)