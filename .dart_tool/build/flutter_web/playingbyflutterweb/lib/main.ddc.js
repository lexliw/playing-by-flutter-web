define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/playingbyflutterweb/models/item', 'packages/shared_preferences/shared_preferences', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__playingbyflutterweb__models__item, packages__shared_preferences__shared_preferences, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__material.src__material__colors;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const checkbox_list_tile = packages__flutter__material.src__material__checkbox_list_tile;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const icons = packages__flutter__material.src__material__icons;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const dismissible = packages__flutter__src__widgets__actions.src__widgets__dismissible;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const item = packages__playingbyflutterweb__models__item.models__item;
  const shared_preferences = packages__shared_preferences__shared_preferences.shared_preferences;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const main = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $removeAt = dartx.removeAt;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $_get = dartx._get;
  let IdentityMapOfint$Color = () => (IdentityMapOfint$Color = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Color)))();
  let JSArrayOfItem = () => (JSArrayOfItem = dart.constFn(_interceptors.JSArray$(item.Item)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToItem = () => (dynamicToItem = dart.constFn(dart.fnType(item.Item, [dart.dynamic])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let DismissDirectionToNull = () => (DismissDirectionToNull = dart.constFn(dart.fnType(core.Null, [dismissible.DismissDirection])))();
  let BuildContextAndintToDismissible = () => (BuildContextAndintToDismissible = dart.constFn(dart.fnType(dismissible.Dismissible, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 11,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 15,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDismissed",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 7,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 7,
        [_Location_file]: "org-dartlang-app:///packages/playingbyflutterweb/main.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C5;
  let C6;
  let C7;
  let C3;
  let C2;
  main.App = class App extends framework.StatelessWidget {
    build(context) {
      let color = new (IdentityMapOfint$Color()).from([50, new ui.Color.fromRGBO(218, 41, 28, 0.1), 100, new ui.Color.fromRGBO(218, 41, 28, 0.2), 200, new ui.Color.fromRGBO(218, 41, 28, 0.3), 300, new ui.Color.fromRGBO(218, 41, 28, 0.4), 400, new ui.Color.fromRGBO(218, 41, 28, 0.5), 500, new ui.Color.fromRGBO(218, 41, 28, 0.6), 600, new ui.Color.fromRGBO(218, 41, 28, 0.7), 700, new ui.Color.fromRGBO(218, 41, 28, 0.8), 800, new ui.Color.fromRGBO(218, 41, 28, 0.9), 900, new ui.Color.fromRGBO(218, 41, 28, 1.0)]);
      let colorCustom = new colors.MaterialColor.new(4292487452, color);
      return new app.MaterialApp.new({title: "É comigo Seuandré!", debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({primarySwatch: colorCustom}), home: new main.HomePage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main.App.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.App.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.App.prototype;
  dart.addTypeTests(main.App);
  dart.setMethodSignature(main.App, () => ({
    __proto__: dart.getMethods(main.App.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.App, "package:playingbyflutterweb/main.dart");
  const items = dart.privateName(main, "HomePage.items");
  main.HomePage = class HomePage extends framework.StatefulWidget {
    get items() {
      return this[items];
    }
    set items(value) {
      this[items] = value;
    }
    createState() {
      return new main._HomePageState.new();
    }
  };
  (main.HomePage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[items] = JSArrayOfItem().of([]);
    main.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    this.items = JSArrayOfItem().of([]);
  }).prototype = main.HomePage.prototype;
  dart.addTypeTests(main.HomePage);
  dart.setMethodSignature(main.HomePage, () => ({
    __proto__: dart.getMethods(main.HomePage.__proto__),
    createState: dart.fnType(main._HomePageState, [])
  }));
  dart.setLibraryUri(main.HomePage, "package:playingbyflutterweb/main.dart");
  dart.setFieldSignature(main.HomePage, () => ({
    __proto__: dart.getFields(main.HomePage.__proto__),
    items: dart.fieldType(core.List$(item.Item))
  }));
  let C10;
  let C11;
  let C12;
  let C13;
  let C9;
  let C8;
  let C16;
  let C15;
  let C14;
  let C19;
  let C18;
  let C17;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C35;
  let C36;
  let C37;
  let C33;
  let C32;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C43;
  let C42;
  let C47;
  let C48;
  let C49;
  let C46;
  let C45;
  let C52;
  let C53;
  let C54;
  let C51;
  let C50;
  main._HomePageState = class _HomePageState extends framework.State$(main.HomePage) {
    add() {
      if (this.newTaskCtrl.text[$isEmpty]) return;
      this.setState(dart.fn(() => {
        this.widget.items[$add](new item.Item.new({title: this.newTaskCtrl.text, done: false}));
        this.newTaskCtrl.clear();
        this.save();
      }, VoidToNull()));
    }
    remove(index) {
      this.setState(dart.fn(() => {
        this.widget.items[$removeAt](index);
        this.save();
      }, VoidToNull()));
    }
    load() {
      return async.async(dart.dynamic, (function* load() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        let data = prefs.getString("data");
        if (data != null) {
          let decoded = core.Iterable._check(convert.jsonDecode(data));
          let result = decoded[$map](item.Item, dart.fn(x => new item.Item.fromJson(MapOfString$dynamic()._check(x)), dynamicToItem()))[$toList]();
          this.setState(dart.fn(() => {
            this.widget.items = result;
          }, VoidToNull()));
        }
      }).bind(this));
    }
    save() {
      return async.async(dart.dynamic, (function* save() {
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        yield prefs.setString("data", convert.jsonEncode(this.widget.items));
      }).bind(this));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text_form_field.TextFormField.new({controller: this.newTaskCtrl, keyboardType: text_input.TextInputType.text, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 24.0}), decoration: new input_decorator.InputDecoration.new({labelText: "Lista de Tarefas", labelStyle: new text_style.TextStyle.new({color: colors.Colors.white})}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), body: new scroll_view.ListView.builder({itemCount: this.widget.items[$length], itemBuilder: dart.fn((ctxt, index) => {
            let item = this.widget.items[$_get](index);
            return new dismissible.Dismissible.new({key: new (ValueKeyOfString()).new(item.title), child: new checkbox_list_tile.CheckboxListTile.new({title: new text.Text.new(item.title, {$creationLocationd_0dea112b090073317d4: C17 || CT.C17}), value: item.done, onChanged: dart.fn(value => {
                  this.setState(dart.fn(() => {
                    item.done = value;
                    this.save();
                  }, VoidToNull()));
                }, boolToNull()), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), background: new container.Container.new({color: colors.Colors.red.withOpacity(0.2), child: new text.Text.new("Excluir", {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), onDismissed: dart.fn(direction => {
                this.remove(index);
              }, DismissDirectionToNull()), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
          }, BuildContextAndintToDismissible()), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), floatingActionButton: new floating_action_button.FloatingActionButton.new({onPressed: dart.bind(this, 'add'), child: new icon.Icon.new(icons.Icons.add, {$creationLocationd_0dea112b090073317d4: C42 || CT.C42}), backgroundColor: colors.Colors.pink, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50});
    }
  };
  (main._HomePageState.new = function() {
    this.newTaskCtrl = new editable_text.TextEditingController.new();
    main._HomePageState.__proto__.new.call(this);
    this.load();
  }).prototype = main._HomePageState.prototype;
  dart.addTypeTests(main._HomePageState);
  dart.setMethodSignature(main._HomePageState, () => ({
    __proto__: dart.getMethods(main._HomePageState.__proto__),
    add: dart.fnType(dart.void, []),
    remove: dart.fnType(dart.void, [core.int]),
    load: dart.fnType(async.Future, []),
    save: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._HomePageState, "package:playingbyflutterweb/main.dart");
  dart.setFieldSignature(main._HomePageState, () => ({
    __proto__: dart.getFields(main._HomePageState.__proto__),
    newTaskCtrl: dart.fieldType(editable_text.TextEditingController)
  }));
  let C55;
  main.main = function main$() {
    return binding.runApp(new main.App.new({$creationLocationd_0dea112b090073317d4: C55 || CT.C55}));
  };
  dart.trackLibraries("packages/playingbyflutterweb/main", {
    "package:playingbyflutterweb/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
