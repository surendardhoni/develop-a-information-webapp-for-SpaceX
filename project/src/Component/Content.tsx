import React from "react";
import image from "../Images/brain.png";

const Content = () => {
  return (
    <div style={{ display: "flex", marginTop: "50px" }}>
      <div>
        <img src={image} style={{ width: "500px", height: "400px" }} />
      </div>
      <div>
        <h2>Make AI work; work for you. </h2>
        <p>
          Built on the Stratforge INAWE Platform, our AI product portfolio
          delivers Customer Workflows across all channels that matter—with
          enterprise grade AI solution blocks that help drive every part of your
          digital transformation story. Design great experiences, deliver
          performance.
        </p>
      </div>
      <div>
        <h2>Simplified AI. Now.</h2>
        <p>
          Enroute creating great transformation stories with some of the largest
          names in this planet. Large enterprises trust Stratforge solutions for
          the rapid time to deploy, packaged solutions, quick configurable
          building blocks, immediate value, wrap-on technology with 'almost
          zero' infra disruption, least IT time and effort spend.
        </p>
      </div>
      <div>
        <h2>Augmented AI. New.</h2>
        <p>
          Make workforce smarter with AI-augmented data discovery, decision
          support, guided resolution, workflow automation, process automation,
          process auditing. Automatically cut through complicated, intense
          engagement processes and learn what happened, why it happened, what
          will happen, how to fix it, how to prevent it across.
        </p>
      </div>
    </div>
  );
};

export default Content;
