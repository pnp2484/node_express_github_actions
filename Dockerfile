# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY . .

# Install application dependencies
RUN npm install

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "server.js"]
