import React from "react";

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="hero-image1">
        <div className='hero-text1'>
          <h1>Elite Dog Training</h1>
          <div className="au">
            <a href="/services"> Services </a>
          </div>
          <div className="cu">
            <a href="/schedule"> Schedule Appointment </a>
          </div>
          <div className="cu">
            <a href="/status">Pet Status</a>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="a-padding">
            <h2 className="sect-title-a">Mission Statement</h2>
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
            </p>
          <h2 className="sect-title-b">Facility Info</h2>
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
    </div>
  );
}

export default HomePage;
