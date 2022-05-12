import React from "react";
import { useSearchParams } from "react-router-dom";
import Business from "./Business";

export default function BusinessesByCategory() {
  let [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [businessesByCategory, setBusinessesByCategory] = React.useState([]);

  React.useEffect(() => {
    let URL = `http://localhost:3000/businesses?category=${category}`;
    fetch(URL)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setBusinessesByCategory(data);
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, [category]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const businesses =
    businessesByCategory.length > 0 ? (
      businessesByCategory.map((business) => (
        <Business key={business.id} name={business.name} images={business.images}/>
      ))
    ) : (
      <h2 style={{ color: "white" }}>no businesses here</h2>
    );

  return (
    <section className="section-businesses">
      <h2 className="business-heading">All Businesses ({category})</h2>
      {businesses}
    </section>
  );
}
