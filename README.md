# Weaam Abdalaal's Portfolio

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://weaam-abdalaal-portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0d1cc34f-559c-49e2-bb79-b5ef1e880402).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Adding a project

All projects live in `src/content/projects.ts` (the `allProjects` list). Cards, category filters, the detail page at `/projects/<slug>`, and the AI assistant's knowledge are generated from it automatically.

1. Copy the example object from `src/content/project-template.ts` (it is never published) into `allProjects`.
2. Give it a unique `id` and `slug` (lowercase, hyphens). Never change them after publishing, or old links break.
3. Fill in the required fields (title, subtitle, purpose, highlight, categories, technologies, overview, approach, contribution). For team work, put your part in `contribution.individual` and shared work in `contribution.team`.
4. Optional fields (`problem`, `results`, `keyFinding`, `limitations`, `repo`, `demo`, `screenshots`, `evidence`) can be left out; their sections are hidden automatically. Links must start with `https://`.
5. Remove `draft: true` to publish. Run `bunx vitest run src/test/projects-content.test.tsx` to check links, slugs and alt text.

### Adding images

Upload the screenshot to the project asset store so it gets an `.asset.json` pointer in `src/assets/projects/`, then import it at the top of `projects.ts` and reference it:

```ts
import shot from "@/assets/projects/my-project-1.png.asset.json";
// ...
screenshots: [{ src: shot.url, alt: "What the screenshot shows" }],
```

Every screenshot needs meaningful `alt` text.
