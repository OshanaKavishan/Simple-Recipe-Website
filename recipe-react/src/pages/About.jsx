import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <main className="page">
      <section className="about-page">
        <article>
          <h2>Welcome to SimplyRecipes</h2>
          <p>
            Your go-to destination for authentic and hassle-free Sri Lankan easy food recipes.
            We understand the beauty of simplicity in cooking, and our mission is to bring the heart
            and soul of Sri Lankan cuisine to your kitchen with straightforward and delicious recipes.
          </p>
          <p>
            At SimplyRecipes, we celebrate the joy of cooking, sharing, and savoring the warmth of
            Sri Lankan home-style dishes. Join us on a culinary journey that embraces the essence
            of simplicity and the diverse tastes that define Sri Lankan cuisine.
          </p>
          <Link to="/contact" className="btn">contact</Link>
        </article>
        <img
          src="/assets/about.jpeg"
          alt="Person Pouring Salt in Bowl"
          className="img about-img"
        />
      </section>
    </main>
  );
}

export default About;
