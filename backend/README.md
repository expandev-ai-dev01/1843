# SafeLogin Backend

Backend API for SafeLogin authentication system.

## Description

Projeto de autenticação básica com cadastro, login e recuperação de senha.

## Features

- User Registration
- User Login
- Password Recovery

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API

## Project Structure

```
src/
├── api/                    # API route handlers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   ├── v1/                 # Version 1 routes
│   └── index.ts            # Main router
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v1`

### Build

Build for production:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Linting

Run ESLint:
```bash
npm run lint
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### External (Public) Routes
- Authentication and public endpoints will be available at `/api/v1/external/`

### Internal (Authenticated) Routes
- Protected endpoints will be available at `/api/v1/internal/`

## Environment Variables

See `.env.example` for required environment variables.

## License

ISC