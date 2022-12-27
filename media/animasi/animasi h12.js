(function (lib, img, cjs, ss, an) {
  var p; // shortcut to reference prototypes
  lib.webFontTxtInst = {};
  var loadedTypekitCount = 0;
  var loadedGoogleCount = 0;
  var gFontsUpdateCacheList = [];
  var tFontsUpdateCacheList = [];
  lib.ssMetadata = [];

  lib.updateListCache = function (cacheList) {
    for (var i = 0; i < cacheList.length; i++) {
      if (cacheList[i].cacheCanvas) cacheList[i].updateCache();
    }
  };

  lib.addElementsToCache = function (textInst, cacheList) {
    var cur = textInst;
    while (cur != exportRoot) {
      if (cacheList.indexOf(cur) != -1) break;
      cur = cur.parent;
    }
    if (cur != exportRoot) {
      var cur2 = textInst;
      var index = cacheList.indexOf(cur);
      while (cur2 != cur) {
        cacheList.splice(index, 0, cur2);
        cur2 = cur2.parent;
        index++;
      }
    } else {
      cur = textInst;
      while (cur != exportRoot) {
        cacheList.push(cur);
        cur = cur.parent;
      }
    }
  };

  lib.gfontAvailable = function (family, totalGoogleCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = (lib.webFontTxtInst && lib.webFontTxtInst[family]) || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

    loadedGoogleCount++;
    if (loadedGoogleCount == totalGoogleCount) {
      lib.updateListCache(gFontsUpdateCacheList);
    }
  };

  lib.tfontAvailable = function (family, totalTypekitCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = (lib.webFontTxtInst && lib.webFontTxtInst[family]) || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

    loadedTypekitCount++;
    if (loadedTypekitCount == totalTypekitCount) {
      lib.updateListCache(tFontsUpdateCacheList);
    }
  };
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.tenggelamm = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAYAaIAAgcQAAgIgBgCQgCgDgEAAQgDAAgCACQgDACgBADQgBADAAAHIAAAYIgNAAIAAgbIAAgKIgDgDIgEgBQgDAAgDACQgCABgBADIgBALIAAAYIgOAAIAAgyIANAAIAAAGQAGgHAKgBQAFABADACQADACACADQAEgDAEgCQAEgCAEgBQAGAAAEADQAEACACAEQABAEAAAIIAAAfg"
      );
    this.shape.setTransform(80.6, 16.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAXQgEgFAAgGQAAgFACgDQACgDAEgBIALgEIAMgDIAAgBQAAgEgCgCQgCgBgEgBQgEABgCABQgCACgBADIgNgCQACgIAFgEQAGgDAJAAQAJAAAEACQAFADACADQACADAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgCQgDAEgEACQgDABgFAAQgIAAgFgEgAAAADIgHADQgCACAAACQAAAEACACQACACADAAQADgBADgCIAEgFIAAgGIAAgDIgIACg"
      );
    this.shape_1.setTransform(73.4, 16.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgGAkIAAhHIANAAIAABHg");
    this.shape_2.setTransform(69.2, 15.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSASQgFgHAAgLQAAgMAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgEIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_3.setTransform(65, 16.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRAhQgFgFAAgHIAAgCIAPACQAAABABABQAAAAAAABQAAAAABAAQAAABAAAAQACABADAAQAGAAACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBIABgGIAAgHQgGAIgJAAQgKAAgGgJQgFgHAAgJQAAgNAGgHQAGgHAKAAQAIAAAHAJIAAgIIAMAAIAAAtQAAAKgBAFQgCAEgCADQgDACgFABQgEACgHAAQgMAAgGgEgAgHgVQgDADAAAIQAAAIADADQADAEAEAAQAFAAADgEQAEgDAAgHQAAgJgDgDQgEgFgFAAQgEAAgDAFg"
      );
    this.shape_4.setTransform(59.1, 17.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRAhQgFgFAAgHIAAgCIAPACQAAABABABQAAAAAAABQAAAAABAAQAAABAAAAQACABADAAQAGAAACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBIABgGIAAgHQgGAIgJAAQgKAAgGgJQgFgHAAgJQAAgNAGgHQAGgHAKAAQAIAAAHAJIAAgIIAMAAIAAAtQAAAKgBAFQgCAEgCADQgDACgFABQgEACgHAAQgMAAgGgEgAgHgVQgDADAAAIQAAAIADADQADAEAEAAQAFAAADgEQAEgDAAgHQAAgJgDgDQgEgFgFAAQgEAAgDAFg"
      );
    this.shape_5.setTransform(53, 17.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAaIAAgaQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCgCgDAAQgCAAgDACQgDACgBADIgBALIAAAXIgOAAIAAgyIANAAIAAAHQAHgIAJgBQAFAAADACQAEABACADQACADABADIABAKIAAAeg"
      );
    this.shape_6.setTransform(47, 16.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSASQgFgHAAgLQAAgMAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgEIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_7.setTransform(41.1, 16.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AgGAkIAAg7IgWAAIAAgMIA5AAIAAAMIgWAAIAAA7g");
    this.shape_8.setTransform(36.1, 15.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(4)
    );

    // Layer 1
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("ApaiNIS1AAIAAEbIy1AAg");
    this.shape_9.setTransform(64.3, 17.2);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#0066CC").s().p("AqBC0IAAlnIUDAAIAAFng");
    this.shape_10.setTransform(64.2, 18);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#00CCFF").s().p("AqBC0IAAlnIUDAAIAAFng");
    this.shape_11.setTransform(64.2, 18);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }] })
        .to({ state: [{ t: this.shape_11 }, { t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }] }, 2)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 128.3, 36);

  (lib.layang = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRAhQgFgFAAgHIAAgCIAPACQAAABABABQAAAAAAABQAAAAABAAQAAABAAAAQACABADAAQAGAAACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBIABgGIAAgHQgGAIgJAAQgKAAgGgJQgFgHAAgJQAAgNAGgHQAGgHAKAAQAIAAAHAJIAAgIIAMAAIAAAtQAAAKgBAFQgCAEgCADQgDACgFABQgEACgHAAQgMAAgGgEgAgHgVQgDADAAAIQAAAIADADQADAEAEAAQAFAAADgEQAEgDAAgHQAAgJgDgDQgEgFgFAAQgEAAgDAFg"
      );
    this.shape.setTransform(78.6, 17.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAaIAAgaQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCgCgDAAQgCAAgDACQgDACgBADIgBALIAAAXIgOAAIAAgyIANAAIAAAHQAHgIAJgBQAFAAADACQAEABACADQACADABADIABAKIAAAeg"
      );
    this.shape_1.setTransform(72.7, 16.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAXQgEgFAAgGQAAgFACgDQACgDAEgBIALgEIAMgDIAAgBQAAgEgCgCQgCgBgEgBQgEABgCABQgCACgBADIgNgCQACgIAFgEQAGgDAJAAQAJAAAEACQAFADACADQACADAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgCQgDAEgEACQgDABgFAAQgIAAgFgEgAAAADIgHADQgCACAAACQAAAEACACQACACADAAQADgBADgCIAEgFIAAgGIAAgDIgIACg"
      );
    this.shape_2.setTransform(66.8, 16.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVAkIgBgLIAGAAQAEAAADgCIADgIIgUgyIAPAAIALAkIANgkIAOAAIgTAwIgDAJIgDAIIgDADIgFADIgHABIgIgBg"
      );
    this.shape_3.setTransform(61.3, 17.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAXQgEgFAAgGQAAgFACgDQACgDAEgBIALgEIAMgDIAAgBQAAgEgCgCQgCgBgEgBQgEABgCABQgCACgBADIgNgCQACgIAFgEQAGgDAJAAQAJAAAEACQAFADACADQACADAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgCQgDAEgEACQgDABgFAAQgIAAgFgEgAAAADIgHADQgCACAAACQAAAEACACQACACADAAQADgBADgCIAEgFIAAgGIAAgDIgIACg"
      );
    this.shape_4.setTransform(55.8, 16.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#FFFFFF").s().p("AgGAkIAAhHIANAAIAABHg");
    this.shape_5.setTransform(51.7, 15.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSASQgFgHAAgLQAAgMAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgEIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_6.setTransform(47.4, 16.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p("AAWAkIAAg4IgPA4IgNAAIgOg4IAAA4IgNAAIAAhHIAVAAIAMAwIANgwIAVAAIAABHg");
    this.shape_7.setTransform(40.5, 15.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(4)
    );

    // Layer 1
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("ApaiNIS1AAIAAEbIy1AAg");
    this.shape_8.setTransform(64.3, 17.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#0066CC").s().p("AqBC0IAAlnIUDAAIAAFng");
    this.shape_9.setTransform(64.2, 18);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#00CCFF").s().p("AqBC0IAAlnIUDAAIAAFng");
    this.shape_10.setTransform(64.2, 18);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] })
        .to({ state: [{ t: this.shape_10 }, { t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] }, 2)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 128.3, 36);

  (lib.kotaknya = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#424242").ss(1, 1, 1, 3, true).p("AjLhhIGXAAIAADDImXAAg");
    this.shape.setTransform(20.4, 9.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AjLBiIAAjDIGWAAIAADDg");
    this.shape_1.setTransform(20.4, 9.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(lib.kotaknya, new cjs.Rectangle(-1, -1, 42.7, 21.5), null);

  (lib.gelas = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("rgba(0,204,255,0.498)")
      .ss(1, 1, 1, 3, true)
      .p("Ao+AAQABghCngYQCpgYDtAAQDuAACpAYQCnAYABAhAI/ABQgBAhinAYQipAXjuAAQjtAAipgXQingYgBgh");
    this.shape.setTransform(57.5, 44);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#333333")
      .ss(1, 1, 1)
      .p(
        "AI/pOIAAFlIAAABIAALfQgJAwhUAoQk6BqkpgeQkqgfhkhGQgigRgKgxAo+pOIAAgBQAAgiCogYQCpgYDtAAQDuAACpAYQCnAYABAiIAAABQgBAhinAXQipAYjuAAQjtAAipgYQingXgBghgAo+H0IAArcIAAgBIAAll"
      );
    this.shape_1.setTransform(57.5, 67.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("rgba(204,153,204,0.498)").s().p("AAvgrIAAAqQgvAYguAVQBTgoAKgvg");
    this.shape_2.setTransform(110.3, 122.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(51,204,255,0.498)")
      .s()
      .p(
        "AiBHoQkpgfhlhGQgigRgKgxQAKAxAiARIgvgVIAAgtIAArcIAAgBQABgiCngYQCpgYDtAAQDuAACpAYQCnAYABAiIAAABQgBAhinAXQipAYjuAAQjtAAipgYQingXgBghQABAhCnAXQCpAYDtAAQDuAACpgYQCngXABghIAALfQgKAwhTAoQj0BTjqAAQhCAAhDgHgAI/mbg"
      );
    this.shape_3.setTransform(57.5, 85.3);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("rgba(153,153,153,0.498)")
      .s()
      .p(
        "AGXCiQipgYjuAAQjtAAipAYQinAYgBAiIAAlkQABAhCnAXQCpAYDtAAQDuAACpgYQCngXABghQgBAhinAXQipAYjuAAQjtAAipgYQingXgBghIAAgBQABgiCngYQCpgYDtAAQDuAACpAYQCnAYABAiIAAABIAAFkQgBgiingYg"
      );
    this.shape_4.setTransform(57.5, 22);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(lib.gelas, new cjs.Rectangle(-1, -1, 117, 136.8), null);

  (lib.apung = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRAhQgFgFAAgHIAAgCIAPACQAAABABABQAAAAAAABQAAAAABAAQAAABAAAAQACABADAAQAGAAACgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBIABgGIAAgHQgGAIgJAAQgKAAgGgJQgFgHAAgJQAAgNAGgHQAGgHAKAAQAIAAAHAJIAAgIIAMAAIAAAtQAAAKgBAFQgCAEgCADQgDACgFABQgEACgHAAQgMAAgGgEgAgHgVQgDADAAAIQAAAIADADQADAEAEAAQAFAAADgEQAEgDAAgHQAAgJgDgDQgEgFgFAAQgEAAgDAFg"
      );
    this.shape.setTransform(78.3, 17.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AAKAaIAAgaQAAgIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCgCgDAAQgCAAgDACQgDACgBADIgBALIAAAXIgOAAIAAgyIANAAIAAAHQAHgIAJgBQAFAAADACQAEABACADQACADABADIABAKIAAAeg"
      );
    this.shape_1.setTransform(72.3, 16.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgPAYQgEgCgCgEQgCgEAAgIIAAgfIAOAAIAAAXQAAALABACQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAIAGABQACAAADgCQADgBABgDQABgEAAgKIAAgVIAOAAIAAAyIgNAAIAAgIQgDAFgFACQgDACgGAAQgFAAgEgCg"
      );
    this.shape_2.setTransform(66.2, 16.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgYAkIAAhGIAMAAIAAAIQADgEAEgDQAEgCAEAAQAKAAAGAHQAGAHAAANQAAAMgGAHQgHAHgJAAQgDAAgDgCQgEgBgEgFIAAAagAgIgVQgDAEAAAIQAAAJAEADQADAEAEAAQAFAAADgEQADgDAAgIQAAgJgDgDQgDgEgFAAQgEAAgEADg"
      );
    this.shape_3.setTransform(60.3, 17.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgTAXQgEgFAAgGQAAgFACgDQACgDAEgBIALgEIAMgDIAAgBQAAgEgCgCQgCgBgEgBQgEABgCABQgCACgBADIgNgCQACgIAFgEQAGgDAJAAQAJAAAEACQAFADACADQACADAAAJIgBAPIABAKIACAHIgNAAIgBgEIgBgCQgDAEgEACQgDABgFAAQgIAAgFgEgAAAADIgHADQgCACAAACQAAAEACACQACACADAAQADgBADgCIAEgFIAAgGIAAgDIgIACg"
      );
    this.shape_4.setTransform(54.3, 16.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p("AgQAaIAAgyIANAAIAAAHIAFgHIAGgCQAFAAAEADIgEAMQgEgCgDAAQgDAAgCACQgBABgBAEIgBARIAAAPg");
    this.shape_5.setTransform(49.9, 16.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgSASQgFgHAAgLQAAgMAHgGQAGgIAKAAQALAAAHAIQAHAHgBAPIghAAQAAAGADADQADAEAEAAQADAAADgCQACgCABgEIAOADQgDAHgGAFQgFADgJAAQgMAAgHgJgAgGgNQgDAEAAAFIAUAAQAAgFgDgEQgDgDgEAAQgEAAgDADg"
      );
    this.shape_6.setTransform(44.8, 16.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("AgGAkIAAg7IgWAAIAAgMIA4AAIAAAMIgUAAIAAA7g");
    this.shape_7.setTransform(39.8, 15.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(4)
    );

    // Layer 1
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("ApaiNIS1AAIAAEbIy1AAg");
    this.shape_8.setTransform(64.3, 17.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#0066CC").s().p("AqBC0IAAlnIUDAAIAAFng");
    this.shape_9.setTransform(64.2, 18);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#00CCFF").s().p("AqBC0IAAlnIUDAAIAAFng");
    this.shape_10.setTransform(64.2, 18);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] })
        .to({ state: [{ t: this.shape_10 }, { t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }, { t: this.shape_8 }] }, 2)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 128.3, 36);

  (lib.terapung = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p(
        "AgWAbQgGgEABgIQAAgFABgDQADgEADgDIAHgCIAKgCQALgBAHgDIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFACQgEACgHABQgKgBgFgFgAgBAEQgHABgDABQgCABgCACQgBACgBAEQABADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg"
      );
    this.shape.setTransform(64.3, -26.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF0000").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAnAAIAAAJIgnAAIAAAng");
    this.shape_1.setTransform(57.6, -27.3);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FF0000")
      .s()
      .p(
        "AANAfIgKglIgDgKIgLAvIgLAAIgTg9IALAAIAJAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAJAAIgTA9g"
      );
    this.shape_2.setTransform(58, 125.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#FF0000").ss(1, 1, 1).p("AAhjpIgegoIgjAoAACESIABoj");
    this.shape_3.setTransform(58.1, 11.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#FF0000").ss(1, 1, 1).p("AggDqIAeAoIAjgoAgBkRIgBIj");
    this.shape_4.setTransform(58.7, 86.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          60
        )
        .wait(40)
    );

    // gelas
    this.instance = new lib.gelas();
    this.instance.parent = this;
    this.instance.setTransform(57.5, 67.3, 1, 1, 0, 0, 0, 57.5, 67.3);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

    // kotak
    this.instance_1 = new lib.kotaknya();
    this.instance_1.parent = this;
    this.instance_1.setTransform(58.6, -63, 1, 1, 0, 0, 0, 20.4, 9.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ y: 48.5 }, 50).wait(50));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.5, -72.8, 116, 208.1);

  (lib.tenggelam = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p(
        "AgWAbQgGgEABgIQAAgFABgDQADgEADgDIAHgCIAKgCQALgBAHgDIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFACQgEACgHABQgKgBgFgFgAgBAEQgHABgDABQgCABgCACQgBACgBAEQABADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg"
      );
    this.shape.setTransform(64.3, 45.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF0000").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAnAAIAAAJIgnAAIAAAng");
    this.shape_1.setTransform(57.6, 44.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FF0000")
      .s()
      .p(
        "AANAfIgKglIgDgKIgLAvIgLAAIgTg9IALAAIAJAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAJAAIgTA9g"
      );
    this.shape_2.setTransform(58, 197.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#FF0000").ss(1, 1, 1).p("AAhjpIgegoIgjApAACESIABoj");
    this.shape_3.setTransform(58.1, 83.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#FF0000").ss(1, 1, 1).p("AggDqIAeAoIAjgoAgBkRIgBIj");
    this.shape_4.setTransform(58.7, 158.1);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          60
        )
        .wait(40)
    );

    // gelas
    this.instance = new lib.gelas();
    this.instance.parent = this;
    this.instance.setTransform(57.5, 67.3, 1, 1, 0, 0, 0, 57.5, 67.3);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

    // kotak
    this.instance_1 = new lib.kotaknya();
    this.instance_1.parent = this;
    this.instance_1.setTransform(58.6, -52.5, 1, 1, 0, 0, 0, 20.4, 9.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ y: 121 }, 50).wait(50));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.5, -62.3, 116, 197.6);

  (lib.melayang = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p(
        "AgWAbQgGgFABgHQAAgFABgDQADgFADgCIAHgCIAKgCQALgCAHgCIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgBACgBAEQABADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg"
      );
    this.shape.setTransform(64.3, 6.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FF0000").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAnAAIAAAJIgnAAIAAAng");
    this.shape_1.setTransform(57.6, 5.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FF0000")
      .s()
      .p(
        "AANAfIgKglIgDgKIgLAvIgLAAIgTg9IALAAIAJAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAJAAIgTA9g"
      );
    this.shape_2.setTransform(58, 157.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#FF0000").ss(1, 1, 1).p("AAhjpIgegoIgjApAACESIABoj");
    this.shape_3.setTransform(58.1, 44.3);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#FF0000").ss(1, 1, 1).p("AggDqIAeAoIAjgpAgBkRIgBIj");
    this.shape_4.setTransform(58.7, 118.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to(
          {
            state: [
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape_1 },
              { t: this.shape },
            ],
          },
          60
        )
        .wait(40)
    );

    // gelas
    this.instance = new lib.gelas();
    this.instance.parent = this;
    this.instance.setTransform(57.5, 67.3, 1, 1, 0, 0, 0, 57.5, 67.3);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

    // kotak
    this.instance_1 = new lib.kotaknya();
    this.instance_1.parent = this;
    this.instance_1.setTransform(58.6, -49, 1, 1, 0, 0, 0, 20.4, 9.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ y: 81.5 }, 50).wait(50));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-0.5, -58.8, 116, 194.1);

  // stage content:
  (lib.animasih12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_0 = function () {
      this.tb1.addEventListener("click", fmelayang.bind(this));

      function fmelayang() {
        this.layang.visible = true;
        this.apung.visible = false;
        this.tenggelam.visible = false;
        this.layang.gotoAndPlay(0);
      }
      this.tb2.addEventListener("click", fapung.bind(this));

      function fapung() {
        this.layang.visible = false;
        this.apung.visible = true;
        this.tenggelam.visible = false;
        this.layang.gotoAndPlay(0);
      }
      this.tb3.addEventListener("click", ftenggelam.bind(this));

      function ftenggelam() {
        this.layang.visible = false;
        this.apung.visible = false;
        this.tenggelam.visible = true;
        this.layang.gotoAndPlay(0);
      }
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

    // Layer 2
    this.apung = new lib.terapung();
    this.apung.parent = this;
    this.apung.setTransform(139.7, 132.3, 1, 1, 0, 0, 0, 57.5, 67.3);
    this.apung.visible = false;

    this.tenggelam = new lib.tenggelam();
    this.tenggelam.parent = this;
    this.tenggelam.setTransform(139.7, 132.3, 1, 1, 0, 0, 0, 57.5, 67.3);
    this.tenggelam.visible = false;

    this.layang = new lib.melayang();
    this.layang.parent = this;
    this.layang.setTransform(139.7, 132.3, 1, 1, 0, 0, 0, 57.5, 67.3);
    this.layang.visible = false;

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAdQgGgIgBgTQABgTAHgKQAHgJAKABQAJAAAFAEQAFAFABAJIgJAAQAAgFgDgCQgEgEgEAAQgEAAgDACQgEADgDAGQgCAGAAAKQADgEAFgCQAFgDADAAQAJAAAHAGQAFAGAAAKQAAAHgDAGQgDAFgFADQgEAEgHAAQgKgBgHgHgAgIABQgFAFAAAGQAAAFACAEQACAEADADQAEACADAAQAGgBAEgEQADgEAAgIQAAgHgDgFQgEgDgGAAQgGAAgDADg"
      );
    this.shape.setTransform(317.5, 302.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AAEAkIAAg3IgHAGIgJAEIAAgIQAHgEAFgFQAFgEACgFIAGAAIAABHg");
    this.shape_1.setTransform(311.6, 302);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAeQgIgJABgVQAAgMACgHQADgIAFgEQAFgFAHABQAGAAAEACQAEACADAFQADAEACAHQABAFAAAKQAAANgCAIQgDAHgFAEQgFAEgIABQgKgBgFgGgAgJgXQgFAHABAQQgBASAFAFQAEAHAFAAQAGAAAEgHQAEgFAAgSQAAgRgEgGQgEgFgGAAQgFAAgEAFg"
      );
    this.shape_2.setTransform(306.4, 302.1);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgXAkIABgGQACgFAEgFQAEgEAIgHQAKgJAEgFQAEgFAAgFQAAgGgDgDQgEgDgGAAQgFAAgEADQgEAEAAAHIgJgBQABgLAGgEQAGgGAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAEIgGAIQgEAFgKAIIgJAJIgEAEIAjAAIAAAJg"
      );
    this.shape_3.setTransform(300.7, 302);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAsQgJgDgHgFQgGgGgDgHQgEgJAAgLQAAgLAFgLQAGgNAKgHQALgHAPAAQAMAAAKAFQAJAFAGAKQAFAIAAAKQAAANgKALQgJAKgLAAIgFgBIgDgDIgBgEIgGAGQgEACgEAAQgEAAgEgCQgFgDgCgFQgDgFAAgHQAAgHAEgHQAEgIAGgEQAGgEAGAAQADAAAEACQAEADACAEIACgIIAJAAIgHAhIgCAHIABACIADABQACAAAEgDQAGgEADgGQAEgGAAgHQAAgIgFgHQgEgHgIgFQgIgEgKAAQgLAAgJAFQgKAGgFAKQgFAKAAAKQAAANAFAIQAFAJAKADQAKAFALAAQANAAAIgFQAJgEAEgGIAJAAQgCAFgGAFQgGAGgJADQgIADgMAAQgKAAgJgDgAgHgRIgFAFQgDADgBAGIgCAIQAAAHADADQAEAEAEAAIAGgCIAEgEQADgEACgEQACgFAAgEQAAgIgEgDQgDgDgEgBIgGACg"
      );
    this.shape_4.setTransform(293.1, 303);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgLAhQgFgDgDgHQgDgGAAgIQABgHACgGQACgGAGgDQAFgEAGAAQAEAAADACQAFACABADIAAgZIAJAAIAABGIgIAAIAAgGQgFAHgJAAQgFAAgGgDgAgIgFQgFAFAAAJQAAAKAFAFQAEAFAFAAQAFAAAFgEQADgFAAgKQAAgKgDgFQgFgFgGAAQgEAAgEAFg"
      );
    this.shape_5.setTransform(285, 302.1);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgLAZQgEgCgCgCQgCgDgBgEIAAgIIAAgfIAIAAIAAAbIABAJQABAEADACQACACAEAAQADAAAEgCQAEgCABgEQABgDAAgGIAAgbIAJAAIAAAzIgIAAIAAgIQgGAJgKAAQgEAAgEgCg"
      );
    this.shape_6.setTransform(279.6, 303.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAdIAAAGIgIAAIAAhGIAJAAIAAAZQAGgHAIAAQAEAAAFACQAEACACAEQAEADABAFQACAEgBAGQAAANgGAHQgHAHgJAAQgIAAgGgHgAgJgFQgEAFgBAJQABAJACAEQAEAHAHAAQAFAAAFgFQADgFAAgKQAAgJgDgFQgEgFgGAAQgFAAgEAFg"
      );
    this.shape_7.setTransform(274.2, 302.1);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p("AALAkIgRgbIgFAGIAAAVIgJAAIAAhHIAJAAIAAAoIATgUIALAAIgTASIAVAhg");
    this.shape_8.setTransform(269.1, 302);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#000000").s().p("AgEAkIAAgzIAIAAIAAAzgAgEgZIAAgKIAIAAIAAAKg");
    this.shape_9.setTransform(265.2, 302);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgLAhQgFgDgDgHQgDgGAAgIQABgHACgGQACgGAGgDQAFgEAGAAQAEAAADACQAFACABADIAAgZIAJAAIAABGIgIAAIAAgGQgFAHgJAAQgFAAgGgDgAgIgFQgFAFAAAJQAAAKAFAFQAEAFAFAAQAFAAAFgEQADgFAAgKQAAgKgDgFQgFgFgGAAQgEAAgEAFg"
      );
    this.shape_10.setTransform(261.1, 302.1);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AAaAbIAAggIAAgIQgBgCgDgBQgCgCgDAAQgFAAgEAEQgEAEAAAHIAAAeIgHAAIAAghQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBADAAAHIAAAbIgJAAIAAgzIAIAAIAAAHQACgEAEgCQAEgCAFAAQAGAAAEACQADADABAEQAGgJAKAAQAIgBAEAFQAEAEAAAJIAAAjg"
      );
    this.shape_11.setTransform(254.3, 303);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAUQgHgHAAgNQAAgMAHgHQAHgHAKAAQAKAAAHAHQAGAHAAAMIAAACIgmAAQABAJAEAFQAFAEAFAAQAFAAADgDQAEgCABgGIAJABQgCAJgFAEQgGAEgJAAQgKAAgHgHgAgIgPQgFAFgBAGIAcAAQAAgGgDgDQgEgGgGAAQgGAAgDAEg"
      );
    this.shape_12.setTransform(247.4, 303);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p("AARAkIgYgkIgMALIAAAZIgKAAIAAhHIAKAAIAAAjIAigjIANAAIgdAdIAfAqg");
    this.shape_13.setTransform(241.7, 302);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AAaAbIAAggIAAgIQgBgCgDgBQgCgCgDAAQgFAAgEAEQgEAEAAAHIAAAeIgHAAIAAghQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBADAAAHIAAAbIgJAAIAAgzIAIAAIAAAHQACgEAEgCQAEgCAFAAQAGAAAEACQADADABAEQAGgJAKAAQAIgBAEAFQAEAEAAAJIAAAjg"
      );
    this.shape_14.setTransform(231, 303);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg"
      );
    this.shape_15.setTransform(224, 303);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p("AALAkIgQgbIgGAGIAAAVIgKAAIAAhHIAKAAIAAAoIATgUIAMAAIgUASIAWAhg");
    this.shape_16.setTransform(219.1, 302);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p("AALAkIgRgbIgGAGIAAAVIgJAAIAAhHIAJAAIAAAoIAUgUIALAAIgTASIAVAhg");
    this.shape_17.setTransform(214.1, 302);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAUQgHgHAAgNQAAgMAHgHQAHgHAKAAQAKAAAHAHQAGAHAAAMIAAACIgmAAQAAAJAFAFQAEAEAGAAQAFAAADgDQADgCACgGIAJABQgBAJgHAEQgFAEgJAAQgKAAgHgHgAgIgPQgFAFAAAGIAbAAQAAgGgCgDQgFgGgGAAQgGAAgDAEg"
      );
    this.shape_18.setTransform(208.5, 303);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AAAAiQgDgCgBgCQgCgDAAgHIAAgdIgFAAIAAgHIAFAAIAAgNIAIgFIAAASIAJAAIAAAHIgJAAIAAAdIABAFIACACIADAAIADAAIABAIIgGAAQgFAAgBgBg"
      );
    this.shape_19.setTransform(204.4, 302.1);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAXQgFgEgCgJIAJgBQABAFAEADQACADAGAAQAGAAADgDQACgCAAgEQAAgCgCgCIgJgDIgNgEQgDgBgCgDQgCgDAAgEQAAgEACgDQABgCADgCIAGgDIAHgBQAFAAAFABQAFACABAEQADACABAGIgJABQAAgEgEgDQgCgCgFAAQgFAAgDACQgDACAAADIABADIAEACIAHADIANAEQAEAAACADQABAEABAEQgBAEgCAEQgDAEgEACQgFACgGAAQgKAAgFgEg"
      );
    this.shape_20.setTransform(200.4, 303);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AgLAZQgEgCgCgCQgCgDAAgEIgBgIIAAgfIAJAAIAAAbIAAAJQABAEACACQAEACADAAQADAAAEgCQAEgCAAgEQACgDAAgGIAAgbIAJAAIAAAzIgIAAIAAgIQgGAJgJAAQgFAAgEgCg"
      );
    this.shape_21.setTransform(195.1, 303.1);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAkIAAhHIAaAAIALABQAFABAEACQADADACAEQACAFABAFQAAAJgHAFQgFAHgPAAIgSAAIAAAdgAgRgBIASAAQAJAAADgDQAFgEAAgGQAAgEgDgEQgCgDgDgBIgJAAIgSAAg"
      );
    this.shape_22.setTransform(189.2, 302);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AAAAiQgDgCgBgCQgBgDgBgHIAAgdIgGAAIAAgHIAGAAIAAgNIAJgFIAAASIAIAAIAAAHIgIAAIAAAdIAAAFIABACIAEAAIADAAIABAIIgGAAQgFAAgBgBg"
      );
    this.shape_23.setTransform(181.6, 302.1);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AAMAkIAAghQAAgGgDgDQgCgDgGAAQgDAAgDACQgDACgCAEQgBACAAAGIAAAdIgJAAIAAhHIAJAAIAAAaQAGgHAIAAQAGAAAEACQAEACACAEQACAEAAAHIAAAhg"
      );
    this.shape_24.setTransform(177.3, 302);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAhQgFgFAAgHIAJABQAAADACACQAEADAFAAQAFAAAEgDQADgCACgEIAAgMQgGAHgIAAQgKAAgGgIQgGgIAAgJQAAgHADgHQADgGAFgDQAFgEAGAAQAJAAAGAHIAAgGIAIAAIAAAsQAAAMgDAFQgCAFgFADQgGADgHAAQgJAAgGgEgAgJgYQgDAFAAAJQAAAKADAEQAEAFAFgBQAHABADgFQAFgEAAgKQAAgJgFgFQgDgFgHAAQgFAAgEAFg"
      );
    this.shape_25.setTransform(171.6, 304);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#000000").s().p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
    this.shape_26.setTransform(167.9, 302);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p(
        "AgNAbIAAgzIAIAAIAAAIQADgGACgCQACgBADAAQAFAAAEADIgDAIQgDgCgDAAQgDAAgCACQgCABgBADIgBAKIAAAbg"
      );
    this.shape_27.setTransform(165.5, 303);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAkIgBgJIAFABIAFgBIADgCIACgHIABgCIgUgzIAKAAIALAdIACALIAEgKIALgeIAJAAIgUA0IgEALQgCAFgDACQgDACgEAAIgGgBg"
      );
    this.shape_28.setTransform(161, 304.1);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#000000")
      .s()
      .p(
        "AgWAlIAAhHIAIAAIAAAHQADgFAEgBQADgCAFAAQAHgBAFAEQAEAEADAFQADAHgBAHQABAIgDAFQgDAHgFADQgGAEgGAAQgEAAgDgCQgEgCgCgDIAAAagAgJgYQgEAGgBAKQAAAJAEAEQAFAGAFAAQAFAAAFgGQADgEAAgKQAAgKgDgFQgEgEgGgBQgFABgEAEg"
      );
    this.shape_29.setTransform(155.8, 304);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#000000")
      .s()
      .p(
        "AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg"
      );
    this.shape_30.setTransform(150.1, 303);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#000000")
      .s()
      .p(
        "AgQAhQgHgFgEgJQgEgJAAgKQAAgLAFgIQAEgIAIgFQAIgEAIAAQALAAAHAGQAHAFADAKIgJACQgDgIgEgDQgFgDgHAAQgHAAgGADQgGAEgCAHQgCAGAAAHQAAAJADAHQACAGAGAEQAGADAFAAQAIAAAGgEQAFgFACgJIAKADQgDALgIAGQgIAGgLAAQgLAAgHgEg"
      );
    this.shape_31.setTransform(143.8, 302);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#000000")
      .s()
      .p(
        "AAlAoIAAgsQAAgLgCgEQgDgEgGAAQgEAAgEADQgEACgCAFQgBAFAAAKIAAAmIgUAAIAAgqQAAgLgBgEQgBgDgCgBQgDgCgEAAQgFAAgDADQgEACgCAFQgBAFAAAKIAAAmIgVAAIAAhNIATAAIAAALQAKgNAOAAQAIAAAFADQAFADADAHQAFgHAGgDQAGgDAHAAQAIAAAGAEQAGADADAHQACAFAAALIAAAxg"
      );
    this.shape_32.setTransform(391.3, 287.5);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAiQgIgHABgJQAAgHACgFQAEgFAFgCQAGgDALgCQANgDAFgCIAAgCQABgGgDgCQgDgDgHAAQgGAAgDACQgDACgCAGIgSgEQADgLAHgFQAIgGAPAAQANAAAHAEQAGADADAFQADAFAAANIgBAXIABAPQACAFADAGIgVAAIgCgGIgBgDQgFAFgGADQgFADgHAAQgMAAgGgHgAAAAFQgIABgDACQgEADAAAEQAAAFADADQADADAFAAQAFAAAFgEQADgCACgEIAAgLIAAgEIgLAEg"
      );
    this.shape_33.setTransform(380.6, 287.6);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#000000").s().p("AgJA2IAAhrIATAAIAABrg");
    this.shape_34.setTransform(374.3, 286.1);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg"
      );
    this.shape_35.setTransform(368, 287.6);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAxQgIgHAAgKIAAgDIAXADQABAEACABQADADAGAAQAIAAAEgDQACgBABgEIABgJIAAgMQgJANgNAAQgPAAgKgOQgHgJAAgQQAAgTAJgKQAKgLAOAAQAOAAAJANIAAgLIATAAIAABFQAAAOgCAGQgCAIgEADQgFAEgGACQgIACgKAAQgSABgJgHgAgLghQgFAFAAAMQAAANAFAEQAFAHAGgBQAIABAFgHQAFgEAAgMQAAgMgFgGQgFgGgIAAQgGAAgFAGg"
      );
    this.shape_36.setTransform(359.1, 289.1);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAxQgIgHAAgKIAAgDIAYADQAAAEACABQADADAGAAQAHAAAEgDQADgBACgEIABgJIAAgMQgKANgNAAQgPAAgKgOQgHgJAAgQQAAgTAKgKQAJgLAOAAQAOAAAJANIAAgLIATAAIAABFQAAAOgCAGQgDAIgEADQgEAEgGACQgIACgKAAQgSABgJgHgAgLghQgFAFAAAMQAAANAFAEQAFAHAGgBQAIABAEgHQAGgEAAgMQAAgMgFgGQgFgGgIAAQgGAAgFAGg"
      );
    this.shape_37.setTransform(350, 289.1);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#000000")
      .s()
      .p(
        "AAPAoIAAgoQAAgMgBgDQgBgEgEgCQgDgCgEAAQgEAAgEADQgEADgCAFQgCAEAAANIAAAjIgVAAIAAhNIAUAAIAAALQAKgNAOAAQAHAAAGADQAGACADAEIADAJIABANIAAAwg"
      );
    this.shape_38.setTransform(341, 287.5);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg"
      );
    this.shape_39.setTransform(332.2, 287.6);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#000000")
      .s()
      .p(
        "AgCAzQgFgCgCgCQgCgDgBgFQgBgEAAgLIAAghIgJAAIAAgQIAJAAIAAgQIAUgLIAAAbIAOAAIAAAQIgOAAIAAAeIABALQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEABIAIgCIACAQQgHAEgJAAQgGgBgDgCg"
      );
    this.shape_40.setTransform(325.6, 286.3);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#000000")
      .s()
      .p("AgKAOQAGgCADgEQABgEAAgFIgIAAIAAgUIATAAIAAAOQAAAIgBAGQgCAFgEAEQgEAEgGACg");
    this.shape_41.setTransform(316.7, 291.6);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAxQgIgHAAgKIAAgDIAYADQAAAEACABQADADAFAAQAJAAADgDQADgBACgEIABgJIAAgMQgKANgNAAQgQAAgIgOQgIgJAAgQQAAgTAKgKQAJgLAOAAQANAAAKANIAAgLIATAAIAABFQAAAOgCAGQgCAIgFADQgDAEgHACQgIACgKAAQgTABgIgHgAgLghQgFAFAAAMQAAANAFAEQAFAHAGgBQAIABAEgHQAGgEAAgMQAAgMgFgGQgFgGgIAAQgGAAgFAGg"
      );
    this.shape_42.setTransform(310, 289.1);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#000000")
      .s()
      .p(
        "AAPAoIAAgoQAAgMgCgDQAAgEgDgCQgDgCgFAAQgEAAgEADQgFADgBAFQgCAEAAANIAAAjIgUAAIAAhNIATAAIAAALQAKgNAPAAQAGAAAGADQAGACADAEIADAJIABANIAAAwg"
      );
    this.shape_43.setTransform(301.1, 287.5);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#000000")
      .s()
      .p(
        "AgXAlQgGgEgDgGQgCgHAAgKIAAgxIAUAAIAAAkQAAAQABADQABAEADACQADACAFAAQAEAAAEgDQAFgDABgEQACgEAAgQIAAghIAUAAIAABNIgTAAIAAgLQgEAGgHADQgGAEgIAAQgHAAgHgDg"
      );
    this.shape_44.setTransform(291.9, 287.7);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#000000")
      .s()
      .p(
        "AglA2IAAhqIATAAIAAALQAEgFAGgEQAHgDAHAAQANAAAKAKQAJAKAAATQAAATgJALQgKALgNAAQgGAAgFgDQgGgDgFgFIAAAmgAgMggQgEAHgBALQABANAEAFQAGAGAGAAQAHAAAGgFQAEgFAAgNQAAgMgFgHQgFgFgHAAQgHAAgFAFg"
      );
    this.shape_45.setTransform(283, 289);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAiQgIgHABgJQAAgHACgFQADgFAGgCQAGgDAKgCQAOgDAFgCIAAgCQABgGgDgCQgDgDgHAAQgGAAgDACQgDACgCAGIgTgEQAEgLAHgFQAIgGAPAAQANAAAGAEQAHADADAFQADAFAAANIgBAXIACAPQABAFACAGIgUAAIgCgGIgBgDQgFAFgGADQgFADgHAAQgMAAgGgHgAAAAFQgIABgDACQgEADAAAEQAAAFADADQADADAFAAQAFAAAFgEQADgCACgEIAAgLIAAgEIgLAEg"
      );
    this.shape_46.setTransform(274, 287.6);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#000000")
      .s()
      .p(
        "AgYAoIAAhNIATAAIAAALQAFgIADgCQADgDAFAAQAIAAAGAEIgGASQgGgDgEAAQgEAAgDACQgCACgCAHQgCAGAAATIAAAYg"
      );
    this.shape_47.setTransform(267.5, 287.5);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg"
      );
    this.shape_48.setTransform(259.8, 287.6);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#000000")
      .s()
      .p(
        "AgCAzQgFgCgCgCQgCgDgBgFQgBgEAAgLIAAghIgJAAIAAgQIAJAAIAAgQIAUgLIAAAbIAOAAIAAAQIgOAAIAAAeIABALQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEABIAIgCIACAQQgHAEgJAAQgGgBgDgCg"
      );
    this.shape_49.setTransform(253.2, 286.3);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#000000")
      .s()
      .p("AgKAOQAGgCADgEQABgEAAgFIgIAAIAAgUIATAAIAAAOQAAAIgBAGQgCAFgEAEQgEAEgGACg");
    this.shape_50.setTransform(244.3, 291.6);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#000000")
      .s()
      .p(
        "AgaAxQgIgHAAgKIAAgDIAXADQABAEACABQADADAGAAQAIAAAEgDQACgBABgEIABgJIAAgMQgJANgNAAQgPAAgKgOQgHgJAAgQQAAgTAJgKQAKgLAOAAQAOAAAJANIAAgLIATAAIAABFQAAAOgCAGQgCAIgEADQgFAEgGACQgIACgKAAQgSABgJgHgAgLghQgFAFAAAMQAAANAFAEQAFAHAGgBQAIABAFgHQAFgEAAgMQAAgMgFgGQgFgGgIAAQgGAAgFAGg"
      );
    this.shape_51.setTransform(237.6, 289.1);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#000000")
      .s()
      .p(
        "AAPAoIAAgoQAAgMgBgDQgCgEgDgCQgDgCgEAAQgEAAgFADQgEADgBAFQgCAEAAANIAAAjIgVAAIAAhNIATAAIAAALQALgNAOAAQAHAAAGADQAFACADAEIAFAJIAAANIAAAwg"
      );
    this.shape_52.setTransform(228.7, 287.5);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAiQgIgHABgJQAAgHACgFQAEgFAFgCQAGgDALgCQANgDAFgCIAAgCQABgGgDgCQgDgDgHAAQgGAAgDACQgDACgCAGIgTgEQAEgLAHgFQAIgGAPAAQANAAAGAEQAHADADAFQADAFAAANIgBAXIABAPQACAFADAGIgVAAIgCgGIgBgDQgFAFgGADQgFADgHAAQgMAAgGgHgAAAAFQgIABgDACQgEADAAAEQAAAFADADQADADAFAAQAFAAAFgEQADgCACgEIAAgLIAAgEIgLAEg"
      );
    this.shape_53.setTransform(219.9, 287.6);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#000000")
      .s()
      .p(
        "AggA2IgCgRIAJABQAHAAADgEQAEgEACgHIgehNIAWAAIASA3IASg3IAVAAIgcBKIgEAOQgDAHgDADIgEAGIgIAEIgKABIgMgBg"
      );
    this.shape_54.setTransform(211.5, 289.1);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAiQgIgHAAgJQAAgHAEgFQACgFAHgCQAFgDAKgCQAOgDAGgCIAAgCQAAgGgDgCQgDgDgIAAQgFAAgDACQgDACgCAGIgTgEQAEgLAIgFQAHgGAPAAQANAAAGAEQAIADACAFQADAFAAANIAAAXIABAPQAAAFADAGIgUAAIgCgGIAAgDQgGAFgGADQgFADgHAAQgMAAgGgHgAAAAFQgIABgDACQgEADAAAEQAAAFADADQAEADAFAAQAEAAAFgEQAEgCABgEIABgLIAAgEIgMAEg"
      );
    this.shape_55.setTransform(203.2, 287.6);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics.f("#000000").s().p("AgJA2IAAhrIATAAIAABrg");
    this.shape_56.setTransform(197, 286.1);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg"
      );
    this.shape_57.setTransform(190.6, 287.6);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#000000")
      .s()
      .p(
        "AAlAoIAAgsQAAgLgCgEQgDgEgGAAQgEAAgEADQgEACgCAFQgBAFAAAKIAAAmIgUAAIAAgqQAAgLgBgEQgBgDgCgBQgDgCgEAAQgFAAgDADQgEACgCAFQgBAFAAAKIAAAmIgVAAIAAhNIATAAIAAALQAKgNAOAAQAIAAAFADQAFADADAHQAFgHAGgDQAGgDAHAAQAIAAAGAEQAGADADAHQACAFAAALIAAAxg"
      );
    this.shape_58.setTransform(179.8, 287.5);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAiQgIgHAAgJQAAgHADgFQAEgFAFgCQAGgDAKgCQAOgDAFgCIAAgCQAAgGgCgCQgDgDgHAAQgGAAgDACQgDACgCAGIgTgEQAEgLAIgFQAHgGAPAAQANAAAGAEQAIADACAFQADAFAAANIAAAXIABAPQABAFACAGIgUAAIgCgGIAAgDQgGAFgGADQgFADgHAAQgMAAgGgHgAAAAFQgIABgDACQgEADAAAEQAAAFADADQADADAGAAQAEAAAFgEQAEgCABgEIAAgLIAAgEIgLAEg"
      );
    this.shape_59.setTransform(164.9, 287.6);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#000000")
      .s()
      .p(
        "AgbAsQgKgLAAgTQAAgTAKgKQAJgLAOAAQAMAAAKALIAAgnIAUAAIAABrIgTAAIAAgMQgFAHgGADQgGAEgHAAQgNAAgJgLgAgLgEQgFAFAAALQAAANADAFQAGAIAIAAQAGAAAFgGQAFgGABgMQAAgNgFgFQgFgGgHAAQgHAAgFAGg"
      );
    this.shape_60.setTransform(155.9, 286.2);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#000000")
      .s()
      .p(
        "AAPAoIAAgoQAAgMgBgDQgBgEgEgCQgDgCgEAAQgEAAgFADQgEADgBAFQgCAEAAANIAAAjIgVAAIAAhNIATAAIAAALQALgNAOAAQAHAAAGADQAFACAEAEIADAJIABANIAAAwg"
      );
    this.shape_61.setTransform(147, 287.5);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#000000")
      .s()
      .p(
        "AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg"
      );
    this.shape_62.setTransform(138.1, 287.6);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#000000")
      .s()
      .p(
        "AgHAzQgGgDgFgHIAAAMIgTAAIAAhrIAUAAIAAAnQAKgLAMAAQAOAAAJALQAKAKAAASQAAAUgKALQgJALgNAAQgHAAgGgEgAgMgEQgEAEgBAMQABAMADAGQAFAIAIAAQAHAAAFgGQAEgFABgNQgBgNgEgFQgFgGgHAAQgHAAgFAGg"
      );
    this.shape_63.setTransform(129.7, 286.2);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f("#000000").s().p("AgJA2IAAhNIATAAIAABNgAgJgiIAAgTIATAAIAAATg");
    this.shape_64.setTransform(118.7, 286.1);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#000000")
      .s()
      .p(
        "AgXAiQgJgGgDgLIAUgEQACAGAEAEQAEADAGAAQAIAAAEgDQADgCAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQgBgBgGgBQgXgGgHgEQgJgGAAgLQAAgKAIgHQAIgHAQAAQAPAAAIAFQAIAGADAKIgUADQgBgEgDgDQgEgCgGAAQgHAAgEACQAAABgBAAQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQADACAPAEQAQAEAHAFQAGAFAAAJQAAALgJAIQgIAIgSAAQgPAAgJgHg"
      );
    this.shape_65.setTransform(112.2, 287.6);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#000000")
      .s()
      .p(
        "AgdAiQgGgHAAgJQAAgHADgFQACgFAHgCQAFgDALgCQANgDAGgCIAAgCQgBgGgCgCQgDgDgIAAQgFAAgDACQgDACgCAGIgSgEQACgLAIgFQAIgGAPAAQANAAAHAEQAGADADAFQADAFAAANIgBAXIABAPQABAFAEAGIgVAAIgCgGIgBgDQgFAFgGADQgFADgHAAQgMAAgHgHgAAAAFQgJABgCACQgEADAAAEQAAAFADADQAEADAEAAQAFAAAFgEQADgCACgEIABgLIAAgEIgMAEg"
      );
    this.shape_66.setTransform(104.1, 287.6);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#000000")
      .s()
      .p(
        "AAlAoIAAgsQAAgLgCgEQgDgEgGAAQgEAAgEADQgEACgCAFQgBAFAAAKIAAAmIgUAAIAAgqQAAgLgBgEQgBgDgCgBQgDgCgEAAQgFAAgDADQgEACgCAFQgBAFAAAKIAAAmIgVAAIAAhNIATAAIAAALQAKgNAOAAQAIAAAFADQAFADADAHQAFgHAGgDQAGgDAHAAQAIAAAGAEQAGADADAHQACAFAAALIAAAxg"
      );
    this.shape_67.setTransform(93.1, 287.5);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics.f("#000000").s().p("AgJA2IAAhNIATAAIAABNgAgJgiIAAgTIATAAIAAATg");
    this.shape_68.setTransform(84.5, 286.1);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#000000")
      .s()
      .p(
        "AAPAoIAAgoQAAgMgCgDQgBgEgCgCQgDgCgFAAQgEAAgFADQgDADgCAFQgCAEAAANIAAAjIgUAAIAAhNIASAAIAAALQALgNAPAAQAGAAAGADQAFACADAEIAFAJIABANIAAAwg"
      );
    this.shape_69.setTransform(77.8, 287.5);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#000000")
      .s()
      .p("AAeA2IgJgZIgqAAIgJAZIgXAAIAqhrIAWAAIArBrgAgOALIAcAAIgOgng");
    this.shape_70.setTransform(67.7, 286.1);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics.f().s("#000000").ss(1, 1, 1, 3, true).p("Egh1gU3MBDsAAAMgABApvMhDsAAAg");
    this.shape_71.setTransform(224.7, 142.4);

    this.tb3 = new lib.tenggelamm();
    this.tb3.parent = this;
    this.tb3.setTransform(286.2, 163.8);
    new cjs.ButtonHelper(this.tb3, 0, 1, 2, false, new lib.tenggelamm(), 3);

    this.tb2 = new lib.apung();
    this.tb2.parent = this;
    this.tb2.setTransform(286.2, 111.2);
    new cjs.ButtonHelper(this.tb2, 0, 1, 2, false, new lib.apung(), 3);

    this.tb1 = new lib.layang();
    this.tb1.parent = this;
    this.tb1.setTransform(350.4, 73.9, 1, 1, 0, 0, 0, 64.2, 18);
    new cjs.ButtonHelper(this.tb1, 0, 1, 2, false, new lib.layang(), 3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.tb1 },
            { t: this.tb2 },
            { t: this.tb3 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.layang },
            { t: this.tenggelam },
            { t: this.apung },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(232, 154.7, 435.3, 317.6);
  // library properties:
  lib.properties = {
    width: 450,
    height: 325,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.0,
    webfonts: {},
    manifest: [],
    preloads: [],
  };
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {}),
  (AdobeAn = AdobeAn || {})
);
var lib, images, createjs, ss, AdobeAn;
