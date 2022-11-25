import React from "react";

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="hero-image">
        <div className='hero-text'>
          <h1>Elite Dog Training</h1>
          <div className="au">
            <a href="about-us">About Us</a>
          </div>
          <div className="cu">
            <a href="contact-us">Contact Info</a>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="a-padding">
            <h2 className="section-a">About Us</h2>
            <p className="paragraph-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Volutpat odio facilisis mauris sit.
              Et odio pellentesque diam volutpat commodo.
              Feugiat in fermentum posuere urna nec tincidunt praesent semper.
              Nec sagittis aliquam malesuada bibendum arcu vitae elementum.
              Et netus et malesuada fames ac turpis egestas sed tempus.
              Lectus magna fringilla urna porttitor rhoncus dolor.
              Orci eu lobortis elementum nibh.
              Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
              Hac habitasse platea dictumst quisque sagittis.
              Eget aliquet nibh praesent tristique.
              Arcu bibendum at varius vel pharetra.
              Amet mauris commodo quis imperdiet.
              Vitae semper quis lectus nulla at.
              Ut pharetra sit amet aliquam id diam maecenas ultricies.
              At tempor commodo ullamcorper a lacus vestibulum.
              In arcu cursus euismod quis viverra nibh cras pulvinar.
              Eros donec ac odio tempor. Arcu vitae elementum curabitur vitae.
            </p>
          <br />
          <p className="paragraph-2">Nunc pulvinar sapien et ligula ullamcorper malesuada. 
          Suscipit adipiscing bibendum est ultricies integer quis auctor elit.
          Elementum nisi quis eleifend quam. Maecenas accumsan lacus vel facilisis.
          Congue quisque egestas diam in arcu.
          Velit laoreet id donec ultrices tincidunt.
          Aenean sed adipiscing diam donec adipiscing tristique.
          Pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
          Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.
          Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
          Netus et malesuada fames ac.
          Ac placerat vestibulum lectus mauris.
          Eget nunc scelerisque viverra mauris in aliquam sem fringilla.
          Lorem ipsum dolor sit amet consectetur.
          Ante in nibh mauris cursus.
          Aliquet porttitor lacus luctus accumsan tortor posuere ac.</p>
        </div>
      </div>
      <div className="contact-us">
        <h2>Contact Us</h2>
      </div>
    </div>
  );
}

export default HomePage;
