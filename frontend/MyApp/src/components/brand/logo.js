// src/components/brand/logo.js
//
// Official MANIT emblem. The PNG lives at src/assets/manit-logo.png.
// Crest.js renders this on a white medallion so the seal stays crisp on any
// background (blue splash/header, light or dark cards).
//
// To revert to the built-in drawn seal, set `export default null;`.

let logo = null;

try {
  logo = require('../../assets/manit-logo.png');
} catch (error) {
  logo = null;
}

export default logo;
