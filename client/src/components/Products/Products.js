import './Products.css';
import products from '../data/products.json';

export const Products = () => {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
        </div>
      ))}
    </section>
  );
}
