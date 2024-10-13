# Step 1: Use an official Node.js image from Docker Hub
FROM node:14-alpine

# Step 2: Set working directory in container
WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies
COPY backend/package*.json ./
RUN npm install

# Step 4: Copy the backend code to the container
COPY backend/ .

# Step 5: Expose the backend's port (if your backend runs on port 3000, adjust as needed)
EXPOSE 3000

# Step 6: Start the backend server
CMD ["npm", "start"]
