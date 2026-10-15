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
  demo?: { src: string; poster: string; caption: string };
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "usb-mouse-tracking-driver",
    title: "USB Mouse Movement Tracking Driver",
    demo: {
      src: "videos/usb-mouse-tracking-demo.mp4",
      poster: "videos/usb-mouse-tracking-demo-poster.jpg",
      caption: "A demonstration of USB mouse activity tracking on Raspberry Pi OS.",
    },
    description:
      "Co-developed a Linux kernel driver on Raspberry Pi 4 to track USB mouse movement and clicks, with a command-line application and live web dashboard. My contribution focused on the Makefile, build system, and module loading workflow.",
    technologies: ["C", "Linux kernel", "Raspberry Pi OS", "GNU Make", "Bash", "Python"],
    facts: [
      { label: "Type", value: "Academic team project" },
      { label: "Team", value: "5 contributors" },
      { label: "Platform", value: "Raspberry Pi 4 / Raspberry Pi OS" },
      { label: "My role", value: "Makefile, build system & module loading" },
    ],
    sections: [
      {
        id: "overview",
        title: "Project overview",
        paragraphs: [
          "Developed for CSC1107 Operating Systems, this project implements a Linux loadable kernel module that tracks USB mouse activity on a Raspberry Pi 4. It records cumulative X and Y movement, left, right, and middle clicks, and the total number of input events.",
          "The project connects hardware input, kernel-space event handling, a character device, and user-space applications in one pipeline. A terminal application and a browser dashboard provide two ways to inspect the collected statistics.",
        ],
      },
      {
        id: "features",
        title: "System features",
        paragraphs: ["The team built a complete workflow for tracking, viewing, and resetting mouse activity:"],
        bullets: [
          "A kernel input handler captures relative movement and mouse button presses through the Linux input subsystem.",
          "The /dev/mouse_tracker character device exposes statistics and accepts a reset command.",
          "A C application provides single-read, continuous watch, and reset modes.",
          "Python programs stream statistics over HTTP JSON to a live browser dashboard.",
          "A Makefile and Bash scripts support building, loading, testing, and cleaning up the project.",
        ],
      },
      {
        id: "contribution",
        title: "My contribution",
        paragraphs: [
          "I handled the Makefile, build system, and module loading workflow. The build compiles both mouse_tracker.ko, the loadable kernel module, and mouse_tracker_app, the user-space C application.",
          "The Makefile uses the running kernel's build directory for module compilation and GCC for the application. It also provides a clean target to remove generated artifacts, making rebuilding and testing more repeatable for the team.",
        ],
      },
      {
        id: "architecture",
        title: "Technical architecture",
        paragraphs: [
          "The kernel module registers an input handler and a character device. The handler updates shared counters, while the character device lets user-space programs retrieve a snapshot or reset the statistics using standard file operations.",
          "A spinlock protects the shared counters during event handling, reads, and resets. Data crosses the kernel/user-space boundary through copy_to_user() and copy_from_user(). Networking and display logic stay in user space, where a Python streamer sends the statistics to an HTTP server and browser dashboard.",
        ],
      },
      {
        id: "testing",
        title: "Testing and results",
        paragraphs: [
          "Testing was carried out on a Raspberry Pi 4 Model B running 64-bit Raspberry Pi OS. The automated test suite reported 15 passing checks and zero failures, covering the build, module loading, device availability, reads, resets, watch mode, and cleanup.",
          "Kernel logs verified mouse detection, device creation, device access, and reset handling. The dashboard was also checked against the device output while moving and clicking the mouse to confirm that the displayed values reflected live activity.",
        ],
      },
      {
        id: "learning",
        title: "Challenges and learning",
        paragraphs: [
          "This project helped me connect operating systems theory with a practical Linux driver. I developed a clearer understanding of how device registration creates a /dev interface, why kernel and user-space data need explicit transfer functions, and how synchronization protects statistics shared by multiple execution contexts.",
          "I also learned the importance of resource cleanup when a module is unloaded. The current implementation aggregates activity across relative input devices, and its polling dashboard is intended for demonstration. Per-device tracking, configurable device permissions, and authenticated streaming are possible areas for further development.",
        ],
      },
    ],
  },
  {
    slug: "patient-management-system",
    title: "Patient Management System",
    demo: {
      src: "videos/patient-management-demo.mp4",
      poster: "videos/patient-management-demo-poster.jpg",
      caption: "A walkthrough of the Patient Management System.",
    },
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
  {
    slug: "tic-tac-toe-ai",
    title: "Tic-Tac-Toe with Minimax AI",
    description:
      "Co-developed a Tic-Tac-Toe game in C with a GTK4 interface, local two-player mode, and AI difficulty settings. My contribution focused on the perfect Minimax opponent, using recursive game-tree search to select optimal moves.",
    technologies: ["C", "GTK4", "Minimax", "GCC", "CMake", "MSYS2"],
    facts: [
      { label: "Type", value: "Academic team project" },
      { label: "Team", value: "4 contributors" },
      { label: "Course", value: "CSC1103 Programming Methodology" },
      { label: "Year", value: "2025" },
      { label: "My role", value: "Perfect Minimax AI" },
    ],
    sections: [
      {
        id: "overview",
        title: "Project overview",
        paragraphs: [
          "This project was developed for a brief from a nursery childcare organization: create an accessible 3-by-3 Tic-Tac-Toe game that supports children's motor skills, analytical thinking, and social interaction. The design considered the memory, processing, and power constraints of an IoT tablet.",
          "The team built the game in C with a GTK4 graphical interface. It supports local two-player games and single-player games against an AI, with difficulty settings to provide different levels of challenge.",
        ],
      },
      {
        id: "features",
        title: "Game features",
        paragraphs: ["The game combines familiar rules with selectable AI behavior:"],
        bullets: [
          "A graphical 3-by-3 board with X and O symbols, turn handling, and win or draw feedback.",
          "Local two-player mode for two people sharing the same device.",
          "Single-player mode with a perfect Minimax opponent and less challenging AI options.",
          "Move validation and win detection across rows, columns, and diagonals.",
          "A modular structure separating the interface, game state, and AI decision logic.",
        ],
      },
      {
        id: "contribution",
        title: "My contribution",
        paragraphs: [
          "I implemented the perfect Minimax AI. The algorithm recursively explores legal future board states, alternating between the AI's best response and the human player's best response to evaluate each candidate move.",
          "Terminal positions receive scores for an AI win, a human win, or a draw. Depth-adjusted scoring favors faster wins and delays unavoidable losses. After evaluating a simulated move, the algorithm restores the board so the next candidate starts from the correct game state.",
        ],
      },
      {
        id: "architecture",
        title: "Technical architecture",
        paragraphs: [
          "The main module coordinates player input, board updates, AI turns, and interface feedback. The game state stores the board, current player, selected mode, and GTK widgets. The AI module evaluates that board and returns a move for the controller to apply.",
          "The project compares full Minimax search with an imperfect depth-limited variant and explores a linear-regression-based opponent. GCC, MSYS2, and CMake were used in the Windows build workflow.",
        ],
      },
      {
        id: "evaluation",
        title: "Evaluation and results",
        paragraphs: [
          "In the report's ten-game hard-mode trial, the Minimax opponent recorded one win, nine draws, and no human wins.",
          "The evaluation also compared response time, search depth, and the number of game states explored. Full search examined tens of thousands of states, while the depth-limited variant examined substantially fewer. Memory usage was discussed using search behavior and recursion depth; it was not measured directly.",
        ],
      },
      {
        id: "learning",
        title: "Challenges and learning",
        paragraphs: [
          "The project connected recursive algorithms with an interactive application. Implementing Minimax required careful handling of terminal states, turn alternation, and board restoration during search.",
          "Comparing difficulty levels also highlighted a design trade-off: a strategically strong opponent is useful for a challenge, while a deliberately imperfect opponent can make the game more approachable for beginners. Search depth provides one way to adjust both difficulty and computation.",
        ],
      },
    ],
  },
];
