import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading">Contato</h2>
          <hr className="my-4" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ms-auto text-center mb-5 mb-lg-0">
          <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
          <div>+55 (81) 98379-0276</div>
        </div>
        <div className="col-lg-4 me-auto text-center">
          <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
          <a className="d-block" href="mailto:victoroliv2004@gmail.com">
            victoroliv2004@gmail.com
          </a>
        </div>
        <div className="col-lg-4 me-auto text-center">
          <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i>
          <a className="d-block" href="https://www.linkedin.com/in/victornunesdev/" target="_blank" rel="noopener noreferrer">
            Linkedin/victornunesdev
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
