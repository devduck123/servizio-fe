import React from "react";
import { useSearchParams } from "react-router-dom";
import Appointment from "./Appointment";

export default function Appointments() {
  // eslint-disable-next-line no-unused-vars
  let [searchParams, setSearchParams] = useSearchParams();
  let clientId = searchParams.get("client");
  console.log("clientId:", clientId);

  // TODO: implement filter by businessId?
  // let businessId = searchParams.get("business");
  // console.log("businessId", businessId)

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [appointments, setAppointments] = React.useState([]);

  React.useEffect(() => {
    let URL = `${process.env.REACT_APP_API_URL}appointments/?client=${clientId}`;
    fetch(URL)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAppointments(() => data);
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, [clientId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const appointmentElements =
    appointments.length > 0 ? (
      appointments.map((appointment) => {
        let jsDate = new Date(appointment.date).toLocaleString();

        return (
          <Appointment
            key={appointment.id}
            id={appointment.id}
            clientId={appointment.clientId}
            businessId={appointment.businessId}
            date={jsDate}
          />
        );
      })
    ) : (
      <h2 style={{ color: "grey", margin: "1rem" }}>
        no appointments scheduled
      </h2>
    );

  return (
    <section className="section-appointments">
      <h2>Your Appointments</h2>
      {appointmentElements}
    </section>
  );
}
