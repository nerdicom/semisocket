# SemiSocket — launch guide

Your complete website is built for semisocket.com using static HTML, CSS, and JavaScript. It needs no Node.js application, database, API key, or build step in production.

## What is included

- An original SemiSocket wordmark and favicon, charcoal/white/lime design, and a custom architectural concept image.
- Responsive desktop, tablet, and phone layouts.
- Vision, station experience, site selection, fleet/property/infrastructure partnership sections, and FAQs.
- Keyboard-accessible station tabs, mobile navigation, native dialogs, FAQ disclosures, and reduced-motion support.
- A contact inquiry composer that opens the visitor's own email app, plus a copy-text fallback.
- Search metadata, canonical URL, sitemap, robots.txt, and Hostinger-compatible .htaccess settings.
- Self-hosted Manrope font with its SIL Open Font License.

## GitHub repository

The repository is `nerdicom/semisocket`, with production website files on `main`:
https://github.com/nerdicom/semisocket

The repository root contains `index.html`, `styles.css`, `app.js`, `assets/`, `robots.txt`, `sitemap.xml`, and `.htaccess`. The repository README and this guide remain alongside them.

## Connect Hostinger

1. Add `semisocket.com` as a custom HTML/PHP website under your existing web or cloud hosting plan. This is a static site; use the custom website option rather than the visual website builder.
2. Open that website's Dashboard, then **Advanced → Git**.
3. Choose **Connect with GitHub** and authorize Hostinger for the `semisocket` repository.
4. Select the repository, branch `main`, and destination/root directory `public_html`.
5. Deploy and enable automatic deployment if you want GitHub changes to update the website.
6. Use Hostinger's domain connection instructions for the hosting plan you selected, and enable SSL/HTTPS. Do not reuse another website's server address without checking this site's assigned values.

Hostinger reference, checked September 29, 2026:
https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/

Do not deploy over an unrelated website. If `public_html` contains a previous site, save a copy of it before replacing its files.

## Faster manual upload option

In GitHub, choose **Code → Download ZIP**. Extract it, then upload the contents of the `semisocket-main` folder into `public_html` for semisocket.com using Hostinger File Manager. `index.html` must be directly in `public_html`, and the `assets` directory must be alongside it. Keep `.htaccess` included.

## Contact setup before the public launch

Create the mailbox or forwarder **hello@semisocket.com**, then test receiving a real email. The website currently uses that address, but mailbox existence and delivery have not been verified.

The inquiry flow prepares a `mailto:` draft in the visitor's email application. It does not submit to a backend, save leads, or send automatically. Visitors can copy the inquiry if their email app does not launch. No lead has been sent as part of development testing.

To use a different destination, replace `hello@semisocket.com` in `index.html` and the `contactEmail` setting in `app.js`.

## Content to retain until the business is operating

The network-in-development wording and concept image captions accurately describe the current stage. No operating sites, confirmed partners, prices, opening dates, charger output, or vehicle compatibility have been invented. The Tesla FAQ explicitly describes SemiSocket as independent; it does not claim manufacturer approval.

Station imagery is an architectural concept, not a photograph of an operating location. Confirm engineering, circulation, equipment, utility capacity, and accessibility during real-world site planning.

## Final launch check

- Open https://semisocket.com and confirm the correct page, image, font, and secure connection.
- Try the navigation on a phone, station tabs, FAQs, and each partnership button.
- Send a real inquiry to verify the mailbox.
- Check the Privacy text against any analytics, cookies, or external services added later.
- Confirm any automatic GitHub deployment on a small visible change.

## Editing

- `index.html`: page content, inquiry fields, FAQs, and metadata.
- `styles.css`: colors, typography, layout, and responsive rules.
- `app.js`: station tabs, navigation, dialogs, and email composer.
- `assets/charging-plaza.webp`: compressed original station concept image.
- `assets/manrope-latin.woff2`: self-hosted Manrope variable font.
