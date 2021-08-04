import "./Card.css"

function Card (props) {
    var classes = "card ";
    if (props.className != null) {
        classes += props.className
    }    
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;