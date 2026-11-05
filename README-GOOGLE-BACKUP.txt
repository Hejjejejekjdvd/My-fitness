MY FITNESS — AUTOMATIC GOOGLE BACKUP SETUP (PHONE-FRIENDLY)

IMPORTANT
- Your existing local records remain in the app. Connect by choosing “Connect & back up this phone”; that uploads the current phone's records as the first cloud snapshot.
- Google Sheets is private in your Google Drive. The web app endpoint is reachable publicly but requires your random private backup key. Keep that key private.
- Do not put your key or your Apps Script deployment URL in public posts. The app stores them only in this browser's local storage; they are not in the public GitHub files.
- This is a personal backup, not a medical record system. Keep occasional manual JSON exports for critical redundancy.

PART A — CREATE YOUR PRIVATE BACKUP (Google Apps Script)
1. On your phone, open https://script.google.com/ in Chrome and sign in to the Google account you want to use.
2. Tap “New project”. Rename it “MY FITNESS Backup”.
3. Delete the starter code and paste all the contents of GoogleAppsScript.gs from this ZIP.
4. Tap Save.
5. In the function selector, choose setup, then tap Run. Approve Google's permissions. It creates a spreadsheet named “MY FITNESS — Private Backup” in your Drive.
6. Open the execution log (or Executions > latest setup run) and copy the BACKUP KEY shown there. Keep it private. Also open the private Google Sheet link and confirm it is in your Drive.
7. Tap Deploy > New deployment > gear icon > Web app.
8. Set “Execute as” to Me. Set “Who has access” to Anyone. Deploy and approve if asked.
9. Copy the Web app URL ending in /exec. Do not use the /dev URL.

PART B — CONNECT THE APP
1. Open MY FITNESS (the website or installed app) and go to More > Automatic Google backup.
2. Paste the /exec URL and the BACKUP KEY.
3. Tap “Connect & back up this phone”. Confirm. This uploads the records currently on this phone as your first backup.
4. Open the Google Sheet and check that the Backup tab has a timestamp in A2 and JSON in B2.
5. Add a harmless test entry in the app, wait a few seconds, then check that the timestamp updates.

AUTOMATIC BEHAVIOUR
- Each change is saved locally immediately.
- When connected and online, the app sends a cloud snapshot shortly after each change.
- If offline, local data remains; tap “Sync now” when online to send the latest snapshot.
- On a new phone, open the app, enter the same URL and key, then tap “Restore from Google backup”. This replaces the data on that device with the cloud snapshot.

UPDATING GITHUB
Upload/replace index.html, sw.js and manifest.webmanifest at the repository root. The service worker version is updated so the installed app can fetch the latest page. Keep the icons and README files already in the repository.

LIMITATIONS / SAFETY
- The Apps Script web app is deployed with “Anyone” access so the PWA can reach it without a Google sign-in pop-up. The random key is the access control. Do not share it. If you suspect it leaked, rerun setup after deleting BACKUP_TOKEN in Apps Script Project Settings > Script properties, or ask for a key-rotation update.
- Google Sheets has cell-size limits; this simple snapshot endpoint limits the JSON backup to 45,000 characters. For a normal personal tracker this is likely plenty, but very long histories may eventually exceed it.
- Cloud sync is a best-effort request from the browser. Always check the Sheet timestamp after first setup. Keep occasional JSON exports as an extra safety net.
