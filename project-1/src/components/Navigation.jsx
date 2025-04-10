import "./App.css";

const Navigation = () =>{
    return(
        <div >
            <nav className="container">
                <div className="logo">
                    <img src="assets/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button>Login</button>
            </nav>
            
        </div>
    );
}

export default Navigation;