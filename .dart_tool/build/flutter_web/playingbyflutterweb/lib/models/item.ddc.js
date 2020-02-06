define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const item = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  const title$ = dart.privateName(item, "Item.title");
  const done$ = dart.privateName(item, "Item.done");
  item.Item = class Item extends core.Object {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get done() {
      return this[done$];
    }
    set done(value) {
      this[done$] = value;
    }
    toJson() {
      let data = new (LinkedMapOfString$dynamic()).new();
      data[$_set]("title", this.title);
      data[$_set]("done", this.done);
      return data;
    }
  };
  (item.Item.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let done = opts && 'done' in opts ? opts.done : null;
    this[title$] = title;
    this[done$] = done;
    ;
  }).prototype = item.Item.prototype;
  (item.Item.fromJson = function(json) {
    this[done$] = null;
    this[title$] = null;
    this.title = core.String._check(json[$_get]("title"));
    this.done = core.bool._check(json[$_get]("done"));
  }).prototype = item.Item.prototype;
  dart.addTypeTests(item.Item);
  dart.setMethodSignature(item.Item, () => ({
    __proto__: dart.getMethods(item.Item.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(item.Item, "package:playingbyflutterweb/models/item.dart");
  dart.setFieldSignature(item.Item, () => ({
    __proto__: dart.getFields(item.Item.__proto__),
    title: dart.fieldType(core.String),
    done: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/playingbyflutterweb/models/item", {
    "package:playingbyflutterweb/models/item.dart": item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IACS;;;;;;IACF;;;;;;;AAUwB,iBAAW;AACZ,MAA1B,AAAI,IAAA,QAAC,SAAgB;AACG,MAAxB,AAAI,IAAA,QAAC,QAAe;AACpB,YAAO,KAAI;IACb;;;QAZW;QAAY;IAAZ;IAAY;;EAAM;iCAEM;;;AACZ,iBAArB,mBAAQ,AAAI,IAAA,QAAC;AACM,gBAAnB,iBAAO,AAAI,IAAA,QAAC;EACd","file":"item.ddc.js"}');
  // Exports:
  return {
    models__item: item
  };
});

//# sourceMappingURL=item.ddc.js.map
