# Getting setup

1. Fork the project and run it locally
2. Ensure you are logged in in Figma. You can check the figma we are going to use [Here](https://www.figma.com/design/8IrWHW2aUQZN6ILycX6ug7/Liteflix-Challenge?node-id=0-1&node-type=canvas)
Before starting this challenge, please ensure you have forked this repository and can run it locally.

To run the project:

```bash
npm install
npm run dev
```

## Webflix - Live Coding Challenge


### API
To fetch the current movies in the apis, you will need to implement the api endpoints `src/pages/api/featured` & `src/pages/api/popular` to populate the landing page.
These endpoints include a remote-url to load movies.

1. Load information from the remote source
2. Render basic html with this information
3. Store all fetched movie records into the database. (Prisma & Sqlite)

### UI Section
In this challenge, you will implement the desktop main landing page showing "La Casa de Papel" at [Figma design](https://www.figma.com/design/8IrWHW2aUQZN6ILycX6ug7/Liteflix-Challenge?node-id=0-1&node-type=canvas).
There's no navigation or behaviors to implement other than loading and rendering the landing page as-is.

You will be using pure css (the `index.css` file).

To handle the endpoint's images correctly, please refer to the developer documentation: https://developer.themoviedb.org/docs/image-basics


### Evaluation
- Communication: how fluidly you express ideas and communicate while coding.
- Problem Solving: how you overcome obstacles consistently.
- Code Fluency: how quickly, correctly and idiomatically you write code to fulfill requirements.

#### Tips & Tricks
- We want to see an implementation as pixel perfect as possible.
- The project uses Next.js Pages & Prisma. Leveraging its specific features is available but not required
- You may consult outside sources like documentation, web search or AI but absolutely cannot copy-paste code of any sort.

This project uses next.js pages, prisma & sqlite.

You can view the database with
```
npx prisma studio
```
Documentation for Prisma is viewable at https://www.prisma.io/docs
