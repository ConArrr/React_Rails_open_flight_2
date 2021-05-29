import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../common/Rating/Rating'

const Airline = (props) => {
  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </AirlineLogo>
      <AirlineName>{props.attributes.name}</AirlineName>
      <Rating score={props.attributes.avg_score} />
      <LinkWrapper>
        <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`
const AirlineLogo = styled.div`
  width: 50px;
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`
const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.25);
    background-color: #4CAF50;
    color: #fff;
    display: inline-block;
    padding: 0.6em 2em;
    margin: 0 0 1em;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1875em);
  }
`

export default Airline
