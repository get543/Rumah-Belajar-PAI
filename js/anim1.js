(function (lib, img, cjs, ss) {
  var p; // shortcut to reference prototypes

  // library properties:
  lib.properties = {
    width: 545,
    height: 394,
    fps: 24,
    color: "#FFFFFF",
    manifest: [],
  };

  // symbols:

  (lib.tombol = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(0.1, 1, 1).p("AoqipIRVAAIAAFTIxVAAg");

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#000000", "#8BE09A", "#000B00"], [0, 0.514, 1], 0, -55.5, 0, 55.5)
      .s()
      .p("AoqCqIAAlTIRVAAIAAFTg");

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(["#006427", "#D2E09A", "#004623"], [0, 0.514, 1], 0, -55.5, 0, 55.5)
      .s()
      .p("AoqCqIAAlTIRVAAIAAFTg");

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to({ state: [{ t: this.shape_2 }, { t: this.shape }] }, 1)
        .to({ state: [{ t: this.shape_2 }, { t: this.shape }] }, 1)
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-56.5, -18, 113, 36);

  (lib.ola = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(0.1, 1, 1)
      .p("AKKgTQAmCPmmByQmkByiSAAQiSAAhohoQhnhnAAiRQAAiRBnhnQBohnCSAAQCSAAF+BeQGBBeAlCQg");
    this.shape.setTransform(30.2, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AksFgQiSAAhohnQhnhnAAiSQAAiRBnhnQBohnCSAAQCSAAF+BeQGBBeAlCRQAmCOmmByQmkByiSAAIAAAAg");
    this.shape_1.setTransform(30.2, 0);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-36.2, -36.2, 132.8, 72.5);

  (lib.bola = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_0 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

    // Layer 1
    this.instance = new lib.ola("synched", 0);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({ x: 452, y: 300 }, 19).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-36.2, -36.2, 132.8, 72.5);

  // stage content:

  (lib.anim1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_0 = function () {
      var page_body = document.getElementsByTagName("body")[0];
      page_body.style.backgroundColor = "#FFFFFF";
      page_body.style.overflow = "hidden";
      page_body.style.position = "fixed";

      var stageWidth, stageHeight: Number;
      var page_canvas = document.getElementsByTagName("canvas")[0];
      stageWidth = page_canvas.width;
      stageHeight = page_canvas.height;

      var viewport = document.querySelector("meta[name=viewport]");
      var viewportContent =
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0";

      if (viewport === null) {
        var head = document.getElementsByTagName("head")[0];
        viewport = document.createElement("meta");
        viewport.setAttribute("name", "viewport");
        head.appendChild(viewport);
      }

      viewport.setAttribute("content", viewportContent);

      function onResize() {
        var widthToHeight = stageWidth / stageHeight;
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;
        var newWidthToHeight = newWidth / newHeight;
        //
        if (newWidthToHeight > widthToHeight) {
          newWidth = newHeight * widthToHeight;
          page_canvas.style.height = newHeight + "px";
          page_canvas.style.width = newWidth + "px";
        } else {
          newHeight = newWidth / widthToHeight;
          page_canvas.style.height = newHeight + "px";
          page_canvas.style.width = newWidth + "px";
        }
        scale = newWidthToHeight / widthToHeight;
        stage.width = newWidth;
        stage.height = newHeight;
        page_canvas.style.marginTop = (window.innerHeight - newHeight) / 2 + "px";
        page_canvas.style.marginLeft = (window.innerWidth - newWidth) / 2 + "px";
      }

      window.onresize = function () {
        onResize();
      };

      onResize();

      this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));

      function fl_MouseClickHandler() {
        this.bola.play();
      }
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

    // Actions
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgIArQgGgGAAgOIAAgnIgJAAIAAgKIAJAAIAAgXIANAAIAAAXIAZAAIAAAKIgZAAIAAAhIAAAJIABAHIADAEIAIABIAHgBIAFgBIABAAIAAALIgIACIgIABQgKAAgGgHg"
      );
    this.shape.setTransform(119.6, 178.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AAUAmIgUgeIgVAeIgPAAIAegmIgdglIAPAAIAUAdIAVgdIAQAAIgfAlIAfAmg");
    this.shape_1.setTransform(112.7, 179.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgWAdQgLgKAAgTQAAgRAKgLQAKgLAPAAQAQAAAIAJQAIAJAAARIAAAFIg2AAQAAAHACAFQACAFAEAEQAEADAEACQAEABAFAAQAIAAAIgDQAIgDADgDIABAAIAAAOIgNAFQgHACgIAAQgRAAgKgLgAgNgWQgGAGgBAJIAqAAQAAgKgFgGQgFgFgLAAQgIAAgGAGg"
      );
    this.shape_2.setTransform(104.3, 179.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgIArQgGgGAAgOIAAgnIgJAAIAAgKIAJAAIAAgXIANAAIAAAXIAZAAIAAAKIgZAAIAAAhIAAAJIABAHIADAEIAIABIAHgBIAFgBIABAAIAAALIgIACIgIABQgKAAgGgHg"
      );
    this.shape_3.setTransform(97.5, 178.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgYAhQgHgHAAgLQAAgIAEgFQADgEAIgDQAGgDAKgCIATgBIAAgCQAAgFgBgCQgCgDgDgBQgCgCgEgBIgHgBIgLACIgNAEIAAAAIAAgNIAKgDIAOgBIANABQAGACAEADQAEAEACAFQADAFAAAGIAAAzIgNAAIAAgIIgFACIgFAEIgHACIgIABQgKAAgIgGgAAFAAIgLABQgFABgDADQgEAEABAFQAAAHADADQAEAEAIAAQAFgBAGgCQAGgCAEgEIAAgUIgOABg"
      );
    this.shape_4.setTransform(85.3, 179.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
    this.shape_5.setTransform(79.5, 177.7);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgYAhQgHgHAAgLQAAgIAEgFQAEgEAGgDQAIgDAJgCIATgBIAAgCQAAgFgCgCQgBgDgCgBQgDgCgFgBIgGgBIgKACIgOAEIAAAAIAAgNIALgDIANgBIANABQAGACAEADQAEAEADAFQACAFAAAGIAAAzIgNAAIAAgIIgEACIgGAEIgIACIgHABQgKAAgIgGgAAGAAIgMABQgFABgDADQgDAEgBAFQAAAHAFADQADAEAJAAQAEgBAGgCQAGgCAEgEIAAgUIgNABg"
      );
    this.shape_6.setTransform(73.1, 179.3);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgYArQgIgKAAgTQAAgKADgFQADgIAEgFQAFgFAGgDQAGgDAFAAQAGAAAEACIAKADIAAghIANAAIAABpIgNAAIAAgIQgFAFgHACQgGADgEAAQgOAAgIgLgAgNgFQgGAFAAAOQAAANAFAIQAEAHAKAAQAEAAAGgDQAGgCAEgEIAAgqIgJgDIgJgBQgJAAgGAIg"
      );
    this.shape_7.setTransform(64.6, 177.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgYAhQgHgHAAgLQAAgIAEgFQAEgEAGgDQAIgDAJgCIATgBIAAgCQAAgFgCgCQgBgDgCgBQgDgCgEgBIgHgBIgKACIgOAEIAAAAIAAgNIALgDIANgBIANABQAGACAEADQAEAEADAFQACAFAAAGIAAAzIgNAAIAAgIIgEACIgGAEIgIACIgHABQgKAAgIgGgAAGAAIgMABQgFABgDADQgDAEgBAFQAAAHAFADQADAEAJAAQAEgBAGgCQAGgCAEgEIAAgUIgNABg"
      );
    this.shape_8.setTransform(56, 179.3);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#000000").s().p("AgFAzIAAhLIALAAIAABLgAgGgkIAAgOIANAAIAAAOg");
    this.shape_9.setTransform(45.3, 177.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AATAnIAAgqIgBgKQgBgEgBgDQgCgDgDgBIgJgBQgDAAgFACIgLAHIAAA3IgOAAIAAhLIAOAAIAAAJQAFgFAHgDQAFgDAGAAQANAAAGAIQAHAHgBAOIAAAwg"
      );
    this.shape_10.setTransform(39, 179.1);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p("AgSAzIAAgLIAMAAIAAhPIgMAAIAAgKIAlAAIAAAKIgNAAIAABPIANAAIAAALg");
    this.shape_11.setTransform(31.6, 178);

    this.text = new cjs.Text("Ini adala text", "14px 'Verdana'");
    this.text.textAlign = "center";
    this.text.lineHeight = 19;
    this.text.setTransform(73.5, 126.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.text },
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
          ],
        })
        .wait(1)
    );

    // Layer 1
    this.button_1 = new lib.tombol();
    this.button_1.setTransform(448.5, 338.1);
    new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.tombol(), 3);

    this.bola = new lib.bola();
    this.bola.setTransform(43.3, 44.3);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#000000").ss(0.1, 1, 1).p("EgqjgewMBVHAAAMAAAA9hMhVHAAAg");
    this.shape_12.setTransform(272.5, 197);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_12 }, { t: this.bola }, { t: this.button_1 }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(271.6, 196.1, 547, 396);
})((lib = lib || {}), (images = images || {}), (createjs = createjs || {}), (ss = ss || {}));
var lib, images, createjs, ss;
