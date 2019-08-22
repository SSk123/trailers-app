import React from 'react'
import Trailer from '../components/Trailer'
import { getTrailerData } from '../actions/trailer'
import { connect } from 'react-redux'

class AppContainer extends React.PureComponent {
  componentDidMount() {
    getTrailerData();
  }

  render() {
    const {movies, ...rest} = this.props;
    return (
      <Trailer
        movies={movies} {...rest}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.trailer.movies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    getTrailerData: () => dispatch(getTrailerData)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
