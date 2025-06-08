# README.md

````markdown
# @abhishek-ganapure

> Your resume as a CLI — viewable in the terminal via `npx.`

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

````
2. Install dependencies:
   ```bash
npm install
````

3. Link for local testing:

   ```bash
   npm link
   npx @abhishek-ganapure

   ```

````
4. Bump version and publish:
   ```bash
npm version patch
npm publish --access public
````

## Contributing

Feel free to open issues or pull requests for improvements.

## License

MIT

````

---

# Demo Script for Video

**Duration:** ~3–4 minutes

1. **Intro (10–15s)**
   - "Hi, I’m Abhishek Ankush Ganapure, a Full-Stack Developer with a passion for Data Science. Today I’ll show you how I’ve published my resume as an npm package."

2. **Show Project Structure (20–30s)**
   - Switch to VS Code (or your editor).
   - Point out `index.js`, `resume.js`, and `package.json`.
   - Briefly explain: "`resume.js` holds my resume text, `index.js` is the CLI entry, and `package.json` defines the package and dependencies."

3. **Demonstrate CLI (1 min)**
   - Open terminal.
   - Run:
     ```bash
npx @abhishek-ganapure
````

- Talk through each section as it appears (Education, Skills, Projects, Experience).

4. **Explain Implementation (30s)**

   - "I used Node.js and `chalk` for colored output. The `bin` field in `package.json` maps the CLI name to `index.js`."

5. **Local Testing & Publishing (30s)**

   - Show how you tested locally with `npm link`.
   - Mention the `npm publish --access public` command.

6. **Wrap-Up (10s)**

   - "That’s it! My resume is now a reusable CLI. Feel free to try it yourself and check out the source on GitHub. Thank you for watching!"

---

_End of document_
