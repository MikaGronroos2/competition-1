const Boxcolor = (props) => {
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        color: "white",
        padding: "10px",
        margin: "10px",
        border: "1px solid black",
    };
    return (
        <div style={divStyle}>
        rgb({props.r}, {props.g}, {props.b})
        </div>
    );
    }
    export default Boxcolor;