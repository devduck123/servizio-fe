export default function Appointment(props) {
  return (
    <div className="appointment-wrapper">
      <div>
        <em>Appointment ID:</em>
        <br /> {props.id}
      </div>
      <div>
        <em>Business ID:</em>
        <br /> {props.businessId}
      </div>
      <div>
        <em>Date:</em>
        <br /> {props.date}
      </div>
    </div>
  );
}
