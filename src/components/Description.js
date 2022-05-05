export default function Description() {
  function scrollToCategories() {
    document.querySelector(".category-heading").scrollIntoView();
  }

  return (
    <section className="section-description">
      <div className="description-heading">
        <h1>
          Discover
          <br />
          servizio
        </h1>
        <button type="button" onClick={scrollToCategories}>
          View Services
        </button>
      </div>
      <div className="description-content">
        <p>
          Here at servizio, we believe that services <em>should</em> be provided
          at a value where everybody wins.
        </p>
        <p>
          As a <b>Client</b>, you <em>should</em> feel empowered when
          contracting services.
        </p>
        <p>
          As a <b>Business Owner</b>, you <em>should</em> feel empowered when
          providing services.
        </p>
        <p>
          Here at servizio, we want to contribute to what <em>should</em> be.
        </p>
      </div>
    </section>
  );
}
