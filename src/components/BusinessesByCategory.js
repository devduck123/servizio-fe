import React from "react";
import { useSearchParams } from "react-router-dom";
import Business from "./Business";

export default function BusinessesByCategory() {
  // eslint-disable-next-line no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [businessesByCategory, setBusinessesByCategory] = React.useState([]);

  React.useEffect(() => {
    let URL = `${process.env.REACT_APP_API_URL}businesses?category=${category}`;
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
        <Business
          key={business.id}
          businessId={business.id}
          name={business.name}
          images={business.images}
        />
      ))
    ) : (
      <h2 style={{ color: "grey", margin: "1rem" }}>no businesses here</h2>
    );

  // TODO: wire up and write the logic for toggling business profile page
  // to display

  return (
    <section className="section-businesses">
      <h2 className="business-heading">All Businesses ({category})</h2>
      {businesses}
    </section>
  );
}
