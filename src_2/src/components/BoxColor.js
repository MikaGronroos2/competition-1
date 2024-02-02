const Boxcolor = (props) => {
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color: `${props.color}`,
        padding: "20px",
    };
    return (
        <div style={divStyle}>
            rgb({props.r},{props.g},{props.b})
            <br />
            {props.code}
        </div>
    );
}
    export default Boxcolor;