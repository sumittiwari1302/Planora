# Planora - Task Tracker

A complete, production-style Next.js task tracker application with full CRUD operations, dynamic routing, persistent localStorage data, search, sort, and a polished UI.

## Overview

Planora is a feature-rich task manager built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. It demonstrates complete task management capabilities including create, read, update, and delete operations, with all data persisted in the browser's `localStorage`.

## Features

### Core Functionality

- **Create tasks** — Add new tasks with title, description, priority (High/Medium/Low), and due date
- **View all tasks** — See the complete task list on the `/tasks` page
- **View individual task** — Dynamic task detail page at `/tasks/[id]` with full task information
- **Edit tasks** — Modify task title, description, priority, and due date
- **Delete tasks** — Remove tasks with a confirmation dialog before permanent removal
- **Mark completed/pending** — Toggle task status with visual indicators

### Navigation & Routing

- **`/` (Dashboard)** — Main task tracker with hero, stats, add task form, search, sort, filters, and task list
- **`/tasks`** — All tasks page with search, sort, filtering, and task listing
- **`/tasks/[id]`** — Dynamic route for individual task details (e.g., `/tasks/1`, `/tasks/2`)
- **`/about`** — About page with application information, features, and tech stack

### Data Persistence

- **localStorage persistence** — All tasks survive page refreshes and browser restarts
- **Automatic sync** — Create, edit, delete, and toggle operations all update localStorage
- **Graceful fallback** — Handles missing or corrupted localStorage data

### Search & Sort

- **Search tasks** — Filter tasks by title or description in real-time
- **Sort by date** — Show newest tasks first (default)
- **Sort by priority** — High priority tasks appear first
- **Sort alphabetically** — Tasks ordered by title

### UI & UX

- **Task cards** with priority badges, status indicators, due dates, and action buttons
- **Add task modal** (accessible from header) with form validation
- **Add task form** (inline on dashboard) with title, priority, due date, and description
- **Edit task form** with pre-populated fields and save/cancel
- **Delete confirmation modal** — Prevents accidental deletions
- **Filter tabs** — All / Pending / Completed
- **Task statistics** — Total, completed, and pending counts with color-coded cards
- **Empty states** — Helpful messages when no tasks exist or no search results
- **Loading states** — Graceful loading indicators
- **Responsive design** — Works on mobile, tablet, and desktop

### Component Architecture

- **Reusable components** — Header, TaskCard, TaskList, TaskStats, FilterTabs, TaskForm, AddTaskModal, ConfirmDialog, Footer, Hero
- **Custom hook** — `useTasks` encapsulates all task logic and localStorage persistence
- **Type-safe** — Full TypeScript support with proper type definitions
- **CSS Modules** — Scoped, modular styling per component
- **Utility module** — `utils/storage.ts` for localStorage read/write helpers

## Tech Stack

- **Next.js 16** — App Router with file-based routing
- **React 19** — UI library
- **TypeScript** — Type-safe code
- **CSS Modules** — Scoped component styling
- **react-icons** — Feather icon set

## Getting Started

### Prerequisites

- Node.js (version 18 or newer)
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/sumittiwari1302/Planora.git
cd Planora
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
Planora/
├── app/
│   ├── layout.tsx                 Root layout (metadata, global styles)
│   ├── globals.css                Global styles
│   ├── page.tsx                   / — Dashboard / Home
│   ├── not-found.tsx              Custom 404 page
│   ├── about/
│   │   ├── page.tsx               /about — About page
│   │   └── about.module.css       About page styles
│   ├── tasks/
│   │   ├── page.tsx               /tasks — All Tasks
│   │   └── [id]/
│   │       └── page.tsx           /tasks/[id] — Task Details
│   └── organization/
│       └── page.tsx               /organization — Org showcase
│
├── components/
│   ├── Header/                    Sticky nav with logo, links, Add Task, profile
│   ├── Hero/                      Homepage hero banner
│   ├── TaskStats/                 Total / Completed / Pending stat cards
│   ├── TaskForm/                  Inline add-task form
│   ├── TaskList/                  Renders a list of TaskCards
│   ├── TaskCard/                  Single task with toggle/delete/view
│   ├── FilterTabs/                All / Pending / Completed filter pills
│   ├── AddTaskModal/              Modal dialog for creating tasks
│   ├── ConfirmDialog/             Confirmation dialog for deletions
│   ├── Footer/                    Footer with links and copyright
│   └── organization/              Organization page components
│
├── hooks/
│   └── useTasks.ts                Custom hook for task state + localStorage
│
├── types/
│   └── task.ts                    TypeScript Task type definition
│
├── utils/
│   └── storage.ts                 localStorage read/write helpers
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Minimum Requirements Checklist

- [x] Multiple Next.js routes (`/`, `/tasks`, `/tasks/[id]`, `/about`)
- [x] Dynamic route for individual tasks (`/tasks/[id]`)
- [x] Create task functionality
- [x] View all tasks
- [x] View individual task
- [x] Edit task functionality
- [x] Delete task functionality
- [x] Mark task completed/pending
- [x] Data persisted in localStorage
- [x] Data remains after refresh
- [x] Good UI
- [x] Responsive design
- [x] Reusable components
- [x] Clean project structure
- [x] Meaningful Git commits
- [x] README documentation

## Additional Features

- **Search** — Search tasks by title or description
- **Sort** — Sort by newest, priority, or alphabetical
- **Due dates** — Optional due date with formatted display
- **Delete confirmation modal** — Prevents accidental deletions
- **Add task modal** — Opens from the header Add Task button
- **Dynamic routing** — Proper `/tasks/[id]` routes with Next.js App Router
- **Empty states** — Helpful messages when no tasks or no search results
- **Loading states** — Graceful loading indicators
- **Custom 404 page** — Not-found page for invalid routes
- **Task counter badge** — Header shows total task count
- **Priority color coding** — High (red), Medium (amber), Low (green)
- **Custom hooks** — `useTasks` for centralized state management
- **TypeScript** — Full type safety across the application
- **CSS Modules** — Scoped, modular component styling

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescript-handbook.io/)
