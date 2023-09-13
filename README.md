This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



@channel
STAGE 2 TASK
Objective
Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.
Requirements
1. User Interface:
Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
You should list the top 10 movies on the homepage.
They should be displayed in a grid layout with their movie posters.
The Card component should display the movie title and release date.
card - [data-testid: movie-card]
movie poster - [data-testid: movie-poster]
movie title - [data-testid: movie-title]
movie release date - [data-testid: movie-release-date]
2. Movie Search:
Implement a search feature that allows users to search for movies by title.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.
3. Movie Details:
When i go to to /movies/:id route (where :id is the imdb_id), I should see the movie details page.
I should see
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]
API Integration:
Consume the TMDB API to fetch movie data.
Use the following API endpoints:
Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}
Error Handling:
Implement error handling to display meaningful error messages to users in case of API failures or other issues.
Submission:
Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
Provide clear instructions on how to run your project locally in your README.md file.
Ensure that the code is well-documented and organized.
This frontend challenge requires you to build a dynamic movie discovery app that interacts with a real API to fetch and display movie data.
PS: You MUST use react or  Next js
Submit your task through the designated submission form.
Submission Deadline:
The deadline for submissions is 14th September 2023, 11:59 PM GMT. Late submissions will not be entertained.
Link to submission form again: https://docs.google.com/forms/d/e/1FAIpQLSf-oxF8XvHCuCiBg3ktBxuNxk2tPk2SQq_-02sx7TBQlBd7Xg/viewform
PPS: THE API MIGHT NOT RETURN ALL THE INFO ON THE SECOND PAGE OF THE DESIGN, ADD THE ESSENTIAL ONES THAT ARE LISTEN ABOVE. THE SIDEBAR DOESN'T NEED TO BE FUNCTIONAL.
YOU MAY USE ANY CSS FRAMEWORK/LIBRARY OF YOUR CHOICE (edited) 
The Movie Database (TMDB)The Movie Database (TMDB)
Getting Started
Welcome to version 3 of The Movie Database (TMDB) API. This is where you will find the definitive list of currently available methods for our movie, tv, actor and image API.
Google DocsGoogle Docs
Frontend Stage Two Submission (26 kB)