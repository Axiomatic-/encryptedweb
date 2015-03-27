pref("extensions.encryptedweb.LogLevel", 5);
pref("extensions.encryptedweb.log_to_stdout", false);
pref("extensions.encryptedweb.globalEnabled",true);

// this is the HTTPS Everywhere preferences version (for migrations)
pref("extensions.encryptedweb.prefs_version", 0);

// this is a popup asking whether the user really meant to be on the dev branch
pref("extensions.encryptedweb.dev_popup_shown", false);

// show ruleset tests in the menu
pref("extensions.encryptedweb.show_ruleset_tests", false);
// run a ruleset performance test at startup
pref("extensions.encryptedweb.performance_tests", false);

// enable rulesets that trigger mixed content blocking
pref("extensions.encryptedweb.enable_mixed_rulesets", false);

// HTTP Nowhere preferences
pref("extensions.encryptedweb.http_nowhere.enabled", false);
pref("extensions.encryptedweb.http_nowhere.orig.ocsp.required", false);

// SSl Observatory preferences
pref("extensions.encryptedweb._observatory.enabled",false);

// "testing" currently means send unecessary fingerprints and other test-suite
// type stuff
pref("extensions.encryptedweb._observatory.testing",false);

pref("extensions.encryptedweb._observatory.server_host","observatory.eff.org");
pref("extensions.encryptedweb._observatory.use_tor_proxy",true);
pref("extensions.encryptedweb._observatory.submit_during_tor",true);
pref("extensions.encryptedweb._observatory.submit_during_nontor",true);

pref("extensions.encryptedweb._observatory.cache_submitted",true);

pref("extensions.encryptedweb._observatory.use_custom_proxy",false);
pref("extensions.encryptedweb._observatory.popup_shown",false);
pref("extensions.encryptedweb._observatory.proxy_host","");
pref("extensions.encryptedweb._observatory.proxy_port",0);
pref("extensions.encryptedweb._observatory.proxy_type","direct");
pref("extensions.encryptedweb._observatory.use_tor_proxy",true);
pref("extensions.encryptedweb._observatory.alt_roots",false);
pref("extensions.encryptedweb._observatory.self_signed",true);
pref("extensions.encryptedweb._observatory.priv_dns",false);
pref("extensions.encryptedweb._observatory.send_asn",true);
pref("extensions.encryptedweb._observatory.show_cert_warning",true);
pref("extensions.encryptedweb._observatory.use_whitelist",true);
pref("extensions.encryptedweb._observatory.clean_config",false);

pref("extensions.encryptedweb._observatory.whitelist_update_due",0);
