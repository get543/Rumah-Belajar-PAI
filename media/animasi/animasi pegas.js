(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.signdvdmusicvideoiconmountainsymbolbutton = function() {
	this.initialize(img.signdvdmusicvideoiconmountainsymbolbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAKIAAgTIBBAAIAAATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-0.9,6.7,1.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAKIAAgTIBBAAIAAATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-0.9,6.7,1.9);


(lib.tombole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.signdvdmusicvideoiconmountainsymbolbutton();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.065,0.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.7,41.7);


(lib.tempatair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ao6ptIA3AAIAASkINeAAIAAykIAvAAIAAC7IChBfIAQBBIixhkIAAPkIvEAAg");
	this.shape.setTransform(57.1,62.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ao6JtIAAzaIA3AAIAASkINeAAIAAykIAuAAIAAC7ICiBfIAQBBIiyhkIAAPjg");
	this.shape_1.setTransform(57.1,62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,116.1,126.3);


(lib.pegas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Ag+r6QgUgLgSgRQgsgsAAg/QAAg+AsgsQAsgsA+AAQA/AAAsAsQAsAsAAA+QAAA/gsAsQgUAUgYAMAAAKKIAAAxQgIA4AyALQAiAKAcAaQAtArAAA7QAAA8gtAqQgtAqg+AAQg/AAgtgqQgtgqAAg8QAAgGABgG");
	this.shape.setTransform(21.5,104.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AA/pQIgKg7IgMhJQgDgogmAFIgZAAQgegCgMAnIgKBEIgJA+ICVAAIBjAAQBHAGgDA+IAAR9QgDAtgxAHIhCAAIAAA0QgBAYgcAEIhiAAQhJAJgsgOQgHgHgCgPIAAg1IgmAAQguAEgEg2IAAyHQAIg+AuACIBZAAAg+mnIAAgGQADgqAegHIAhAAQAnANgEAmIAAA1IAAAwIAAAtIAAAuIA3AAAAnl2IA3AAAAumnIBfAAAAnkZIA3AAAAnlGIA3AAAh2l1IA4AAIAAgyAg+lFIAAgwAh2lFIA4AAAh2kYIA4AAIAAgtAh2jqIA4AAIAAguAiemnIBgAAAg+iPIAAgtIAAguAh2iPIA4AAAh2hfIA4AAIAAgwAg+gEIAAguIAAgtAg+ApIAAgtAh2gEIA4AAAh2gyIA4AAAifi8IBhAAAifApIBhAAAAniOIAAAwIA3AAAAngxIAAAuIA3AAAAuAkIBfAAAAngxIA3AAAAnheIAAAtAAui/IBfAAAAniOIA3AAAAnjrIAABdAAnBVIA3AAAAnCFIA3AAAAnBVIAAAwIAAAtIAAAuIA3AAAAnCyIA3AAAAuEIIBfAAAh2BRIA4AAIAAgoAh2CBIA4AAIAAgwAh2DcIA4AAAh2CuIA4AAAg+EKIAAguIAAguIAAgtAifEKIBhAAAilHyIBgAAAh8HEIA3AAAh8GWIA3AAAh8FpIA3AAAh8E5IA3AAAAnFpIAAAtIAAAuIAAAuIAAATQgBAfgegBIgoAAQgggFACggIAAj0AAnE5IAAAwIA3AAAAnE5IA3AAAAnHyIBfAAAAnHEIA3AAAAnGWIA3AAAAnDgIAABZABwKlIj9AAAAngDIAABY");
	this.shape_1.setTransform(23,94);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAUIBIgoAAQgggFACggIAAj0IAAguIAAguIAAgtIAAgwIAAgoIAAgtIAAguIAAgtIAAgwIAAgtIAAguIAAguIAAgtIAAgwIAAgyIAAgGQADgqAegHIAhAAQAnANgEAmIAAA1IAAAwIAAAtIAAAuIAABdIAAAwIAAAtIAAAuIAABYIAAAwIAAAtIAAAuIAABZIAAAwIAAAtIAAAuIAAAuIAAATQgBAegbAAIgDAAg");
	this.shape_2.setTransform(21.8,97.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AjlJJIAAyHQAIg/AuADIBZAAICVAAIBjAAQBHAFgDA+IAAR+QgDAsgxAIIhCAAIj9AAIgmAAIgGAAQgoAAgEgygAg+HTQgCAgAgAFIAoAAQAeACABggIAAgTIAAguIA3AAIg3AAIAAguIA3AAIg3AAIAAgtIA3AAIg3AAIAAgwIA3AAIg3AAIAAhYIA3AAIg3AAIAAguIAAgtIAAgwIA3AAIg3AAIAAhZIAAguIA3AAIg3AAIAAgtIAAgwIAAhcIA3AAIg3AAIAAguIA3AAIg3AAIAAgtIAAgwIAAg2QAEglgngNIghAAQgeAGgDAqIAAAHIhgAAIBgAAIAAAyIg4AAIA4AAIAAAwIg4AAIA4AAIAAAtIg4AAIA4AAIAAAuIg4AAIA4AAIAAAuIhhAAIBhAAIAAAsIg4AAIA4AAIAAAwIg4AAIA4AAIAAAtIg4AAIA4AAIAAAuIg4AAIA4AAIAAAuIhhAAIBhAAIAAAnIg4AAIA4AAIAAAwIg4AAIA4AAIAAAtIg4AAIA4AAIAAAuIg4AAIA4AAIAAAuIhhAAIBhAAgACGHHIhfAAgAhFHHIhgAAgAhFGZIg3AAgAhFFrIg3AAgAhFE+Ig3AAgAhFEOIg3AAgACNDdIhfAAgABeCIIg3AAgABeBbIg3AAgACNgFIhfAAgABeguIg3AAgABeiJIg3AAgABei5Ig3AAgACNjqIhfAAgABelwIg3AAgABemgIg3AAgACNnRIhfAAgAg+DfgAg+kUgAg+lCgAg+nRg");
	this.shape_3.setTransform(23,98.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Ah1LwQgIgHgBgPIAAg1ID9AAIAAA0QgCAYgbAEIhiAAQgcAEgYAAQgmAAgbgJgAhHpQIAJg+IAJhEQAMgnAfACIAXAAQAngFAEAoIAMBJIAKA7g");
	this.shape_4.setTransform(21.6,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,48,212.6);


(lib.beban = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgCBIIBrAAIBPEmIlvAAIBFkmgAgCltIAAG1");
	this.shape.setTransform(18.4,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ai3CTIBFklIBxAAIBqAAIBPElg");
	this.shape_1.setTransform(18.4,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.8,75.2);


(lib.tombolee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tombole("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(20.9,20.9,1,1,0,0,0,20.9,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.91,scaleY:0.91,x:19.1,y:19.1},0).wait(2).to({scaleX:1,scaleY:1,x:20.9,y:20.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.7,41.7);


(lib.animasipegas_1 = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(211));

	// tombol
	this.instance = new lib.tombolee();
	this.instance.parent = this;
	this.instance.setTransform(328.6,279.6,1,1,0,0,0,20.9,20.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.tombolee(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(211));

	// gaya apung
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape.setTransform(288.7,234.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgDgDQgEgEgHAAQgHAAgDADQgEADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEADADIgLAAIgCgHQgGAEgGACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgPAEg");
	this.shape_1.setTransform(282,235);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMAfIgKglIgCgKIgMAvIgLAAIgTg9IALAAIAKAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIALAAIgUA9g");
	this.shape_2.setTransform(274.4,235);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgGAEgGACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgPAEg");
	this.shape_3.setTransform(266.7,235);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAFQgHAGgKABQgMAAgHgJg");
	this.shape_4.setTransform(260.6,235);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfAgIAAgmIgBgKIgDgEQgDgCgDAAQgHAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgEADQgDACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_5.setTransform(249.1,234.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQALgCAHgCIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgBACgBAEQABADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg");
	this.shape_6.setTransform(240.7,235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_7.setTransform(236,233.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAbQgGgFAAgHQABgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEADgGAAQgLgBgFgFgAgCAEQgGAAgDACQgDABgBACQgBACAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_8.setTransform(231.4,235);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_9.setTransform(224.6,233.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_10.setTransform(216.6,234.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_11.setTransform(212.8,233.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGACQgEADgGAAQgLgBgFgFgAgCAEQgGAAgDACQgCABgCACQgCACABAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_12.setTransform(208.1,235);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAFQgHAGgKABQgMAAgHgJg");
	this.shape_13.setTransform(202,235);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAKIgIAAQgFAAgDgBg");
	this.shape_14.setTransform(193.8,233.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgDgDQgEgEgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGACQgEADgGAAQgLgBgFgFgAgCAEQgGAAgDACQgCABgCACQgCACABAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_15.setTransform(188.8,235);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaAfIAAgIIAmgtIgMABIgYAAIAAgJIAyAAIAAAGIghAnIgHAIIAOgBIAcAAIAAAJg");
	this.shape_16.setTransform(182.5,235);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAKIgIAAQgFAAgDgBg");
	this.shape_17.setTransform(174.5,233.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGACQgEADgGAAQgLgBgFgFgAgCAEQgGAAgDACQgCABgCACQgCACABAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_18.setTransform(169.4,235);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_19.setTransform(164.6,234.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_20.setTransform(158.8,235);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAiIAAAIIgKAAIAAhVIALAAIAAAfQAGgIAKAAQAFAAAFACQAFACAEAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgGgKgAgMgGQgEAGAAALQAAALACAFQAFAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgGAAgGAGg");
	this.shape_21.setTransform(152.3,233.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_22.setTransform(345,219.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWAcQgGgGABgIQAAgEABgEQADgEADgCIAHgDIAKgBQALgCAHgBIAAgDQgBgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgHAFgFADQgEABgHAAQgKAAgFgEgAgBAEQgHAAgDACQgCABgCADQgBACAAACQAAAEADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_23.setTransform(338.4,219.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgDABgEIABgOQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_24.setTransform(331.5,220.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_25.setTransform(325.1,219.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_26.setTransform(318.4,219.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgFAAgFAGg");
	this.shape_27.setTransform(311.6,218.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgEgDQgDgDgIAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgLAAIgBgIQgHAFgEADQgFABgHAAQgKAAgFgEgAgBAEQgHAAgDACQgCABgCADQgBACgBACQABAEADAEQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_28.setTransform(294.8,219.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgDgDQgCgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_29.setTransform(286.5,219.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgEgDQgDgDgIAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgLAAIgBgIQgHAFgEADQgFABgHAAQgKAAgFgEgAgBAEQgHAAgDACQgCABgCADQgBACgBACQABAEADAEQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_30.setTransform(278.2,219.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAcQgHgGgCgJIALgCQABAGADAEQAFACAGAAQAHABAEgDQADgDAAgEQAAgEgDgCIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQACAEABAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFACIAIAEIAPAEQAFABACAEQADAEAAAFQAAAFgDAEQgEAFgFADQgGADgHgBQgMAAgFgEg");
	this.shape_31.setTransform(271.8,219.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_32.setTransform(255.2,219.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAcQgFgGgBgIQABgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgEgDQgDgDgIAAQgGAAgEACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIABAKIAAANIAAASQABAEABAEIgLAAIgBgIQgHAFgEADQgFABgHAAQgJAAgGgEgAgBAEQgHAAgDACQgDABgBADQgBACgBACQABAEADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_33.setTransform(248.6,219.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgKAAIAAgIQgGAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFgBgMQABgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_34.setTransform(241.7,218.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgRAcQgGgGgCgJIALgCQABAGADAEQAEACAGAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_35.setTransform(225.3,219.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgDgDQgFgDgHAAQgGAAgEACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEABAEIgLAAIgBgIQgGAFgFADQgFABgHAAQgJAAgGgEgAgCAEQgGAAgDACQgDABgBADQgCACAAACQAAAEAEAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgRAEg");
	this.shape_36.setTransform(219,219.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgDABgEIABgOQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_37.setTransform(212.1,220.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_38.setTransform(205.7,219.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAFgDAFAAQAHAAAGAEQAHAEADAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgEgCQgFgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgFgGgGAAQgGAAgGAHg");
	this.shape_39.setTransform(199.2,220.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgDgDQgFgDgHAAQgGAAgFACQgDADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEABAEIgLAAIgCgIQgFAFgFADQgFABgHAAQgJAAgGgEgAgBAEQgHAAgDACQgDABgBADQgCACAAACQAAAEAEAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_40.setTransform(182.1,219.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_41.setTransform(175.9,219.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgWAcQgGgGABgIQAAgEACgEQACgEADgCIAHgDIAKgBQAMgCAFgBIAAgDQAAgHgCgDQgFgDgHAAQgGAAgFACQgDADgBAHIgLgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQABAEACAEIgLAAIgDgIQgFAFgGADQgEABgGAAQgLAAgFgEgAgCAEQgGAAgDACQgCABgCADQgCACABACQgBAEAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_42.setTransform(169.4,219.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_43.setTransform(164.6,219.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_44.setTransform(158.8,219.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_45.setTransform(152.1,219.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_46.setTransform(345,203.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_47.setTransform(338.4,204.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_48.setTransform(333.7,203.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_49.setTransform(329.1,204.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_50.setTransform(316.3,204.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgWAcQgGgFAAgIQAAgFADgDQABgEAEgDIAHgCIAKgCQALgBAGgDIAAgCQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEACADIgMAAIgCgHQgGAEgFACQgEACgGABQgKgBgGgEgAgCAEQgGABgDABQgDABgBACQgBACAAAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_51.setTransform(309.6,204.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AANArIgUggIgHAIIAAAYIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_52.setTransform(303.7,203.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AANArIgUggIgHAIIAAAYIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_53.setTransform(297.7,203.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_54.setTransform(290.9,204.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgLA2IACgJIAFABQADAAABgCQACgCAAgJIAAhAIAKAAIAABBQAAALgDAFQgEAGgIAAQgEAAgEgCgAACgqIAAgNIAKAAIAAANg");
	this.shape_55.setTransform(285.7,204.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_56.setTransform(281.7,204.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_57.setTransform(275,204.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_58.setTransform(270.1,203.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_59.setTransform(267,203.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgEAGg");
	this.shape_60.setTransform(262.2,203.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_61.setTransform(249.4,205.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_62.setTransform(242.9,204.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgWAcQgGgFAAgIQAAgFADgDQABgEAEgDIAHgCIAKgCQALgBAGgDIAAgCQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEACADIgMAAIgCgHQgGAEgFACQgEACgGABQgKgBgGgEgAgCAEQgGABgDABQgDABgBACQgBACAAAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_63.setTransform(236.3,204.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgWAqIgBgKIAGABIAGgBIADgDIADgIIABgDIgXg9IALAAIANAkIADANIAFgNIANgkIAKAAIgXA+IgFAOQgDAGgEACQgDADgGAAIgGgCg");
	this.shape_64.setTransform(230,205.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWAcQgGgFAAgIQABgFACgDQACgEADgDIAHgCIAKgCQAMgBAFgDIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEACgGABQgLgBgFgEgAgCAEQgGABgDABQgDABgBACQgBACAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_65.setTransform(217.5,204.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AANArIgUggIgHAIIAAAYIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_66.setTransform(211.5,203.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_67.setTransform(204.6,205.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_68.setTransform(198.2,204.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgWAcQgFgFgBgIQAAgFACgDQACgEAEgDIAIgCIAJgCQALgBAHgDIAAgCQAAgGgDgDQgFgEgHAAQgGAAgFADQgDADgCAGIgKgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgBgHQgGAEgFACQgFACgHABQgJgBgGgEgAgCAEQgGABgDABQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgRAEg");
	this.shape_69.setTransform(191.5,204.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_70.setTransform(178.7,203.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_71.setTransform(174.1,203.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgRAcQgGgFgCgLIAKgBQACAGAEADQAEADAFABQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEABAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIADADIAJACIAQAFQAEABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgEg");
	this.shape_72.setTransform(169.7,204.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_73.setTransform(165.4,203.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_74.setTransform(162.7,203.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_75.setTransform(158.1,204.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgEg");
	this.shape_76.setTransform(151.8,204.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_77.setTransform(345,188.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAbQgFgEgBgJQAAgEACgEQADgDADgDIAIgCIAJgCQAMgBAGgDIAAgCQgBgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAFgFADQgFACgGgBQgKABgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAACQAAAFAEADQADACAGAAQAFAAAFgCQAEgDADgFQABgEABgGIAAgEIgRAEg");
	this.shape_78.setTransform(338.3,188.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_79.setTransform(331.5,190.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_80.setTransform(325,188.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_81.setTransform(318.4,188.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFABgMQgBgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_82.setTransform(311.5,187.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgWAbQgGgEABgJQAAgEACgEQACgDADgDIAHgCIAKgCQAMgBAFgDIAAgCQAAgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAFgGADQgEACgGgBQgLABgFgGgAgBAEQgHAAgDACQgCABgCACQgCADABACQAAAFADADQADACAGAAQAFAAAFgCQAFgDACgFQABgEAAgGIAAgEIgPAEg");
	this.shape_83.setTransform(301.4,188.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAfAgIAAgmIAAgKIgEgEQgDgCgDAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgDADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_84.setTransform(293.1,188.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgWAbQgGgEABgJQAAgEACgEQACgDADgDIAHgCIAKgCQAMgBAFgDIAAgCQAAgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAFgGADQgEACgHgBQgKABgFgGgAgBAEQgHAAgDACQgCABgCACQgCADABACQAAAFADADQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgPAEg");
	this.shape_85.setTransform(284.7,188.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgRAbQgGgEgCgKIALgCQABAGADAEQAEACAGAAQAIAAAEgCQADgDAAgEQAAgEgDgCIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGABQAFADADADQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACADAAAGQAAAFgDAFQgDAEgGADQgGACgHAAQgLABgHgGg");
	this.shape_86.setTransform(278.4,188.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_87.setTransform(268.4,187.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgWAbQgFgEgBgJQAAgEACgEQACgDAEgDIAIgCIAJgCQALgBAHgDIAAgCQAAgHgDgDQgFgDgHAAQgGAAgFACQgDADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEABAEIgLAAIgCgIQgFAFgFADQgFACgHgBQgJABgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAACQAAAFAEADQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgRAEg");
	this.shape_88.setTransform(261.7,188.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_89.setTransform(257,187.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWAbQgGgEABgJQAAgEABgEQADgDADgDIAHgCIAKgCQALgBAHgDIAAgCQgBgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAFgGADQgEACgHgBQgKABgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBACQABAFADADQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_90.setTransform(252.4,188.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgFgGgGAAQgHAAgEAGg");
	this.shape_91.setTransform(245.6,187.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgWAbQgFgEAAgJQAAgEABgEQACgDAEgDIAIgCIAJgCQALgBAHgDIAAgCQAAgHgEgDQgDgDgIAAQgGAAgEACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEABAEIgLAAIgBgIQgHAFgEADQgFACgHgBQgJABgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBACQABAFADADQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_92.setTransform(239.1,188.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWAbQgFgEgBgJQAAgEACgEQACgDAEgDIAIgCIAJgCQALgBAHgDIAAgCQAAgHgEgDQgDgDgIAAQgGAAgEACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIABAKIAAANIAAASQABAEABAEIgLAAIgBgIQgHAFgEADQgFACgHgBQgJABgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBACQABAFADADQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_93.setTransform(228.8,188.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAoAAIAAAJIgoAAIAAAng");
	this.shape_94.setTransform(222,187.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_95.setTransform(210.9,190.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_96.setTransform(204.4,188.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_97.setTransform(197.7,189);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgFAHg");
	this.shape_98.setTransform(191.3,190);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgWAbQgGgEABgJQAAgEACgEQACgDADgDIAHgCIAKgCQALgBAHgDIAAgCQgBgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgHAFgFADQgEACgHgBQgKABgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBACQABAFADADQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_99.setTransform(184.5,188.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgWAbQgGgEABgJQAAgEABgEQADgDADgDIAHgCIAKgCQALgBAHgDIAAgCQgBgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAFgGADQgEACgHgBQgKABgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBACQABAFADADQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_100.setTransform(174.1,188.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgYg9IAMAAIANAkIAEANIAEgNIANgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_101.setTransform(167.9,190.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgWAbQgFgEgBgJQAAgEACgEQADgDADgDIAIgCIAJgCQAMgBAFgDIAAgCQAAgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAFgFADQgFACgGgBQgKABgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAACQAAAFAEADQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_102.setTransform(161.5,188.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgSAnQgKgGgGgJQgFgLAAgNQAAgLAFgLQAGgLAJgFQAKgFAMgBQAJAAAIADQAIADAEAGQAEAFACAJIgKADQgCgHgDgEQgDgDgFgDQgFgCgHAAQgHABgFACQgGACgDAEQgEAEgCAEQgDAJAAAIQAAALAEAIQAEAHAHAEQAIAEAHAAQAIAAAHgCQAHgEADgCIAAgRIgZAAIAAgJIAlAAIAAAfQgJAGgJAEQgJADgJAAQgMAAgKgFg");
	this.shape_103.setTransform(153.4,187.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#333333").ss(1,1,1).p("AxRl8MAijAAAIAAL5MgijAAAg");
	this.shape_104.setTransform(251.3,212.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(153,255,102,0.498)").s().p("AxRF9IAAr5MAijAAAIAAL5g");
	this.shape_105.setTransform(251.3,212.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},68).wait(143));

	// fa
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AAHAaQgCgCAAgEIgJAHIgHABQgFAAgEgDQgDgEAAgGQAAgEABgDQADgEAGgEQAGgCAMgFIAAgCQAAgIgCgDQgDgDgEAAQgDAAgCACQgDACAAACIAAAEIgBAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIgBgFQAAgFAFgEQAFgEAJAAQAGAAAFACQADACACAEIABAKIAAASIAAAJIABACIACABIACAAIAEgFIAAAEQgGAIgGAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAgFAAQgFADgCADQgCACAAAEQAAAEADADQACADAEAAQAEAAAGgGIAAgUIgKAEg");
	this.shape_106.setTransform(28.4,282.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgdAoIAAgCIADAAQAEAAADgDQABgCAAgHIAAgzIAAgIIgDgCQgDgCgCAAIgDAAIAAgCIA6AAIABASIgCAAIgDgIQgDgDgDgBIgJgBIgRAAIAAAfIAOAAQAFAAADgCQACgDABgGIABAAIAAAaIgBAAQgBgFgBgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgGgBIgOAAIAAAZIABAIIADACIAEACIADAAIAAACg");
	this.shape_107.setTransform(22.1,280.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FF0000").ss(1,1,1).p("AAABkIAAjHIAbAlAgag8IAagn");
	this.shape_108.setTransform(35.8,282.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FF0000").ss(1,1,1).p("AgaBAIAaAoIAbgmAAAhnIAADP");
	this.shape_109.setTransform(49.6,279.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},58).wait(153));

	// angka 50
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAeAoIg0g/IAAAwQAAAHACADQACACAFAAIADAAIAAACIgcAAIAAgCIADAAQAFAAACgDQABgCAAgHIAAg2IgFgFIgFgDIgFgBIAAgCIAVAAIAwA7IAAgsQAAgIgCgCQgCgDgFAAIgCAAIAAgCIAbAAIAAACIgDAAQgFAAgCAEQgBABAAAIIAABBg");
	this.shape_110.setTransform(86,41.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgTAcQgFgMgBgQQABgMAEgKQAEgKAGgFQAFgDAFAAQAJAAAHAJQAKAMgBATQAAANgDAKQgEAJgGAFQgGAEgGAAQgKAAgJgNgAgGghQgEAFgBAKIgCAUQAAAQAEALQADAIAGAAQADAAAEgCQADgDACgHQACgKAAgRQAAgOgCgJQgDgHgDgDQgDgBgDAAQgDAAgDADg");
	this.shape_111.setTransform(75.9,41.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgTAmQgDgCAAgEIABgDIAEAAIACAAIAEACQAFADAEABQAGAAAFgGQAFgFAAgHQAAgIgEgGQgFgFgHgEQgGgCgLAAIAPggIAbAAIgEAKIgXAAIgFALQAOACAJAKQAIAHAAALQAAAFgCAGQgDAFgEAEQgEAEgFACQgFAEgHgBQgIABgDgDg");
	this.shape_112.setTransform(69.7,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},58).wait(153));

	// angka 80
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAeAoIg0g/IAAAwQAAAHACADQACACAFAAIADAAIAAACIgcAAIAAgCIADAAQAFAAACgDQABgCAAgHIAAg2IgFgFIgFgDIgFgBIAAgCIAVAAIAwA7IAAgsQAAgIgCgCQgCgDgFAAIgCAAIAAgCIAbAAIAAACIgDAAQgFAAgCAEQgBABAAAIIAABBg");
	this.shape_113.setTransform(86,41.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgTAcQgFgMgBgQQABgMAEgKQAEgKAGgFQAFgDAFAAQAJAAAHAJQAKAMgBATQAAANgDAKQgEAJgGAFQgGAEgGAAQgKAAgJgNgAgGghQgEAFgBAKIgCAUQAAAQAEALQADAIAGAAQADAAAEgCQADgDACgHQACgKAAgRQAAgOgCgJQgDgHgDgDQgDgBgDAAQgDAAgDADg");
	this.shape_114.setTransform(75.9,41.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgRAiQgFgGAAgGQAAgGAEgFQADgFAJgGQgKgHgCgFQgDgEAAgFQAAgIAGgGQAGgFAJAAQAJAAAGAFQAGAFAAAHQAAAEgDAFQgDAEgKAHQAKAHADAEQAFAGAAAHQAAAIgHAGQgGAGgKAAQgLAAgGgHgAgLALQgCAFAAAFQAAAIAEAEQAEAFAGAAQAGAAAEgEQAEgDAAgFQAAgEgDgEQgEgGgLgKQgFAEgDAFgAgJghQgEADAAAFIACAGIAEAFIAJAIQAHgGACgDQACgEAAgFQAAgGgEgDQgDgEgGAAQgFAAgEAEg");
	this.shape_115.setTransform(69.9,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]}).to({state:[]},58).to({state:[]},32).wait(121));

	// kotak pegas
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.6,38.9);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.6,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},39).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:3.9},39).wait(172));

	// pegas
	this.instance_3 = new lib.pegas("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(48,22.6,0.567,0.567,0,0,0,23,104.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(211));

	// kotak air
	this.instance_4 = new lib.tempatair("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.7,241.4,1,1,0,0,0,85.7,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211));

	// air
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("AHWnFIAAOLIurAAIAAuL");
	this.shape_116.setTransform(49.5,255);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,204,255,0.498)").s().p("AnUHGIAAuLIOpAAIAAOLg");
	this.shape_117.setTransform(49.5,255);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,204,255,0.498)").s().p("Al+HjIhWgZIAAulQBrgKBwAEQBbABBxAKQBtAJBjAAQB0AABxgOIBNAWIAAOmIgJACg");
	this.shape_118.setTransform(49.5,252.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,204,255,0.498)").s().p("AmTIBIhBgyIAAvBQBsgTB0AHQBVAEB8ATQB2ARBgABQB2ABBzgeIA5AtIAAPBIgHAFg");
	this.shape_119.setTransform(49.5,249.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,204,255,0.498)").s().p("AmpIeIgrhLIAAvbQBtgdB4ALQBOAFCKAeQB9AZBdABQB5ABBzgsIAmBDIAAPbIgEAIg");
	this.shape_120.setTransform(49.5,246.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,204,255,0.498)").s().p("Am/I8IgVhlIAAv2QBugmB9AOQBGAHCXAoQCEAiBaAAQB9ACBzg7IATBaIAAP2IgCALg");
	this.shape_121.setTransform(49.5,243.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AHWpHIAASPIurAAIAAyP");
	this.shape_122.setTransform(49.5,242);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJZIAAyOQBugwCCASQBAAICjAyQCNAqBVABQCBACBzhJIAASOg");
	this.shape_123.setTransform(49.5,240.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJJIAAyOQBtgJCAAOQBGAHCfAXQCYAPBNgCQCCgGBwgqIAASOg");
	this.shape_124.setTransform(49.5,241.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJIIAAyPQBqAeCBALQBMAFCbgDIDngTIDwgYIAASPg");
	this.shape_125.setTransform(49.5,242);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJNIAAyPQBoBFCAAHQBSAECWgdQCugqA9gIQCEgWBqAVIAASPg");
	this.shape_126.setTransform(49.5,241.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJZIAAyPQBlBrCAAEQBZADCRg4QC6hGAzgLQCGgdBnA0IAASPg");
	this.shape_127.setTransform(49.5,240.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJLIAAyPQBnBICBALQBHADCjgZQCugqA9gKQCEgYBoAPIAASPg");
	this.shape_128.setTransform(49.5,241.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJIIAAyPQBnAlCEARQA2ADCzAHQCigOBIgIQCCgTBpgXIAASPg");
	this.shape_129.setTransform(49.5,242);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJIIAAyPQBpACCEAXQAlAEDEAlQCXAPBSgHQCAgOBqg8IAASPg");
	this.shape_130.setTransform(49.5,242);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,204,255,0.498)").s().p("AnUJRIAAyPQBqghCGAeQATAEDVBEQCMArBbgGQB/gIBrhiIAASPg");
	this.shape_131.setTransform(49.5,241.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,204,255,0.498)").s().p("AnSJNIgCyIQBpggCGAdQAWADDSBCIAkAKQBzAfBQgFQB/gIBrheIABA6IAAROg");
	this.shape_132.setTransform(49.5,241.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,204,255,0.498)").s().p("AnQJKIgEhEIAAw/QBpgeCGAbQAYAEDPA/IAkAKQByAdBQgEQCAgIBqhbIADA4IAAQ/IgBAMg");
	this.shape_133.setTransform(49.5,241.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,204,255,0.498)").s().p("AnNJGIgHhBIAAw7QBogdCGAaQAcAEDKA8IAkAKQByAcBQgFQCBgHBphXIAFA1IAAQ8IgBALg");
	this.shape_134.setTransform(49.5,242.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,204,255,0.498)").s().p("AnKJDIgKg+IAAw4QBngcCHAZQAeADDIA6IAkAKQBwAaBQgEQCBgHBphTIAHAzIAAQ4IgBALg");
	this.shape_135.setTransform(49.5,242.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,204,255,0.498)").s().p("AnIJAIgMg8IAAw0QBngbCGAYQAiAEDEA3IAjAJQBxAZBPgEQCCgHBohPIAJAxIAAQ0IgBALg");
	this.shape_136.setTransform(49.5,242.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,204,255,0.498)").s().p("AnGI8IgOg5IAAwxQBmgZCGAXQAlADDBA1IAjAIQBvAZBRgEQCCgHBohMIAKAvIAAQxIgCAKg");
	this.shape_137.setTransform(49.5,243.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,204,255,0.498)").s().p("AnDI5IgRg2IAAwuQBlgYCHAWQAnADC9AyIAjAIQBwAXBQgEQCCgGBohIIAMAsIAAQuIgCAKg");
	this.shape_138.setTransform(49.5,243.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,204,255,0.498)").s().p("AnBI1IgTgzIAAwqQBlgXCHAVQAqADC5AvIAjAIQBuAWBRgEQCEgGBlhFQAJAWAGAVIAAQqIgDAJg");
	this.shape_139.setTransform(49.5,243.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,204,255,0.498)").s().p("Am+IyIgWgxIAAwnQBkgVCHAUQAtACC2AtIAjAIQBuAUBQgDQCEgGBmhBIAQAoIAAQnIgDAJg");
	this.shape_140.setTransform(49.5,244.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,204,255,0.498)").s().p("Am7IuIgZguIAAwjQBkgUCHATQAvACCzAqIAjAHQBtAUBQgEQCFgFBlg9IASAmIAAQjIgEAIg");
	this.shape_141.setTransform(49.5,244.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,204,255,0.498)").s().p("Am5IrIgbgsIAAwfQBjgTCHASQAzACCvAoIAjAGQBsATBRgDQCFgGBkg5QALASAJASIAAQfIgEAIg");
	this.shape_142.setTransform(49.5,244.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,204,255,0.498)").s().p("Am3IoIgdgpIAAwcQBjgSCHARQA1ACCsAlIAiAGQBsARBRgDQCFgFBlg2IAVAiIAAQdIgFAHg");
	this.shape_143.setTransform(49.5,245.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,204,255,0.498)").s().p("Am0IkIgggmIAAwZQBigQCHAQQA4ACCoAiIAjAGQBrAQBQgDQCHgFBjgyIAYAfIAAQaIgGAGg");
	this.shape_144.setTransform(49.5,245.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,204,255,0.498)").s().p("AmyIhIgigjIAAwWQBigPCGAOQA8ACCkAgIAiAGQBrAOBRgCQCHgFBiguQAPAOALAPIAAQVIgGAHg");
	this.shape_145.setTransform(49.5,245.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,204,255,0.498)").s().p("AmvIdIglggIAAwTQBigNCGANQA9ACChAdIAjAFQBrAOBQgDQCIgEBhgrQAQANAMAOIAAQSIgGAGg");
	this.shape_146.setTransform(49.5,246.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,204,255,0.498)").s().p("AmtIaIgngeIAAwPQBhgMCGAMQBBACCdAbIAjAEQBpAMBRgCQCIgEBignQAQAMANAMIAAQPIgHAGg");
	this.shape_147.setTransform(49.5,246.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,204,255,0.498)").s().p("AmrIXIgpgbIAAwMQBhgLCFALQBEABCaAZIAjAEQBoALBSgCQCJgEBggjQARAKAOAMIAAQLIgHAGg");
	this.shape_148.setTransform(49.5,247);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,204,255,0.498)").s().p("AmoITIgsgYIAAwIQBggKCGAKQBGACCXAVIAjAEQBoAKBQgCQCLgEBfggQASAKAPALIAAQIIgIAEg");
	this.shape_149.setTransform(49.5,247.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,204,255,0.498)").s().p("AmmIQIgugWIAAwFQBfgICGAJQBKABCTATIAiAEQBoAIBQgCQCLgDBfgcQAUAJAPAJIAAQFIgIAEg");
	this.shape_150.setTransform(49.5,247.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,204,255,0.498)").s().p("AmjIMIgxgTIAAwBQBfgHCGAIQBMABCQAQIAiADQBnAIBRgCQCLgDBegYQAVAHAQAJIAAQBIgJADg");
	this.shape_151.setTransform(49.5,248);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,204,255,0.498)").s().p("AmgIJIg0gQIAAv+QBegGCGAHQBQABCLAOIAiACQBnAGBRgBQCMgDBegVQAVAHARAHIAAP+IgJADg");
	this.shape_152.setTransform(49.5,248.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,204,255,0.498)").s().p("AmeIFIg2gNIAAv7QBegECGAGQBSAACIAMIAiACQBmAFBRgCQCNgCBdgRIAoALIAAP7IgJACg");
	this.shape_153.setTransform(49.5,248.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,204,255,0.498)").s().p("AmcICIg4gLIAAv3QBdgDCGAFQBVABCEAIIAjACQBlAEBRgBQCOgDBcgNIAqAJIAAP3IgJACg");
	this.shape_154.setTransform(49.5,249);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,204,255,0.498)").s().p("AmZH/Ig7gIIAAv0QBdgCCFAEQBZAACAAGIAjACQBkACBRgBQCOgCBcgKIAsAIIAAPzIgKACg");
	this.shape_155.setTransform(49.5,249.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,204,255,0.498)").s().p("AmWH8Ig+gGIAAvwQBcAACGACQBbAAB9AEIAjABQBjABBSgBQCOgCBbgGIAuAFIAAPxIgKABg");
	this.shape_156.setTransform(49.5,249.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,204,255,0.498)").s().p("AnUH2IAAvtIDiACIDXACIAjAAIC0AAQCPgCBbgCIAvACIAAPtg");
	this.shape_157.setTransform(49.5,249.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("AHWn0IAAPpIurAAIAAvp");
	this.shape_158.setTransform(49.5,250.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,204,255,0.498)").s().p("AnUH2IAAvqQCmAFE0gEQFGgDCJACIAAPqg");
	this.shape_159.setTransform(49.5,250.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116}]}).to({state:[{t:this.shape_117},{t:this.shape_116}]},18).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127},{t:this.shape_122}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131},{t:this.shape_122}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).wait(153));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_31 = new cjs.Graphics().p("AmaABIJoljIDNFiIpoFjg");
	var mask_graphics_32 = new cjs.Graphics().p("AmigMIJolkIDdGHIptFag");
	var mask_graphics_33 = new cjs.Graphics().p("AmqgbIJolkIDtGuIpzFRg");
	var mask_graphics_34 = new cjs.Graphics().p("AmygpIJnlkID+HUIp4FHg");
	var mask_graphics_35 = new cjs.Graphics().p("Am6g3IJnllIEOH6Ip+E/g");
	var mask_graphics_36 = new cjs.Graphics().p("AnChGIJnlkIEfIhIqFE0g");
	var mask_graphics_37 = new cjs.Graphics().p("AnKhUIJnlkIEvJGIqKErg");
	var mask_graphics_38 = new cjs.Graphics().p("AnThiIJollIE/JtIqPEhg");
	var mask_graphics_39 = new cjs.Graphics().p("AnbhxIJolkIFPKTIqVEYg");
	var mask_graphics_40 = new cjs.Graphics().p("Anjh/IJolkIFfK5IqaEOg");
	var mask_graphics_41 = new cjs.Graphics().p("AnriNIJnlkIFwLfIqgEEg");
	var mask_graphics_42 = new cjs.Graphics().p("AnzibIJnllIGAMGIqlD7g");
	var mask_graphics_43 = new cjs.Graphics().p("An7iqIJnlkIGRMsIqrDxg");
	var mask_graphics_44 = new cjs.Graphics().p("AoDi4IJnlkIGgNSIqwDng");
	var mask_graphics_45 = new cjs.Graphics().p("AoMjGIJollIGxN5Iq3Ddg");
	var mask_graphics_46 = new cjs.Graphics().p("AoUjVIJolkIHBOfIq8DUg");
	var mask_graphics_47 = new cjs.Graphics().p("AocjjIJolkIHRPEIrBDLg");
	var mask_graphics_48 = new cjs.Graphics().p("AokjxIJollIHhPrIrHDBg");
	var mask_graphics_49 = new cjs.Graphics().p("AoskAIJnlkIHyQRIrNC4g");
	var mask_graphics_50 = new cjs.Graphics().p("Ao0kOIJnlkIICQ3IrSCug");
	var mask_graphics_51 = new cjs.Graphics().p("Ao8kcIJnlkIITRdIrYCkg");
	var mask_graphics_52 = new cjs.Graphics().p("ApFkrIJolkIIjSEIreCbg");
	var mask_graphics_53 = new cjs.Graphics().p("ApNk5IJolkIIzSpIrjCSg");
	var mask_graphics_54 = new cjs.Graphics().p("ApVlHIJolkIJDTQIrpCHg");
	var mask_graphics_55 = new cjs.Graphics().p("ApdlVIJollIJTT2IrvB+g");
	var mask_graphics_56 = new cjs.Graphics().p("ApllkIJnlkIJkUcIr0B1g");
	var mask_graphics_57 = new cjs.Graphics().p("AptlyIJolkIJzVCIr5Brg");
	var mask_graphics_58 = new cjs.Graphics().p("Ap1mAIJollIKEVpIsABig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_graphics_31,x:105.9,y:190.8}).wait(1).to({graphics:mask_graphics_32,x:106.8,y:192.2}).wait(1).to({graphics:mask_graphics_33,x:107.6,y:193.6}).wait(1).to({graphics:mask_graphics_34,x:108.4,y:195.1}).wait(1).to({graphics:mask_graphics_35,x:109.2,y:196.5}).wait(1).to({graphics:mask_graphics_36,x:110,y:197.9}).wait(1).to({graphics:mask_graphics_37,x:110.8,y:199.4}).wait(1).to({graphics:mask_graphics_38,x:111.6,y:200.8}).wait(1).to({graphics:mask_graphics_39,x:112.4,y:202.2}).wait(1).to({graphics:mask_graphics_40,x:113.3,y:203.7}).wait(1).to({graphics:mask_graphics_41,x:114.1,y:205.1}).wait(1).to({graphics:mask_graphics_42,x:114.9,y:206.5}).wait(1).to({graphics:mask_graphics_43,x:115.7,y:208}).wait(1).to({graphics:mask_graphics_44,x:116.5,y:209.4}).wait(1).to({graphics:mask_graphics_45,x:117.3,y:210.8}).wait(1).to({graphics:mask_graphics_46,x:118.1,y:212.2}).wait(1).to({graphics:mask_graphics_47,x:119,y:213.7}).wait(1).to({graphics:mask_graphics_48,x:119.8,y:215.1}).wait(1).to({graphics:mask_graphics_49,x:120.6,y:216.5}).wait(1).to({graphics:mask_graphics_50,x:121.4,y:218}).wait(1).to({graphics:mask_graphics_51,x:122.2,y:219.4}).wait(1).to({graphics:mask_graphics_52,x:123,y:220.8}).wait(1).to({graphics:mask_graphics_53,x:123.8,y:222.3}).wait(1).to({graphics:mask_graphics_54,x:124.7,y:223.7}).wait(1).to({graphics:mask_graphics_55,x:125.5,y:225.1}).wait(1).to({graphics:mask_graphics_56,x:126.3,y:226.6}).wait(1).to({graphics:mask_graphics_57,x:127.1,y:228}).wait(1).to({graphics:mask_graphics_58,x:127.9,y:229.4}).wait(153));

	// air ngalir
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,204,255,0.498)").s().p("AAOGwQgHhJgQhNQgri6hKjRQgHgTgNgyIgQhAIgJgiIgehoQgJgdgFgMQgFgNAOALQAPAMASAXQATAXANAxQAMAsAOAcIAaAuQAIARAKAhQAMAjAGAPQAGAPAPAeIAPAqIASA8QAeBZATApIAWAsQAOAaAGATQAKAZAqAuQAmAqAkAzIh1AFg");
	this.shape_160.setTransform(133.4,249.5);
	this.shape_160._off = true;

	var maskedShapeInstanceList = [this.shape_160];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_160).wait(31).to({_off:false},0).wait(180));

	// mangkok
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(1,1,1).p("Akbg4QAAgDAAgEQAAgEAAgDQARgIA9gHQBVgJB4AAQB4AABVAJQA+AHARAJQAAADAAADQAAADAAAEQgRAJg+AGQhVAKh4AAQh4AAhVgKQg9gGgRgJgAEcg4QgFA8hOAsQhTAvh2AAQh1AAhTgvQhOgsgFg8");
	this.shape_161.setTransform(140.4,296);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#999999").s().p("AjMAWQg+gHgRgIIAAgHIAAgGQARgJA+gGQBUgKB4ABQB4gBBVAKQA+AGARAKIAAAFIAAAHQgRAIg+AHQhVAKh4AAQh4AAhUgKg");
	this.shape_162.setTransform(140.4,289.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#666666").s().p("AjHAkQhPgrgEg9QARAIA9AHQBVAKB3AAQB4AABVgKQA+gHARgIIAAgIIAAgFQAGADAAADQAAADgGAEQgEA9hPArQhTAvh1AAQh1AAhTgvgAkehGQgDgDAAgCQAAgCADgCIAEgDIgBAGIABAIIgEgCg");
	this.shape_163.setTransform(140.4,297.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]}).wait(211));

	// Layer 7
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("AAAkkIAAJJ");
	this.shape_164.setTransform(49,111.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(1,1,1).p("AAAEtIAApZ");
	this.shape_165.setTransform(49,112.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("AAAE0IAApn");
	this.shape_166.setTransform(49,112.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1,1,1).p("AAAE8IAAp3");
	this.shape_167.setTransform(49,113.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1,1,1).p("AAAFDIAAqF");
	this.shape_168.setTransform(49,114.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(1,1,1).p("AAAFLIAAqV");
	this.shape_169.setTransform(49,115.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1,1,1).p("AAAFSIAAqj");
	this.shape_170.setTransform(49,115.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(1,1,1).p("AAAFaIAAqz");
	this.shape_171.setTransform(49,116.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1,1,1).p("AAAFhIAArB");
	this.shape_172.setTransform(49,117.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(1,1,1).p("AAAFpIAArR");
	this.shape_173.setTransform(49,118.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1,1,1).p("AAAFwIAArf");
	this.shape_174.setTransform(49,118.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(1,1,1).p("AAAF4IAArv");
	this.shape_175.setTransform(49,119.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1,1,1).p("AAAF/IAAr9");
	this.shape_176.setTransform(49,120.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(1,1,1).p("AAAGHIAAsN");
	this.shape_177.setTransform(49,121.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1,1,1).p("AAAGOIAAsb");
	this.shape_178.setTransform(49,121.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(1,1,1).p("AAAGVIAAsp");
	this.shape_179.setTransform(49,122.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("AAAGdIAAs5");
	this.shape_180.setTransform(49,123.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(1,1,1).p("AAAGkIAAtH");
	this.shape_181.setTransform(49,124);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1,1,1).p("AAAGsIAAtX");
	this.shape_182.setTransform(49,124.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(1,1,1).p("AAAGzIAAtl");
	this.shape_183.setTransform(49,125.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1,1,1).p("AAAG7IAAt1");
	this.shape_184.setTransform(49,126.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(1,1,1).p("AAAHCIAAuD");
	this.shape_185.setTransform(49,127);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(1,1,1).p("AAAHKIAAuT");
	this.shape_186.setTransform(49,127.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(1,1,1).p("AAAHRIAAuh");
	this.shape_187.setTransform(49,128.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1,1,1).p("AAAHZIAAux");
	this.shape_188.setTransform(49,129.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(1,1,1).p("AAAHgIAAu/");
	this.shape_189.setTransform(49,130);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1,1,1).p("AAAHoIAAvP");
	this.shape_190.setTransform(49,130.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(1,1,1).p("AAAHvIAAvd");
	this.shape_191.setTransform(49,131.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("AAAH3IAAvt");
	this.shape_192.setTransform(49,132.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(1,1,1).p("AAAH+IAAv7");
	this.shape_193.setTransform(49,133);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1,1,1).p("AAAIGIAAwL");
	this.shape_194.setTransform(49,133.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(1,1,1).p("AAAINIAAwZ");
	this.shape_195.setTransform(49,134.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1,1,1).p("AAAIVIAAwp");
	this.shape_196.setTransform(49,135.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(1,1,1).p("AAAIcIAAw3");
	this.shape_197.setTransform(49,136);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1,1,1).p("AAAIkIAAxH");
	this.shape_198.setTransform(49,136.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(1,1,1).p("AAAIrIAAxV");
	this.shape_199.setTransform(49,137.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(1,1,1).p("AAAIyIAAxj");
	this.shape_200.setTransform(49,138.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(1,1,1).p("AAAI6IAAxz");
	this.shape_201.setTransform(49,139);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1,1,1).p("AAAJBIAAyB");
	this.shape_202.setTransform(49,139.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(1,1,1).p("AAApIIAASR");
	this.shape_203.setTransform(49,140.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_164}]}).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).wait(172));

	// beban
	this.instance_5 = new lib.beban("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(49.2,118.6,1,1,0,0,0,18.4,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:235.6},39).wait(172));

	// Layer 5
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1,1,1).p("A+d+pMA87AAAMAAAA9TMg87AAAg");
	this.shape_204.setTransform(178.1,122.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_204).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-75,392,394.4);


// stage content:
(lib.animasipegas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pegas
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAdQgHgJABgSQgBgUAIgJQAGgIALAAQAJAAAFAEQAFAFACAJIgJAAQgBgFgDgDQgDgDgGAAQgDAAgDACQgEADgCAGQgDAGAAALQADgFAFgCQAEgDAFAAQAIAAAGAGQAHAGAAAKQAAAHgDAGQgEAGgEADQgGADgGAAQgKAAgHgIgAgJABQgDAFAAAGQAAAFACAEQABAEAEADQADABADAAQAFAAAEgEQAFgFAAgHQAAgHgFgFQgDgDgHAAQgEAAgFADg");
	this.shape.setTransform(304,428.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEAkIAAg3IgHAGIgJAEIAAgIQAHgEAFgFQAFgEACgFIAGAAIAABHg");
	this.shape_1.setTransform(298.1,428.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAdQgGgJgBgUQAAgLAEgIQACgIAFgEQAFgFAHABQAGgBAEADQAFACADAFQACAEABAHQACAGABAJQgBANgDAHQgCAJgFADQgFAFgIAAQgJAAgHgIgAgJgXQgFAGAAARQAAASAFAFQAEAHAFgBQAGABAEgHQAFgFAAgSQAAgQgFgHQgEgFgGAAQgFAAgEAFg");
	this.shape_2.setTransform(292.9,428.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgEQAEgFAIgHQAKgJAEgEQAEgGAAgFQAAgFgDgEQgEgDgGgBQgFABgEADQgEAEAAAHIgJgBQABgLAGgEQAGgGAJAAQAKAAAGAGQAGAFAAAJQAAAEgBAEIgGAIQgEAFgKAIIgJAJIgEAEIAjAAIAAAJg");
	this.shape_3.setTransform(287.3,428.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAsQgJgDgHgFQgGgGgDgHQgEgJAAgLQAAgLAFgLQAGgNAKgHQALgHAPAAQAMAAAKAFQAJAFAGAKQAFAJAAAJQAAANgKALQgJAKgLAAIgFgBIgDgDIgBgEIgGAGQgEACgEAAQgEAAgEgDQgFgCgCgFQgDgGAAgGQAAgGAEgJQAEgHAGgEQAGgEAGAAQADAAAEADQAEACACAEIACgHIAJAAIgHAfIgCAIIABACIADABQACAAAEgDQAGgEADgGQAEgGAAgHQAAgIgFgHQgEgHgIgFQgIgEgKAAQgLAAgJAGQgKAFgFAKQgFAKAAALQAAAMAFAIQAFAJAKADQAKAFALAAQANAAAIgFQAJgEAEgGIAJAAQgCAFgGAFQgGAGgJADQgIADgMAAQgKAAgJgDgAgHgRIgFAFQgDADgBAGIgCAIQAAAGADAEQAEAEAEAAIAGgCIAEgEQADgEACgEQACgFAAgEQAAgIgEgDQgDgDgEgBIgGACg");
	this.shape_4.setTransform(279.6,429.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAhQgGgDgDgHQgCgGAAgIQAAgHACgGQADgGAFgDQAFgEAGAAQAEAAAEACQAEACACADIAAgZIAJAAIAABGIgJAAIAAgGQgEAHgKAAQgFAAgFgDgAgJgFQgDAFAAAJQAAAKADAFQAFAFAEAAQAHAAADgEQAFgFAAgKQAAgKgFgFQgEgFgGAAQgFAAgEAFg");
	this.shape_5.setTransform(271.5,428.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAZQgEgCgCgDQgCgCAAgEIgBgIIAAgfIAJAAIAAAbIAAAJQABAEACACQADACAEAAQADAAAEgCQAEgCAAgEQACgDAAgHIAAgaIAJAAIAAAzIgIAAIAAgIQgGAJgJAAQgFgBgEgBg");
	this.shape_6.setTransform(266.1,429.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAdIAAAGIgIAAIAAhGIAJAAIAAAZQAFgHAHAAQAGAAADACQAFACADAEQACADACAFQACAEAAAGQAAANgHAHQgHAHgJAAQgIAAgFgHgAgJgFQgFAFABAJQAAAJACAEQAFAHAGAAQAFAAAEgFQAFgFAAgKQAAgJgFgFQgEgFgFAAQgFAAgEAFg");
	this.shape_7.setTransform(260.7,428.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALAkIgQgbIgHAGIAAAVIgJAAIAAhHIAJAAIAAAoIAUgUIAMAAIgUASIAWAhg");
	this.shape_8.setTransform(255.6,428.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
	this.shape_9.setTransform(251.7,428.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAhQgGgDgDgHQgCgGAAgIQAAgHACgGQADgGAFgDQAFgEAGAAQAEAAADACQAFACACADIAAgZIAJAAIAABGIgJAAIAAgGQgEAHgKAAQgFAAgFgDgAgJgFQgDAFAAAJQAAAKADAFQAFAFAEAAQAHAAADgEQAFgFAAgKQAAgKgFgFQgEgFgGAAQgFAAgEAFg");
	this.shape_10.setTransform(247.7,428.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaAbIAAggIAAgIQgBgCgDgBQgCgCgDAAQgFAAgEAEQgEAEAAAHIAAAeIgHAAIAAghQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBADAAAHIAAAbIgJAAIAAgzIAIAAIAAAHQACgEAEgCQAEgDAFABQAGgBAEADQADADABAEQAGgKAKABQAIAAAEAEQAEAEAAAJIAAAjg");
	this.shape_11.setTransform(240.9,429.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAUQgHgHAAgNQAAgMAHgHQAHgHAJAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAFAFAFAAQAFAAADgDQADgCACgGIAJACQgBAHgHAFQgFAEgJAAQgLAAgGgHgAgJgOQgEAEAAAGIAbAAQAAgGgCgDQgFgGgHAAQgEAAgFAFg");
	this.shape_12.setTransform(233.9,429.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AARAkIgZgkIgLALIAAAZIgJAAIAAhHIAJAAIAAAjIAjgjIAMAAIgdAdIAeAqg");
	this.shape_13.setTransform(228.2,428.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaAbIAAggIAAgIQgBgCgDgBQgCgCgDAAQgFAAgEAEQgEAEAAAHIAAAeIgHAAIAAghQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBADAAAHIAAAbIgJAAIAAgzIAIAAIAAAHQACgEAEgCQAEgDAFABQAGgBAEADQADADABAEQAGgKAKABQAIAAAEAEQAEAEAAAJIAAAjg");
	this.shape_14.setTransform(217.5,429.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_15.setTransform(210.6,429.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AALAkIgRgbIgFAGIAAAVIgJAAIAAhHIAJAAIAAAoIATgUIALAAIgTASIAVAhg");
	this.shape_16.setTransform(205.6,428.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AALAkIgQgbIgHAGIAAAVIgJAAIAAhHIAJAAIAAAoIAUgUIAMAAIgUASIAWAhg");
	this.shape_17.setTransform(200.6,428.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAUQgHgHAAgNQAAgMAHgHQAGgHAKAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAEAFAGAAQAFAAADgDQAEgCACgGIAJACQgDAHgFAFQgGAEgJAAQgLAAgGgHgAgJgOQgEAEAAAGIAcAAQgBgGgDgDQgEgGgHAAQgFAAgEAFg");
	this.shape_18.setTransform(195,429.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAiQgCgCgBgCQgCgDABgHIAAgdIgHAAIAAgHIAHAAIAAgNIAIgFIAAASIAJAAIAAAHIgJAAIAAAdIAAAFIABACIADAAIAFAAIAAAIIgGAAQgFAAgCgBg");
	this.shape_19.setTransform(190.9,428.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNAXQgGgEgBgIIAJgCQAAAGADACQADADAFAAQAHAAACgDQADgCABgDQAAgEgDgBIgJgDIgMgEQgEgBgCgDQgCgDAAgEQAAgDABgEQACgCADgCIAFgDIAIgBQAFAAAFACQAEACADACQACAEAAAEIgIABQgBgDgDgDQgCgCgFAAQgGAAgCACQgDACABADIAAADIAEADIAGACIAOADQADABACADQACADABAFQAAAEgDAEQgCAEgGACQgEACgHAAQgJAAgEgEg");
	this.shape_20.setTransform(186.9,429.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLAZQgEgCgCgDQgCgCAAgEIgBgIIAAgfIAIAAIAAAbIABAJQABAEADACQACACAFAAQADAAADgCQADgCABgEQACgDAAgHIAAgaIAJAAIAAAzIgIAAIAAgIQgGAJgKAAQgEgBgEgBg");
	this.shape_21.setTransform(181.7,429.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbAkIAAhHIAbAAIAKABQAGABADACQAEADACAEQACAFAAAFQAAAJgFAFQgHAHgPAAIgRAAIAAAdgAgRgBIARAAQAKAAAEgDQADgEAAgGQAAgEgBgEQgDgDgEgBIgJAAIgRAAg");
	this.shape_22.setTransform(175.8,428.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBAiQgCgCgBgCQgBgDAAgHIAAgdIgGAAIAAgHIAGAAIAAgNIAIgFIAAASIAJAAIAAAHIgJAAIAAAdIAAAFIACACIACAAIAFAAIABAIIgHAAQgFAAgCgBg");
	this.shape_23.setTransform(168.1,428.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAMAkIAAghQAAgGgDgDQgCgDgGAAQgDAAgDACQgDACgCAEQgBACAAAGIAAAdIgJAAIAAhHIAJAAIAAAaQAGgHAIAAQAGAAAEACQAEACACAEQACAEAAAHIAAAhg");
	this.shape_24.setTransform(163.9,428.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPAhQgFgFAAgHIAIABQABADADADQADACAFAAQAFAAAEgCQADgDABgEIABgMQgGAHgIAAQgKAAgGgIQgGgHAAgKQAAgIADgGQACgGAFgDQAGgEAGAAQAJAAAGAHIAAgGIAIAAIAAAsQAAAMgDAFQgCAFgGADQgFADgHAAQgJAAgGgEgAgIgYQgFAFAAAJQAAAKAFAEQADAFAGgBQAGABAEgFQADgEAAgKQAAgJgDgFQgEgFgGAAQgGAAgDAFg");
	this.shape_25.setTransform(158.2,430.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAkIAAgzIAIAAIAAAzgAgEgZIAAgKIAIAAIAAAKg");
	this.shape_26.setTransform(154.5,428.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgNAbIAAgzIAIAAIAAAIQADgGACgCQACgCADABQAEAAAFACIgDAIQgDgBgEAAQgCAAgCABQgCACgBADIgBAKIAAAbg");
	this.shape_27.setTransform(152.1,429.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAjIgBgIIAFABIAFgBIADgCIACgHIABgCIgUgzIAKAAIALAdIACAMIAEgLIALgeIAJAAIgUA0IgEALQgCAFgDACQgDABgEAAIgGgBg");
	this.shape_28.setTransform(147.5,430.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVAkIAAhGIAIAAIAAAHQADgFADgCQAEgBADAAQAHAAAGADQAFAEACAFQADAHAAAHQAAAIgDAFQgDAHgGAEQgFADgGAAQgEgBgDgBQgDgCgCgDIAAAZgAgJgYQgFAGABAKQAAAJAEAFQAEAEAFAAQAGAAADgEQAFgGAAgJQAAgKgFgFQgEgEgFAAQgFAAgEAEg");
	this.shape_29.setTransform(142.4,430.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_30.setTransform(136.7,429.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAhQgHgFgEgJQgEgJAAgKQAAgLAFgIQAEgIAIgEQAIgFAIAAQALAAAHAGQAHAFADAKIgJACQgDgHgEgEQgFgDgHgBQgHAAgGAFQgGADgCAHQgCAHAAAGQAAAJADAHQACAHAGACQAGAEAFAAQAIAAAGgFQAFgEACgJIAKADQgDALgIAGQgIAGgLAAQgLAAgHgEg");
	this.shape_31.setTransform(130.4,428.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAiQgJgGgDgLIAUgEQACAGAEAEQAEADAGAAQAIAAAEgDQADgCAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQgBgBgGgBQgXgGgHgEQgJgGAAgLQAAgKAIgHQAIgHAQAAQAPAAAIAFQAIAGADAKIgUADQgBgEgDgDQgEgCgGAAQgHAAgEACQAAABgBAAQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAABAAQAAABABAAQADACAPAEQAQAEAHAFQAGAFAAAJQAAALgJAIQgIAIgSAAQgPAAgJgHg");
	this.shape_32.setTransform(352.9,413.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg");
	this.shape_33.setTransform(344.7,413.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcAsQgJgLAAgTQAAgTAJgKQAKgLAOAAQAMAAAKALIAAgnIAUAAIAABrIgTAAIAAgMQgFAHgGADQgHAEgGAAQgNAAgKgLgAgLgEQgFAFAAALQAAANADAFQAFAIAJAAQAHAAAEgGQAFgGABgMQAAgNgFgFQgFgGgHAAQgHAAgFAGg");
	this.shape_34.setTransform(335.8,412.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg");
	this.shape_35.setTransform(327.2,413.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAlAoIAAgsQAAgLgCgEQgDgEgGAAQgEAAgEADQgEACgCAFQgBAFAAAKIAAAmIgUAAIAAgqQAAgLgBgEQgBgDgCgBQgDgCgEAAQgFAAgDADQgEACgCAFQgBAFAAAKIAAAmIgVAAIAAhNIATAAIAAALQAKgNAOAAQAIAAAFADQAFADADAHQAFgHAGgDQAGgDAHAAQAIAAAGAEQAGADADAHQACAFAAALIAAAxg");
	this.shape_36.setTransform(316.3,413.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJA2IAAhNIATAAIAABNgAgJgiIAAgTIATAAIAAATg");
	this.shape_37.setTransform(307.7,412.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAPA2IAAgpQAAgNgBgCQgCgDgDgCQgCgCgFAAQgEAAgEACQgEADgCAEQgCAFAAAKIAAAnIgVAAIAAhrIAVAAIAAAoQAKgMANAAQAHAAAGADQAFACADAFQAEAEABAFIABAOIAAAug");
	this.shape_38.setTransform(301,412.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAeQgLgLAAgTQAAgSALgLQAKgLAQAAQAOAAAJAGQAIAGAEANIgUAEQgBgGgEgEQgEgDgGAAQgGAAgFAGQgEAFAAAMQAAANAEAGQAFAGAHAAQAGAAADgEQAEgDACgIIAUADQgDAOgJAHQgJAIgPAAQgQAAgKgLg");
	this.shape_39.setTransform(292.3,413.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAoIAAhNIATAAIAAALQAFgIADgCQADgDAFAAQAIAAAGAEIgGASQgGgDgEAAQgEAAgDACQgCACgCAHQgCAGAAATIAAAYg");
	this.shape_40.setTransform(285.8,413.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAeA2IgJgZIgqAAIgJAZIgXAAIAqhrIAWAAIArBrgAgOALIAcAAIgOgng");
	this.shape_41.setTransform(276.8,412.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAlAoIAAgsQAAgLgCgEQgDgEgGAAQgEAAgEADQgEACgCAFQgBAFAAAKIAAAmIgUAAIAAgqQAAgLgBgEQgBgDgCgBQgDgCgEAAQgFAAgDADQgEACgCAFQgBAFAAAKIAAAmIgVAAIAAhNIATAAIAAALQAKgNAOAAQAIAAAFADQAFADADAHQAFgHAGgDQAGgDAHAAQAIAAAGAEQAGADADAHQACAFAAALIAAAxg");
	this.shape_42.setTransform(261.1,413.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAlQgGgEgDgGQgCgHAAgKIAAgxIAUAAIAAAkQAAAQABADQABAEADACQADACAFAAQAEAAAEgDQAFgDABgEQACgEAAgQIAAghIAUAAIAABNIgTAAIAAgLQgEAFgHAEQgGAEgIAAQgHAAgHgDg");
	this.shape_43.setTransform(249.9,413.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOA2IgTgjIgJAKIAAAZIgVAAIAAhrIAVAAIAAA4IAWgaIAaAAIgbAbIAdAyg");
	this.shape_44.setTransform(241.6,412.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXAlQgGgEgDgGQgCgHAAgKIAAgxIAUAAIAAAkQAAAQABADQABAEADACQADACAFAAQAEAAAEgDQAFgDABgEQACgEAAgQIAAghIAUAAIAABNIgTAAIAAgLQgEAFgHAEQgGAEgIAAQgHAAgHgDg");
	this.shape_45.setTransform(232.4,413.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPA2IAAgpQAAgNgBgCQgCgDgDgCQgDgCgEAAQgEAAgEACQgEADgCAEQgCAFAAAKIAAAnIgVAAIAAhrIAVAAIAAAoQAKgMANAAQAHAAAGADQAFACADAFQAEAEABAFIABAOIAAAug");
	this.shape_46.setTransform(223.3,412.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAPAoIAAgoQAAgMgBgDQgBgEgEgCQgDgCgEAAQgEAAgFADQgEADgBAFQgCAEAAANIAAAjIgVAAIAAhNIATAAIAAALQALgNAOAAQAHAAAGADQAFACAEAEIADAJIABANIAAAwg");
	this.shape_47.setTransform(210,413.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgcAiQgIgHABgJQAAgHACgFQAEgFAFgCQAGgDAKgCQAOgDAFgCIAAgCQAAgGgCgCQgDgDgHAAQgGAAgDACQgDACgCAGIgTgEQADgLAIgFQAIgGAPAAQANAAAGAEQAIADACAFQADAFAAANIAAAXIABAPQABAFACAGIgUAAIgCgGIAAgDQgGAFgGADQgFADgHAAQgMAAgGgHgAAAAFQgJABgCACQgEADAAAEQAAAFADADQADADAGAAQAEAAAFgEQADgCACgEIAAgLIAAgEIgLAEg");
	this.shape_48.setTransform(201.2,413.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAiQgHgHAAgJQAAgHAEgFQACgFAHgCQAFgDAKgCQAOgDAGgCIAAgCQAAgGgDgCQgDgDgIAAQgFAAgDACQgDACgCAGIgTgEQAEgLAIgFQAHgGAPAAQANAAAGAEQAIADACAFQADAFAAANIAAAXIABAPQABAFACAGIgUAAIgCgGIAAgDQgGAFgGADQgFADgHAAQgMAAgHgHgAAAAFQgIABgDACQgEADAAAEQAAAFADADQAEADAFAAQAEAAAFgEQAEgCABgEIABgLIAAgEIgMAEg");
	this.shape_49.setTransform(192.9,413.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHAzQgHgDgEgHIAAAMIgTAAIAAhrIAUAAIAAAnQAKgLAMAAQAOAAAJALQAKAKAAASQAAAUgKALQgJALgNAAQgHAAgGgEgAgMgEQgFAEAAAMQAAAMAEAGQAGAIAHAAQAHAAAFgGQAEgFAAgNQAAgNgEgFQgFgGgHAAQgHAAgFAGg");
	this.shape_50.setTransform(184.3,412.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTAkQgKgFgFgJQgFgKAAgMQAAgKAFgKQAFgKAJgFQAJgFALAAQARAAAMAMQALALAAARQAAARgLAMQgMAMgRAAQgKAAgJgFgAgNgRQgFAGAAALQAAALAFAHQAGAGAHAAQAIAAAFgGQAGgHAAgLQAAgLgGgGQgFgGgIAAQgHAAgGAGg");
	this.shape_51.setTransform(175,413.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZAeQgLgLAAgTQAAgSALgLQAKgLAQAAQAOAAAJAGQAIAGAEANIgUAEQgBgGgEgEQgEgDgGAAQgGAAgFAGQgEAFAAAMQAAANAEAGQAFAGAHAAQAGAAADgEQAEgDACgIIAUADQgDAOgJAHQgJAIgPAAQgQAAgKgLg");
	this.shape_52.setTransform(166.3,413.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAoIAAhNIATAAIAAALQAFgIADgCQADgDAFAAQAIAAAGAEIgGASQgGgDgEAAQgEAAgDACQgCACgCAHQgCAGAAATIAAAYg");
	this.shape_53.setTransform(159.7,413.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgcAbQgHgKAAgRQAAgSAKgLQAKgLAPAAQARAAAKAMQAKALgBAXIgyAAQAAAJAFAFQAEAFAGAAQAFAAAEgDQADgCACgGIAUADQgEAMgIAGQgJAGgNAAQgTAAgKgOgAgKgTQgEAFAAAIIAeAAQAAgJgFgEQgEgFgHAAQgFAAgFAFg");
	this.shape_54.setTransform(152,413.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AglA2IAAhqIAUAAIAAAMQADgGAGgEQAHgDAHgBQANAAAJALQAKAKAAAUQAAASgKALQgJALgNAAQgGAAgFgDQgGgDgFgGIAAAngAgLgfQgGAFAAAMQAAANAGAFQAFAHAHgBQAHAAAEgFQAFgFAAgNQAAgNgFgFQgFgHgHAAQgGAAgFAHg");
	this.shape_55.setTransform(143.5,415.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgJA2IAAhNIATAAIAABNgAgJgiIAAgTIATAAIAAATg");
	this.shape_56.setTransform(132.5,412.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAiQgJgGgDgLIAUgEQACAGAEAEQAEADAGAAQAIAAAEgDQADgCAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQgBgBgGgBQgXgGgHgEQgJgGAAgLQAAgKAIgHQAIgHAQAAQAPAAAIAFQAIAGADAKIgUADQgBgEgDgDQgEgCgGAAQgHAAgEACQAAABgBAAQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQADACAPAEQAQAEAHAFQAGAFAAAJQAAALgJAIQgIAIgSAAQgPAAgJgHg");
	this.shape_57.setTransform(126,413.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdAiQgGgHgBgJQABgHADgFQACgFAHgCQAFgDALgCQANgDAGgCIAAgCQgBgGgCgCQgDgDgIAAQgFAAgDACQgDACgCAGIgSgEQACgLAJgFQAHgGAPAAQANAAAHAEQAGADADAFQADAFAAANIgBAXIABAPQABAFAEAGIgVAAIgCgGIgBgDQgFAFgGADQgFADgHAAQgMAAgHgHgAAAAFQgJABgCACQgEADAAAEQAAAFADADQAEADAEAAQAFAAAFgEQADgCACgEIABgLIAAgEIgMAEg");
	this.shape_58.setTransform(117.9,413.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAlAoIAAgsQAAgLgCgEQgDgEgGAAQgEAAgEADQgEACgCAFQgBAFAAAKIAAAmIgUAAIAAgqQAAgLgBgEQgBgDgCgBQgDgCgEAAQgFAAgDADQgEACgCAFQgBAFAAAKIAAAmIgVAAIAAhNIATAAIAAALQAKgNAOAAQAIAAAFADQAFADADAHQAFgHAGgDQAGgDAHAAQAIAAAGAEQAGADADAHQACAFAAALIAAAxg");
	this.shape_59.setTransform(107,413.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgJA2IAAhNIATAAIAABNgAgJgiIAAgTIATAAIAAATg");
	this.shape_60.setTransform(98.3,412.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAPAoIAAgoQAAgMgCgDQgBgEgCgCQgDgCgFAAQgEAAgEADQgEADgCAFQgCAEAAANIAAAjIgUAAIAAhNIASAAIAAALQALgNAPAAQAGAAAGADQAFACADAEIAFAJIABANIAAAwg");
	this.shape_61.setTransform(91.7,413.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAeA2IgJgZIgqAAIgJAZIgXAAIAqhrIAWAAIArBrgAgOALIAcAAIgOgng");
	this.shape_62.setTransform(81.6,412.3);

	this.instance = new lib.animasipegas_1();
	this.instance.parent = this;
	this.instance.setTransform(107.4,230.1,1,1,0,0,0,85.7,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204.2,229,391,432.1);
// library properties:
lib.properties = {
	width: 400,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/signdvdmusicvideoiconmountainsymbolbutton.png", id:"signdvdmusicvideoiconmountainsymbolbutton"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;