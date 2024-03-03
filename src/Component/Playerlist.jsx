import React from 'react'
import {  Card } from 'react-bootstrap';
import './Playerlist.css';
import './Playercard';
import { propTypes } from 'react-bootstrap/esm/Image';

const Playerlist = ({football}) => {
    return (
        <div className='cards'>
              <Card  style={{  margin:'20px' }} id="carte">
              <Card.Img variant="top" src={football.imageUrl} className="img" />
              <Card.Body>
              <Card.Title className='title'>{football.name}</Card.Title>
              <Card.Text className='text'>{football.team}</Card.Text>
              <Card.Text className='text1'>{football.nationality}</Card.Text>
              <Card.Text className='text2'>{football.jerseyNumber}</Card.Text>
              </Card.Body>
              </Card>
              
        </div>
      )
    };
    
    Playerlist.defaultProps ={
      football:{

        imgURL:".....",
        name:"......",
        team:"......",
        nationality:"........",
        jerseyNumber:"........",
      }
  }

  Playerlist.propTypes = {
    football : propTypes.string,
    list : propTypes.string,
  }
  

export default Playerlist


