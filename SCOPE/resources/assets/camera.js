//Coordinates are in object space (always look down negative z-axis)

function set_camera_position(gl) {

	var positions = [

    // CAMERA BASE
    //FRONT
		-1.2,  -0.8,  0.4,
		 1.2,  -0.8,  0.4,
		 1.2,   0.8,  0.4,
		 1.2,   0.8,  0.4,
		-1.2,   0.8,  0.4,
		-1.2,  -0.8,  0.4,

		//RIGHT
		 1.2,  -0.8,   0.4,
		 1.2,  -0.8,  -0.4,
		 1.2,   0.8,  -0.4,
		 1.2,   0.8,  -0.4,
		 1.2,   0.8,   0.4,
		 1.2,  -0.8,   0.4,

		//TOP
		-1.2,   0.8,   0.4,
		 1.2,   0.8,   0.4,
		 1.2,   0.8,  -0.4,
		 1.2,   0.8,  -0.4,
		-1.2,   0.8,  -0.4,
		-1.2,   0.8,   0.4,

		//LEFT
		-1.2,  -0.8,   0.4,
		-1.2,   0.8,  -0.4,
		-1.2,  -0.8,  -0.4,
		-1.2,  -0.8,   0.4,
		-1.2,   0.8,   0.4,
		-1.2,   0.8,  -0.4,

		//BACK
		-1.2,  -0.8,  -0.4,
		-1.2,   0.8,  -0.4,
		 1.2,   0.8,  -0.4,
		 1.2,   0.8,  -0.4,
		 1.2,  -0.8,  -0.4,
		-1.2,  -0.8,  -0.4,

		//BOTTOM
		-1.2,  -0.8,   0.4,
		-1.2,  -0.8,  -0.4,
		 1.2,  -0.8,  -0.4,
		 1.2,  -0.8,  -0.4,
		 1.2,  -0.8,   0.4,
		-1.2,  -0.8,   0.4,
		
		// CAMERA LENS
    //FRONT
		-0.4,  -0.4,  0.8,
		 0.4,  -0.4,  0.8,
		 0.4,   0.4,  0.8,
		 0.4,   0.4,  0.8,
		-0.4,   0.4,  0.8,
		-0.4,  -0.4,  0.8,

		//RIGHT
		 0.4,  -0.4,   0.8,
		 0.4,  -0.4,  0.4,
		 0.4,   0.4,  0.4,
		 0.4,   0.4,  0.4,
		 0.4,   0.4,   0.8,
		 0.4,  -0.4,   0.8,

		//TOP
		-0.4,   0.4,   0.8,
		 0.4,   0.4,   0.8,
		 0.4,   0.4,   0.4,
		 0.4,   0.4,   0.4,
		-0.4,   0.4,   0.4,
		-0.4,   0.4,   0.8,

		//RIGHT
		 -0.4,  -0.4,   0.8,
		 -0.4,  -0.4,  0.4,
		 -0.4,   0.4,  0.4,
		 -0.4,   0.4,  0.4,
		 -0.4,   0.4,   0.8,
		 -0.4,  -0.4,   0.8,

		//BACK
		-0.4,  -0.4,  0.4,
		-0.4,   0.4,  0.4,
		 0.4,   0.4,  0.4,
		 0.4,   0.4,  0.4,
		 0.4,  -0.4,  0.4,
		-0.4,  -0.4,  0.4,

		//BOTTOM
		-0.4,  -0.4,   0.8,
		-0.4,  -0.4,  0.4,
		 0.4,  -0.4,  0.4,
		 0.4,  -0.4,  0.4,
		 0.4,  -0.4,   0.8,
		-0.4,  -0.4,   0.8,
		
		// CAMERA TOP
    //FRONT
		-0.6,  0.8,  0.4,
		 0.6,  0.8,  0.4,
		 0.6,   1.2,  0.4,
		 0.6,   1.2,  0.4,
		-0.6,   1.2,  0.4,
		-0.6,  0.8,  0.4,

		//RIGHT
		0.6,  0.8,   0.4,
		 0.6,  0.8,  -0.4,
		 0.6, 1.2,  -0.4,
		 0.6,   1.2,  -0.4,
		0.6,   1.2,   0.4,
		 0.6,  0.8,   0.4,

		//TOP
		-0.6,   1.2,   0.4,
		 0.6,   1.2,   0.4,
		 0.6,   1.2,  -0.4,
		 0.6,   1.2,  -0.4,
		-0.6,   1.2,  -0.4,
		-0.6,   1.2,   0.4,

		//LEFT
		-0.6,  0.8,   0.4,
		-0.6,   1.2,  -0.4,
		-0.6,  0.8,  -0.4,
		-0.6,  0.8,   0.4,
		-0.6,   1.2,   0.4,
		-0.6,   1.2,  -0.4,

		//BACK
		-0.6,  0.8,  -0.4,
		-0.6,   1.2,  -0.4,
		 0.6,   1.2,  -0.4,
		 0.6,   1.2,  -0.4,
		 0.6,  0.8,  -0.4,
		-0.6,  0.8,  -0.4,
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}


function set_camera_color(gl) {
	//all sides are the same color

	var colors = [
	  
	  // CAMERA BASE
		//FRONT
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,

		//RIGHT
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,

		//TOP
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168, 

		//LEFT
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,

		//BACK
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,


		//BOTTOM
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		
		// CAMERA LENS
		//FRONT
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,

		//RIGHT
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,

		//TOP
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,

		//LEFT
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,

		//BACK
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,


		//BOTTOM
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		106, 222, 247,
		
		// CAMERA TOP
		//FRONT
				//FRONT
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,

		//RIGHT
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,

		//TOP
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168, 

		//LEFT
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,

		//BACK
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,
		7, 36, 168,

    ];

    var color_2 = colors.map(function(item) { return item/256 });

    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(color_2), gl.STATIC_DRAW);
}

function set_camera_normal(gl) {
	
	var normals = [
	  // CAMERA BASE
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

		//TOP (positive y)
		 0,  1,   0,
		 0,  1,   0,		 
		 0,  1,   0,
		 0,  1,   0,
		 0,  1,   0,		 
		 0,  1,   0, 

		//LEFT (negative x)
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,

		//BACK (negative z)
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,

		//BOTTOM (negative z)
		 0,  -1,  0,
		 0,  -1,  0,		 
		 0,  -1,  0,
		 0,  -1,  0,
		 0,  -1,  0,		 
		 0,  -1,  0,
		 
		 // CAMERA TOP
		 
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

		//TOP (positive y)
		 0,  1,   0,
		 0,  1,   0,		 
		 0,  1,   0,
		 0,  1,   0,
		 0,  1,   0,		 
		 0,  1,   0, 

		//LEFT (negative x)
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,

		//BACK (negative z)
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,

		//BOTTOM (negative z)
		 0,  -1,  0,
		 0,  -1,  0,		 
		 0,  -1,  0,
		 0,  -1,  0,
		 0,  -1,  0,		 
		 0,  -1,  0,
		 
		 // CAMERA BASE
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

		//TOP (positive y)
		 0,  1,   0,
		 0,  1,   0,		 
		 0,  1,   0,
		 0,  1,   0,
		 0,  1,   0,		 
		 0,  1,   0, 

		//LEFT (negative x)
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,
		-1,  0,   0,
		-1,  0,   0,		 
		-1,  0,   0,

		//BACK (negative z)
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,
		 0,  0,  -1,
		 0,  0,  -1,		 
		 0,  0,  -1,
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);

}