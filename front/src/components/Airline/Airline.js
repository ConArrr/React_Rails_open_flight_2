import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Main/Header'
import Review from './Main/Review'
import ReviewForm from './ReviewForm/ReviewForm'
import styled from 'styled-components'

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `http://localhost:3000/api/v1/airlines/${slug}`

    axios.get(url)
    .then( resp => {
      setAirline(resp.data)
      setLoaded(true)
    })
    .catch( resp => {})
  }, [props.match.params.slug, airline.included?.length])

  let reviews
  if (loaded && airline.included) {
    reviews = airline.included.map((item, index) => {
      return (
        <Review
          key={index}
          attributes={item.attributes}
        />
      )
    })
  }

  const handleChange = (e) => {
    console.log(`e.target.name: ${e.target.name}`)
    console.log(`e.target.value: ${e.target.value}`)
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const airline_id = airline.data.id
    axios.post('http://localhost:3000/api/v1/reviews', {review, airline_id})
    .then( resp => {
      const included = [...airline.included, resp.data.data]
      setAirline({...airline, included})
      setReview({title: '', description: '', score: 0})
    })
    .catch( resp => {})
  }

  const setRating = (score, e) => {
    setReview({...review, score})
  }

  return (
    <Wrapper>
      {
        loaded &&
        <>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`

export default Airline