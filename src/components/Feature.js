import { Outlet, Link } from "react-router-dom";
// import Category from "./Category";
import FeaturedBusiness from "./FeaturedBusiness";
import categoryData from "../mockCategories";
import businessData from "../mockBusinesses";

export default function Feature() {
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
  const featuredBusinesses = businessData.map((data) => {
    let businessURL = `/businesses/${data.id}`;
    return (
      <FeaturedBusiness
        to={businessURL}
        id={data.id}
        name={data.name}
        key={data.id}
        image={data.image}
      />
    );
  });

  return (
    <section className="section-feature">
      <section>
        <h2 className="category-heading">Service Categories</h2>
        <div className="category-wrapper">{categories}</div>
      </section>
      <section>
        <h2 className="featured-business-heading">Featured Businesses</h2>
        <div className="featured-business-wrapper">{featuredBusinesses}</div>
      </section>
      <Outlet />
    </section>
  );
}
