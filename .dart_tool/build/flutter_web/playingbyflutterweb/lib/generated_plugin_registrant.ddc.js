define(['dart_sdk', 'packages/shared_preferences_web/shared_preferences_web'], function(dart_sdk, packages__shared_preferences_web__shared_preferences_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const shared_preferences_web = packages__shared_preferences_web__shared_preferences_web.shared_preferences_web;
  const generated_plugin_registrant = Object.create(dart.library);
  const CT = Object.create(null);
  generated_plugin_registrant.registerPlugins = function registerPlugins(registry) {
    shared_preferences_web.SharedPreferencesPlugin.registerWith(registry.registrarFor(dart.wrapType(shared_preferences_web.SharedPreferencesPlugin)));
    registry.registerMessageHandler();
  };
  dart.trackLibraries("packages/playingbyflutterweb/generated_plugin_registrant", {
    "package:playingbyflutterweb/generated_plugin_registrant.dart": generated_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["generated_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;yEAWoC;AACkD,IAA5D,4DAAa,AAAS,QAAD,cAAc;AAC1B,IAAjC,AAAS,QAAD;EACV","file":"generated_plugin_registrant.ddc.js"}');
  // Exports:
  return {
    generated_plugin_registrant: generated_plugin_registrant
  };
});

//# sourceMappingURL=generated_plugin_registrant.ddc.js.map
