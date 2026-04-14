# 📝 Notes App

A simple notes application built with React to practice fundamental React concepts — from the Udemy course [**Modern React From The Beginning**](https://www.udemy.com/course/modern-react-from-the-beginning/).

## 📖 About

This project is a hands-on exercise focused on working with **forms and input fields** in React. Users can create, view, and delete notes — each with a title, priority level, category, and description. Notes are persisted in the browser using `localStorage`.

## 🧠 React Concepts Learned

### Controlled Components

All form inputs in this project are **controlled components** — their values are driven by React state (`useState`) rather than the DOM. A single `formData` state object manages the entire form, and a shared `handleChange` function updates it via computed property names (`[e.target.name]`).

> **Controlled vs Uncontrolled Components:** In a controlled component, React state is the "single source of truth" for input values. In an uncontrolled component, the DOM itself holds the value and you read it via refs. This project exclusively uses the controlled approach.

### Form Validation

Basic validation is performed inside the `handleSubmit` handler — the form silently prevents submission if the `title` or `description` fields are empty. HTML `required` attributes are also applied on the input elements for native browser validation.

### Form Submission & Event Handling

The form uses the `onSubmit` event with `e.preventDefault()` to handle submission without a page reload. After creating a new note object (with a unique `Date.now()` ID), the form state is reset to its initial values.

### Creating Reusable Components

Form inputs are extracted into reusable components inside `src/components/inputs/`:

| Component       | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `TextInput`     | Reusable text `<input>` with label                |
| `SelectInput`   | Reusable `<select>` dropdown with dynamic options |
| `TextAreaInput` | Reusable `<textarea>` with label                  |

Each input component uses the `useId` hook to generate unique, accessible `id`/`htmlFor` pairs.

### Conditional Rendering

Conditional rendering is used throughout the project:

- **Collapsible form** — a boolean state (`isFormVisible`) toggles the form's visibility using `&&` short-circuit evaluation. The toggle button label also dynamically switches between "Add New Note" and "Hide Form" based on the current state.
- **Empty state** — `NoteList` displays a "No Notes Yet" message when the `notes` array is empty (using early return).
- **Priority-based styling** — each note card's left border color is conditionally set to red, orange, or green based on its priority level (using ternary operators).

### Prop Drilling & Lifting State Up

State is managed in `App` (the common ancestor) and passed down through props:

```
App (notes state + deleteNote handler)
├── NoteForm   ← receives setNotes
└── NoteList   ← receives notes, deleteNote
    └── Note   ← receives note, deleteNote
```

The `setNotes` updater function is passed to `NoteForm` so it can add new notes, while `notes` and `deleteNote` are drilled through `NoteList` down to each `Note` component. This demonstrates **lifting state up** to a common ancestor and **prop drilling** to share data across the component tree.

### Side Effects with `useEffect`

The `useEffect` hook is used to perform **side effects** — in this case, syncing the `notes` state to `localStorage` whenever it changes, ensuring data persists across browser sessions. The initial `notes` state is also initialized from `localStorage` using a callback in `useState`.

## 🛠️ Tech Stack

- **React** 19 (functional components & hooks)
- **Vite** 8 (build tool & dev server)
- **Tailwind CSS** 4 (utility-first styling)

## 📁 Project Structure

```
src/
├── main.jsx                        # Entry point, renders App in StrictMode
├── App.jsx                         # Root component, manages notes state & localStorage
├── index.css                       # Global styles & Tailwind import
└── components/
    ├── NoteForm.jsx                # Form for creating notes (collapsible)
    ├── NoteList.jsx                # Renders list of notes or empty state
    ├── Note.jsx                    # Individual note card with delete action
    └── inputs/
        ├── TextInput.jsx           # Reusable text input component
        ├── SelectInput.jsx         # Reusable select dropdown component
        └── TextAreaInput.jsx       # Reusable textarea component
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
