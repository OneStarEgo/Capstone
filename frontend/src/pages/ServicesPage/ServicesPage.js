import React from "react";


const ServicesPage = () => {
    return (
        <div className="servicespage">
            <div id="wrapper">
                <div className="hero-image2">
                    <a className="training-link" href="training-sect">Training</a>
                    <a className="grooming-link" href="grooming-sect">Grooming</a>
                    <a className="facility-link" href="facilities-sect">Facilities</a>
                    <img className="training-thumbnail" src="https://cdn.pixabay.com/photo/2015/03/14/04/45/dog-school-672716__340.jpg" alt="Dog on leash looking up at trainer" width="160" height="145"></img>
                    <img className="grooming-thumbnail" src="https://media.istockphoto.com/id/1308719194/photo/golden-retriver-dog-taking-a-shower-in-a-pet-grooming-salon.jpg?b=1&s=170667a&w=0&k=20&c=KIUduMfYTE8UZjf9Dk5pQD53O1UbldzkB2b_i9O9O74=" alt="A happy dog in large sink getting a bath" width="160" height="145"></img>
                    <img className="facility-thumbnail" src="https://totalsportssurfaces.com/wp-content/uploads/2019/06/dog-agility.jpg" alt="Pics of dog training facilities" width="160" height="145"></img>
                </div>
            </div>


            <div className="training-sect">
                <h2>Training</h2>
                <div className="hero-image3">
                    <img className="training-sect-thumb1" src="https://assets3.thrillist.com/v1/image/2868747/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg" alt="group of dogs looking up at trainer for instructions" width="160" height="145"></img>
                    <p className="obedience">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eget dolor morbi non arcu.
                        Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.
                    </p>
                    <img className="training-sect-thumb2" src="https://i.ebayimg.com/images/g/Vv4AAOSw4tZjKWFc/s-l500.jpg" alt="dog running performance training course" width="160" height="145"></img>
                    <p className="performance">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eget dolor morbi non arcu.
                        Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.
                    </p>
                </div>
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