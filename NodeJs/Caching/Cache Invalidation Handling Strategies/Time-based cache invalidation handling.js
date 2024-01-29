/**
 * Time-based Cache Invalidation: With this strategy, the cache is invalidated after a specific time interval. 
 * For example, you can set an expiration time for the cache, and once that time has passed, 
 * the cache is considered invalid. In Node.js, you can use libraries like node-cache or memory-cache to 
 * implement time-based cache invalidation. Here's an example using node-cache:
 */

const NodeCache = require('node-cache');
const cache = new NodeCache();

// Fetch data from cache or the data source
function fetchDataFromCacheOrSource(key) {
    const cachedData = cache.get(key);
    if (cachedData) {
        // Data exists in cache, return it
        return cachedData;
    } else {
        // Data doesn't exist in cache, fetch it from the data source
        const data = fetchDataFromSource(key);
        // Store the fetched data in cache with an expiration time
        cache.set(key, data, 3600); // Cache expires after 1 hour (3600 seconds)
        return data;
    }
}

// Example usage
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const data = fetchDataFromCacheOrSource(id);
    res.json(data);
});
