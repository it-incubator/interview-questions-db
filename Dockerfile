# Check out https://hub.docker.com/_/node to select a new base image
FROM node:20.11-alpine
RUN npm install -g pnpm
# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/dist/interview-questions-api

WORKDIR /home/node/dist/interview-questions-api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY --chown=node package*.json ./
COPY --chown=node pnpm-lock.yaml ./
RUN pnpm install

ENV PORT=9007
# Bundle app source code
COPY --chown=node . .

RUN pnpm build

# Bind to all network interfaces so that it can be mapped to the host OS

EXPOSE ${PORT}

CMD [ "pnpm", "start" ]
