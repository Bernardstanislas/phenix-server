# Offline websites

These sites have been scrapped for an offline use with [HTTrack](https://www.httrack.com/).

## regex101.com

```bash
httrack "https://regex101.com/" -O ./regex101.com "+https://regex101.com/static/*.js" "+https://fonts.gstatic.com/*" "+https://regex101.com/static/*.webmanifest" "+https://regex101.com/static/asset/*" "+https://regex101.com/static/libs/*.wasm" "-https://regex101.com/library*" "-https://regex101.com/quiz*" "-https://regex101.com/settings*" "-https://regex101.com/account*"
```

Then browse the real https://regex101.com, use the regex engine to see which `js` and `wasm` files are lazy fetched, and manually add them to the download folder.

Click on the different engines to grab more necessary files.
