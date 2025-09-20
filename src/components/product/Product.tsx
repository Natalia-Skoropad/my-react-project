import css from './Product.module.css';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div className={css.card}>
      <h4 className={css.h4}>{name}</h4>
      <img src={imgUrl} alt={name} width="320" className={css.picture} />
      <p>Price: {price} credits</p>
    </div>
  );
}
