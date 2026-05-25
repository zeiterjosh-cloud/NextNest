# NextNest Backend API

Node.js/Express API for NextNest platform.

## Setup

```bash
cd backend
npm install
```

## Environment Variables

Create `.env` file:

```
DATABASE_URL=postgresql://user:password@localhost:5432/nextnest
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=3001
```

## Development

```bash
npm run dev
```

## API Routes

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login
- `POST /auth/refresh` - Refresh JWT token

### Users
- `GET /users/me` - Get current user
- `PUT /users/me` - Update current user
- `GET /users/:id/profile` - Get user profile

### Homes
- `GET /homes` - List homes with filters
- `GET /homes/:id` - Get home details
- `GET /homes/:id/matches` - Get match scores for home

### Swipes
- `POST /swipes` - Record swipe action
- `GET /swipes/me` - Get user's swipe history
- `GET /swipes/me/feed` - Get personalized home feed

### Home Blueprint
- `GET /blueprint/me` - Get user's Home Blueprint
- `POST /blueprint/me` - Create/update Home Blueprint
- `GET /blueprint/templates` - Get quiz templates

### Matches
- `GET /matches/me` - Get user's matched homes
- `GET /matches/home/:homeId` - Get match details for a home

### Walkthroughs
- `POST /walkthroughs` - Schedule walkthrough
- `GET /walkthroughs/me` - Get user's walkthroughs
- `PUT /walkthroughs/:id` - Update walkthrough status
- `POST /walkthroughs/:id/events` - Log walkthrough event

### Agent
- `GET /agents/me/buyers` - Get agent's tracked buyers
- `GET /agents/me/dashboard` - Get agent analytics dashboard
- `GET /agents/buyers/:buyerId/intent` - Get buyer intent analysis

## Database Schema

See `migrations/` directory for schema definitions.

## Testing

```bash
npm test
```
