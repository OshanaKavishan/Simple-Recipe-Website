import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <main className="page">
      <section className="contact-container">
        <article className="contact-info">
          <h3>Want To Get In Touch?</h3>
          <p>
            We value your connection and are thrilled to hear from you at SimplyRecipes.
            If you have any questions, suggestions, or just want to share your experiences with
            our Sri Lankan easy food recipes, we're here to listen.
          </p>
          <p>
            Feel free to reach out to us through the contact form below, and our dedicated team
            will do their best to respond promptly.
          </p>
          <p>
            Thank you for being a part of the SimplyRecipes family!
          </p>
        </article>
        <article>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label htmlFor="name" className="form-label">your name</label>
              <input type="text" id="name" className="form-input" />
            </div>
            <div className="form-row">
              <label htmlFor="email" className="form-label">your email</label>
              <input type="email" id="email" className="form-input" />
            </div>
            <div className="form-row">
              <label htmlFor="message" className="form-label">message</label>
              <textarea id="message" className="form-textarea" />
            </div>
            <button type="submit" className="btn btn-block">submit</button>
          </form>
        </article>
      </section>
    </main>
  );
}

export default Contact;
