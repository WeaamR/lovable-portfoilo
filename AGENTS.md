<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules
- All portfolio text and recorded metrics live in `src/content/portfolio.ts`; components only render it. Why: one source feeds both the site and the AI assistant's knowledge.
- The assistant (`src/lib/assistant.functions.ts`) builds its prompt from that module and only cites IDs in `sourceLinks`. Why: grounded answers and validated links.
- Repository charts are hosted as asset pointers in `src/assets/artifacts/`; never fabricate charts. Why: only real artifacts are shown.
