# Planora

A simple, beginner-friendly task tracker built with **Next.js (App Router)**, **React**, and **TypeScript**. Create, complete, filter, and delete tasks — everything is saved in your browser using `localStorage`.

## About

Planora is a task manager that lets you create, complete, filter, and delete daily tasks. It was built as an assignment to practise the fundamentals of Next.js and React: components, props, state, event handling, conditional rendering, and persisting data in the browser.

## Features

- Add new tasks with a title, description, and priority (High / Medium / Low)
- Add tasks instantly from a popup modal opened from the header
- Mark tasks as completed or pending
- Delete tasks
- View live statistics (Total / Completed / Pending)
- Filter tasks by All, Pending, or Completed
- Three pages using Next.js App Router: `/` Dashboard, `/tasks` All Tasks, `/about` About
- Tasks are saved in `localStorage`, so they survive a page refresh
- Profile menu with a link to the author's GitHub profile
- Clean, responsive layout that works on desktop, tablet, and mobile

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- react-icons

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (version 18 or newer)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sumittiwari1302/Planora.git
cd Planora
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open http://localhost:3000 (or the port shown in your terminal) in your browser.

## Project Structure

Each component lives in its own folder together with its CSS Module, so all the styles for a component stay in one place.

```
Planora/
├── app/                         Pages and layout (Next.js App Router)
│   ├── layout.tsx               App frame (metadata, global styles)
│   ├── globals.css              Global styles
│   ├── page.tsx                 / — Dashboard
│   ├── tasks/
│   │   └── page.tsx             /tasks — All Tasks
│   └── about/
│       └── page.tsx             /about — About the application
├── components/                  Reusable UI components
│   ├── AddTaskModal/
│   │   ├── AddTaskModal.tsx     Popup dialog for creating tasks
│   │   └── AddTaskModal.module.css
│   ├── FilterTabs/              All / Pending / Completed filter pills
│   ├── Footer/
│   ├── Header/                  Logo, page navigation, profile menu
│   ├── Hero/
│   ├── TaskCard/                Single task display + toggle/delete
│   ├── TaskForm/                Full-width add-task form
│   ├── TaskList/                Renders a list of TaskCards
│   └── TaskStats/               Total / Completed / Pending counts
├── hooks/
│   └── useTasks.ts              Shared task state + localStorage logic
├── types/
│   └── task.ts                  The Task type definition
├── public/                      Static assets
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## What I Learned

- Breaking a UI into reusable components (Header, TaskList, TaskCard, Footer, etc.)
- Passing data between components with props
- Managing state with `useState`
- Handling events (form submit, button clicks)
- Rendering lists with `map()`
- Filtering tasks with `filter()`
- Updating state immutably with the spread operator
- Conditional rendering (completed vs pending styles, empty states)
- Persisting data in the browser with `localStorage`, `JSON.stringify()`, and `JSON.parse()`
- Using Client Components in Next.js when browser APIs like `localStorage` are needed
- Extracting shared logic into a custom hook (`useTasks`)
- Styling with CSS Modules and making the layout responsive
- Next.js App Router with dynamic page routes and `next/link` navigation

## Future Improvements

- Due dates and overdue task indication
- Search and sorting (by priority, title, or date)
- Edit existing tasks
- Categories and tags
- Dark / light mode
- Drag-and-drop task reordering
- Toast notifications for add / delete actions
- A task completion progress bar
