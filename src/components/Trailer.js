import React from 'react'
import { 
  TrailerCard,
  VideoCard
} from './TrailerComponent';
import './Trailer.css';


class Trailer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null
    }
  }

  onClick = (movieKey) => {
    const {selectedMovie} = this.state;
    this.setState({
      selectedMovie: selectedMovie === movieKey ? null : movieKey
    })
  }

  render() {
    const { movies } = this.props;
    const { selectedMovie } = this.state;

    return (
      <section>
        {Object.keys(movies).map(movieKey => {
          return <TrailerCard
            key={movieKey}
            selectedMovie={selectedMovie}
            movie={movies[movieKey]}
            onClick={this.onClick.bind(this, movieKey)} />
        })}
      </section>
    )
  }
}


export default Trailer
