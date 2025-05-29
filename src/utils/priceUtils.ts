import axios from 'axios';

// Cache for storing the last known price and timestamp
let lastPrice: number | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const RATE_LIMIT_DELAY = 6000; // 6 seconds between requests
const COINMARKETCAP_API_KEY = 'b87ebb39-b81c-4121-809f-5568b77987c0';

export const getEthPrice = async (): Promise<number> => {
    try {
        // Check if we have a cached price that's still valid
        const now = Date.now();
        if (lastPrice !== null && (now - lastFetchTime) < CACHE_DURATION) {
            return lastPrice;
        }

        // Add delay between requests to avoid rate limits
        if (lastFetchTime > 0) {
            const timeSinceLastRequest = now - lastFetchTime;
            if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
                await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY - timeSinceLastRequest));
            }
        }

        const response = await axios.get(
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
            {
                params: {
                    symbol: 'ETH',
                    convert: 'USD'
                },
                headers: {
                    'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY
                }
            }
        );

        // Update cache
        lastPrice = response.data.data.ETH.quote.USD.price;
        lastFetchTime = Date.now();

        return Number(lastPrice);
    } catch (error: any) {
        // Handle rate limit error specifically
        if (error.response?.status === 429) {
            console.warn('Rate limit exceeded, using cached price if available');
            if (lastPrice !== null) {
                return lastPrice;
            }
            throw new Error('Rate limit exceeded and no cached price available');
        }

        console.error('Error fetching ETH price:', error);
        // If we have a cached price, return it even if it's expired
        if (lastPrice !== null) {
            return lastPrice;
        }
        throw error;
    }
};

// Function to format price with 2 decimal places
export const formatPrice = (price: number): string => {
    return price.toFixed(2);
}; 