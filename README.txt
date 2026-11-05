MY FITNESS — COMPLETE GREEN THEME PACKAGE

CONTENTS
- index.html: latest app, including nutrition logging and automatic calorie/protein estimates
- sw.js: service worker with updated cache version
- manifest.webmanifest: installable app settings
- icon-192.png and icon-512.png: app icons
- README.txt: these instructions

UPDATE YOUR EXISTING GITHUB PAGES APP
1. Make a backup first: in MY FITNESS, open More > Backup & restore > Export backup.
2. Extract this ZIP. Open the my_fitness_tracker folder.
3. In your existing GitHub repository, upload ALL FIVE files from this folder to the repository root (not an extra nested folder).
4. Replace files with the same names and commit the changes.
5. Keep the same repository and GitHub Pages URL.
6. Close and reopen the installed app. If it does not update, open the website in Chrome and refresh; the updated service worker should take over.

IMPORTANT
- Do not upload GoogleAppsScript.gs, backup keys, access tokens, or other secrets to a public GitHub repository. Keep the Apps Script source inside your Google Apps Script project.
- The app's records are stored locally in the browser/app storage. Export backups regularly until cloud sync has been tested and verified.
- Calorie and protein values are estimates based on the selected food and quantity; recipes, brands, and preparation methods can change the actual values.
- This is an installable web app (PWA), not an Android APK.
