# **Personal Portfolio Website**

My basic personal portfolio website where I display information about myself, some photos of my cooking prowess and other sometimes silly things.

## **Description**

My basic personal portfolio website where I display information about myself, some photos of my cooking prowess and other sometimes silly things.

## **Getting Started**

### Cloning

```
git clone https://github.com/axense234/personal-portfolio-website
```

### Dependencies

- Check the package.json file for each respective package in the **packages** folder for details.

### Server Environment Variables

- Rename _.env.sample_ to _.env_ and put the appropriate **env variables**:
    - **CLIENT** = the client that uses the server -> used for cors
    - **PORT** = the port of the server
    - **RATE_TTL** = used by the throttler module
    - **RATE_LIMIT** = used by the throttler module
    - **SECRET_API_KEY** = api secret
    - **APP_PASSWORD** = to be used while working with nodemailer
    - **USER_EMAIL** = to be used while working with nodemailer
    - **MAIL_HOST** = to be used while working with nodemailer
    - **MAIL_HOST_PORT** = to be used while working with nodemailer
    - **PGHOST** = the host of the pg db
    - **PGDATABASE** = the name of the pg db
    - **PGUSERNAME** = the username of the pg db
    - **PGPASSWORD** = the password of the pg db
    - **PGPORT** = the port of the pg db
    - **DATABASE_URL** = the url of your database, made to be composed of the above

### Client Environment Variables

- Rename _.env.local.sample_ to _.env.local_ and put the appropriate **env variables**:
  - **NEXT_PUBLIC_CARD_COMPONENT_IMAGE_PLACEHOLDER** = the placeholder image of the card component

- Rename _.env.sample_ to _.env._ and put the appropriate **env variables**:
  - **SERVER** = the server that is being used by the client
  - **SECRET_API_KEY** = the secret api key, must be the same as the above server env variable

### Setup + Running the App

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
- **!!NOTE!!**
- the server is really in love with the shared package I have, it will spit out some dependency errors but it will still work
- due to the above the client container has to be manually started
- relatively unstable setup

```
docker build -f ./packages/server/Dockerfile -t ppw-server ./packages/server
docker build -f ./packages/client/Dockerfile -t ppw-client ./packages/client
docker compose up
```

## **Authors**

- **axense234**

## **License**

Check LICENSE.md for details.
