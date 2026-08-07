# Planora

A simple, beginner-friendly task tracker built with Next.js (App Router), React, and TypeScript. Create, complete, filter, and delete tasks — everything is saved in your browser using `localStorage`.

## About

Planora is a single-page application where users can manage their daily tasks. It was built as an assignment to practise the fundamentals of Next.js and React: components, props, state, event handling, conditional rendering, and persisting data in the browser.

## Features

- Add new tasks with a title, description, and priority (High / Medium / Low)
- Add tasks quickly from a popup modal opened from the header
- Mark tasks as completed or pending
- Delete tasks
- View live statistics (Total / Completed / Pending)
- Filter tasks by All, Pending, or Completed from the header tabs
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

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open http://localhost:3000 (or the port shown in your terminal) in your browser.

## Project Structure

```
app/             Pages and layout
  layout.tsx     App frame (title, global styles)
  page.tsx       Main page — holds all state
  globals.css    Global styles
components/      Reusable UI components
  Header.tsx
  AddTaskModal.tsx
  TaskForm.tsx
  TaskStats.tsx
  TaskList.tsx
  TaskCard.tsx
  Hero.tsx
  Footer.tsx
types/
  task.ts        The Task type definition
styles/          CSS Modules (one per component)
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
- Styling with CSS Modules and making the layout responsive

## Future Improvements

- Due dates and overdue task indication
- Search and sorting (by priority, title, or date)
- Edit existing tasks
- Categories and tags
- Dark / light mode
- Drag-and-drop task reordering
- Toast notifications for add / delete actions
- A task completion progress bar

## Live Demo

Run the project locally with the steps above, or push it to your own GitHub repository.
