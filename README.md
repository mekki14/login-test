# Nex-Cloud Frontend

This project is a modern web application built with [Next.js](https://nextjs.org/) and React, focused on delivering a highly interactive, responsive, and accessible user interface.

## Technology Stack

The application leverages a modern, performance-oriented technology stack:

- **Core Framework**: [Next.js 16](https://nextjs.org/) (utilizing the modern App Router)
- **UI Architecture**: [React 19](https://react.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/) for robust static type checking and enhanced developer experience
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling, combined with `clsx` and `tailwind-merge` for dynamic class management and `class-variance-authority` (CVA) for component variants.
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/) for headless, unstyled, and highly accessible base components (labels, checkboxes, slots, etc.)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid layout transitions and complex component micro-interactions
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) combined with [Zod](https://zod.dev/) for efficient state management and strong schema validation
- **Icons**: Radix Icons and Material Symbols

## Codebase Structure

- `/app`: Contains the routing structure using Next.js App Router. For example, `(auth)/login/page.tsx` handles authentication views.
- `/components/ui`: Contains highly reusable standard UI components (like Buttons, Inputs, Checkboxes, Labels) often built as wrappers over Radix UI for accessibility and styled via Tailwind CSS properties.
- `/lib`: General utilities, constants, and helper functions.
- `/public`: Static assets.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and your preferred package manager (`npm`, `yarn`, `pnpm`, or `bun`) installed.

### Installation

Install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run the Development Server

Start building and editing by running the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the app. The page auto-updates as you edit the source files.

## High-Level Features

- **Robust Forms**: Safe and performant form handling with Zod resolution.
- **Rich Micro-interactions**: Components feature subtle interactive feedback leveraging Framer Motion.
- **Design System-Ready**: Base UI components are neatly separated in `components/ui` for easy maintenance.
- **RTL & Theming Capabilities**: Extensible support for layout directions and sophisticated user interfaces.
