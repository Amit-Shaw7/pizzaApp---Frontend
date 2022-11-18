import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/about.scss";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/me.jpg";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Pijja</h4>
          <p>We might not deliver your pizza in 30 minutes <br />but the your pizza will worth your wait</p>
          <p>Explore the various types of pizza's . Click below to see menu</p>
          <Link to="/"><RiFindReplaceLine /></Link>

        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Amit Shaw</h3>
            </div>
            <p>
              Hii , I am Amit , founder of Pijja . Our motto is to delivery the best taste a pizza can have
              <br />
              in a valuable price , hence we might not deliver pizza in 30 minutes but our pizza will worth your wait .
            </p>
          </article>
        </div>
      </main>
    </section>)
}

export default About