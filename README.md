Sure! Here's an updated `README.md` file that includes the install and run commands directly within the instructions:

```markdown
# CodeceptJS Project

This repository contains a simple end-to-end test setup using CodeceptJS with Puppeteer.

## Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

## Getting Started

Follow these instructions to set up and run the tests.

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/CodeCraftersGPT/CodeCeptJS.git
cd CodeCeptJS
```

### Install Dependencies

Next, install the necessary dependencies using npm:

```bash
npm install
```

### Running the Tests

To run the tests, use the following command:

```bash
npx codeceptjs run
```

## Project Structure

- `tests/` - Contains the test files.
- `output/` - Directory for test output (screenshots, reports, etc.).
- `codecept.conf.js` - Configuration file for CodeceptJS.

## Example Test

The repository includes a simple test that checks the title of example.com:

```javascript
Feature('Example.com Test');

Scenario('Check Example.com Title', ({ I }) => {
  I.amOnPage('https://www.example.com');
  I.see('Example Domain');
});
```

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
```
npm install

npx codeceptjs run
