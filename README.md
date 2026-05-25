# NextNest

Behavioral real estate intelligence platform that combines emotional preference modeling, personalized matching, live walkthrough tracking, and agent decision tools to help people confidently choose the right home.

## Project Structure

```
nextnest/
├── backend/                 # Node.js/Express API
├── frontend/               # React/Next.js consumer app
├── agent-portal/           # Agent SaaS dashboard
├── shared/                 # Shared types and utilities
└── docs/                   # Architecture and API documentation
```

## Getting Started

See individual README files in each service directory.

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, Next.js, TailwindCSS
- **Database**: PostgreSQL
- **Real-time**: Socket.io (for live walkthrough tracking)
- **Auth**: JWT + OAuth2

## Key Features

### Phase 1: Consumer MVP
- [ ] Swipe system (Love It / List It / Maybe)
- [ ] Home Blueprint quiz
- [ ] Behavioral profile generation
- [ ] Basic home matching
- [ ] Shortlist management

### Phase 2: Intelligence Layer
- [ ] Real-time Intent Score calculation
- [ ] Contradiction detection engine
- [ ] Regret prediction model
- [ ] Advanced comparisons

### Phase 3: Agent Integration
- [ ] Agent dashboard
- [ ] Live walkthrough tracking
- [ ] Buyer intent visibility
- [ ] Offer management

### Phase 4: Monetization
- [ ] Subscription tiers
- [ ] Agent SaaS pricing
- [ ] Transaction layer

## Development

```bash
# Install dependencies
npm install

# Start development servers
npm run dev

# Run tests
npm test
```

## License

MIT
