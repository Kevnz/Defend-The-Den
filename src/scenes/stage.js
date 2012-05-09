Crafty.scene("stage", function() {

	var elements = [
        "src/entities/skoll.js",
        "src/entities/angleIndicator.js",
        "src/interfaces/battleground.js",
	];
	
	require(elements, function() {
	    new Battleground();
	    
		sc['skoll'] = new Skoll();
		sc['angleIndicator'] = new AngleIndicator({parent : sc['skoll'].getEntity()});
        Crafty.bind("GlobalClick", function(position) {
            var from = {
                x: sc['skoll'].getEntity()._x,
                y: sc['skoll'].getEntity()._y
            };
            var by = sc['angleIndicator'].getEntity().moveByRatio;
            var options = { speed : 8 };
            var axe = Crafty.e("Axe").fire(from, by, options);
        });

	});	
});
