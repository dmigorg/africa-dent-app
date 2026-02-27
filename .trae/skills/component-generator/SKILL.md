---
name: "component-generator"
description: "Generates new React components with TypeScript and Tailwind CSS. Use when the user asks to create a new component or section."
---

# Component Generator

This skill helps generate new React components following the project's architecture and conventions.

## Usage

When the user asks to create a new component, follow these steps:

1.  **Ask for the component name** (if not provided).
2.  **Determine the location**:
    *   `src/components/`: For reusable UI components (buttons, inputs, cards).
    *   `src/sections/`: For page sections (Hero, About, Contact).
    *   `src/components/icons/`: For SVG icons (use `icon-generator` skill instead if specific for icons, but this skill can handle generic components).
3.  **Generate the file**:
    *   Create a `.tsx` file with the component name.
    *   Use the following template:

```tsx
import React from 'react';

interface Props {
  className?: string;
  // Add other props here
}

const ComponentName: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={` ${className}`}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

4.  **Add to exports** (if applicable):
    *   If creating an icon in `src/components/icons`, export it in `src/components/icons/index.ts`.

## Example

User: "Create a TestimonialCard component."
Action: Create `src/components/TestimonialCard.tsx` with the template.
