# wow-astro v1.1: [Astro Blog Tutorial](https://docs.astro.build/en/tutorials/blog/)
> just following the tutorial on their [docs](https://docs.astro.build/en/tutorial/) to see how it works getting back into what i've apparently forgot _(and have missed on)_ during my hiatus-health-going-cuckoo-thing


This version includes the steps up until unit 6, apart from the last section, the optional one, and all the improvements from the [community PR regarding accessibility](https://github.com/withastro/blog-tutorial-demo/pull/44), opened and worked on by [@bjohansebas](https://github.com/bjohansebas). 

Thank you for such a superb contribution, by the way! Looking forward to the next steps and learning more from the lots of you! I will try my best to keep this repo up to date with the tutorial and any other improvements I might find along the way.

<br>
<hr>
<br>

## Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?
Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
