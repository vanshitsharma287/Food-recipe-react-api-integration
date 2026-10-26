import Header from "./common/Header";
import "../css/about.css";
import { Link } from "react-router";

const features = [
  {
    icon: "👨‍🍳",
    title: "Simple Recipes",
    description: "Easy-to-follow recipes for every skill level.",
  },
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    description: "We focus on wholesome, real ingredients.",
  },
  {
    icon: "♡",
    title: "Healthy Choices",
    description: "Delicious food that fuels your body and mind.",
  },
  {
    icon: "👥",
    title: "Our Community",
    description: "Join food lovers who share a passion for cooking.",
  },
];

const About = () => {
  return (
    <div className="main-container">
      <Header active="about" />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-label">About Us</span>

            <h1>Good Food Brings People Together</h1>

            <p>
              At RecipeHub, we believe that great food has the power
              to create happiness, bring people closer, and make life
              a little more delicious. Our mission is to make cooking
              simple, enjoyable, and accessible to everyone.
            </p>

            <Link to="/" className="about-cta">
              Explore Recipes →
            </Link>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85"
              alt="A fresh and colourful healthy salad"
            />
            <span className="image-note">Better Food, Happier You ♡</span>
          </div>
        </section>

        <section className="about-features">
          {features.map((feature) => (
            <article className="about-feature" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>

        <section className="about-mission">
          <div className="mission-content">
            <span className="about-label">Our Mission</span>

            <h2>
              Making Home Cooking Easy, Exciting, and Accessible.
            </h2>

            <p>
              We're here to inspire you with simple, delicious recipes.
              No complicated steps, no fancy equipment, just great
              food made with love. Whether you're a beginner or an
              experienced cook, there's always something new to try.
            </p>

            <Link to="/" className="about-cta">
              Find Your Next Favourite →
            </Link>
          </div>

          <div className="mission-image">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
              alt="Fresh ingredients prepared for home cooking"
            />
          </div>
        </section>

        <section className="about-bottom">
          <h2>Good food. Good mood. Great memories.</h2>
          <p>Your next favourite recipe is waiting for you.</p>
        </section>
      </main>
    </div>
  );
};

export default About;