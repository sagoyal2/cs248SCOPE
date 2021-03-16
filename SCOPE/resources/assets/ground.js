//Coordinates are in object space (always look down negative z-axis)

function set_ground_position(gl) {

	var positions = [

		//BOTTOM
		-1,  0,   1,
     1,  0,  -1,
		-1,  0,  -1,
		 1,  0,  -1,
    -1,  0,   1,
		 1,  0,   1,

	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}


function set_ground_color(gl) {
	//all sides are the same color

	var colors = [
		//BOTTOM
		133, 174, 212,
		133, 174, 212,
		133, 174, 212,
		133, 174, 212,
		133, 174, 212,
		133, 174, 212,
    ];

    var color_2 = colors.map(function(item) { return item/256 });

    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(color_2), gl.STATIC_DRAW);
}

//QUOKKA
/*

Design:

we choose to use a depth buffer esque way of assigning color to each fragment, not
real lighting since that was already covered in lecture

we use multiple shaders in the same scene


*/