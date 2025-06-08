# README.md

````markdown
# @abhishek-ganapure

> Resume as a CLI — viewable in the terminal via `npx.`

## Description

This package publishes my professional resume as a command‑line interface. Run the CLI with `npx @abhishek-ganapure` to instantly display my background, skills, projects, and experience in a clean, formatted layout.

## Installation

_No installation required_. Simply use:

```bash
npx @abhishek-ganapure
```
````

> **Note:** You need Node.js (v12+) installed, and an internet connection for the first run.

## Usage

```bash
# Display my resume in the terminal:
npx @abhishek-ganapure
```

You’ll see:

- **Name & Title**
- **Education**
- **Skills**
- **Projects**
- **Experience**
- **LinkedIn**

## Development & Publishing

1. Clone the repo:

   ```bash
   git clone [https://github.com/abhiganapure/resume-cli.git](https://github.com/abhiganapure/resume-cli.git)
   cd resume-cli

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Link for local testing:

   ```bash
   npm link
   npx @abhishek-ganapure

   ```

4. Bump version and publish:

   ```bash
   npm version patch
   npm publish --access public
   ```

## Contributing

Feel free to open issues or pull requests for improvements.

## License

MIT
