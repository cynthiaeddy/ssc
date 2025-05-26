import React from 'react'
import './CustomerFavorites.css'
import lotion from '../../assets/favorites/coffee.png'
import veganSoap from '../../assets/favorites/vegan.png'
import lavenderSoap from '../../assets/favorites/lotion.png'
import conditionerBar from '../../assets/favorites/conditioner.png'

const products = [
  {
    name: 'Lavender Lotion',
    size: '3.5 oz.',
    price: '$7.00',
    image: lotion,
    reviews: 3,
  },
  {
    name: 'Vegan Soap',
    size: '3.5 oz.',
    price: '$7.00',
    image: veganSoap,
    reviews: 3,
  },
  {
    name: 'Lavender Soap',
    size: '3.5 oz.',
    price: '$7.00',
    image: lavenderSoap,
    reviews: 3,
  },
  {
    name: 'Conditioner Bar',
    size: '3.5 oz.',
    price: '$7.00',
    image: conditionerBar,
    reviews: 3,
  },
]

const CustomerFavorites = () => {
  return (
    <section className="customer-favorites">
      {/* <div className="decorative-rule" /> */}
      <h2 className="section-title">Customer Favorites</h2>
      <div className="favorites-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-size">{product.size}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-stars">★★★★★</p>
            <p className="product-reviews">({product.reviews} Reviews)</p>
          </div>
        ))}
      </div>
      <div className="section-divider bottom" />
    </section>
  )
}

export default CustomerFavorites
