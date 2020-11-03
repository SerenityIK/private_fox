// "Private Fox" user.js file
// For GNU/Linux:
// Copy this file to /home/<user>/.mozilla/<your_profile_directory>
// For Windows:
// Copy this file to \Users\<user>\AppData\Local\Mozilla\Firefox\Profile\<your_profile_directory>
// Restart browser and check about:config


user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.event.contextmenu.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("app.normandy.enabled", false);
user_pref("webgl.disabled", true);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("trailhead.firstrun.didSeeAboutWelcome", true);

// disable WebRTC leack, uncomment media.peerconnection.enabled if want to turn of WebRTC at all
user_pref("media.peerconnection.enabled", false);
//user_pref("media.peerconnection.ice.default_address_only", true);

// network settings
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.sendRefererHeader", 0);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.cookie.cookieBehavior", 1);

// browser permissions
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);

// sync
user_pref("services.sync.prefs.sync.browser.formfill.enable", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync.dom.event.contextmenu.enabled", false);
user_pref("services.sync.prefs.sync.media.eme.enabled", false);

// tracking protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.resistFingerprinting", true);

// telemetry
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// always private browsing
user_pref("browser.privatebrowsing.autostart", true);