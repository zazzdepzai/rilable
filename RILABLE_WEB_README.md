# Rilable Web

This adds a static web UI and a GitHub Pages deployment workflow to the supplied Rilable source.

## Deploy

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to `main` (or run **Deploy Rilable Web** manually).
5. GitHub Actions will publish the `web/` folder.

The generated page is a frontend shell. It does not replace Rilable's native iOS/Daytona/Convex backend and does not provide a real cloud iPhone by itself.
