import React from "react";


const ServicesPage = () => {
    return (
        <div className="servicespage">
            <div className="hero-image2">
                <div className="hero-image-thumbnails">
                    <div>
                        <a href="training"></a>
                        <a href="grooming"></a>
                        <a href="facilities"></a>
                    </div>
                </div>
            </div>
            <div className="training-sect">
                <h2>Training</h2>
            </div>
            <div className="grooming-sect">
                <h2>Grooming</h2>
            </div>
            <div className="facility-sect">
                <h2>Facilities</h2>
            </div>
        </div>
    )
}

export default ServicesPage;