# Planora - Task Tracker

A complete, production-style Next.js task tracker application with full CRUD operations, dynamic routing, and persistent localStorage data.

## 📋 Overview

Planora is a feature-rich task manager built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. It demonstrates complete task management capabilities including create, read, update, and delete operations, with all data persisted in the browser's `localStorage`.

## ✨ Features

### Core Functionality

- **Create tasks** - Add new tasks with title, description, priority (High/Medium/Low), and due date
- **View all tasks** - See the complete task list on the `/tasks` page
- **View individual task** - Dynamic task detail page at `/tasks/[id]` with full task information
- **Edit tasks** - Modify task title, description, priority, and due date with confirmation
- **Delete tasks** - Remove tasks with a confirmation dialog
- **Mark completed/pending** - Toggle task status with visual indicators

### Navigation

- **`/` (Dashboard)** - Main task tracker with add task form, stats, and task list
- **`/tasks`** - All tasks page with filtering and task listing
- **`/tasks/[id]`** - Dynamic route for individual task details (e.g., `/tasks/1`, `/tasks/2`)
- **`/about`** - About page with application information

### Data Persistence

- **localStorage persistence** - All tasks survive page refreshes and browser restarts
- **Automatic sync** - Create, edit, and delete operations all update localStorage
- **Graceful fallback** - Handles missing or corrupted localStorage data

### UI & UX

- **Task cards** with priority badges, status indicators, and action buttons
- **Add task modal** with form validation
- **Edit task form** with pre-populated fields
- **Delete confirmation dialog** before permanent removal
- **Filter tabs** - All / Pending / Completed
- **Task statistics** - Total, completed, and pending counts
- **Responsive design** - Works on mobile, tablet, and desktop
- **Loading states** and **empty states** handled gracefully

### Component Architecture

- **Reusable components** - Header, TaskCard, TaskList, TaskStats, FilterTabs, TaskForm, AddTaskModal, ConfirmDialog, Footer
- **Custom hook** - `useTasks` encapsulates all task logic and localStorage persistence
- **Type-safe** - Full TypeScript support with proper type definitions
- **CSS Modules** - Scoped, modular styling

## 🛠️ Tech Stack

- **Next.js 16** - App Router with file-based routing
- **React 19** - UI library
- **TypeScript** - Type-safe code
- **CSS Modules** - Scoped component styling
- **react-icons** - Icon set

## 🚀 Getting Started

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

## 📁 Project Structure

```
Planora/
├── app/                              Pages and layout (Next.js App Router)
│   ├── layout.tsx                    App frame (metadata, global styles)
│   ├── globals.css                   Global styles
│   ├── page.tsx                      / — Dashboard / Home
│   ├── tasks/
│   │   └── page.tsx                  /tasks — All Tasks
│   └── about/
│       └── page.tsx                  /about — About the application
│
├── components/                       Reusable UI components
│   ├── AddTaskModal/
│   │   ├── AddTaskModal.tsx          Popup dialog for creating/editing tasks
│   │   └── AddTaskModal.module.css
│   ├── ConfirmDialog/
│   │   ├── ConfirmDialog.tsx         Confirmation dialog for deletions
│   │   └── ConfirmDialog.module.css
│   ├── FilterTabs/                   All / Pending / Completed filter pills
│   ├── Footer/                       Footer with links and copyright
│   ├── Header/                       Logo, navigation, task count, profile menu, Add Task button
│   ├── Hero/                         Hero section with branding
│   ├── TaskCard/                     Single task display with toggle/delete
│   │   └── TaskCard.module.css
│   ├── TaskForm/                     Full-width add-task form
│   ├── TaskList/                     Renders a list of TaskCards
│   └── TaskStats/                    Total / Completed / Pending counts
│       └── TaskStats.module.css
│
├── hooks/                          Custom React hooks
│   └── useTasks.ts                   Shared task state + localStorage logic
│
├── types/                          TypeScript type definitions
│   └── task.ts                       The Task type definition
│
├── utils/                          Utility modules
│   └── storage.js                    localStorage read/write helpers
│
├── public/                         Static assets
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🎯 Minimum Requirements Checklist

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

## 🌟 Additional Features Implemented

- **Due dates** - Each task can have an optional due date displayed on task cards and detail pages
- **Task counter** - Header shows total task count with badge
- **Status indicators** - Visual completed/pending badges on task cards
- **Priority colors** - High (red), Medium (orange), Low (green) priority styling
- **Edit task with form** - Full edit form with pre-populated fields and save/cancel
- **Delete confirmation modal** - Prevents accidental deletions
- **Dynamic routing** - Proper `/tasks/[id]` routes with Next.js App Router
- **Filter by status** - All / Pending / Completed filtering
- **View in List** - Link from detail page back to tasks list with filter applied
- **Comprehensive error handling** - Task not found pages, missing data fallbacks
- **Full CRUD operations** - All create, read, update, delete operations working
- **LocalStorage persistence** - All operations (create, edit, delete, toggle) update localStorage

## 📦 Available Scripts

- `npm run dev` - Start development server (Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescript-handbook.io/)