// "Private Fox" balance user.js file
// For GNU/Linux:
// Copy this file to /home/<user>/.mozilla/<your_profile_directory>
// For Windows:
// Copy this file to \Users\<user>\AppData\Local\Mozilla\Firefox\Profile\<your_profile_directory>
// Restart browser and check about:config


user_pref("dom.event.clipboardevents.enabled", true);
user_pref("dom.event.contextmenu.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("webgl.disabled", false);
user_pref("trailhead.firstrun.didSeeAboutWelcome", true);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.formfill.enable", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.region", "")

// extensions
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.enabled", false);

// disable WebRTC leack, uncomment media.peerconnection.enabled if want to turn of WebRTC at all
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);

// network settings
user_pref("network.captive-portal-service.enabled", true);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.http.sendRefererHeader", 0);
user_pref("network.http.speculative-parallel-limit", 6);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", true);
user_pref("network.cookie.cookieBehavior", 4);

// browser permissions
user_pref("permissions.default.camera", 0);
user_pref("permissions.default.desktop-notification", 0);
user_pref("permissions.default.geo", 0);
user_pref("permissions.default.microphone", 0);
user_pref("permissions.default.xr", 0);

// tracking protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.purge_trackers.enabled", true); // works only with network.cookie.cookieBehavior = 4 or 5

// telemetry
user_pref("toolkit.telemetry.enabled", false)
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// studies and experimnents
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);
user_pref("app.normandy.optoutstudies.enabled", false);

// always private browsing
user_pref("browser.privatebrowsing.autostart", false);

// security
user_pref("browser.safebrowsing.downloads.enabled", true);
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.downloads.remote.enabled", true);

// referer
//user_pref("network.http.referer.spoofSource", true);
