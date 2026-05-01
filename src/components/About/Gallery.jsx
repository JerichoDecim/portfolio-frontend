import React from "react";
import "./Gallery.css";
import Card from "../Shared/Card";

export default function Gallery() {
  return (
    <section className="gallery-container">
      <Card
        image="/assets/baguio.jpg"
        alt="photo 1"
        description="National level robotics competition by Association of Science Educators in the Philippines, Teacher's Camp, Baguio City"
        link="https://www.facebook.com/photo/?fbid=122180107424262661&set=a.122108319212262661"
      />
      <Card
        image="/assets/sumo.jpg"
        alt="photo 2"
        description="Training for the 2025 Division Science and Technology Fair and Robotics Competition"
        link="https://www.facebook.com/permalink.php?story_fbid=pfbid0Txza5VQSVSWCJYajdEubX4mpL59iVnzzpR2tZkjtBfYaaMZW6QcEaCahM6Fs9T2Kl&id=100084330261811"
      />
      <Card
        image="/assets/training.jpg"
        alt="photo 3"
        description=" Development of Science Investigatory Project under the research category ‘Mathematics and Computational Sciences'"
        link="https://www.facebook.com/photo?fbid=122214089366262661&set=pcb.122214090068262661"
      />

      <Card
        image="/assets/robot.jpg"
        alt="photo 4"
        description="Track Mania robot for National RoboSports Carnival 2025 at Naic, Cavite"
        link="https://www.facebook.com/permalink.php?story_fbid=pfbid02FqngjHmTHWPkcTnDoa3ZuzAf5w4Kjs4FiDyEKgAXTR3WqTdSH3LgrH4cBderjCeAl&id=100084330261811"
      />
    </section>
  );
}
