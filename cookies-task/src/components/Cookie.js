export default function Cookie({ info }) {
  return (
    <div className="cookie">
      <img className="imageEdit" src={info.image} />
      <h3 className="nameEdit">{info.name}</h3>
      <p className="priceEdit">{info.price} KWD</p>
    </div>
  );
}
