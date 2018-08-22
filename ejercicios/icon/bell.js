(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.notification_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADERIAAllQgjAcgjARQgiARg0AQIAAh6QBMgYArgjQApgiAYgzIB7AAIAAIhg");
	this.shape.setTransform(-6.3,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AloFpQiViVAAjUQAAjTCViVQCViVDTAAQDUAACVCVQCVCVAADTQAADUiVCVQiVCVjUAAQjTAAiViVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-57.6,102,109.8);


(lib.bell_ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjVDVQhZhXABh+QgBh9BZhYQBYhZB9ABQB+gBBXBZQBaBYgBB9QABB+haBXQhXBah+gBQh9ABhYhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-30.2,60.5,60.5);


(lib.bell_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ay8TiIAAiYIEvkvIAAr1QAAljCvkCQC2kJFGhMIAAhqQAAhbBEhEQA8hEBiAAQBbAABEBEQBEBEAABbIAABqQE+BMC3EJQC1ECAAFjIAAL1IEwEvIAACYg");
	this.shape.setTransform(0.1,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23));

	// m (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4mF6IAAryMAxNAAAIAALyg");
	mask.setTransform(0.1,302.7);

	// Layer 1
	this.instance = new lib.bell_ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.5,48.3,1,1,0,0,0,-0.4,-216.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-216.8,rotation:15.7,y:48.4},2).to({rotation:-17},4,cjs.Ease.get(1)).to({rotation:14.4},4,cjs.Ease.get(1)).to({rotation:3,x:-0.4,y:48.6},3,cjs.Ease.get(-1)).to({regX:-0.3,regY:-216.7,rotation:-8.5,x:-0.5,y:48.5},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-5.8},3,cjs.Ease.get(-1)).to({regX:-0.4,regY:-216.9,scaleX:1,scaleY:1,rotation:0,y:48.3},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,0.1,242.5,295.4);


(lib.bell_anim_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.notification_circle("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(83,143.1,0.275,0.275);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({scaleX:1.31,scaleY:1.31,alpha:1},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

	// Layer_1
	this.instance_1 = new lib.bell_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.2,1,1,0,0,0,0,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-0.3,rotation:-6.5,x:-0.1,y:-0.3,startPosition:1},1,cjs.Ease.get(-1)).to({rotation:-13.2,x:0,startPosition:2},1,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.4,rotation:-1.3,x:-0.1,y:-0.4,startPosition:4},2,cjs.Ease.get(-1)).to({regY:-0.2,rotation:13,y:-0.2,startPosition:6},2,cjs.Ease.get(1)).to({regY:-0.3,rotation:3,x:-0.2,y:-0.3,startPosition:9},3,cjs.Ease.get(-1)).to({regY:-0.4,rotation:-6.7,x:-0.1,y:-0.4,startPosition:12},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-6,x:-0.2,y:-0.5,startPosition:13},1,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:148.5,rotation:-4.1,x:10.5,y:148,startPosition:14},0).wait(1).to({regX:-0.1,regY:-0.4,scaleX:1,scaleY:1,rotation:-0.8,x:-0.2,y:-0.5,startPosition:15},0).to({rotation:5,x:-0.1,y:-0.4,startPosition:18},3,cjs.Ease.get(1)).to({rotation:2.3,startPosition:21},3,cjs.Ease.get(-1)).to({regX:0,regY:-0.2,rotation:0,x:0,y:-0.2,startPosition:22},3,cjs.Ease.get(1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,0,242.5,295.4);


// stage content:
(lib.bell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bell
	this.instance = new lib.bell_anim_container("single",0);
	this.instance.parent = this;
	this.instance.setTransform(25.6,28.1,0.099,0.099,0,0,0,0.5,170.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({mode:"synched",loop:false},0).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.5,36.2,23.9,29.1);
// library properties:
lib.properties = {
	id: '1653758FCB754BF9BE27C148A847B15C',
	width: 50,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1653758FCB754BF9BE27C148A847B15C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;