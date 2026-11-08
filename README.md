<h1 align="center">🔖 LinkVault</h1>

<p align="center">
  <b>Your links, organised.</b><br>
  A sleek bookmark manager with collections, banners and night mode. It runs in your browser with nothing to install.
</p>

<p align="center">
  <img alt="runs in" src="https://img.shields.io/badge/runs%20in-any%20browser-orange">
  <img alt="installable" src="https://img.shields.io/badge/PWA-installable-blue">
  <img alt="no build step" src="https://img.shields.io/badge/build%20step-none-lightgrey">
  <img alt="accounts" src="https://img.shields.io/badge/accounts-none-brightgreen">
  <img alt="tracking" src="https://img.shields.io/badge/tracking-none-brightgreen">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-purple">
</p>

<p align="center">
  <a href="https://jeffyboii.github.io/LinkVault/"><b>🚀 Open the app</b></a> ·
  <a href="#-features">Features</a> ·
  <a href="#-install">Install</a> ·
  <a href="#-shortcuts">Shortcuts</a> ·
  <a href="#-run-your-own-copy">Run your own</a> ·
  <a href="CHANGELOG.md">Changelog</a> ·
  <a href="PRIVACY.md">Privacy</a>
</p>

<!--
  Add screenshots here once you have them, for example:
  <p align="center">
    <img src="docs/screenshot-dark.png" alt="LinkVault in night mode" width="49%">
    <img src="docs/screenshot-light.png" alt="LinkVault in light mode" width="49%">
  </p>
-->

---

## ✨ What is LinkVault?

LinkVault is a personal place to keep the sites you want to come back to. Save a link, drop it into a collection, add a banner, and find it again in seconds with search, filters and sorting.

It is a single static page. There is no sign-up, no ads and no tracking, and everything you save stays in your own browser.

## 🎯 Features

**Organise**
- **Collections** with your own emoji, such as Development, Design Resources or Reading List. Drag to reorder, or rename and delete them any time
- **Favorites** with a heart button
- **Archive** for links you want out of the way, and **Trash** with restore and permanent delete
- **Edit** any link after saving it

**Find**
- **Search** across title, URL and description
- **Filter** from the sidebar by collection or favorites
- **Sort** by Default (grouped by collection), most visited, newest, oldest or name A to Z
- **Grid and list views**

**Make it look good**
- **Banners** for each link: paste an image URL or upload one from your device (it is resized automatically)
- **Automatic banners** for YouTube, Twitch, GitHub, Figma, React Docs and Spotify
- **Site logos** are fetched automatically, and a link with no banner shows its logo in the centre of the card
- **Night mode and light mode** with one click, and LinkVault remembers your choice
- **Stats** for total bookmarks, favorites and collections

**Quality of life**
- Click a link's name to open the site in a new tab
- Copy a link from the card menu
- Collapsible sidebar
- Short pop-up messages for actions like copy and save
- Your view, sort and theme are remembered between visits

## 📲 Install

LinkVault is an installable app that also works offline.

| Device | How |
|---|---|
| **PC** | Open the link in Chrome, Edge or Brave and click the install icon at the right end of the address bar |
| **Android** | Browser menu > *Add to Home Screen* (or *Install app*) |
| **iPhone** | Safari > Share > *Add to Home Screen* |

Links you click inside the installed app open in your browser, so the app window always stays on LinkVault.

## ⌨️ Shortcuts

| Key | Action |
|---|---|
| `Ctrl` + `K` (`⌘` + `K` on Mac) | Jump to search |
| `N` | Add a new link |
| `/` | Jump to search |
| `Esc` | Close menus and windows |

## 💾 Where is my data?

Everything is saved in your browser's **local storage**, on your own device.

- There is no cloud sync, so links saved on your phone will not appear on your PC. Use **Export** and **Import** in the sidebar to move your links between devices or keep a backup.
- Clearing your browser data, or using a private window, removes your links.
- Different browsers on the same computer each have their own separate list.

See [PRIVACY.md](PRIVACY.md) for the full details.

## 🛠️ Run your own copy

LinkVault is one static file, so there is nothing to build.

1. **Fork** this repo, or upload `index.html` to your own repository.
2. Go to **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
3. Make sure `index.html`, `manifest.json`, `sw.js` and the three `icon-*.png` files are all in the root folder.
4. Wait a minute or two. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Run locally:** open `index.html` in your browser, or serve the folder with any static server:

```bash
python -m http.server 8000
```

then open `http://localhost:8000`. An internet connection is needed because the libraries load from a CDN.

## 🧱 Built with

- Plain HTML, CSS and JavaScript in a single `index.html`
- A web app manifest and service worker for install and offline support
- [React](https://react.dev) 18, loaded from a CDN
- [Babel Standalone](https://babeljs.io/docs/babel-standalone) so the page runs without a build step
- [Tailwind CSS](https://tailwindcss.com/) (Play CDN) for styling
- Site logos from the Google and DuckDuckGo favicon services
- Banner photos from [Unsplash](https://unsplash.com)

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for what's new in each version.

## 🤝 Contributing

Found a bug or have an idea? [Open an issue](../../issues) or send a pull request. Small, focused changes are easiest to review.

## 📄 License

Released under the [MIT License](LICENSE).
