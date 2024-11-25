# Personal site of R. Allan White

This project is built with DatoCMS*, Middleman, Webpack, TailwindCSS & Netlify.

_*Yeah I work for that other CMS company... I started this before I joined, and I like it._

## Project goals

1. In 2019, I had to find a new job... and this site was central to that effort. Worked great!
2. Show my work and capabilities
3. In 2020, it became clear I needed to add a blog and other resources as I change careers into more of a consultant and subject-matter expert.
4. I find that I still miss designing things, and that I need an outlet. Working on this thing that is completely my own is a welcome hobby.

## Why Middleman? Isn't that ancient?

As far as static-site generators go, it's one of the old ones. In my previous job I had a large Middleman project that I maintained and while it wasn't my first choice, it does some things very well and efficiently. **The best tool is the one in your hand and that you know well.** So, I kind of approached it from the angle of, "what can be replaced or removed to keep Middleman modern?". 

- It's got webpack, based on this great starter
- Slim templating which is incredibly elegant
- DatoCMS is an excellent small-site CMS on the free tier (though limits are looming)
- Imgix for images and video is creates a lot of robust media handling
- TailwindCSS fuels easy presentation layer design

### Dev/install notes

Props to [Rich JD Smith](https://github.com/richjdsmith/middleman-tailwind-webpack) for this excellent starter. His notes: 
The webpack setup has all CSS being tree shaken (removing all unused CSS so that Tailwind isn't 400kb.) as well as minified. (be sure to **whitelist any JS-only classes!** -AW) All Javascript is transpiled via Babel and of course minified. This is all done outside of Middleman's asset pipeline, so you probably don't want to mess around with that too too much. It includes things such as image compression, sitemap building, easy svg tags, meta tags building among other helpers and tools. This itself was built upon work done by [gabrielecanepa](https://github.com/gabrielecanepa) and his work on his [middleman-webpack template](https://github.com/gabrielecanepa/middleman-webpack). Looking through [arandilopez's](arandilopez/arandilopez.me) repo for his [personal site](https://github.com/arandilopez/arandilopez.me) was very helpful as well.

### Installation

`bundle install` for ruby deps. I added Ruby Slim templating. 
`yarn` then `yarn build|start`.

### What next?
We'll see! I'd love to start fresh with a new CMS and new front-end. It's probably not going to be Middleman but Astro or something new. There's so many new features in CSS that are widely supported, I might not even use Tailwind...