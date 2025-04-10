const Hero = () => {
    return(
    <div className="herosection container">
        <div className="content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP 
                YOU WITH OUR SHOES.YOUR 
                FEET DESERVE THE BEST AND WE’RE HERE TO
                 HELP YOU WITH OUR SHOES.</p>
            <div className="btn">
            <button>Shop Now </button>
            <button className="btn2 ">Category </button>
            </div>
            
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icon">
                    <img src="assets/flipkart.png" alt="flipkart" />
                    <img src="assets/amazon.png" alt="amazon" />
                </div>
            </div>

        </div>
        <div className="banner">
            <img src="assets/shoe_image.png" alt="shoe" />
        </div>
    </div>
    );
}
export default Hero;