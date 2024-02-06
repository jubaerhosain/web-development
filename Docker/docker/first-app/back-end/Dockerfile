# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install app dependencies
RUN npm install

# Command to start your Node.js app
CMD [ "node", "app.js" ]
