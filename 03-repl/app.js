var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
	console.log("Ready event. Repl instance auto-initialized!");
var inc = 1;
	var led = new five.Led(13);
	var servo = new five.Servo({
		pin: 10,
		startAt: 90
	});

	this.repl.inject({
		// Allow limited on/off control access to the
		// Led instance from the REPL.
		on: function () {
			console.log("led on!");
			led.on();
		},
		off: function () {
			console.log("led off!");
			led.off();
		},
		blink: function (timer) {
			console.log("led blinking at interval " + timer + 'ms');
			led.blink(timer);
		},
		status: function () {
			led.blink(50);
			console.log("Getting status");

			setTimeout(function () {
				led.off();
				console.log("Led interface on pin 13");
			}, 10000);
		},
		sweep: function(val){
			
			//set
			servo.to(val);
/*			
val+=inc;
			if(val == 0 || val == 255){
				inc = -inc;
			}
*/		}
		

	});
	this.on('exit', function () {
		console.log('ended session');
		led.off()
	})
});
