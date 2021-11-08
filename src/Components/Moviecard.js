import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Rate from './rate'
export default function Moviecard({movie}){
    console.log(movie)
    return (
        <div className='cardContainer'>
    <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={movie?.imgURL} />
  <Card.Body>
    <Card.Title>{movie?.title}</Card.Title>
    <Card.Text>
      {movie?.description}
    </Card.Text>
    <Rate rate={movie?.rating}/>
   
  </Card.Body>
</Card>
        </div>
    )
}