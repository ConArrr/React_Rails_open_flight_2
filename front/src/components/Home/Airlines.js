import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/airlines')
    .then( resp => { setAirlines(resp.data.data) })
    .catch( resp  => {})
  }, [airlines.length])

  const grid = airlines.map( item => {
    return (
      <Airline
        key={item.id}
        attributes={item.attributes}
      />
    )
  })

  return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <SubHeader>Honest, unbiased airline reviews.</SubHeader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;
`
const SubHeader = styled.div`
  font-weight: 300;
  font-size: 26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

export default Airlines
