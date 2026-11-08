# Changelog

All notable changes to LinkVault are listed here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- Nothing yet. Ideas and requests are welcome in the [issues](../../issues).

## [1.4.0] - 2026-11-08

### Added
- **Drag to reorder collections**. Hold a collection in the sidebar and drag it up or down. An orange line shows where it will land.

### Removed
- **Tags**, including the Tags section in the sidebar, the tags field when adding a link, tag chips on cards and the Tags Used stat. Links you saved with tags keep working.

## [1.3.1] - 2026-11-08

### Removed
- The **Filter** button. Collections, Favorites and Tags in the sidebar now do the same job with one click.

## [1.3.0] - 2026-11-08

### Added
- **Manage collections**. Hover a collection in the sidebar and click **•••** to rename it, change its emoji, move it up or down, or delete it. Deleting keeps your links and moves them to a **No collection** entry.
- **Tags in the sidebar**. Click a tag to filter by it, and click it again to clear.
- **Export and Import** buttons in the sidebar. Download a backup of all your links, and add links from a backup file on another browser or device. Links you already have are skipped.
- **Undo** after moving a link to Trash or Archive.
- **Most visited** sort, based on how often you open each link from LinkVault.
- **Empty trash** button in the Trash view.
- **Shortcuts**: `N` adds a link and `/` jumps to search.
- A new link starts in the collection you are currently viewing.
- The title fills in from the website name when you leave it empty.
- A warning if you add a link you already saved.

## [1.2.0] - 2026-11-08

### Added
- A new **Default** sort that groups links by collection, in the same order as the sidebar (Entertainment first, then Development, and so on). Newest links come first within each collection. It is now the standard sort order.

### Changed
- The installed app's title bar is now dark instead of orange. It follows night and light mode.

## [1.1.1] - 2026-11-08

### Fixed
- The installed app showing a blank dark screen. Saved copies of the libraries are now stored the way the page expects them.

### Changed
- The installed app now opens at full screen size.

## [1.1.0] - 2026-11-08

### Added
- **Installable app**. LinkVault can now be installed on your phone or PC and opens in its own window, like a normal app.
- **Offline support**. The app files are saved on your device so LinkVault opens even without internet.
- **Automatic updates**. The app checks for a new version each time it opens and reloads itself once when one is ready.
- App icons for the home screen, desktop and taskbar.

### Changed
- Links you open from the installed app go to your browser, so the app window stays on LinkVault.
- The version number in the sidebar now matches the release.

## [1.0.0] - 2026-11-08

First public release.

### Added
- **Bookmarks** with a title, URL, description, collection and tags.
- **Collections** with your own emoji, plus the ability to create new ones from the sidebar.
- **Favorites** with a heart button, and a Favorites view in the sidebar.
- **Archive and Trash**. Archive links to keep them out of the way, move them to Trash, and restore them or delete them permanently.
- **Edit** any bookmark after saving it.
- **Search** across title, URL, description and tags.
- **Filter** by collection, favorites only, has banner and tag, with a count badge and a one-click reset.
- **Sort** by newest, oldest or name A to Z.
- **Grid and list views**.
- **Stats row** showing total bookmarks, favorites, collections and tags used.
- **Banners**: paste an image URL or upload one from your device, with a preview and a remove button. Uploaded images are resized to keep browser storage small.
- **Automatic banners** for YouTube, Twitch, GitHub, Figma, React Docs and Spotify.
- **Site logos** shown on every card. A link with no banner shows its logo in the centre of the card, and a letter is used if the logo can't be loaded.
- **Night mode and light mode** with a one-click toggle in the header.
- **Quality of life**: click a link's name to open the site, copy a link from the card menu, collapsible sidebar, pop-up confirmations, and `Ctrl`/`⌘` + `K` to jump to search.
- **Card menu** that is never cut off at the edge of the screen. It opens upwards when there is no room below and closes on outside click or `Esc`.
- **Remembered settings**: your theme, view and sort order are saved between visits.
- **Local storage**: everything is saved in your browser, with no account needed.
- **App icon** for the browser tab, and a page title and theme colour.
- [Privacy policy](PRIVACY.md) and [MIT license](LICENSE).

[Unreleased]: ../../compare/v1.4.0...HEAD
[1.4.0]: ../../compare/v1.3.1...v1.4.0
[1.3.1]: ../../compare/v1.3.0...v1.3.1
[1.3.0]: ../../compare/v1.2.0...v1.3.0
[1.2.0]: ../../compare/v1.1.1...v1.2.0
[1.1.1]: ../../compare/v1.1.0...v1.1.1
[1.1.0]: ../../compare/v1.0.0...v1.1.0
[1.0.0]: ../../releases/tag/v1.0.0
