---
name: "data-manager"
description: "Manages data entries in `src/data/`. Use when the user asks to add, update, or remove data (e.g., services, FAQs)."
---

# Data Manager

This skill helps manage data entries in the `src/data/` directory.

## Supported Files

*   `src/data/services.ts`: Services offered by the clinic.
*   `src/data/faqQuiz.ts`: Frequently asked questions for the quiz.

## Usage

When the user asks to modify data:

1.  **Identify the target file**:
    *   If user mentions "services", check `src/data/services.ts`.
    *   If user mentions "FAQ" or "quiz", check `src/data/faqQuiz.ts`.

2.  **Read the file content**: Use `Read` tool to get the current content.

3.  **Parse the data**:
    *   The files export arrays of objects.
    *   Example structure for `services.ts`:
        ```ts
        export const services = [
          { title: "Service Name", description: "...", price: "...", duration: "..." },
        ];
        ```
    *   Example structure for `faqQuiz.ts`:
        ```ts
        export const faqQuiz = [
          { question: "...", answer: "..." },
        ];
        ```

4.  **Perform the action**:
    *   **Add**: Append a new object to the array.
    *   **Update**: Find the object by a key (e.g., title or question) and update properties.
    *   **Remove**: Filter out the object.

5.  **Write the updated content**: Use `Write` tool to save the changes. Ensure TypeScript syntax is preserved.

## Example

User: "Add a new service: Teeth Whitening, $200, 1 hour."
Action:
1.  Read `src/data/services.ts`.
2.  Add `{ title: "Teeth Whitening", price: "$200", duration: "1 hour", description: "Professional teeth whitening." }` to the `services` array.
3.  Write the updated file.
