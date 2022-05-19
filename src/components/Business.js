import React from "react";

export default function Business(props) {
  /**
   *
   * to create an appointment:
   * i need a React component that is essentially a form
   * that has a couple of fields such as a textarea and a date
   * when the form is submitted, the form sends a POST request
   * over to /appointments with the clientId, businessId, and date in the request body

   * BUT this kinda means that GetBusiness is useless
   * since it was to be used to build a business profile page
   */

  // TODO: use redux state to get jwt to fetch api
  // let jwt = window.jwt;

  // TODO: ensure that images[0] is the profile picture
  // let profileURL = props.images
  //   ? `http://localhost:9199/${props.images[0]}`
  //   : "https://via.placeholder.com/300";
  let profileURL = props.images
    ? `https://storage.googleapis.com/${props.images[0]}`
    : "https://via.placeholder.com/300";

  // console.log(props.images ? props.images[0] : "unknown");
  const [formData, setFormData] = React.useState({
    date: "",
    time: "",
    comments: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function createAppointment(event) {
    // TODO: POST /appointments and clear the form
    // TODO: validate required inputs
    event.preventDefault();

    // validate date and time
    if (formData.date === "" || formData.time === "") {
      alert("Please enter a date and time.");
      return;
    }

    let rawDate = `${formData.date}T${formData.time}:00`;
    let dateObj = new Date(Date.parse(rawDate));
    let formattedDate = dateObj.toISOString();

    let fd = {
      businessId: props.businessId,
      // TODO: use the actual clientId
      clientId: window.uid,
      date: formattedDate,
      // TODO: firebase implement "comments"
      // fd.append("comments", formData.comments);
    };
    let fdJSON = JSON.stringify(fd);

    let URL = `${process.env.REACT_APP_API_URL}appointments/`;
    let responseOK = false;
    let status;
    fetch(URL, {
      method: "post",
      body: fdJSON,
      headers: {
        Authorization: `${window.jwt}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        status = response.status;
        console.log("status: " + status);
        if (status === 200 || status === 201) {
          responseOK = true;
        }

        return response.text();
      })
      .then((data) => {
        console.log(data);
        if (responseOK) {
          console.log("responseOK");
          alert(`Successfully scheduled an appointment with ${props.name}.`);
          return;
        }

        if (status === 401) {
          alert(
            "Failed to create appointment.\nPlease sign in, and validate your email."
          );
          return;
        }
        if (status === 400) {
          alert(
            "Failed to create appointment.\nPlease enter valid date and time."
          );
        }
      })
      .catch((err) => {
        alert("Error ", err);
      });
  }

  return (
    <div>
      <div
        onClick={() => props.handleToggle(props.businessId)}
        className="business"
      >
        <div className="business-image-wrapper">
          <img src={profileURL} alt="business profile" />
        </div>
        <div className="business-description">
          <h3>{props.name}</h3>
          <p>some short description ...</p>
        </div>
      </div>
      {props.toggled && (
        <div className="business-profile">
          <form>
            <h4 className="appointment-heading">Schedule an Appointment</h4>
            <fieldset className="input-date-wrapper">
              <div>
                <label htmlFor="date">Preferred Date:</label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  onChange={handleChange}
                  value={formData.date}
                />
              </div>
              <div>
                <label htmlFor="time">Preferred Time:</label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  onChange={handleChange}
                  value={formData.time}
                />
              </div>
            </fieldset>
            <fieldset className="input-notes-wrapper">
              <div>
                <label htmlFor="comments">Notes & Comments:</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows="4"
                  maxLength="360"
                  placeholder="My dog is a very hyperactive German Shepherd that requires extreme patience..."
                  onChange={handleChange}
                  value={formData.comments}
                />
              </div>
            </fieldset>
            <button
              className="btn-create-appointment"
              onClick={createAppointment}
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
