# MENDO Command Center — Editable GitHub Pages version

A static public command directory with an owner-side editor. The editor writes `commands.json` to GitHub using the GitHub Contents API. **No backend is required.**

## Publish (do this first)
1. Create a **public** GitHub repository, for example `mendo-commands`.
2. Upload `index.html`, `app.js`, and `commands.json` to the **root** of the repository (not inside a folder).
3. Open **Settings → Pages → Build and deployment → Deploy from a branch**; choose `main` and `/ (root)`.
4. Wait for your GitHub Pages URL, typically `https://YOURNAME.github.io/mendo-commands/`.

## Edit from your website
1. Open the published website and click **Admin**.
2. Enter your GitHub username and repository name.
3. Create a GitHub **fine-grained personal access token** at https://github.com/settings/personal-access-tokens/new, scoped to **only this repository**, with **Repository permissions → Contents → Read and write**. No other permissions are required beyond GitHub's automatic Metadata read permission.
4. Paste the token into the editor. The token is held only in the page's memory and never saved to localStorage, cookies, or the repository. Use your own trusted device. GitHub Pages is public; **the editor UI is visible to everyone, but GitHub rejects publishing without an authorized token**. Do not share the token or put it in a file.
5. Click **Load from GitHub**, edit/add/delete/hide commands, then **Save & Publish**. The site updates after GitHub Pages deploys.
6. Click **Clear token** and close the page when done. Revoke tokens you no longer need in GitHub settings.

## Notes and limitations
- The starter command descriptions were drafted from prior discussions; verify them against your actual Streamer.bot actions before sharing. The `!flip` name was corrected from the earlier placeholder `!coinflip`.
- This site is a **directory only**; it does not control Streamer.bot or automatically sync new commands.
- Anyone can see the public directory and the editor UI. Only someone holding a GitHub token authorized for the repository can publish. GitHub Pages alone cannot provide a private password-protected admin login. For a proper GitHub OAuth sign-in with no pasted token, a separate authentication service/backend is needed.
- Your token is transmitted only to `api.github.com` via HTTPS by the JavaScript in `app.js`; inspect and trust the deployed code before using it. Browser extensions or compromised site scripts could still read tokens.
- Avoid editing `commands.json` simultaneously from GitHub and the site. The editor checks the remote file version before writing.
- A GitHub Pages deployment may take a minute or more after a successful publish.
