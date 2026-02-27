---
name: "project-auditor"
description: "Audits the project for code quality, unused files, and inconsistencies. Use when the user asks to check code or fix issues."
---

# Project Auditor

This skill helps maintain the health of the project by checking for code quality issues, unused files, and inconsistencies.

## Usage

When the user asks to audit the project:

1.  **Check for linting errors**:
    *   Run `npm run lint` or `biome check ./src`.
    *   If errors found, suggest running `biome check --write` to fix them.

2.  **Check for unused files**:
    *   List all files in `src/`.
    *   Check if they are imported in `App.tsx` or other components.
    *   Report any potentially unused files.

3.  **Check for large files**:
    *   Identify files larger than 500 lines.
    *   Suggest splitting them into smaller components.

4.  **Verify file structure**:
    *   Ensure all components are in `src/components` or `src/sections`.
    *   Ensure all data is in `src/data`.
    *   Report any misplaced files.

## Example

User: "Check the project for issues."
Action:
1.  Run `biome check ./src`.
2.  List unused files (e.g., `src/temp.tsx`).
3.  Report findings and suggest fixes.
