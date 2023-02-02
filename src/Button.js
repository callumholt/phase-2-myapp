function Button() {
    return (
        <a href="#about">
            <button className="button"  onClick={()=>console.log("clicked button")}>Click me</button>
        </a>
    );
}

export default Button;