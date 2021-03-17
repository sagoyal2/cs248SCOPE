function set_lamppost_position(gl) {

	var positions = [
	  
	  // POST
		//FRONT
		-0.1,  -2,  0.1,
		 0.1,  -2,  0.1,
		 0.1,   2,  0.1,
		 0.1,   2,  0.1,
		-0.1,   2,  0.1,
		-0.1,  -2,  0.1,
		
		//RIGHT
		 0.1,  -2,   0.1,
		 0.1,  -2,  -0.1,
		 0.1,   2,  -0.1,
		 0.1,   2,  -0.1,
		 0.1,   2,   0.1,
		 0.1,  -2,   0.1,

		//TOP
		-0.1,   2,   0.1,
		 0.1,   2,   0.1,
		 0.1,   2,  -0.1,
		 0.1,   2,  -0.1,
		-0.1,   2,  -0.1,
		-0.1,   2,   0.1,

		//LEFT
		-0.1,  -2,   0.1,
		-0.1,   2,  -0.1,
		-0.1,  -2,  -0.1,
		-0.1,  -2,   0.1,
		-0.1,   2,   0.1,
		-0.1,   2,  -0.1,

		//BACK
		-0.1,  -2,  -0.1,
		-0.1,   2,  -0.1,
		 0.1,   2,  -0.1,
		 0.1,   2,  -0.1,
		 0.1,  -2,  -0.1,
		-0.1,  -2,  -0.1,

		//BOTTOM
		-0.1,  -2,   0.1,
		-0.1,  -2,  -0.1,
		 0.1,  -2,  -0.1,
		 0.1,  -2,  -0.1,
		 0.1,  -2,   0.1,
		-0.1,  -2,   0.1,
		
		// LIGHT
    //FRONT
		-0.3,  2,  0.3,
		 0.3,  2,  0.3,
		 0.3,   3,  0.3,
		 0.3,   3,  0.3,
		-0.3,   3,  0.3,
		-0.3,  2,  0.3,

		//RIGHT
		 0.3,  2,   0.3,
		 0.3,  2,  -0.3,
		 0.3,   3,  -0.3,
		 0.3,   3,  -0.3,
		 0.3,   3,   0.3,
		 0.3,  2,   0.3,

		//TOP
		-0.3,   3,   0.3,
		 0.3,   3,   0.3,
		 0.3,   3,  -0.3,
		 0.3,   3,  -0.3,
		-0.3,   3,  -0.3,
		-0.3,   3,   0.3,

		//LEFT
		-0.3,  2,   0.3,
		-0.3,   3,  -0.3,
		-0.3,  2,  -0.3,
		-0.3,  2,   0.3,
		-0.3,   3,   0.3,
		-0.3,   3,  -0.3,

		//BACK
		-0.3,  2,  -0.3,
		-0.3,   3,  -0.3,
		 0.3,   3,  -0.3,
		 0.3,   3,  -0.3,
		 0.3,  2,  -0.3,
		-0.3,  2,  -0.3,

		//BOTTOM
		-0.3,  2,   0.3,
		-0.3,  2,  -0.3,
		 0.3,  2,  -0.3,
		 0.3,  2,  -0.3,
		 0.3,  2,   0.3,
		-0.3,  2,   0.3,
		
		// LIGHT COVER
		//-0.4,   3,   0.4,
		 //0.4,   3,   0.4,
		 //0.4,   3,  -0.4,
		 //0.4,   3,  -0.4,
		//-0.4,   3,  -0.4,
		//-0.4,   3,   0.4,
	];
	
	

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}


function set_lamppost_color(gl) {
	//all sides are the same color

	var colors = [
		//FRONT
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,

		//RIGHT
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,

		//TOP
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,

		//LEFT
    20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,


		//BACK
    20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,

		//BOTTOM
    20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,
		20, 20, 19,

		//FRONT
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,

		//RIGHT
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,

		//TOP
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,

		//LEFT
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,

		//BACK
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,

		//BOTTOM
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
		255, 162, 0,
    ];

    var color_2 = colors.map(function(item) { return item/256 });
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(color_2), gl.STATIC_DRAW);
}

function set_lamppost_normal(gl) {
	
	var normals = [
	  // POST
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
		 
		 // LIGHT 
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
		 
		 // LIGHT COVER
		 //TOP (positive z)
		 //0,  0,   1,
		 //0,  0,   1,		 
		 //0,  0,   1,
		// 0,  0,   1,
		 //0,  0,   1,		 
		 //0,  0,   1, 
	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);

}