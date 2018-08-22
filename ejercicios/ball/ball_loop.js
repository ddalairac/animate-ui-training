(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AjzD0QhlhlAAiPQAAiOBlhlQBlhlCOAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAQiOAAhlhlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-34.5,69,69);


(lib.ballbounceeasingstreach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,33,1,1,0,0,0,0,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,scaleX:1,scaleY:1,y:3},0).wait(1).to({scaleX:0.99,scaleY:1.01,y:11.8},0).wait(1).to({scaleX:0.98,scaleY:1.02,y:26.7},0).wait(1).to({scaleX:0.97,scaleY:1.04,y:47.4},0).wait(1).to({scaleX:0.95,scaleY:1.06,y:74},0).wait(1).to({scaleX:0.92,scaleY:1.09,y:106.6},0).wait(1).to({scaleX:0.9,scaleY:1.12,y:145.1},0).wait(1).to({scaleX:0.86,scaleY:1.15,y:189.6},0).wait(1).to({regY:33,scaleX:0.83,scaleY:1.2,y:279.3},0).to({scaleX:1.44,scaleY:0.64,y:289},1).to({scaleX:0.83,scaleY:1.2,y:279.3},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:33},8,cjs.Ease.get(1)).wait(1));

	// Layer_2
	this.instance_1 = new lib.ball("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,290.3,1.294,0.19);
	this.instance_1.alpha = 0.07;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-36,-36,73,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,scaleX:0.59,scaleY:0.09,alpha:0.199},10).to({regX:0,scaleX:1.29,scaleY:0.19,alpha:0.07},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-34.5,89.3,331.3);


(lib.ballbounceeasing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,33,1,1,0,0,0,0,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:289},10,cjs.Ease.get(-1)).to({y:33},9,cjs.Ease.get(1)).wait(1));

	// Layer_2
	this.instance_1 = new lib.ball("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,290.3,1.294,0.19);
	this.instance_1.alpha = 0.07;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-36,-36,73,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,scaleX:0.59,scaleY:0.09,alpha:0.199},10).to({regX:0,scaleX:1.29,scaleY:0.19,alpha:0.07},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-34.5,89.3,331.3);


