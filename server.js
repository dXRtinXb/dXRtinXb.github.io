import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock contact form endpoint for form submissions
app.post('/assets/mail/contact-form.php', (req, res) => {
  console.log('Received contact message:', req.body);
  res.send('Y');
});

// JSON endpoint for contact form if used via modern fetch
app.post('/api/contact', (req, res) => {
  console.log('API contact payload:', req.body);
  res.json({ success: true, message: 'Message received by system.' });
});

// Serve static assets from root directory
app.use(express.static(__dirname));

// Fallback to index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI Systems Portfolio running at http://0.0.0.0:${PORT}`);
});
