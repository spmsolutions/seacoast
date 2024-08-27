import React from "react";
import "./Process.css";

const steps = [
  {
    title: "Creating Your Vision",
    description: `Your journey begins with a conversation. This is a listening and idea session 
to establish the scope and estimated budget range for your project. Your space needs, 
design preferences, and personal details are all identified. Reach out to us to 
share your vision, and let's explore the possibilities together.`,
  },
  {
    title: "Inspired Design",
    description: `Working with our architect, your ideas are transformed into a preliminary 
schematic floor plan and site plan. Your estimated budget range is revised to 
reflect the accepted plan and a chart of allowances is created for the selection 
process that follows. We consult with both you and the architect to ensure your 
vision is realized.`,
  },
  {
    title: "Rendering to Scale",
    description: `Selections and specifications are finalized to completed. We’ll work with you 
to refine the chosen design and finalize material selections.  The process is 
thorough, but efficient. A full set of construction plans are created to maximize 
design, innovation, and value engineering to meet your budget. Upon completion, 
a final construction agreement is presented for your approval.`,
  },
  {
    title: "Detailed Planning",
    description: `We’ll go over every detail with you prior to the start of construction, to set 
your expectations for the project and to put your mind at ease. We review the 
plans in detail with you to ensure a thorough understanding of the scope of the work. 
We prepare a construction and material selection timeline and acquire all necessary 
permits for the project. `,
  },
  {
    title: "Mobilize and Build",
    description: `Congratulations, your project is now ready to start as Seacoast Builder’s 
construction team transforms your plans into reality. Watch as your dream 
home comes to life. Our team will manages all aspects of the construction, 
keeping you informed and involved at every stage. Weekly meetings and reports 
will keep everyone up to date, and issues addressed in a timely manner. 
All this ensures projects are delivered on time, on budget and to your satisfaction .`,
  },
  {
    title: "Your Vison Realized",
    description: `The moment you've been waiting for – your project has been completed. After 
you've settled in, our team remains at your service for any needs that may arise. 
Our team is available for ongoing support and emergency calls whenever the need arises, 
or to assist with warranty items or future small projects.`,
  },
];

const ProcessTimeline = () => {
  return (
    <div className="process-timeline">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`timeline-step step-${index % 2 === 0 ? "right" : "left"}`}
        >
          <div className="content">
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
