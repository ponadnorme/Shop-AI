# Automaton Shop AI

REST API-driven frontend application tailored for seamless e-commerce experiences.
Integrates with the Automaton ecosystem, offering a robust platform for online shopping solutions. 
Designed for scalability, ease of use, and customization. Our application empowers 
businesses to elevate their online presence and streamline their sales process.

## Preparing environment

1. Build image: `docker compose build`.
2. Start containers: `docker compose up -d`.
3. Open container CLI: `docker exec -it automaton_shop_ai_front bash`

Below need improvement:
1. Log in as `docker` user using `su docker` command.
2. For starting dev environment run `npm run dev` command.

Docker is configured to listen on port **9100**, then go to Your browser and visit: http://localhost:9100.

For more information how to work with Next.js check: https://nextjs.org/docs.

## Used packages

Here is a brief list of npm packages worth mentioning:

| Package | Description |
|---------|-------------|
| [Emotion](https://emotion.sh) | A powerful library for writing CSS styles with JavaScript, offering a great way to manage styles in your application. |
| [Fontawesome](https://fontawesome.com/docs/web/) | Provides scalable vector icons and social logos for your web project, ensuring visual consistency and flexibility. |
| [SWR](https://swr.vercel.app/) | A React Hooks library for remote data fetching that allows for incremental fetching and revalidation of data. |
| [Swiper](https://swiperjs.com/) | A modern touch slider with hardware accelerated transitions, perfect for creating interactive slides and presentations. |
| [React Hook Form](https://react-hook-form.com/) | Simplifies handling forms in React, making form management efficient, flexible, and extensible with minimal re-rendering. |
| [usehooks-ts](https://usehooks-ts.com/) | Offers ready-to-use custom React hooks, helping to avoid boilerplate and keep your components clean and readable. |
| [React Rating](https://github.com/smastrom/react-rating) | Enables interactive star ratings in React projects with customizable and reusable components. |


## Server specification

- Node.js v.19+
- Nginx


## Functionalities


## FAQ

**Is it free?**

Frontend Shop application is totally free. Although to make it work, You need 
Baselinker account for order management.

