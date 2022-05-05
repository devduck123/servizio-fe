export default function Business(props) {
  return (
    <div className="business">
      <div className="business-image-wrapper">
        <img
          className="business-image"
          src={props.image}
          alt="business servicing"
        />
      </div>
      <div className="business-info">
        <span>{props.name}</span>
      </div>
    </div>
  );
}
