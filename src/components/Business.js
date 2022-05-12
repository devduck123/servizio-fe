export default function Business(props) {
  /**
   * 
   * to view a business:
   * if i click on a business from the landing page, it's coming from
   * either /business?category={category} or /
   * BUT i want the route to correspond to /business/{id} after clicking
   * 
   * to create an appointment:
   * i need a React component that is essentially a form 
   * that has a couple of fields such as a textarea and a date
   * when the form is submitted, the form sends a POST request
   * over to /appointments with the clientId, businessId, and date
   * in the request body
   * and additionally reroute the frontend URL
   */

  
  // TODO: ensure that images[0] is the profile picture
  let profileURL = props.images ? `http://localhost:9199/${props.images[0]}` : "https://via.placeholder.com/300";
  console.log(profileURL)
  
  
  return (
    <div className="business">
      <div className="business-image-wrapper">
        <img src={profileURL} alt="business profile" />
      </div>
      <div className="business-description">
          <h3>{props.name}</h3>
          <p>some short description ...</p>
      </div>
    </div>
  );
}
