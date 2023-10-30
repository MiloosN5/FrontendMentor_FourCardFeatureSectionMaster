import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <section className='cards'>
      {[...Array(4)].map((x, index) =>
        <Card key={index} id={index} />
      )}
    </section>
  )
}

export default Cards