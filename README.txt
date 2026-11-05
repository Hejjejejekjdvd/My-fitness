MY FITNESS — phone installation guide

WHAT THIS IS
A private, installable web app (PWA), not an APK. This edition uses a pure black background, bold white typography, charcoal rounded cards, and green highlights, with weight, food, gym, sleep, history, goals, and backup/restore. Records are saved locally in your browser. No account is needed.

FIRST: PUT IT ONLINE (one-time setup)
The app must be hosted on an HTTPS address before Android can install it. The easiest phone-only route is GitHub Pages:
1. On your phone, open https://github.com and sign in or create an account.
2. Create a new repository. Name it my-fitness and set it to Public.
3. In the repository choose Add file > Upload files. Upload ALL files in this folder (index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png). Do not upload only the ZIP.
4. Commit the files.
5. Open repository Settings > Pages. Under Build and deployment choose Deploy from a branch; select main and / (root), then Save.
6. Wait a minute or two. GitHub will show your website address, usually https://YOUR-USERNAME.github.io/my-fitness/

INSTALL ON YOUR SAMSUNG GALAXY A13
1. Open that website address in Google Chrome (not the GitHub repository page).
2. Tap Chrome's ⋮ menu.
3. Tap Install app or Add to Home screen, then confirm.
4. Open MY FITNESS from your home screen. It can work offline after the first successful load.

IMPORTANT
- Export a JSON backup from More > Backup & restore regularly.
- Browser data can be lost if you clear Chrome storage or uninstall/reset the app. Keep backups somewhere safe.
- Data does not sync automatically between devices.
- The app is a tracker, not medical advice. Given your low body weight and chewing difficulties, get medical/dental assessment before starting strenuous gym training.


UPDATE AN EXISTING GITHUB PAGES SITE
If you already published an earlier version, you do NOT need a new repository. Open your existing my-fitness repository on GitHub, choose Add file > Upload files, upload the updated files from this folder, and confirm that GitHub replaces the existing files (especially index.html, manifest.webmanifest, and sw.js). Commit the changes. Then open your published site in Chrome and refresh it. If the installed app still shows the old design, close it fully, open the website in Chrome, refresh once more, and reopen the installed app. The service-worker cache has been versioned to v4 to help update the design.
