import React from "react";

const Roadmap = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 text-white">
      <h2 className="text-4xl font-bold mb-4">MVP ROADMAP</h2>
      <p className=" mb-8">
        This roadmap outlines the key phases for bringing our app to life, from
        initial development to public release.
      </p>

      <div className="mb-8">
        <h3 className="font-semibold text-lg">
          Phase 1: Core Development{" "}
          <span className="text-sm">(Months 1–4)</span>
        </h3>
        <p className=" ml-4">
          • Focus: Building the foundational features and core functionalities
          of the app.
        </p>
        <p className=" ml-4">• Activities:</p>
        <ul className="list-disc ml-10">
          <li>Backend infrastructure setup</li>
          <li>UI/UX Design and Mobile App Development</li>
          <li>Initial feature development and internal testing</li>
          <li>AI Integration</li>
          <li>Gathering of Resources</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg">
          Phase 2: Iteration & Public Alpha Testing{" "}
          <span className="text-sm">(Months 5–6)</span>
        </h3>
        <p className=" ml-4">
          • Focus: Refining the app based on early feedback and identifying
          critical bugs.
        </p>
        <p className=" ml-4">• Activities:</p>
        <ul className="list-disc ml-10">
          <li>Gathering feedback from a select group of alpha testers</li>
          <li>Implementing requested features and improvements</li>
          <li>Extensive bug fixing and performance optimization</li>
          <li>Further internal testing and quality assurance</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg">
          Phase 3: Competitions & Seed Funding{" "}
          <span className="text-sm">(Months 7+)</span>
        </h3>
        <p className=" ml-4">
          • Focus: Gaining recognition, securing initial investment, and
          expanding our network.
        </p>
      </div>
    </section>
  );
};

export default Roadmap;
