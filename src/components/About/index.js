import React from "react";
import coverImage from "../../assets/cover/cover-img.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "25%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          I recently graduated with full-stack developer certification from
          Vanderbilt. I live in Memphis, TN, with my wife and three kids.
          Interested in all things web and tech. Believer in justice.
        </p>
      </div>
    </section>
  );
}

export default About;
