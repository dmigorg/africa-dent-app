---
name: "icon-generator"
description: "Generates SVG icon components in `src/components/icons`. Use when the user asks to add a new icon or replace an existing one."
---

# Icon Generator

This skill helps generate SVG icon components for the project.

## Usage

When the user asks to create an icon:

1.  **Ask for the icon name** (e.g., `SettingsIcon`).
2.  **Determine the SVG code**:
    *   If user provides SVG code, use it.
    *   If not, search for an appropriate SVG (e.g., from Lucide or Heroicons).

3.  **Generate the component**:
    *   Create a `.tsx` file in `src/components/icons/`.
    *   Use the following template:

```tsx
import React from 'react';

export const IconName: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* SVG paths here */}
  </svg>
);
```

4.  **Add to exports**:
    *   Add `export * from './IconName';` to `src/components/icons/index.ts`.

## Example

User: "Add a Settings icon."
Action:
1.  Create `src/components/icons/SettingsIcon.tsx` with the template and SVG path.
2.  Add `export * from './SettingsIcon';` to `src/components/icons/index.ts`.
