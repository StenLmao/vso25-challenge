const Button = (props) => {
    return (
        <button 
            className={props.textOnly ? "text-button" : "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;