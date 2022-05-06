import React from "react";
import { useSearchParams } from "react-router-dom";

export default function BusinessesByCategory() {
  let [searchParams, setSearchParams] = useSearchParams();
  let category = searchParams.get("category");

  // when searchParams changes ([searchParams]
  // in React.useEffect()), we have to
  // fetch /businesses?category={category} ???
  //
  // or does this component re-render every single time
  // and therefore will call useEffect each time ???

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

  console.log(businessesByCategory);
  
  // TODO: write Business component (BusinessProfile Page)

  return (
    <section className="section-businesses">
      <h2 className="business-heading">All Businesses ({category})</h2>
    </section>
  );
}
