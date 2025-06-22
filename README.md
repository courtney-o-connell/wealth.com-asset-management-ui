# wealth.com-asset-management-ui

This project displays a group of assets and allows them to be sorted by category. Each asset shows its latest balance as of today.

## Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
- [Angular CLI](https://angular.io/cli) installed

## Run Instructions

1. Install dependencies:
    ```bash
    npm install --legacy-peer-deps
    ```
2. Start the development server:
    ```bash
    ng serve
    ```

## Important Note

- Verify that the hard-coded `localhost` URL in the asset-management-service.ts file matches the corresponding API's localhost URL before running the application.

3. **Comments / Explainations**
 - The next steps I would take to continue this project would be
    1. Updating the table to include indentations when displaying the asset information
    2. Adding unit tests to ensure the components are being loaded correctly
 - For this exercise I only showed the relevant asset information, however the asset class can be expanded to include relevant information if needed.