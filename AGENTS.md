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

## Portfolio architecture
- Keep each portfolio section as a distinct TanStack content route, sharing a single animated shell so navigation and visual transitions remain consistent.
- Store visual styles and motion in the global semantic design system; respect reduced-motion settings so the expressive theme remains accessible.
- Keep unspecified personal history, skills, projects, achievements, and contact details explicitly unfilled rather than fabricating credentials.
