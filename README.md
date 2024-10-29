# Kanban Dashboard

## Project Overview
This project is a **Kanban Dashboard** designed to manage a large dataset of tickets, simulating a real-world task tracking system. The application allows users to view tickets organized by their statuses (e.g., "To Do," "In Progress," "Blocked," "Done") and interact with them in real-time. Key features include lazy loading of ticket data, finite state automaton (FSA) based ticket status transitions, and a live mode where tickets move between statuses automatically.

The project is built using **React** for the frontend and **Tailwind CSS** for styling, ensuring a responsive and visually appealing user experience. It also uses **Faker** to generate realistic dummy ticket data.

## Key Features

1. **Ticket Data Model & Data Generation**
   - Each ticket includes the following fields:
     - **Ticket ID**: Unique identifier.
     - **Title**: A brief title describing the ticket.
     - **Description**: A short description of the ticket.
     - **Status**: The current status of the ticket, which can be one of four states ("To Do," "In Progress," "Blocked," "Done").
   - A script was created using **Faker** to generate **10,000 unique ticket entries** with realistic dummy data, saved as a JSON file (`tickets.json`) for use in the dashboard.

2. **Kanban Board Interface**
   - The Kanban board has four swimlanes for the statuses: **To Do**, **In Progress**, **Blocked**, and **Done**.
   - Each swimlane displays the tickets grouped by their current status.
   - Lazy loading is implemented with **incremental loading** of tickets in batches of 20 as the user scrolls, ensuring efficient handling of the large dataset without compromising performance.
   - Each swimlane also displays the **total count of tickets** in its respective column.

3. **State Management Using Finite State Automaton (FSA)**
   - Ticket status transitions are managed using a **finite state automaton (FSA)**, which enforces rules for how tickets can move between different statuses.
   - **Allowed transitions** include:
     - **To Do** → **In Progress**
     - **In Progress** → **Blocked** or **Done**
     - **Blocked** → **In Progress**
   - Tickets cannot move outside these predefined transitions, ensuring logical movement between states.

4. **Live Mode and Custom React Hook**
   - A **custom React hook** (`useFakeTicketTransition`) was created to facilitate the **live mode** functionality.
   - When **live mode** is enabled, tickets automatically move between statuses at random intervals, following the FSA-defined transitions.
   - This is useful for simulating a dynamic workflow where tasks are constantly being updated.

5. **Frontend Implementation**
   - Built with **React**, using **functional components** and **React hooks** for state management.
   - Styled with **Tailwind CSS** for a clean and user-friendly interface.
   - Fully **responsive**, ensuring a consistent experience across different screen sizes.

## Technical Details

### Prerequisites
- **Node.js** and **npm**: To run and build the project.
- **React**: Frontend library used for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework used for styling.

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd kanban-dashboard
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Install Tailwind CSS:
   ```sh
   npm install -D tailwindcss
   npx tailwindcss init
   ```
   Add the following to `tailwind.config.js`:
   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
5. Add Tailwind to your CSS (`src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Running the Project
1. To start the development server, run:
   ```sh
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the Kanban dashboard.

### Script for Generating Ticket Data
- A script (`fakerScript.js`) was used to generate 10,000 tickets:
   ```js
   const fs = require('fs');
   const faker = require('faker');

   const tickets = Array.from({ length: 10000 }, (_, index) => ({
     id: `TICKET-${index + 1}`,
     title: faker.company.catchPhrase(),
     description: faker.lorem.sentences(),
     status: faker.helpers.randomize(['To Do', 'In Progress', 'Blocked', 'Done']),
   }));

   fs.writeFileSync('tickets.json', JSON.stringify(tickets, null, 2));
   ```

### Folder Structure
- **`src/`**: Contains all the application source code.
  - **`components/`**: Reusable components like `SwimLane` and `TicketCard`.
  - **`hooks/`**: Custom hooks such as `useFakeTicketTransition`.
  - **`App.js`**: Main application component.

## Usage
- **Swimlanes**: Each status is represented by a swimlane, which can be scrolled independently to view more tickets.
- **Lazy Loading**: As users scroll to the bottom of a swimlane, more tickets are loaded incrementally.
- **Live Mode Toggle**: Enabling the live mode will automatically move tickets between statuses based on predefined rules.
