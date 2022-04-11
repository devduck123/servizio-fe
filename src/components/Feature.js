import Category from "./Category";
import Business from "./Business";
import categoryData from "../mockCategories";
import businessData from "../mockBusinesses";

export default function Feature() {
  const categories = categoryData.map((data) => (
    <Category id={data.id} name={data.name} key={data.id} image={data.image} />
  ));
  const businesses = businessData.map((data) => (
    <Business
      id={data.id}
      name={data.name}
      key={data.id}
      image={data.image}
      stars={data.stars}
    />
  ));

  return (
    <section className="section-feature">
      <section>
        <h2 className="category-heading">Service Categories</h2>
        <div className="category-wrapper">{categories}</div>
      </section>
      <section>
        <h2 className="business-heading">Featured Businesses</h2>
        <div className="business-wrapper">{businesses}</div>
      </section>
    </section>
  );
}
