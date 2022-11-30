import React from "react";


const ServicesPage = () => {
    return (
        <div className="servicespage">
            <div id="wrapper">
                <div className="hero-image2">
                    <a className="training-link" href="#training-sect">Training</a>
                    <a className="grooming-link" href="#grooming-sect">Grooming</a>
                    <a className="facility-link" href="#facility-sect">Facilities</a>
                    <img className="training-thumbnail" src="https://cdn.pixabay.com/photo/2015/03/14/04/45/dog-school-672716__340.jpg" alt="Dog on leash looking up at trainer" width="160" height="145"></img>
                    <img className="grooming-thumbnail" src="https://media.istockphoto.com/id/1308719194/photo/golden-retriver-dog-taking-a-shower-in-a-pet-grooming-salon.jpg?b=1&s=170667a&w=0&k=20&c=KIUduMfYTE8UZjf9Dk5pQD53O1UbldzkB2b_i9O9O74=" alt="A happy dog in large sink getting a bath" width="160" height="145"></img>
                    <img className="facility-thumbnail" src="https://totalsportssurfaces.com/wp-content/uploads/2019/06/dog-agility.jpg" alt="Pics of dog training facilities" width="160" height="145"></img>
                </div>
            </div>


            <div className="training-sect">
                <h2 id="training-sect">Training</h2>
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
                    <div>
                        <a className="sched-button" href="/schedule">
                            <button className="button-styling">Schedule</button>
                        </a>
                    </div>
                </div>
            </div>


            <div className="grooming-sect">
                <h2 id="grooming-sect">Grooming</h2>
                <div className="">
                    <img className="grooming-sect-thumb1" src="https://cdn.pixabay.com/photo/2022/11/02/17/37/dog-7565648__340.jpg" alt="Dog being groomed" width="160" height="145"></img>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eget dolor morbi non arcu.
                        Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.
                    </p>
                    <img className="grooming-sect-thumb2" src="https://cbs12.com/resources/media/e7c93ddc-3bc2-4068-82a8-ad2128fc60e3-largeScale_smallbiz1.jpg?1596017292256" alt="Dog being dried off" width="160" height="145"></img>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eget dolor morbi non arcu.
                        Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.
                    </p>
                </div>
            </div>


            <div className="facility-sect">
                <h2 id="facility-sect">Facilities</h2>
                <div className="">
                    <img className="facility-sect-thumb1" src="https://pawleaks.com/wp-content/uploads/2021/05/dog-boarding-kennel.jpg" alt="Kennels where dogs are kept" width="160" height="145"></img>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eget dolor morbi non arcu.
                        Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.
                    </p>
                    <img className="facility-sect-thumb2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTIGy0UKAje9pVEQAx_8jQIy8jKB7FpHaYA&usqp=CAU" alt="Dog training area" width="160" height="145"></img>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eget dolor morbi non arcu.
                        Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;