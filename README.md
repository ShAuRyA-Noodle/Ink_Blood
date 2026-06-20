# Ink_Blood

A minimalist blog-style web app built with Node.js, Express, and EJS. Full CRUD, in-memory storage, and a dark Squid Game inspired aesthetic.

## Features

- Create, read, update, and delete blog posts (full CRUD).
- Server-rendered views with EJS templates.
- In-memory post store (no database required to run).
- Dark, cinematic UI with a looping background video and red accent palette.
- HTML-escaped output so post titles and content render safely.

## Tech Stack

- **Runtime:** Node.js
- **Server:** Express 5
- **Views:** EJS
- **IDs:** uuid
- **Styling:** vanilla CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer

### Installation

```bash
git clone https://github.com/ShAuRyA-Noodle/Ink_Blood.git
cd Ink_Blood
npm install
```

### Run

```bash
npm start
```

Then open http://localhost:3000 in your browser.

## Routes

| Method | Path                | Description                  |
| ------ | ------------------- | ---------------------------- |
| GET    | `/`                 | List all posts               |
| GET    | `/posts/new`        | Show the new post form       |
| POST   | `/posts`            | Create a post                |
| GET    | `/posts/:id`        | View a single post           |
| GET    | `/posts/:id/edit`   | Show the edit form           |
| POST   | `/posts/:id`        | Update a post                |
| POST   | `/posts/:id/delete` | Delete a post                |

## Notes

Posts are stored in memory and reset every time the server restarts. This keeps the project simple and dependency-free, and is ideal for demos and learning.

## Security

See [SECURITY.md](SECURITY.md) for the vulnerability reporting policy. The repository runs CodeQL scanning and Dependabot updates.

## License

ISC
