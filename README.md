![./assets/beanie-wireframe.png]

## Elements

    -ul for  dynamically loaded the beanie babies
    -form with label,select, button for astrology sign
    -headers

## State

    -beanie array
    -astro sign array

## Events

    -page load: display all b. babies, astro options in dropdown

    -form submit to sort babies by astro sign

## Functions

    -fetch-utils get the babies from supabase, get all babies, get astro types
    -render-babies and render-types
    -display babies and display-types
    -find babies by astro type

## Slices

    -fetching babies from database - displaying on page
    -fetching types from database - displaying in dropdown
    -search by type and rendering only the matches on form submit
