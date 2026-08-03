# **Personal Portfolio Website**

My basic personal portfolio website where I display information about myself, some photos of my cooking prowess and other sometimes silly things.

## **Description**

My basic personal portfolio website where I display information about myself, some photos of my cooking prowess and other sometimes silly things.

## **Getting Started**

### Dependencies

- Check the package.json file for each respective package in the **packages** folder for details.

### Server Dependencies

- Rename _.env.sample_ to _.env_ and put the appropriate **env variables**:
  - **PORT** = the port your server will run on, the default should be 4000
  - **NODE_ENV** = the current environment type
  - **CLIENT** = the client allowed to communicate with the server
  - **RATE_TTL** = throttler module time to live in miliseconds
  - **RATE_LIMIT** = throttler module number of requests limit
  - **JWT_SECRET** = secret jwt key
  - **JWT_EXP** = expiration time of the jwt key
  - **DATABASE_URL** = the url of your database (postgres)
  - **APP_PASSWORD** = your app password in the context of node mailer
  - **USER_EMAIL** = the email that is used in the context of node mailer
  - **MAIL_HOST** = the host of the email that is used in the context of node mailer
  - **MAIL_HOST_PORT** = the port of the host of the email that is used in the context of node mailer
  - **SECRET_API_KEY** = the secret api key

### Client Dependencies

- Rename _.env.local.sample_ to _.env.local_ and put the appropriate **env variables**:
  - **NEXT_PUBLIC_CARD_COMPONENT_IMAGE_PLACEHOLDER** = the placeholder image of the card component

- Rename _.env.sample_ to _.env._ and put the appropriate **env variables**:
  - **SERVER** = the server that is being used by the client
  - **SECRET_API_KEY** = the secret api key, must be the same as the above server env variable

### Installing

```
git clone https://github.com/axense234/personal-portfolio-website
```

### Setup

#### Using NPM

- **Install Dependencies**

```
npm install
```

- **Migrate locally through Prisma (also generate types)**

```
npm run migrate
npm run generate
```

- **Start the Server**

```
cd ./packages/server && npm run start:dev
```

- **Start the Client**

```
cd ./packages/client && npm run dev
```

#### Using Docker

```
docker build -f ./packages/server/Dockerfile -t ppw-server ./packages/server
docker build -f ./packages/client/Dockerfile -t ppw-client ./packages/client
docker compose up
```

## **Authors**

- **axense234**

## **License**

Check LICENSE.md for details.
