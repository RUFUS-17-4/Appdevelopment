const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/Feedback', (req, res) => {
  const newFeedback = req.body;

  fs.readFile('db.json', 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    const feedbackList = data ? JSON.parse(data) : [];
    feedbackList.push(newFeedback);

    fs.writeFile('db.json', JSON.stringify(feedbackList, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      res.status(200).json({ message: 'Feedback submitted successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
