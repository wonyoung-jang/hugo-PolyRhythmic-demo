---
date: '2024-08-17T12:21:16-04:00'
title: 'Documentation'
---

## Things to do

**Random page roulette**: Feeling adventurous? Hit the random page button in the top bar.

**Light/dark mode toggle**: Toggle between day and night modes.

### Full theme control

Unlike Material Design's specs, I allow customizing the temperature direction of tertiary colors, the roundedness of shape corners,  and various font stylings.

Access the theme control panel in the top bar.

#### Colors

**Key hue:** Pick an input color hue.

**Key chroma:** Pick an input color chroma.

**Tertiary temperature:** Switch between cooler and warmer directions.

**Contrast:** Change the contrast levels for the site.

#### Shapes

**Shape roundness:** Slide to make things as sharp or smooth as you want.

#### Images

**Dim images:** Lowers image brightness in dark mode.

#### Typography

**Content width**: Stretch or shrink content's horizontal width.

**Font size**: Adjust font size.

**Line height**: Adjust vertical density of content.

**Font families**: Choose various font families for brand, plain, and code typefaces.

```html
{{ partial "components/actions/button-common.html" (dict
  "type" ""
  "label" ""
  "icon" ""
  "disabled" "") }}
```

```html
{{ partial "components/actions/button-fab.html" (dict
  "title" "" 
  "size" "" 
  "icon" ""
  "label" "") }}
```

```html
{{ partial "components/actions/button-icon.html" (dict
  "id" ""
  "type" ""
  "icon" ""
  "toggle" bool
  "disabled" "") }}
```
