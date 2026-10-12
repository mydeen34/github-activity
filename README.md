# GitHub User Activity CLI

A simple command-line application built with Node.js that fetches a GitHub user's recent public activity using the GitHub REST API and displays it in the terminal.

## Features

- Accepts a GitHub username as a command-line argument.
- Fetches recent public activity using the GitHub API.
- Displays push, star, and issue-related events.
- Handles invalid usernames and API request errors.
- Validates missing usernames.
- Uses Node.js built-in `fetch()` without external libraries.

## Technologies Used

- JavaScript
- Node.js
- GitHub REST API

## How to Run

Make sure Node.js is installed.

Run the following command:

```bash
node github-activity.js <username>
```

Example:

```bash
node github-activity.js mydeen34
```

## Error Handling

Missing username:

```bash
node github-activity.js
```

Invalid username:

```bash
node github-activity.js this-user-does-not-exist-928374
```

## Project URL
https://github.com/mydeen34/github-activity
