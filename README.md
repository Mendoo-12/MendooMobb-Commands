# MENDO Command Center — Full Control Edition

Upload **index.html**, **app.js**, and **commands.json** to the root of your GitHub Pages repository. Replace all three files from earlier editions (this version changes commands.json to an object with site settings, categories, and commands).

## Editor
Open Admin. Drag ☰ in the **Command order** list while Show = All to set the global order, or filter by category and drag to reorder within that category. Drag categories to change tab order. Rename categories in place; deleting a nonempty category is blocked until its commands are moved or deleted. Edit website labels, small print, footer, hero copy, accent color, descriptions, command cards and visibility. Click Apply website changes to preview text changes. Click Save & Publish to update commands.json in GitHub. The public sort dropdown defaults to My custom order; A–Z sorting remains optional.

## Security
GitHub Pages is static and the Admin panel is visible to anyone. Publishing requires a fine-grained GitHub token restricted to this repository with Contents read/write. Do not share your token or use the editor on untrusted computers. The token is held in the page input only and is not stored by the site. Browser extensions and other scripts with page access can still see it. For stronger security use a backend-based OAuth flow instead.

## Compatibility
The editor reads old array-format commands.json files but publishing upgrades them to the new object format. Upload the included new commands.json to start with customizable settings. Existing command descriptions are sample content; verify against Streamer.bot. Drag-and-drop is designed for desktop mouse/pointer; mobile reordering may vary.
