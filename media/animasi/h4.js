(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"h4_atlas_", frames: [[0,0,555,800],[0,802,640,640],[557,0,91,130]]}
];


// symbols:



(lib.peta = function() {
	this.spriteSheet = ss["h4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.signdvdmusicvideoiconmountainsymbolbutton = function() {
	this.spriteSheet = ss["h4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.unta = function() {
	this.spriteSheet = ss["h4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
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


(lib.unta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.unta_1, new cjs.Rectangle(0,0,54.2,77.4), null);


(lib.tombole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.signdvdmusicvideoiconmountainsymbolbutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.065,0.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.7,41.7);


(lib.tombolee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tombole("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.9,20.9,1,1,0,0,0,20.9,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.91,scaleY:0.91,x:19.1,y:19.1},0).wait(2).to({scaleX:1,scaleY:1,x:20.9,y:20.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.7,41.7);


// stage content:
(lib.h4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		this.addEventListener("click", f1_MouseClickHandler.bind(this));
		function f1_MouseClickHandler()
		{
			this.play()
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(165));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAeAbIAAgiQAAgGgDgDQgCgDgGAAQgIAAgDAEQgEAEAAAJIAAAdIgHAAIAAgiQAAgGgDgDQgDgDgFAAQgIAAgDAEQgEAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQACgEAFgCQAEgCAFAAQANAAACAJIABAAQACgEAFgDQAEgCAGAAQAJAAAFAEQAEAFAAAKIAAAig");
	this.shape.setTransform(277.9,542.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_1.setTransform(270.2,542.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgMAVQgHgIABgNQgBgMAHgHQAHgIAKAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_2.setTransform(264.9,542.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_3.setTransform(261.1,544.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgQAYQgEgEgBgIQABgPAZgBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgEAFgFACQgEACgEAAQgJAAgEgEgAAFABQgIAAgFADQgEACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_4.setTransform(256.9,542.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgHARIAAgfIgIAAIAAgDIAIgEIADgLIAEAAIAAAMIAQAAIAAAGIgQAAIAAAfQAAAEACADQADADAEAAIAEAAIADgBIAAAGIgEABIgFAAQgOAAAAgQg");
	this.shape_5.setTransform(252.4,541.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgDAlIAAg1IAHAAIAAA1gAgCgaQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_6.setTransform(249.4,541.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAMAmIgTgZIgFAFIAAAUIgIAAIAAhLIAIAAIAAAoIgBAIIABAAIAGgIIAQgRIAKAAIgVAVIAXAfg");
	this.shape_7.setTransform(246,541);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgQAXQgGgFAAgKIAAgiIAJAAIAAAhQAAAHACADQADADAHAAQAHAAAFgEQADgFAAgKIAAgbIAIAAIAAA0IgHAAIgBgHIAAAAQgDAEgEACQgFACgEAAQgKAAgEgEg");
	this.shape_8.setTransform(239.9,542.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AALAmIgSgZIgFAFIAAAUIgIAAIAAhLIAIAAIAAAoIgBAIIABAAIAGgIIAQgRIAKAAIgVAVIAXAfg");
	this.shape_9.setTransform(234.6,541);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_10.setTransform(228.6,542.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_11.setTransform(222.5,542.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgHAkQgEgCgDgDIgBAAIgBAGIgHAAIAAhKIAJAAIAAASIAAALQAFgIALAAQAKAAAGAHQAGAIgBALQABAOgGAHQgGAIgKgBQgEAAgFgCgAgLgEQgDAEAAAKQAAAMADAFQAEAFAIAAQAHgBAEgFQADgFAAgLQAAgKgDgEQgEgFgHAAQgIAAgEAFg");
	this.shape_12.setTransform(216.6,541.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_13.setTransform(212.1,544.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AAOAbIgKgfIgEgNIAAAAIgDANIgKAfIgJAAIgPg1IAJAAIAIAeIADAOIAAAAIACgHIACgHIAKgeIAIAAIAJAeIAEAOIAAAAIABgFIALgnIAIAAIgPA1g");
	this.shape_14.setTransform(206.8,542.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AAOAbIgKgfIgEgNIAAAAIgDANIgKAfIgJAAIgPg1IAJAAIAIAeIADAOIAAAAIACgHIACgHIAKgeIAIAAIAJAeIAEAOIAAAAIABgFIALgnIAIAAIgPA1g");
	this.shape_15.setTransform(199,542.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AAOAbIgKgfIgEgNIAAAAIgDANIgKAfIgJAAIgPg1IAJAAIAIAeIADAOIAAAAIACgHIACgHIAKgeIAIAAIAJAeIAEAOIAAAAIABgFIALgnIAIAAIgPA1g");
	this.shape_16.setTransform(191.2,542.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AgDAbQgCgCAAgDQAAgEACgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQACABAAAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgDgPQgCgCAAgEQAAgGAFAAQAGAAAAAGQAAAEgCABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_17.setTransform(186.1,542.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgOAbIAAg0IAGAAIABAKIABAAQADgGADgCQAEgDAFAAIAGAAIgBAIIgGgBQgGAAgEAFQgEAGAAAIIAAAbg");
	this.shape_18.setTransform(183.1,542.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgQAYQgFgEABgIQAAgPAYgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgFAAgJAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIgBAAQgDAFgEACQgFACgFAAQgHAAgFgEgAAGABQgKAAgEADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_19.setTransform(177.7,542.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgHAkQgEgCgDgDIgBAAIgCAGIgFAAIAAhKIAIAAIAAASIAAALQAGgIAJAAQALAAAGAHQAFAIABALQgBAOgFAHQgGAIgLgBQgEAAgEgCgAgLgEQgDAEAAAKQAAAMADAFQAEAFAHAAQAIgBAEgFQAEgFgBgLQABgKgEgEQgEgFgIAAQgHAAgEAFg");
	this.shape_20.setTransform(172.2,541.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AAeAbIAAgiQAAgGgDgDQgCgDgGAAQgIAAgDAEQgEAEAAAJIAAAdIgHAAIAAgiQAAgGgDgDQgDgDgFAAQgIAAgDAEQgEAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQACgEAFgCQAEgCAFAAQANAAACAJIABAAQACgEAFgDQAEgCAGAAQAJAAAFAEQAEAFAAAKIAAAig");
	this.shape_21.setTransform(164.3,542.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgQAYQgEgEgBgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEAAgIIAAgFg");
	this.shape_22.setTransform(156.7,542.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AgTAjQgFgEAAgHQAAgFADgDQADgEAGgBIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgDABgBQACgDADgCQgEgBgDgFQgCgEAAgFQAAgJAFgEQAFgFAKAAIAHABIASAAIAAAFIgKABIADAFIABAGQAAAIgGAEQgFAFgIAAIgFAAQgFACAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAGABIAIAAQAJAAAFADQAEAEAAAHQAAAJgHAFQgHAEgMAAQgLAAgGgEgAgNARQgEACAAAFQAAAFAEACQAEACAHAAQAJAAAFgDQAFgDAAgFQAAgFgDgBQgDgCgHAAIgJAAQgFAAgDADgAgJgdQgDADAAAGQAAAFADADQADADAGAAQALAAAAgLQAAgMgLAAQgGAAgDADg");
	this.shape_23.setTransform(151.3,543.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AgPAbIAAg0IAIAAIAAAKIABAAQACgGAEgCQAEgDAFAAIAHAAIgCAIIgFgBQgHAAgDAFQgGAGABAIIAAAbg");
	this.shape_24.setTransform(144.3,542.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAgIgQQgEAEgBAIIAbAAQAAgIgDgEQgEgEgGAAQgGAAgDAEg");
	this.shape_25.setTransform(139.1,542.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AgHAkQgFgCgDgDIAAAAIgCAGIgFAAIAAhKIAHAAIAAASIAAALQAHgIAJAAQALAAAGAHQAFAIABALQgBAOgFAHQgGAIgLgBQgEAAgEgCgAgKgEQgEAEgBAKQABAMAEAFQADAFAHAAQAIgBADgFQAFgFAAgLQAAgKgFgEQgDgFgIAAQgHAAgDAFg");
	this.shape_26.setTransform(133.4,541.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AAeAbIAAgiQAAgGgDgDQgCgDgGAAQgIAAgDAEQgEAEAAAJIAAAdIgHAAIAAgiQAAgGgDgDQgDgDgFAAQgIAAgDAEQgEAFAAAKIAAAbIgIAAIAAg0IAGAAIACAHIAAAAQACgEAFgCQAEgCAFAAQANAAACAJIABAAQACgEAFgDQAEgCAGAAQAJAAAFAEQAEAFAAAKIAAAig");
	this.shape_27.setTransform(125.5,542.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AgQAXQgFgFgBgKIAAgiIAIAAIAAAhQAAAHAEADQADADAGAAQAIAAADgEQAEgFAAgKIAAgbIAIAAIAAA0IgGAAIgCgHIAAAAQgDAEgEACQgFACgEAAQgKAAgEgEg");
	this.shape_28.setTransform(117.8,542.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgVAhIAAgIIAJADIAKABQAIAAAEgDQAEgDAAgFQAAgEgBgDIgFgEIgKgEQgKgDgEgFQgEgFgBgIQABgIAGgFQAGgFAJAAQALAAAJAEIgDAHQgIgDgJAAQgFAAgFADQgDACAAAFQAAAEABADQACACADACIAJAEQALADAEAFQAFAEAAAIQgBAJgGAFQgHAGgLAAQgNAAgGgEg");
	this.shape_29.setTransform(112,541.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(165));

	// Layer 7
	this.instance = new lib.tombolee();
	this.instance.parent = this;
	this.instance.setTransform(26.9,512.6,0.6,0.6,0,0,0,20.9,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.tombolee(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165));

	// Layer 5
	this.instance_1 = new lib.unta_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(272.3,478.4,1,1,0,0,0,27.1,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[272.3,478.4,267.1,486.2,255.9,488.3,252.5,488.9,242.8,488.9,228.1,488.9,215.6,477.4,202.9,465.7,202.9,451.5,202.9,443,209.2,434.8,213.4,429.2,222.9,421.3,233.8,412.3,236.7,409.2,242.9,402.5,242.9,396.4,242.9,389.8,235.7,384,231.7,380.7,219.8,374.5,208.4,368.4,203.9,364.4,196.6,358.1,196.6,350.6,196.6,344.7,200.1,340.1,202.1,337.4,207.7,332.8,213.1,328.2,215.2,325.3,218.7,320.5,218.7,314.3,218.7,306.7,210.8,300.9,207.7,298.6,193.4,291.2,181.5,285,176,279.3,168.1,270.9,168.1,259.1,168.1,249.8,171.8,239,174.1,231.9,179.8,219.7,185.8,206.5,187.7,201.2,191.4,191.1,191.4,183.4,191.4,169,182.5,161.5,177.5,157.4,163,152.2,149,147.2,143.4,141.8,134.6,133.2,134.6,116.8,134.6,107.2,136.9,102.7,139,98.5,144.4,96.6,147.4,95.5,157.8,93.8,169.2,91.9,177.7,89.4,209.9,80.2,222.9,70.5]}},164).wait(1));

	// Layer 2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("EgcvgpAMA5fAAAMAAABSBMg5fAAAg");
	this.shape_30.setTransform(187.6,269.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(165));

	// Layer 1
	this.instance_2 = new lib.peta();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12,25,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190.1,281.1,370.1,543.7);
// library properties:
lib.properties = {
	width: 375,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/h4_atlas_.png?1482419762825", id:"h4_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;