(lib.ballbounce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ball("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,33,1,1,0,0,0,0,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:289},10).to({y:33},9).wait(1));

	// Layer_2
	this.instance_1 = new lib.ball("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,290.3,1.294,0.19);
	this.instance_1.alpha = 0.07;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-36,-36,73,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,scaleX:0.59,scaleY:0.09,alpha:0.199},10).to({regX:0,scaleX:1.29,scaleY:0.19,alpha:0.07},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-34.5,89.3,331.3);


// stage content:
(lib.ball_loop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXBEIAAg/QAAgLgFgGQgGgFgJAAQgHAAgGADQgHAFgDAGQgDAFAAAMIAAA2IgQAAIAAiHIAQAAIAAAxQAMgOARAAQALAAAIAFQAIAEAEAHQADAIAAANIAAA/g");
	this.shape.setTransform(501.9,42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAnQgNgNAAgaQAAgPAFgMQAGgMALgFQAKgHAMABQAQgBAKAJQALAIACAPIgQACQgCgJgGgFQgGgGgIAAQgMABgIAIQgIAJAAATQAAAUAIAJQAIAJALAAQAKAAAGgGQAHgGACgMIAQABQgDARgLAKQgLAJgQAAQgTABgMgNg");
	this.shape_1.setTransform(492.1,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCBAQgFgDgCgEQgCgFAAgPIAAg4IgMAAIAAgNIAMAAIAAgYIAPgKIAAAiIARAAIAAANIgRAAIAAA5IACAJIADADIAFABIAHAAIADAPIgNABQgJAAgEgDg");
	this.shape_2.setTransform(484.6,42.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAnQgNgOAAgYQAAgYAOgOQAMgNAUAAQATAAANANQANAOAAAXIgBAFIhJAAQABAPAJAKQAIAIAMAAQAIAAAHgFQAGgFAFgKIAQACQgDAPgLAIQgMAJgQgBQgVABgNgNgAAcgIQgCgNgEgGQgJgKgMAAQgLAAgIAIQgHAIgCANIA3AAIAAAAg");
	this.shape_3.setTransform(476.6,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAzIAAhiIAPAAIAAAPQAGgLAFgDQAEgEAFABQAJgBAJAGIgGAQQgGgEgGAAQgGAAgDAEQgFADgBAFQgDAKAAAKIAAAzg");
	this.shape_4.setTransform(468.9,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCBAQgFgDgCgEQgCgFAAgPIAAg4IgMAAIAAgNIAMAAIAAgYIAQgKIAAAiIARAAIAAANIgRAAIAAA5IAAAJIADADIAGABIAIAAIACAPIgMABQgKAAgEgDg");
	this.shape_5.setTransform(462.5,42.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbArQgKgHgDgQIARgDQABALAGAFQAHAFAKAAQAMAAAFgFQAGgFAAgFQAAgHgFgCQgEgDgNgDQgSgFgHgDQgHgCgDgHQgEgFAAgIQAAgHADgFQADgFAFgFQAEgCAHgCQAGgCAIAAQALgBAJAEQAIADAEAGQAFAGABAKIgQABQgBgHgGgEQgFgFgJAAQgLAAgFAFQgFADAAAFQAAADACADQACADAEACIAOAEQASAEAHADQAHADAEAFQAEAGAAAJQAAAIgFAHQgFAHgJAFQgJADgMAAQgSABgKgJg");
	this.shape_6.setTransform(454.9,44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZA0QgIAJgKAFQgJAEgLAAQgVAAgMgOQgKgMAAgOQAAgMAIgKQAIgKAQgHQgJgLgDgHQgDgGAAgGQAAgMAKgJQAJgKAPAAQANAAAJAJQAIAIAAAMQAAAUgZAOIAYAeQAEgJADgKIARADQgFASgHAMQAJAMAMAJIgLANQgKgHgLgMgAghAQQgFAGAAAHQAAAJAGAIQAHAJAMAAQAIAAAHgEQAIgFAFgHIgegmQgOAIgEAHgAgRgzQgFAEAAAGIACAHIAFAHIAHAJQAKgHADgEQADgFAAgGQAAgHgEgEQgEgFgGAAQgHAAgEAFg");
	this.shape_7.setTransform(513.7,25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXBEIAAg+QAAgMgFgFQgGgHgJAAQgHAAgGAFQgHAEgDAGQgDAFAAAMIAAA2IgQAAIAAiHIAQAAIAAAxQAMgOARAAQALAAAIAEQAIAFAEAHQADAIAAAOIAAA+g");
	this.shape_8.setTransform(496.6,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAsQgKgIgDgQIARgCQABAKAGAEQAHAGAKAAQAMAAAFgEQAGgFAAgHQAAgFgFgEQgEgCgNgDQgSgFgHgDQgHgDgDgFQgEgHAAgHQAAgHADgFQADgGAFgDQAEgDAHgCQAGgCAIgBQALABAJADQAIAEAEAFQAFAGABAJIgQACQgBgHgGgFQgFgDgJAAQgLAAgFADQgFAEAAAFQAAAEACACQACACAEACIAOAFQASAFAHADQAHABAEAHQAEAFAAAIQAAAJgFAIQgFAGgJAEQgJAEgMABQgSgBgKgHg");
	this.shape_9.setTransform(486.5,27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgHADgGQADgFAGgEQAFgDAHgCIAOgDQAUgCAJgDIAAgEQAAgLgEgEQgHgGgMABQgLAAgGADQgFAFgDALIgRgDQADgKAFgHQAFgGAKgDQAJgFAMAAQANAAAHADQAIADAEAFQAEAEABAIIABAPIAAAVQAAAYABAGQABAGADAFIgRAAQgDgEAAgHQgKAHgIADQgIADgKABQgQAAgJgIgAgDAHIgPADQgEACgCADQgDAEAAAEQAAAGAGAFQAFAEAJAAQAJAAAHgDQAIgFADgHQADgGAAgLIAAgGQgJAEgRADg");
	this.shape_10.setTransform(476.5,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAvQgHgDgDgFQgEgFgCgIIgBgPIAAg8IARAAIAAA1IABASQACAHAEADQAFAEAIAAQAGAAAIgEQAGgEADgGQACgHAAgMIAAg0IARAAIAABhIgPAAIAAgOQgMAQgSAAQgJAAgIgDg");
	this.shape_11.setTransform(466,27.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAaBGIAAgxQgEAFgHAEQgHAEgIAAQgQAAgNgPQgNgNAAgXQAAgPAGgMQAFgMAKgGQAJgGAMgBQARAAALAQIAAgNIAPAAIAACIgAgRguQgHAKAAATQAAASAIAKQAIAJAKAAQAKAAAIgJQAIgJAAgSQAAgTgIgKQgIgKgLAAQgKAAgIAJg");
	this.shape_12.setTransform(455.1,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaBBQgNgFgHgLQgHgLAAgNIARgCQABAKAEAHQAFAGAJAEQAJAEALAAQAKAAAIgDQAIgDAEgFQAEgFAAgHQAAgHgEgEQgEgFgIgDQgGgDgRgDQgTgFgIgDQgJgFgFgIQgFgIAAgJQAAgKAGgJQAGgJALgEQALgFAOgBQAOABAMAFQALAEAGAKQAHAKAAALIgRABQgCgMgIgHQgIgGgPgBQgQAAgHAHQgIAFAAAJQAAAIAGAEQAFAFAVAFQAWAFAIAEQAMAEAFAIQAGAJAAALQAAAKgGAKQgGAKgMAFQgMAFgOAAQgSAAgMgFg");
	this.shape_13.setTransform(443.8,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcA/QgMgJABgQIAQADQABAHAFAEQAGAEALAAQAKAAAGgEQAHgFACgIQABgFAAgQQgLANgPgBQgUAAgLgOQgMgPAAgTQAAgOAGgMQAFgMAKgHQAJgGANAAQAQAAAMAOIAAgMIAPAAIAABUQAAAXgEAKQgFAKgKAFQgKAGgOAAQgSgBgKgHgAgSguQgHAIAAATQAAATAHAIQAIAJALAAQALAAAIgJQAIgIAAgTQAAgSgIgJQgIgKgMABQgJAAgJAJg");
	this.shape_14.setTransform(317.9,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAYAyIAAg6QAAgLgCgEQgCgFgFgEQgFgDgHAAQgKAAgHAHQgIAHAAASIAAA1IgRAAIAAhhIAPAAIAAAOQALgQATAAQAKAAAHADQAHADAEAFQAEAGABAHIABAQIAAA7g");
	this.shape_15.setTransform(307.6,36.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBEIAAhhIAQAAIAABhgAgHgwIAAgTIAQAAIAAATg");
	this.shape_16.setTransform(300.3,34.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbAsQgKgIgDgQIARgCQABAJAGAFQAHAGAKAAQAMAAAFgFQAGgEAAgHQAAgGgFgDQgEgCgNgDQgSgFgHgDQgHgDgDgFQgEgHAAgHQAAgGADgGQADgFAFgEQAEgDAHgCQAGgCAIAAQALAAAJADQAIADAEAGQAFAGABAJIgQACQgBgHgGgFQgFgDgJAAQgLAAgFADQgFAEAAAFQAAAEACACQACACAEACIAOAFQASAEAHADQAHADAEAFQAEAGAAAJQAAAIgFAIQgFAGgJAEQgJAEgMAAQgSAAgKgHg");
	this.shape_17.setTransform(293.3,36.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgHADgFQADgHAGgDQAFgDAHgCIAOgCQAUgCAJgEIAAgEQAAgLgEgEQgHgGgMABQgLAAgGADQgFAFgDALIgRgDQADgLAFgGQAFgGAKgEQAJgDAMAAQANgBAHADQAIAEAEAEQAEAFABAGIABAQIAAAVQAAAXABAHQABAGADAFIgRAAQgDgFAAgGQgKAHgIADQgIADgKAAQgQABgJgIgAgDAGIgPAEQgEACgCADQgDADAAAFQAAAGAGAFQAFAEAJABQAJgBAHgDQAIgFADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_18.setTransform(283.3,36.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAsQgKgIgDgQIARgCQABAJAGAFQAHAGAKAAQAMAAAFgFQAGgEAAgHQAAgGgFgDQgEgCgNgDQgSgFgHgDQgHgDgDgFQgEgHAAgHQAAgGADgGQADgFAFgEQAEgDAHgCQAGgCAIAAQALAAAJADQAIADAEAGQAFAGABAJIgQACQgBgHgGgFQgFgDgJAAQgLAAgFADQgFAEAAAFQAAAEACACQACACAEACIAOAFQASAEAHADQAHADAEAFQAEAGAAAJQAAAIgFAIQgFAGgJAEQgJAEgMAAQgSAAgKgHg");
	this.shape_19.setTransform(273.3,36.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgyBEIAAiHIBiAAIAAAQIhQAAIAAAqIBLAAIAAAPIhLAAIAAAuIBTAAIAAAQg");
	this.shape_20.setTransform(262.5,34.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBEIAAiHIAPAAIAACHg");
	this.shape_21.setTransform(108.9,34.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgHADgFQADgHAGgDQAFgDAHgCIAOgCQAUgCAJgEIAAgEQAAgLgEgEQgHgGgMABQgLAAgGADQgFAFgDALIgRgDQADgLAFgGQAFgGAKgEQAJgDAMAAQANgBAHADQAIAEAEAEQAEAFABAGIABAQIAAAVQAAAXABAHQABAGADAFIgRAAQgDgFAAgGQgKAHgIADQgIADgKAAQgQABgJgIgAgDAGIgPAEQgEACgCADQgDADAAAFQAAAGAGAFQAFAEAJABQAJgBAHgDQAIgFADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_22.setTransform(101.5,36.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggAnQgMgOAAgYQAAgYAMgNQANgOAUAAQATAAANANQANANAAAYIgBAEIhJAAQACAQAIAJQAIAJAMAAQAIAAAHgFQAGgEAFgLIARACQgFAPgKAJQgMAHgQAAQgVAAgNgMgAAcgIQgCgMgEgHQgJgKgMABQgLgBgHAIQgIAIgBANIA2AAIAAAAg");
	this.shape_23.setTransform(91,36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAXAyIAAg6QAAgLgBgEQgDgFgEgEQgFgDgHAAQgKAAgHAHQgJAHABASIAAA1IgRAAIAAhhIAPAAIAAAOQALgQATAAQAKAAAHADQAHADAEAFQADAGACAHIABAQIAAA7g");
	this.shape_24.setTransform(80.5,36.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBEIAAhhIAQAAIAABhgAgHgwIAAgTIAQAAIAAATg");
	this.shape_25.setTransform(73.1,34.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgqBEIAAiHIASAAIAAB3IBDAAIAAAQg");
	this.shape_26.setTransform(66.1,34.8);

	this.instance = new lib.ballbounce();
	this.instance.parent = this;
	this.instance.setTransform(83.5,102.6,1,1,0,0,0,0,2);

	this.instance_1 = new lib.ballbounceeasing();
	this.instance_1.parent = this;
	this.instance_1.setTransform(289.5,102.6,1,1,0,0,0,0,2);

	this.instance_2 = new lib.ballbounceeasingstreach();
	this.instance_2.parent = this;
	this.instance_2.setTransform(477.5,102.6,1,1,0,0,0,0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(332.7,213.5,486.4,383.9);
// library properties:
lib.properties = {
	id: 'F0359F14683F47CDA9A45213BFC404F9',
	width: 589,
	height: 400,
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
an.compositions['F0359F14683F47CDA9A45213BFC404F9'] = {
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