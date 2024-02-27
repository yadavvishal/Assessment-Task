const express = require('express');
const translate = require('translate-google');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text to translate is required.' });
    }

    try {
        const translation = await translate(text, { to: 'fr' });
        res.json({ translation });
    } catch (error) {
        console.error('Translation error:', error);

        let errorMessage = 'Translation failed.';
        if (error.code === 'BAD_REQUEST') {
            errorMessage = 'Bad request: Invalid input.';
        } else if (error.code === 'LIMIT_EXCEEDED') {
            errorMessage = 'Translation limit exceeded. Please try again later.';
        }

        res.status(500).json({ error: errorMessage });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});