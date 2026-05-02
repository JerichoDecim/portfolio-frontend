import "./About.css";
import Card from "../Shared/Card";

const BIO_LINES = [
  `Hello! I am Jericho — Echo to most people, Sir Echo to my students, and a father of 12 rescued cats. I am a licensed Electronics Engineer and Technician with a knack for robotics and microcontroller systems, IoT research and development, programming, and a bit of web development.`,
  `My teaching career is a return of service for my DOST scholarship during my undergraduate studies. Beyond teaching, I have had the privilege of mentoring Senior High School students in robotic systems, sumobots, line-racing robots, microcontrollers, IoT research and development — helping them grow to their full potential.`,
];

export default function About() {
  return (
    <section className="about-container" id="about-me">
      <div className="about-top">
        <div className="about-left">
          <img
            src="/assets/heroprofile.png"
            alt="Portrait of Jericho B. Baal"
          />
        </div>

        <div className="about-right">
          <div className="right-wrapper">
            <pre>
              <span className="code-keyword">let </span>
              <span>about</span>
              {" =\n"}
              {BIO_LINES.map((line, i) => (
                <span key={i} className="about-bio-line">
                  {`      `}
                  <span className="code-str">
                    {i === 0 ? `"` : ""}
                    {line}
                    {i === BIO_LINES.length - 1 ? `"` : ""}
                  </span>
                  {"\n"}
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <div className="gallery-container">
          <Card
            className="card"
            image="/assets/baguio.jpg"
            alt="photo 1"
            description="National level robotics competition by Association of Science Educators in the Philippines, Teacher's Camp, Baguio City"
            link="https://www.facebook.com/photo/?fbid=122180107424262661&set=a.122108319212262661"
          />
          <Card
            className="card"
            image="/assets/sumo.jpg"
            alt="photo 2"
            description="Training for the 2025 Division Science and Technology Fair and Robotics Competition"
            link="https://www.facebook.com/permalink.php?story_fbid=pfbid0Txza5VQSVSWCJYajdEubX4mpL59iVnzzpR2tZkjtBfYaaMZW6QcEaCahM6Fs9T2Kl&id=100084330261811"
          />
          <Card
            className="card"
            image="/assets/training.jpg"
            alt="photo 3"
            description="Development of Science Investigatory Project under the research category 'Mathematics and Computational Sciences'"
            link="https://www.facebook.com/photo?fbid=122214089366262661&set=pcb.122214090068262661"
          />
          <Card
            className="card"
            image="/assets/robot.jpg"
            alt="photo 4"
            description="Track Mania robot for National RoboSports Carnival 2025 at Naic, Cavite"
            link="https://www.facebook.com/permalink.php?story_fbid=pfbid02FqngjHmTHWPkcTnDoa3ZuzAf5w4Kjs4FiDyEKgAXTR3WqTdSH3LgrH4cBderjCeAl&id=100084330261811"
          />
        </div>
      </div>
    </section>
  );
}
