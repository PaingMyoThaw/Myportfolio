export interface ProjectSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  facts: { label: string; value: string }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "embedded-motion-control-robot",
    title: "Embedded Motion Control Robot",
    description:
      "A project exploring motor control, encoder feedback, and PID.",
    technologies: ["Motor control", "Encoders", "PID control"],
    facts: [
      { label: "Area", value: "Embedded systems & robotics" },
      { label: "Focus", value: "Robot motion control" },
    ],
    sections: [
      {
        id: "overview",
        title: "Project overview",
        paragraphs: [
          "This project explores how motor control, encoder feedback, and PID can work together to control a robot's motion. The focus is on the relationship between a motor command, the measured response, and the adjustments needed to reach a target.",
        ],
      },
      {
        id: "control-loop",
        title: "Understanding the control loop",
        paragraphs: [
          "A closed-loop controller compares a target with feedback from the system. Encoders provide information about motor motion, allowing the controller to calculate the difference between the requested and measured response.",
          "PID control uses that error to adjust the motor command. The proportional term responds to the current error, the integral term accounts for accumulated error, and the derivative term responds to changes in error.",
        ],
      },
      {
        id: "key-concepts",
        title: "Key concepts explored",
        paragraphs: ["The project brings together three connected areas of motion control:"],
        bullets: [
          "Motor control: translating a motion target into a motor command.",
          "Encoder feedback: measuring motor motion rather than relying only on the command sent.",
          "PID control: using feedback error to adjust the command over time.",
        ],
      },
    ],
  },
  {
    slug: "patient-management-system",
    title: "Patient Management System",
    description:
      "Co-developed a clinic management system using Rust, Actix Web, and MariaDB, integrating appointments, patient records, prescriptions, and billing. My contribution focused on medical records management and printable patient reports combining clinical notes, prescriptions, appointment history, and outstanding balances.",
    technologies: ["Rust", "Actix Web", "MariaDB", "SQLx", "Tera", "HTML & CSS"],
    facts: [
      { label: "Type", value: "Academic team project" },
      { label: "Team", value: "5 contributors" },
      { label: "My role", value: "Medical records & report generation" },
    ],
    sections: [
      {
        id: "overview",
        title: "Project overview",
        paragraphs: [
          "Developed for CSC1106 Web Programming, this web application connects a clinic's clinical and administrative workflows in one place. A shared relational database links patients, doctors, appointments, medical records, prescriptions, and billing information.",
          "The goal was to reduce manual administration and keep related patient information organized, rather than maintaining separate records for each part of the clinic workflow.",
        ],
      },
      {
        id: "features",
        title: "System features",
        paragraphs: ["The team developed interconnected modules to support the clinic workflow:"],
        bullets: [
          "Patient registration, search, and a chronological patient history timeline.",
          "Appointment scheduling with conflict detection and priority-based rescheduling for emergency appointments.",
          "A check-in queue for tracking waiting, called, completed, and skipped appointments.",
          "Medical records, prescriptions, invoices, and patient reports.",
          "Role-based access for administrators, doctors, receptionists, and billing staff.",
        ],
      },
      {
        id: "contribution",
        title: "My contribution",
        paragraphs: [
          "I implemented medical records management and medical report generation. Medical records link symptoms, diagnoses, treatment notes, and prescriptions to the relevant patient, doctor, and appointment.",
          "The generated report consolidates patient details, appointment information, medical records, prescriptions, outstanding balances, and recent timeline history into a structured view. I also created the report template and a Print Report action so staff can print directly from the browser.",
        ],
      },
      {
        id: "architecture",
        title: "Technical architecture",
        paragraphs: [
          "The backend uses Rust and Actix Web for routing, HTTP requests, and server-side logic. SQLx connects the application to MariaDB, while Tera renders HTML templates styled with CSS.",
          "The code separates authentication, route handlers, data models, and business services. Database relationships connect each patient's appointments, records, prescriptions, and invoices so information can be retrieved across modules.",
        ],
      },
      {
        id: "challenges",
        title: "Challenges and learning",
        paragraphs: [
          "A key challenge in my report feature was retrieving the correct patient's information across several related tables. Patient identifiers and record relationships had to remain consistent when bringing medical records, prescriptions, invoices, and timeline events into one report.",
          "Another challenge was presenting the same report clearly on screen and in print. This work gave me practical experience with relational data, server-rendered templates, backend feature integration, and collaborative development.",
        ],
      },
    ],
  },
];
