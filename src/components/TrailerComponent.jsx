import React from 'react';
import { getFormattedDate } from '../utils/DateUtils';

export function Vote({reviewCount, reviewPercent}) {
    return <div className='movie-review'>
        <span>
            <i className={`fa fa-thumbs-up ${reviewCount ? 'upvote' : 'downvote'}`} aria-hidden="true" />
            {`${reviewPercent}%`}
        </span>
        {reviewCount ? `${reviewCount} votes` : null}
    </div>
}

export function ReleaseDate({ showDate, showIcon }) {
    const date = getFormattedDate(showDate);

    return <div className='movie-release'>
        <span>
            { showIcon
                ? <i className={`fa fa-calendar`} aria-hidden="true" />
                : null
            }
            {date}
        </span>
    </div>   
}

export function TrailerWCount({reviewCount, dReviewCount, maybeCount}) {
    return <div className='movie-review-count'>
        <div className='movie-review-icon'>
            <i className={`fa fa-thumbs-up`} aria-hidden="true" />
            <div>{reviewCount}</div>
        </div>
        <div className='movie-review-icon'>
            <i className={"fa fa-question"} aria-hidden="true" />
            <div>{maybeCount}</div>
        </div>
        <div className='movie-review-icon'>
            <i className={`fa fa-thumbs-down`} aria-hidden="true" />
            <div>{dReviewCount}</div>
        </div>
    </div>
}

export function Tag({genre}) {
    return <div className='movie-genre'>{genre}</div>
}

export function MovieTitle({title}) {
    return <div className='movie-name'>{title}</div>
}

export function TrailerCard({movie, selectedMovie, ...rest}) {
    const {
        EventCode: movieId,
        EventTitle: title,
        ShowDate,
        wtsCount:reviewCount,
        wtsPerc: reviewPercent
    } = movie;
    
    return (
        <div className='card-wrap' {...rest} >
            <div className='card-container'> 
                <div className='card-content'
                    style={{'backgroundImage': `url('https://in.bmscdn.com/events/moviecard/${movieId}.jpg')`}} >
                <ReleaseDate showDate={ShowDate} />
                <div className='play-option'>
                    <i className="fa fa-play-circle-o play-icon" aria-hidden="true"></i>
                    <div className='hover-title'>{title}</div>
                </div>
                <Vote reviewCount={reviewCount} reviewPercent={reviewPercent} />
                </div>
                <MovieTitle title={title} />
            </div>
            <div className={`video-space ${selectedMovie === movieId ? 'show' : ''}`}>
                {selectedMovie === movieId ? <VideoCard movie={movie} /> : null}
            </div>
        </div>
    )
}

export function VideoCard({ movie }) {
    const {
        TrailerURL: url,
        EventTitle: title,
        EventGenre: genres,
        EventLanguage: language,
        wtsCount: reviewCount,
        dwtsCount: dReviewCount,
        maybeCount,
        ShowDate,
        wtsPerc: reviewPercent
    } = movie
  
    return (
        <div className='video-container'>
            <div className='video-player'>
                <iframe width="100%" height="100%" src={url.replace('watch?v=', 'embed/')}></iframe>
            </div>
            <div className='video-description'>
                <MovieTitle title={title} />    
                <div className='movie-lang'>{language}</div>
                <div className='movie-genres'>
                    { genres.split('|').map((genre, index) => <Tag genre={genre} key={genre + index}/>) }
                </div>
                <div className='movie-info'>
                    <Vote reviewCount={reviewCount} reviewPercent={reviewPercent} />
                    <ReleaseDate showDate={ShowDate} showIcon/>
                </div>
                <TrailerWCount  reviewCount={reviewCount}
                    dReviewCount={dReviewCount}
                    maybeCount={maybeCount} />
            </div>
        </div>
    )
}