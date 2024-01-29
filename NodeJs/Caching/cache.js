const express = require('express');
const app = express();
const NodeCache = require('node-cache');

// Create an instance of the NodeCache
const cache = new NodeCache();

// Endpoint for retrieving user profiles
app.get('/profile/:userId', (req, res) => {
  const userId = req.params.userId;

  // Check if the profile data exists in the cache
  const cachedProfile = cache.get(userId);

  if (cachedProfile) {
    // If the profile data is found in the cache, return it
    return res.json(cachedProfile);
  }

  // If the profile data is not in the cache, retrieve it from the database
  const profile = fetchProfileFromDatabase(userId);

  if (profile) {
    // Cache the profile data with a unique identifier or version number
    cache.set(userId, profile);

    // Return the profile data
    return res.json(profile);
  }

  // If the profile data is not found in the database, return an appropriate error response
  return res.status(404).json({ error: 'Profile not found' });
});

// Endpoint for updating user profiles
app.put('/profile/:userId', (req, res) => {
  const userId = req.params.userId;
  const updatedProfile = req.body;

  // Update the profile in the database
  updateProfileInDatabase(userId, updatedProfile);

  // Invalidate the cache for the updated profile
  cache.del(userId);

  // Return a success response
  return res.json({ message: 'Profile updated successfully' });
});

// Helper function to fetch profile from the database
function fetchProfileFromDatabase(userId) {
  // Simulated database query
  // Replace this with your actual database query logic
  // Return the profile object or null if not found
}

// Helper function to update profile in the database
function updateProfileInDatabase(userId, updatedProfile) {
  // Simulated database update
  // Replace this with your actual database update logic
}

// Start the Express.js server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

