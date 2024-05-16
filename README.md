![Automaton Shop AI](/main_image.png)

# Automaton Shop AI

REST API-driven frontend application tailored for seamless e-commerce experiences.
Integrates with the Automaton ecosystem, offering a robust platform for online shopping solutions. 
Designed for scalability, ease of use, and customization. Our application empowers 
businesses to elevate their online presence and streamline their sales process.


## Preparing environment

1. Build image: `docker compose build`.
2. Start containers: `docker compose up -d`.
3. Open container CLI: `docker exec -it automaton_shop_ai_front bash`

Create .env.local file:
```text

```

Below need improvement:
1. Log in as `docker` user using `su docker` command.
2. Run `npm install`.
3. For starting dev environment run `npm run dev` command.

Docker is configured to listen on port **9100**, then go to Your browser and visit: http://localhost:9100.

For more information how to work with Next.js check: https://nextjs.org/docs.


## Used packages

Here is a brief list of npm packages worth mentioning:

| Package                                                  | Description                                                                                                                  |
|----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [Emotion](https://emotion.sh)                            | A powerful library for writing CSS styles with JavaScript, offering a great way to manage styles in your application.        |
| [Fontawesome](https://fontawesome.com/docs/web/)         | Provides scalable vector icons and social logos for your web project, ensuring visual consistency and flexibility.           |
| [Holy Loader](https://github.com/tomcru/holy-loader)     | A customizable, lightweight top-loading progress bar component, enhancing user interface with dynamic configuration options. |
| [React Hook Form](https://react-hook-form.com/)          | Simplifies handling forms in React, making form management efficient, flexible, and extensible with minimal re-rendering.    |
| [React Rating](https://github.com/smastrom/react-rating) | Enables interactive star ratings in React projects with customizable and reusable components.                                |
| [SWR](https://swr.vercel.app/)                           | A React Hooks library for remote data fetching that allows for incremental fetching and revalidation of data.                |
| [Swiper](https://swiperjs.com/)                          | A modern touch slider with hardware accelerated transitions, perfect for creating interactive slides and presentations.      |
| [usehooks-ts](https://usehooks-ts.com/)                  | Offers ready-to-use custom React hooks, helping to avoid boilerplate and keep your components clean and readable.            |


## Server specification

- Node.js v.19+
- Nginx


## Functionalities

Shop AI is fully functional shop for e-commerce business. Available functionalities are:
- Products presentation including products search, sliders and categories,
- Full checkout process,
- Contact page,
- Static pages like terms of service,
- Customer account.


## API

API documentation is available at: http://automatonai.pl/api/doc


## FAQ

**Is it free?**

Frontend Shop application is totally free. Although to make it work, You need 
Baselinker account for order management.

