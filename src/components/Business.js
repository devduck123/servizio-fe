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
   *
   * BUT instead of using react-router to route the appointment...
   * i don't actually care to expose the endpoint or not
   * so therefore, i'll just use classic javascript
   * to append the UI for appointments when clicked
   *
   * BUT this kinda means that GetBusiness is useless
   * since it was to be used to build a business profile page
   */

  // TODO: ensure that images[0] is the profile picture
  let profileURL = props.images
    ? `http://localhost:9199/${props.images[0]}`
    : "https://via.placeholder.com/300";
  console.log(profileURL);

  // TODO: when this business component is clicked, display the
  // business profile UI (for now, just make it a form component)

  return (
    <div>
      <div className="business">
        <div className="business-image-wrapper">
          <img src={profileURL} alt="business profile" />
        </div>
        <div className="business-description">
          <h3>{props.name}</h3>
          <p>some short description ...</p>
        </div>
      </div>
      <div className="business-profile">
        <form>
          <h4 className="appointment-heading">Schedule an Appointment</h4>
          <fieldset className="input-date-wrapper">
            <div>
              <label htmlFor="date">Preferred Date:</label>
              <input id="date" type="date" />
            </div>
            <div>
              <label htmlFor="time">Preferred Time:</label>
              <input id="time" type="time" />
            </div>
          </fieldset>
          <fieldset className="input-notes-wrapper">
            <div>
              <label htmlFor="notes">Notes & Comments:</label>
              <textarea
                id="notes"
                rows="4"
                maxLength="360"
                placeholder="My dog is a very hyperactive German Shepherd that requires extreme patience..."
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
