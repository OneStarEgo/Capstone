import React from "react";


const ServicesPage = () => {
    return (
        <div className="servicespage">
            <div className="hero-image2">
                <div className="hero-image-thumbnails">
                    <div>
                        <a href="training-link">Training</a>
                        <img className="training-img" src="https://cdn.pixabay.com/photo/2015/03/14/04/45/dog-school-672716__340.jpg" alt="Dog on leash looking up at trainer" width="160" height="145"></img>
                        <a href="grooming-link">Grooming</a>
                        <img className="grooming-img" src="https://media.istockphoto.com/id/1308719194/photo/golden-retriver-dog-taking-a-shower-in-a-pet-grooming-salon.jpg?b=1&s=170667a&w=0&k=20&c=KIUduMfYTE8UZjf9Dk5pQD53O1UbldzkB2b_i9O9O74=" alt="A happy dog in large sink getting a bath" width="160" height="145"></img>
                        <a href="facilities-link">Facilities</a>
                        <img className="facility-img" src="https://totalsportssurfaces.com/wp-content/uploads/2019/06/dog-agility.jpg" width="160" height="145"></img>
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