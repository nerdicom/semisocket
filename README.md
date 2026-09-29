# SemiSocket

Power for the long haul.

A responsive brand website for a proposed highway charging network serving electric semi trucks.

This release is a complete static website. Deploy the files directly to Hostinger's `public_html` directory, or connect the GitHub repository through Hostinger's custom HTML/PHP website Git integration. There are no production dependencies or build commands.

## Contact

Configure and verify `hello@semisocket.com` before launching. The inquiry composer opens a visitor-controlled email draft and offers a copy-text fallback; it does not send automatically or persist leads.

## Project status

The website presents the network as in development. The station image is an original architectural concept. No manufacturer affiliation, live stations, specific hardware performance, or opening dates are represented as confirmed. Investor hardware specifications, budgets and financial scenarios are explicitly proposed or illustrative.

See `LAUNCH-GUIDE.md` for deployment and editing instructions.

## Proposed locations map

The U.S. map includes 18 illustrative proposed cities, with hover, tap, and keyboard city cards linking to official city or tourism information. The locations are not secured sites or operating chargers. `map.js` contains the city data, projected marker coordinates, and interactions; `map.css` provides the responsive layout. The map is self-hosted and requires no mapping API key or external scripts.

City coordinates use the 2024 U.S. Census Places Gazetteer representative points. Interstate labels describe routes serving each city or metropolitan area. To add or relocate markers, project the new coordinates with the same Albers USA projection as the supplied SVG; do not place pins by guessing their screen positions.

## Attribution

Manrope font by Mikhail Sharanda and Mirko Velimirovic, distributed under the SIL Open Font License 1.1. See `assets/MANROPE-OFL.txt`. Font source: Google Fonts Manrope distribution.

The station and charger images were generated specifically for SemiSocket using OpenAI image generation.

Map geometry: US Atlas 3.0.1, derived from U.S. Census cartographic boundaries, projected with D3 Albers USA. Source details and ISC licenses are in `assets/MAP-ATTRIBUTION.txt`. City coordinate source: https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html. Interstate reference: https://ops.fhwa.dot.gov/freight/infrastructure/nfn/maps/nhfn_map.htm.

## Investor section

The homepage investor section (`#investors`) summarizes the September 2026 concept-stage business plan: a fleet-backed six-bay pilot, initial screening markets, proposed development and construction budgets, staged rollout, and illustrative site economics. `investors.css` owns its layout and the expanded navigation breakpoint. The native disclosures work without JavaScript. Investor inquiry buttons use the existing email composer with the Investor / strategic partner interest selected.

Web-optimized copies of the 10-slide PDF and PowerPoint are hosted as `assets/SemiSocket-Investor-Business-Plan.pdf` and `.pptx`. Only embedded images were compressed; all PDF page text and PowerPoint slide XML and notes match the supplied originals. Downloads and the online PDF link point to these files. Update both source files, the displayed month/sizes, and on-page figures together when the concept changes. The $1.5M development proposal and separate $4.5M pilot budget are not represented as committed funding or sufficient for the full rollout.
