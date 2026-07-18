# GambitoR 5.0 Frontend

This repository is a working copy of the GambitoR4.0 website for developing the **GambitoR5.0 frontend**.

## Objective

The goal is to implement the **new GambitoR5.0 frontend** while keeping the existing project structure, routing and architecture intact. Just use this code template as it is and implement new content in this code according to Figma design on it as structure is same as last year's website given in code.

- Replace old content with the new design.
- Reuse existing components whenever possible.
- Create new components only if required.
- Avoid changing the project structure unless necessary.

## Setup

Clone the repository:

```bash
git clone https://github.com/AadityaRaj77/GambitoR5.0-Website.git
```

Move into the project directory:

```bash
cd GambitoR5.0-Website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Workflow

### 1. Always pull the latest changes

```bash
git checkout main
git pull origin main
```

### 2. Create a new branch for your task

```bash
git checkout -b feature/<feature-name>
```

Example:

```bash
git checkout -b feature/about-section
git checkout -b feature/testimonial-section
git checkout -b feature/footer
```

### 3. Work on your assigned task

Commit your changes with meaningful commit messages.

```bash
git add .
git commit -m "Implement prizes section"
```

### 4. Push your branch

```bash
git push -u origin feature/<feature-name>
```

Then create a Pull Request (or inform the repository owner for review).

## Guidelines

- Do **not** push directly to `main`.
- Keep the folder structure and routing unchanged.
- Do not modify configuration files unless instructed.
- Write clean and readable code.
- Remove unnecessary console logs before pushing.
- Test your changes before creating a Pull Request.
