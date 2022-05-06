import { Outlet, Link } from "react-router-dom";
import Category from "./Category";
import Business from "./FeaturedBusiness";
import categoryData from "../mockCategories";
import businessData from "../mockBusinesses";

export default function Feature() {
  // const categories = categoryData.map((data) => (
  //   <Category id={data.id} name={data.name} key={data.id} image={data.image} />
  // ));
  const categories = categoryData.map((data) => {
    let categoryURL = `/businesses?category=${data.name}`;
    return (
      <Link
        to={categoryURL}
        className="category"
        name={data.name}
        key={data.id}
      >
        {data.name}
      </Link>
    );
  });
  const businesses = businessData.map((data) => (
    <Business id={data.id} name={data.name} key={data.id} image={data.image} />
  ));

  return (
    <section className="section-feature">
      <section>
        <h2 className="category-heading">Service Categories</h2>
        <div className="category-wrapper">{categories}</div>
      </section>
      <section>
        <h2 className="featured-business-heading">Featured Businesses</h2>
        <div className="featured-business-wrapper">{businesses}</div>
      </section>
      <Outlet />
    </section>
  );
}
