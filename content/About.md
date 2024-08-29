---
date: '2024-08-29T11:46:57-04:00'
draft: true
title: 'About'
---

## Confession: I never liked web development
In my journey in computer science, web development is one area that I never really bothered to take a deeper look at. I've always found it more unrewarding and unintuitive at the beginner level than other areas.

A common thread across the beginner to intermediate advice I came across was to implement something that is already designed. This is similar to how sound designers can learn by emulating other sounds.

I didn't want to simply import an existing library, and I wanted something with fairly extensive documentation.

I chose Google's open source Material Design system for it's history, accessibility, and documentation.

Unfortunately, the web specifications for the latest version, Material Design 3, is extremely unfinished and spotty, and no longer being actively maintained by anybody on that team.

## What I liked about Material Design 3

Accessibility first design is extremely important to me as someone with people close to me who require web developers to address various accessibility concerns like color contrast, sizing, and text legibility.

I liked the opinionated window size classes as that's not something I've real

## Key differences: Improving the design system

Since working on this project, I've come to realize that many apps and websites are using MD3 in their designs. It helped explain why I still prefer to use old reddit over the redesign. I've also noticed it in Gmail and every update of Spotify.

The main issue I have is the "button-ification" of everything, and a lack of affordances in strange places. I also have some gripes with line length guidelines. I'm someone who enjoys having the text on a page match whatever I size I set my window to.

Affordances are left to the designer, but by default I've added control over the roundness of shape corners to combat the button-y feel, and control over the width of the content text.

There's also the issue of the tertiary color direction. MD3 seems to go clockwise (or "warmer") from the primary color on the hue circle, in order to determine the tertiary color. My favorite color is purple, and if you follow this guideline with certain shades of purple, the tertiary color can be too similar to the semantic error color (red), which may cause confusion for users. So I added a simple switch that let's you change how the tertiary color is determined.

## Challenge: Implement it with only CSS

I would say: challenge failed! While I could implement most of the specifications with CSS only, I do need some scripting for:
    
  + Dynamic search

  + A back to top button

  + A random page feature

  + And most importantly: saving the user set theme parameters
  
## Polyrhythms

Everything is scaled: Not just a typescale, but the corner roundness and reference color palettes also work by taking some value(s) and outputting a scale.

The way things are scale can be adjusted as well, if you wanted the typescale to scale down in smaller increments and up in larger ones for instance.