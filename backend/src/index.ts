import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from '../../shared/utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes (to be implemented)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/homes', require('./routes/homes'));
app.use('/api/swipes', require('./routes/swipes'));
app.use('/api/blueprint', require('./routes/blueprint'));
app.use('/api/matches', require('./routes/matches'));
app.use('/api/walkthroughs', require('./routes/walkthroughs'));
app.use('/api/agents', require('./routes/agents'));

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
});

app.listen(PORT, () => {
  logger.info(`NextNest API running on port ${PORT}`);
});
