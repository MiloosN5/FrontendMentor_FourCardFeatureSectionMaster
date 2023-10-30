import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <section className='cards'>
      <h2 className='sr-only'>List of tools</h2>
      {[...Array(4)].map((x, index) =>
        <Card key={index} id={index} />
      )}
    </section>
  )
}

export default Cards