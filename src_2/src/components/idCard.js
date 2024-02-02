const idCard = props => {
  return (
    <div className="idCard">
      <img className="idCardImg" src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
    <div className="info">
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
        <strong>Height:</strong> {props.height} m
        </div>
        <div>
        <strong>Birth:</strong> {props.birth.toDateString()}
        </div>
     </div>

    </div>
    );
    };
    export default idCard;