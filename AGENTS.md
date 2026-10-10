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
- Render mobile navigation in a modal portal with focus containment and scroll locking so it covers the header and remains accessible.
- Reference uploaded character imagery through asset pointers so user media stays outside the source repository.
- Compose the home character and Persona as separate transparent image layers in one responsive scene so the larger Persona stays behind the foreground character without covering controls.
- Render home continuation bands outside the sidebar grid through the shared shell's afterMain slot so the ticker and dossier span the entire viewport.
