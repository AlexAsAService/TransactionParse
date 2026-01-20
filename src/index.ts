import express from 'express';
import { parseTransaction } from './genai.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Transaction Parse API is running' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.post('/parseTransaction', async (req, res, next) => {
  try {
    const { description } = req.body;
    if (!description || typeof description !== 'string') {
      res.status(400).json({ error: { message: 'Missing or invalid "description" in request body' } });
      return;
    }
    const result = await parseTransaction(description);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// JSON Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
