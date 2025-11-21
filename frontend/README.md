# SafeLogin Frontend

Frontend application for SafeLogin authentication system.

## Features

- User Registration
- User Login
- Password Recovery
- Password Reset

## Tech Stack

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router 7.9.3
- TanStack Query 5.90.2
- React Hook Form 7.63.0
- Zod 4.1.11

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── app/              # Application configuration
├── assets/           # Static assets and styles
├── core/             # Core components and utilities
├── domain/           # Domain-specific logic
└── pages/            # Page components
```

## API Configuration

The application connects to the backend API at:
- Development: `http://localhost:3000/api/v1`
- External endpoints: `/api/v1/external`
- Internal endpoints: `/api/v1/internal`

## License

MIT