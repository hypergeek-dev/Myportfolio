# Use the official Node.js 14 image as a base
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Install nginx
RUN apt-get update && apt-get install -y nginx

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Remove the default nginx configuration
RUN rm /etc/nginx/sites-enabled/default

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/sites-enabled/

# Expose ports for Node.js and nginx
EXPOSE 3000 80

# Define the command to run the application
CMD ["nginx", "-g", "daemon off;"]
