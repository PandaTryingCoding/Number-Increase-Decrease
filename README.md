# Number Increaser App

This is a simple Next.js application that allows users to increase or decrease a number. The current number is stored in a Redis database and persists across sessions.

## Project Setup

### Prerequisites

- Node.js (v14.x or v16.x)
- npm or Yarn
- Redis

### Installation

1. **Clone The Repository:**

   ```bash
    git clone https://github.com/PandaTryingCoding/Number-Increase-Decrease.git
    cd number-increaser
   ```

2. **Install Dependencies:**

   ```using Yarn
    yarn install
   ```

3. **Setup ENV:**

   Create a .env.local file in the root of the project and add the following line:

   ```bash
   REDIS_URL=redis://127.0.0.1:6379
   ```

4. **Start The Redis Server:**

   On Ubuntu:

   ```
   sudo apt update
   sudo apt install redis-server
   sudo systemctl start redis-server
   sudo systemctl enable redis-server
   ```

5. **Run The Dev Server**

```
   npm run dev
   yarn dev
```

### Project Structure

- lib/redisClient.js - Redis client setup.
- pages/api/getNumber.js - API route to get the current number.
- pages/api/updateNumber.js - API route to update the current number.
- pages/index.js - Main frontend component displaying the number and buttons to increase/decrease it.

### Usage

- The app displays a number on the main page.
- Use the "+" button to increase the number.
- Use the "-" button to decrease the number.
- The current number is stored in Redis and persists across sessions.
