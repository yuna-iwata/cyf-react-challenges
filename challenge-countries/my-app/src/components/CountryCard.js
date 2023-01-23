export default function CountryCard({
  name,
  population,
  region,
  capital,
  img,
}) {
  return (
    <div>
      <img src={img}></img>
      <h4>{name}</h4>
      <p>Population:{population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  );
}
