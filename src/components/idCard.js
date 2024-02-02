const idCard = props => {
  return (
    <div className="idCard">
      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
      <div>
        <strong>First name:</strong> {props.firstName}
      </div>
      <div>
        <strong>Last name:</strong> {props.lastName}
      </div>
        <div>
        <strong>Gender:</strong> {props.gender}
        </div>
        <div>
        <strong>Height:</strong> {props.height} cm
        </div>
        <div>
        <strong>Birth:</strong> {props.birth.toDateString()}
        </div>
    </div>
    );
    };
    export default idCard;