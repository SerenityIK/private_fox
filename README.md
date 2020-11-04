# Private Fox

This project aims to block Firefox from leak user data. Firefox versions 80+ are supported.

**Balance:**

This settings shoudn't break any site functionality, while improving privacy.

**Privacy+Security:**

Improved privacy, but still using Google Safebrowsing, can break some sites functionality.

**Privacy:**

Google Safebrowsing and tracking protection (using safebrowsing api) are turned of, less secure, but more private way of browsing (use some additional extensions like [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) to block trackers). Can break some sites functionality.

## Installition instruction

Just choose one of 3 user.js files and copy it to your browser profile directory.
***
on GNU/Linux:
```
/home/<user>/.mozilla/<your_profile_directory>
```
on Windows:
```
\Users\<user>\AppData\Local\Mozilla\Firefox\Profile\<your_profile_directory>
```
***
Restart browser and check about:config for changes have been made.

Feel free to report any bugs or make pull request.
