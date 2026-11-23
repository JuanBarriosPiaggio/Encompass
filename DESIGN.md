---
name: Encompass London
description: A black-and-gold architecture monograph for a design-and-build studio.
colors:
  ink: "#0A0A0A"
  panel: "#141414"
  panel-raised: "#1C1C1C"
  gold: "#E0A030"
  bronze: "#B06030"
  gold-light: "#F0D090"
  text: "#F3EFE6"
  muted: "#A8A196"
  paper: "#F3EFE6"
  ink-on-paper: "#0A0A0A"
  muted-on-paper: "#4A453E"
  metal: "linear-gradient(135deg, #B06030 0%, #E0A030 45%, #F0D090 70%, #E0A030 100%)"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(2.35rem, 6.1vw, 7.6rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Albert Sans, Avenir Next, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Albert Sans, Avenir Next, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.15rem, 3.2vw, 3.25rem)"
  section: "clamp(4.5rem, 9vw, 8.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.3rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.3rem"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "clamp(1.2rem, 3vw, 2.2rem)"
---

## Overview

Encompass London is shown as an architecture monograph: full-bleed project photography, a Didone display face, and metallic gold used only as a hairline, a border, a price, and a hover sheen. The ground is ink black. One cream section per page, used for reviews or questions, is the contrast.

## Colors

Ink `#0A0A0A` is the page. Panels are `#141414` and `#1C1C1C`. Gold `#E0A030`, bronze `#B06030` and light gold `#F0D090` come from the logo. The only gradient is `linear-gradient(135deg, #B06030 0%, #E0A030 45%, #F0D090 70%, #E0A030 100%)`. Body text is `#F3EFE6`. Muted text is `#A8A196` on black. On the cream paper `#F3EFE6`, text is ink and secondary text is `#4A453E`. Small gold labels use light gold so they stay readable. The logo sits on black only.

## Typography

Headings are Bodoni Moda, weight 500, tracking about `-0.03em`, tight leading. The home headline scales with `clamp(2.35rem, 6.1vw, 7.6rem)`. Body and controls are Albert Sans. Labels are uppercase, wide-tracked, and light gold. Prices and indexes use tabular numerals. The estimator price and the large step numbers use the metal gradient as a text fill.

## Layout

Pages are mobile-first. The home hero is `100svh`, with the photograph full-bleed and a solid black plate at the lower left for the headline and actions. Service pages use the same plate over a full-bleed image. Grids are asymmetric: lofts and staircases take the tall cells. Project stories alternate wide and inset frames. Low-resolution Houzz frames stay in a thumbnail row and never go full-bleed. One H1 per page.

## Elevation & Depth

Depth comes from the photograph and from hairline rules, not from shadows. Images carry a 1px white outline at 10% opacity. The primary button’s edge is the metal gradient. Focus is a light-gold ring. Press scales a button to 0.96.

## Shapes

Corners are square. Seals for Best of Houzz are the exception: circles, because a seal is round. The studio map mark is a single diamond, the same cell as the logo fan.

## Components

The header is a near-solid black bar so the logo and the navigation stay readable on light photographs. It becomes fully solid, with a gold hairline, after a short scroll. On small screens the menu is a full-screen black overlay with Didone links. The estimator is a black panel with a gold progress rule and a live price. Forms end on the page. Nothing is submitted. Galleries open a keyboard-operable lightbox. Low-resolution images open contained, not full-bleed.

## Do's and Don'ts

Do use the real Houzz photographs, the supplied prices, and the supplied Houzz record. Do keep review cards labelled as placeholders until real wording is pasted in. Do respect reduced motion: no Ken Burns, no clip wipe, no count-up. Don't introduce yellow or amber. Don't put the logo on white or cream. Don't add a second gradient, icon-in-circle grids, or stock photography. Don't invent awards, testimonials, opening hours, or project facts.
