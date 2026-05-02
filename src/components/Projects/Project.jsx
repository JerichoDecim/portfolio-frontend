import React from "react";
import Card from "../Shared/Card";
import "./Project.css";

export default function Project() {
  return (
    <section className="project-wrapper" id="projects">
      <div className="project-container">

        <div className="project">
          <Card image="/assets/project1.png" alt="Project SAFE prototype" />
          <div className="content">
            <h2>Project S.A.F.E</h2>
            <p>
              SMS-Based Alerts, Air Quality Monitoring, Fire Surveillance and
              Environmental Sensing System through the utilization of ESP32
              Platform. Regional qualifier for 'Robotics and Intellegent Machines'
              category for Science and Technology Fair - CALABARZON
            </p>
          </div>
        </div>

        <div className="project">
          <Card
            image="/assets/project2.png"
            alt="Sumobot, Line tracing, RC robot"
          />
          <div className="content">
            <h2>Autonomous and RC robot</h2>
            <p>
              Utilizing the ESP32 microcontroller as its core processing unit,
              LM2596 buck converter, TB6612 dual motor driver, N20 micro DC motor,
              and an HC-05 Bluetooth transceiver for wireless communication.
            </p>
          </div>
        </div>

        <div className="project">
          <Card
            image="/assets/project3.png"
            alt="Simulation of Urban mobility software snapshot"
          />
          <div className="content">
            <h2>Bacoor City traffic analysis</h2>
            <p>
              Comparative SUMO Simulation of Default and "Buhos" Traffic Control
              Schemes Across Varying Demand Levels at Selected Junctions and
              Intersections in Bacoor City, Cavite: Traffic Performance Analysis
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}