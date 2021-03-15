//Coordinates are in object space (always look down negative z-axis)

function set_cube_position(gl) {

	var positions = [

		//FRONT
		-1,  -1,  1,
		 1,  -1,  1,
		 1,   1,  1,
		 1,   1,  1,
		-1,   1,  1,
		-1,  -1,  1,

		//RIGHT
		 1,  -1,   1,
		 1,  -1,  -1,
		 1,   1,  -1,
		 1,   1,  -1,
		 1,   1,   1,
		 1,  -1,   1,

		//TOP
		-1,  -1,   1,
		 1,   1,   1,
		 1,   1,  -1,
		 1,   1,  -1,
		 1,   1,  -1,
		-1,   1,  -1,
		-1,   1,   1, 

		//LEFT
		-1,  -1,   1,
		-1,   1,  -1,
		-1,  -1,  -1,
		-1,  -1,   1,
		-1,   1,   1,
		-1,   1,  -1,

		//BACK
		-1,  -1,  -1,
		-1,   1,  -1,
		 1,   1,  -1,
		 1,   1,  -1,
		 1,  -1,  -1,
		-1,  -1,  -1,

		//BOTTOM
		-1,  -1,   1,
		-1,  -1,  -1,
		 1,  -1,  -1,
		 1,  -1,  -1,
		 1,  -1,   1,
		-1,  -1,   1,

	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}


function set_cube_color(gl) {
	//all sides are the same color
	
	var colors = [
		//FRONT
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,

		//RIGHT
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,

		//TOP
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120, 

		//LEFT
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,

		//BACK
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,

		//BOTTOM
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
		200,  70, 120,
    ];

    gl.bufferData( gl.ARRAY_BUFFER, new Uint8Array(colors), gl.STATIC_DRAW);
}

function set_cube_normal(gl) {
	
	var normals = [
		//FRONT (positive z)
		 0,  0,   1,
		 0,  0,   1,		 
		 0,  0,   1,
		 0,  0,   1,
		 0,  0,   1,		 
		 0,  0,   1,

		//RIGHT (positive x)
		 1,  0,   0,
		 1,  0,   0,		 
		 1,  0,   0,
		 1,  0,   0,
		 1,  0,   0,		 
		 1,  0,   0,

		//TOP (positive z)
		 0,  0,   1,
		 0,  0,   1,		 
		 0,  0,   1,
		 0,  0,   1,
		 0,  0,   1,		 
		 0,  0,   1, 

		//LEFT (negative x)
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,

		//BACK (positive z)
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,

		//BOTTOM (negative z)
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);

}



