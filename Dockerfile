# Step 1: Use an official Nginx image from Docker Hub
FROM nginx:alpine

# Step 2: Copy your local files (frontend) to the Nginx html folder
COPY . /usr/share/nginx/html

# Step 3: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
