import React from 'react'
import FilterComponent from './FilterComponent';
import PropTypes from 'prop-types'
import Button from 'muicss/lib/react/button';
import {getLanguages, getGenres} from '../actions/trailer'
import { connect } from 'react-redux'
import './Header.css'

class MovieTitle extends React.Component {
  render() {
      return (
        <div className='movie-title-container'>
          <div className='title'>Movie Trailer</div>
          <Button color='accent' className='static'>Coming Soon</Button>
          <Button color='dark'>Now Showing</Button>
        </div>
    )
  }
}

class Header extends React.PureComponent {
  static propTypes = {
    language: PropTypes.array,
    genre: PropTypes.array
  }

  componentDidMount() {
    this.props.getLanguages();
    this.props.getGenres();
  }

  render() {
    const {tags} = this.props;
    return (
      <div className='header-container'>
        <MovieTitle/>
        <FilterComponent {...this.props}/>
        {tags.length ? <div className="tags-container">{tags}</div> : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.trailer.language,
    genre: state.trailer.genre,
    tags: state.trailer.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    getLanguages: () => dispatch(getLanguages),
    getGenres: () => dispatch(getGenres)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

