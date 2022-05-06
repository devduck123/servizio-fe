export default function Business(props) {
  return (
    <div className="featured-business">
      <div className="featured-business-image-wrapper">
        <img
          className="featured-business-image"
          src={props.image}
          alt="business servicing"
        />
      </div>
      <div className="featured-business-info">
        <span>{props.name}</span>
      </div>
    </div>
  );
}
