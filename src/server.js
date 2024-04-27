// server.js

// Importation des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

// Création de l'application express
const app = express();
const PORT = process.env.PORT || 3000;  // Port par défaut ou celui spécifié dans les variables d'environnement

// Middleware pour parser le corps des requêtes HTTP en format JSON
app.use(bodyParser.json());

// Route POST pour vérifier les secrets
app.post('/api/check-secret', async (req, res) => {
    const { requesterAddress, secretId } = req.body;
    const secretEndpoint = `${process.env.SCONE_URL}/requesters/${requesterAddress}/secrets/${secretId}`;

    console.log(`Checking secret for requesterAddress: ${requesterAddress} with secretId: ${secretId}`);

    try {
        const response = await axios.get(secretEndpoint);
        console.log('Secret retrieval successful:', response.data);
        res.status(200).json({ secret: response.data });
    } catch (error) {
        console.error('Error during secret check:', error);
        if (error.response) {
            console.error('Failure details:', error.response.status, error.response.statusText);
            console.error('Error details:', error.response.data);
            res.status(error.response.status).send(`API Error: ${error.response.data.message || 'An error occurred'}`);
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
});

// Démarrage du serveur sur le port spécifié
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// Improved error handling and API method adjustment
async function checkSecret(requesterAddress, secretId) {
    const url = `${process.env.SCONE_URL}/requesters/${requesterAddress}/secrets/${secretId}`;
    try {
        const response = await axios.get(url); // Changed from 'HEAD' to 'GET' if confirmed by API docs
        console.log('Secret:', response.data);
        return response.data;
    } catch (error) {
        console.error('HTTP Error:', error.response ? error.response.status : 'No status', error.response ? error.response.statusText : 'No status text');
        console.error('Error details:', error.response ? error.response.data : 'No additional error data');
        return null; // Provides a fallback return
    }
}
