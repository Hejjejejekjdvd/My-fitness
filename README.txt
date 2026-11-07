MY FITNESS — FIREBASE CLOUD SYNC BUILD

Files in this folder are the complete GitHub Pages PWA.

SETUP
1. Upload/replace all six files in the root of your existing GitHub repository.
2. Wait for GitHub Pages to publish the update.
3. Open https://hejjejejekjd.github.io/My-fitness/ in Chrome.
4. If an older installed version appears, close it and reopen the website; the service worker cache version has been updated.
5. Open More > Cloud account > Sign in with Google.
6. Use the same Google account you enabled in Firebase Authentication.
7. Confirm that the status says your cloud records are synced.

FIREBASE
- Authentication: Google provider enabled.
- Authorized domain: hejjejejekjd.github.io
- Firestore: Standard edition, default database, production mode.
- Firestore rules must restrict /users/{userId} to request.auth.uid == userId.
- This app stores each user's full tracker data at users/{uid}.

DATA SAFETY
Records are saved locally immediately and synced to Firestore after Google sign-in. Cloud sync requires internet. Firestore offline cache is enabled when supported by the browser. Keep occasional JSON exports as an extra backup. No cloud service can promise data will exist forever; account access, service availability, quotas, billing and provider policies still apply.

The Firebase web configuration in index.html is intended for a browser app. Never add Firebase service-account private keys or admin credentials to this public repository.
