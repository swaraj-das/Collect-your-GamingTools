# Step 1: Use an official Nginx image from Docker Hub
FROM nginx:alpine

# Step 2: Copy your local files to the Nginx html folder
COPY . /usr/share/nginx/html

# Expose port 80 to be able to access the Nginx server
EXPOSE 80

# Step 3: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
