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
		// 151, 184, 204,
		// 151, 184, 204,
		// 151, 184, 204,
		// 151, 184, 204,
		// 151, 184, 204,
		// 151, 184, 204,
		// 256, 256, 256,
		// 256, 256, 256,
		// 256, 256, 256,
		// 256, 256, 256,
		// 256, 256, 256,
		// 256, 256, 256,	

		// 171, 174, 176,
		// 171, 174, 176,
		// 171, 174, 176,
		// 171, 174, 176,
		// 171, 174, 176,
		// 171, 174, 176,

		// 192, 183, 196,
		// 192, 183, 196,
		// 192, 183, 196,
		// 192, 183, 196,
		// 192, 183, 196,
		// 192, 183, 196,	
		105, 144, 150,
		105, 144, 150,
		105, 144, 150,
		105, 144, 150,
		105, 144, 150,
		105, 144, 150,

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