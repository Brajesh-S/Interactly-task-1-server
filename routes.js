const express = require('express');
const axios = require('axios');
const router = express.Router();

// FreshSales API details
const FRESHSALES_DOMAIN = 'https://brajeshsekar.myfreshworks.com';
const FRESHSALES_API_KEY = 'izhRa1toWO9tWaiuq7CKIQ';
const API_HEADERS = {
    'Authorization': `Token token=${FRESHSALES_API_KEY}`,
    'Content-Type': 'application/json',
};

// Create Contact
router.post('/', async (req, res) => {
    try {
        const response = await axios.post(
            `${FRESHSALES_DOMAIN}/crm/sales/api/contacts`,
            { contact: req.body },
            { headers: API_HEADERS }
        );
        res.status(201).json({
            message: 'Contact created successfully!',
            contact: response.data.contact
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to create contact.',
            details: error.message
        });
    }
});

// Get Contact by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(
            `${FRESHSALES_DOMAIN}/crm/sales/api/contacts/${req.params.id}`,
            { headers: API_HEADERS }
        );
        res.status(200).json({
            message: 'Contact retrieved successfully!',
            contact: response.data.contact
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to retrieve contact.',
            details: error.message
        });
    }
});

// Update Contact by ID
router.put('/:id', async (req, res) => {
    try {
        const response = await axios.put(
            `${FRESHSALES_DOMAIN}/crm/sales/api/contacts/${req.params.id}`,
            { contact: req.body },
            { headers: API_HEADERS }
        );
        res.status(200).json({
            message: 'Contact updated successfully!',
            contact: response.data.contact
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to update contact.',
            details: error.message
        });
    }
});

// Delete Contact by ID
router.delete('/:id', async (req, res) => {
    try {
        await axios.delete(
            `${FRESHSALES_DOMAIN}/crm/sales/api/contacts/${req.params.id}`,
            { headers: API_HEADERS }
        );
        res.status(200).json({ message: 'Contact deleted successfully!' });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to delete contact.',
            details: error.message
        });
    }
});

module.exports = router;
