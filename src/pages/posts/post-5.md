---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Fifth Blog Post
author: Astro Learner
description: "Dynamically routing pages across the sta-I mean, in Astro!"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["astro", "successes", "learning in public"]
---
You can create entire sets of pages dynamically using `.astro` files that export a `getStaticPaths()` function.

The `getStaticPaths()` function returns an array of page routes, and all of the pages at those routes will use the same template defined in the file.

With a `.astro` file named `[tag].astro` in the `src/pages/tags/` directory, Astro will create a page for each tag that you have in your blog posts. The URL for each page will be `/tags/<tag>`, where `<tag>` is the name of the tag.

_But that's not all!_ You can create dynamic routes with multiple parameters, too. For example, a file named `[author]/[slug].astro` in the `src/pages/` directory would create pages at URLs like `/jane/my-first-post` and `/john/my-second-post`.

> You can read more about dynamic page routing in the [Astro documentation](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes).

Be back soon with more adventures across the Astro and beyond!