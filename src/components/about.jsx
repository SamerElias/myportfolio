import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Software Developer and I work on a large scale web application and spend most of my time in the backend and I am recently putting my focus on the frontend too. I have a Bachelors degree in Computer Science and I also have few certificates in Java programming and App Dev and more."
        },
        {
          id: "second-p-about",
          content:
            "I am a passionate person with a hunger for success. I sometimes do live streams working on personal projects or studying. I also love working with my team, we try to push each other but also have a special friendship, some of them are frontend experts and learning from them have been great."
        },
        {
          id: "third-p-about",
          content:
            "In my current job, I am part on a young project where I am responsible for certain areas in the backend, most of the time that I spend in backend (Java, Spring Boot, PostgresQL, Couchbase, RedHat projects, Broadleaf), I try to develop new functionalities or try to resolve issues and defects, I do that mainly by trying to connect our business with our codebase. In the frontend (React, Redux, TypeScript, NodeJS), I mainly deal with defects at the moment as we are in production phase, but I have to say I am learning a lot doing so."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
              <div className="box-shadow-full">
                <div className="row">
                    <div className="about-me">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
