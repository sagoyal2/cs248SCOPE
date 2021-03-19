function set_police_position(gl) {

	var positions = [
    // CAR BODY
		//FRONT
		-0.75,  -0.25,  1.6,
		 0.75,  -0.25,  1.6,
		 0.75,   0.25,  1.6,
		 0.75,   0.25,  1.6,
		-0.75,   0.25,  1.6,
		-0.75,  -0.25,  1.6,

		//RIGHT
		 0.75,  -0.25,   1.6,
		 0.75,  -0.25,  -1.6,
		 0.75,   0.25,  -1.6,
	   0.75,   0.25,  -1.6,
		 0.75,   0.25,   1.6,
		 0.75,  -0.25,   1.6,

		//TOP
		-0.75,   0.25,   1.6,
		 0.75,   0.25,   1.6,
		 0.75,   0.25,  -1.6,
		 0.75,   0.25,  -1.6,
		-0.75,   0.25,  -1.6,
		-0.75,   0.25,   1.6,

		//LEFT
		-0.75,  -0.25,   1.6,
		-0.75,   0.25,  -1.6,
		-0.75,  -0.25,  -1.6,
		-0.75,  -0.25,   1.6,
		-0.75,   0.25,   1.6,
		-0.75,   0.25,  -1.6,

		//BACK
		-0.75,  -0.25,  -1.6,
		-0.75,   0.25,  -1.6,
		 0.75,   0.25,  -1.6,
		 0.75,   0.25,  -1.6,
		 0.75,  -0.25,  -1.6,
		-0.75,  -0.25,  -1.6,

		//BOTTOM
		-0.75,  -0.25,   1.6,
		-0.75,  -0.25,  -1.6,
		 0.75,  -0.25,  -1.6,
		 0.75,  -0.25,  -1.6,
		 0.75,  -0.25,   1.6,
		-0.75,  -0.25,   1.6,
		
		// CAR BUMP/WINDOWS
		//FRONT
		-0.5,  0.25,  0.5,
		 0.5,  0.25,  0.5,
		 0.5,  0.8,  0.5,
		 0.5,   0.8,  0.5,
		-0.5,   0.8,  0.5,
		-0.5,  0.25,  0.5,

		//RIGHT
		 0.5,  0.25,   0.5,
		 0.5,  0.25,  -0.5,
		 0.5,   0.8,  -0.5,
	   0.5,   0.8,  -0.5,
		 0.5,   0.8,   0.5,
		 0.5,  0.25,   0.5,

		//TOP
		-0.5,   0.8,   0.5,
		 0.5,   0.8,   0.5,
		 0.5,   0.8,  -0.5,
		 0.5,   0.8,  -0.5,
		-0.5,   0.8,  -0.5,
		-0.5,   0.8,   0.5,

		//LEFT
		-0.5,  0.25,   0.5,
		-0.5,   0.8,  -0.5,
		-0.5,  0.25,  -0.5,
		-0.5,  0.25,   0.5,
		-0.5,   0.8,   0.5,
		-0.5,   0.8,  -0.5,

		//BACK
		-0.5,  0.25,  -0.5,
		-0.5,   0.8,  -0.5,
		 0.5,   0.8,  -0.5,
		 0.5,   0.8,  -0.5,
		 0.5,  0.25,  -0.5,
		-0.5,  0.25,  -0.5,

		//BOTTOM
		-0.5,  0.25,   0.5,
		-0.5,  0.25,  -0.5,
		 0.5,  0.25,  -0.5,
		 0.5,  0.25,  -0.5,
		 0.5,  0.25,   0.5,
		-0.5,  0.25,   0.5,
		
		// WHEEL #1: FRONT LEFT
		//FRONT
		-0.75,  -0.4,  0.75,
		 -0.5,  -0.4,  0.75,
		 -0.5, -0.25,  0.75,
		 -0.5, -0.25,  0.75,
		-0.75, -0.25,  0.75,
		-0.75,  -0.4,  0.75,
		
		//RIGHT
		 -0.5,  -0.4,  0.75,
		 -0.5,  -0.4,   0.5,
		 -0.5, -0.25,   0.5,
		 -0.5, -0.25,   0.5,
		 -0.5, -0.25,  0.75,
		 -0.5,  -0.4,  0.75,

		  
		//LEFT
		-0.75,  -0.4,  0.75,
		-0.75, -0.25,   0.5,
		-0.75,  -0.4,   0.5,
		-0.75, -0.25,  0.75,
		-0.75, -0.25,    .5,
		-0.75,  -0.4,  0.75,

		//BACK
		-0.75,  -0.4,   0.5,
		 -0.5, -0.25,   0.5,
		 -0.5,  -0.4,   0.5,
		 -0.5, -0.25,   0.5,
		-0.75,  -0.4,   0.5,
		-0.75, -0.25,   0.5,

		//BOTTOM
		-0.75,  -0.4,  0.75,
		-0.75,  -0.4,   0.5,
		 -0.5,  -0.4,   0.5,
		 -0.5,  -0.4,   0.5,
		 -0.5,  -0.4,  0.75,
		-0.75,  -0.4,  0.75,
		

		// WHEEL #2: FRONT RIGHT
		//FRONT
		  0.5,  -0.4,  0.75,
		 0.75,  -0.4,  0.75,
		 0.75, -0.25,  0.75,
		 0.75, -0.25,  0.75,
		  0.5, -0.25,  0.75,
		  0.5,  -0.4,  0.75,
		
		//RIGHT
		 0.75,  -0.4,  0.75,
		 0.75,  -0.4,   0.5,
		 0.75, -0.25,   0.5,
	     0.75, -0.25,   0.5,
		 0.75, -0.25,  0.75,
		 0.75,  -0.4,  0.75,

		//LEFT
		  0.5,  -0.4,  0.75,
		  0.5, -0.25,   0.5,
		  0.5,  -0.4,   0.5,
		  0.5, -0.25,  0.75,
		  0.5, -0.25,   0.5,
		  0.5,  -0.4,  0.75,

		//BACK
		  0.5,  -0.4,   0.5,
		 0.75, -0.25,   0.5,
		 0.75,  -0.4,   0.5,
		 0.75, -0.25,   0.5,
		  0.5,  -0.4,   0.5,
		  0.5, -0.25,   0.5,

		 //BOTTOM
		  0.5,  -0.4,  0.75,
		  0.5,  -0.4,   0.5,
		 0.75,  -0.4,   0.5,
		 0.75,  -0.4,   0.5,
		 0.75,  -0.4,  0.75,
		  0.5,  -0.4,  0.75,
		
		// WHEEL #3: BACK RIGHT
		//FRONT
		  0.5,  -0.4,  -0.5,
		 0.75,  -0.4,  -0.5,
		 0.75, -0.25,  -0.5,
		 0.75, -0.25,  -0.5,
		  0.5, -0.25,  -0.5,
		  0.5,  -0.4,  -0.5,

		//RIGHT
		 0.75,  -0.4,  -0.5,
		 0.75,  -0.4, -0.75,
		 0.75, -0.25, -0.75,
	     0.75, -0.25, -0.75,
		 0.75, -0.25,  -0.5,
		 0.75,  -0.4,  -0.5,

		//LEFT
		  0.5,  -0.4,  -0.5,
		  0.5, -0.25, -0.75,
		  0.5,  -0.4, -0.75,
		  0.5, -0.25,  -0.5,
		  0.5, -0.25, -0.75,
		  0.5,  -0.4,  -0.5,
		  
		//BACK
		  0.5,  -0.4, -0.75,
		 0.75, -0.25, -0.75,
		 0.75,  -0.4, -0.75,
		 0.75, -0.25, -0.75,
		  0.5,  -0.4, -0.75,
		  0.5, -0.25, -0.75,

		//BOTTOM
		  0.5,  -0.4,  -0.5,
	 	  0.5,  -0.4, -0.75,
		 0.75,  -0.4, -0.75,
		 0.75,  -0.4, -0.75,
		 0.75,  -0.4,  -0.5,
		  0.5,  -0.4,  -0.5,
		

		// WHEEL #4: BACK LEFT
		//FRONT
		-0.75,  -0.4,  -0.5,
		 -0.5,  -0.4,  -0.5,
		 -0.5, -0.25,  -0.5,
		 -0.5, -0.25,  -0.5,
		-0.75, -0.25,  -0.5,
		-0.75,  -0.4,  -0.5,

		//RIGHT
		 -0.5,  -0.4,  -0.5,
		 -0.5,  -0.4, -0.75,
		 -0.5,  0.25, -0.75,
	     -0.5, -0.25, -0.75,
		 -0.5, -0.25,  -0.5,
		 -0.5,  -0.4,  -0.5,
		  
		//LEFT
		-0.75,  -0.4,  -0.5,
		-0.75, -0.25, -0.75,
		-0.75,  -0.4, -0.75,
		-0.75, -0.25,  -0.5,
		-0.75, -0.25, -0.75,
		-0.75,  -0.4,  -0.5,

		//BACK
		-0.75,  -0.4, -0.75,
		 -0.5, -0.25, -0.75,
		 -0.5,  -0.4, -0.75,
		 -0.5, -0.25, -0.75,
		-0.75,  -0.4, -0.75,
		-0.75, -0.25, -0.75,

		//BOTTOM
		-0.75,  -0.4,  -0.5,
		-0.75,  -0.4, -0.75,
		 -0.5,  -0.4, -0.75,
		 -0.5,  -0.4, -0.75,
		 -0.5,  -0.4,  -0.5,
		-0.75,  -0.4,  -0.5,
		
		// SIREN
  		//FRONT
		 -0.4,   0.8,   0.1,
		  0.4,   0.8,   0.1,
		  0.4,     1,   0.1,
		  0.4,     1,   0.1,
		 -0.4,     1,   0.1,
		 -0.4,   0.8,   0.1,

		//RIGHT
		  0.4,   0.8,   0.1,
		  0.4,   0.8,     0,
		  0.4,     1,     0,
	      0.4,     1,     0,
		  0.4,     1,   0.1,
		  0.4,   0.8,   0.1,

		//TOP
		 -0.4,     1,   0.1,
		  0.4,     1,   0.1,
		  0.4,     1,     0,
		  0.4,     1,     0,
		 -0.4,     1,     0,
	  	 -0.4,     1,   0.1,

		//LEFT
		 -0.4,   0.8,   0.1,
		 -0.4,     1,     0,
		 -0.4,   0.8,     0,
	     -0.4,     1,     0,
		 -0.4,   0.8,   0.1,
		 -0.4,     1,   0.1,


		//BACK
		 -0.4,   0.8,     0,
		  0.4,     1,     0,
		  0.4,   0.8,     0,
		  0.4,     1,     0,
		 -0.4,   0.8,     0,
		 -0.4,     1,     0,

	];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
}

function set_police_color(gl) {
	//all sides are the same color

	var colors = [
	  // CAR BODY 
		//FRONT
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//RIGHT
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//TOP
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//LEFT
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//BACK
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,


		//BOTTOM
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		
		// CAR BUMP/WINDOWS 
		//FRONT
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//RIGHT
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//TOP
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//LEFT
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,

		//BACK
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,


		//BOTTOM
		255, 98, 8,
		255, 98, 8,
   		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		255, 98, 8,
		
		// WHEEL #1: FRONT LEFT
		//FRONT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		
		//RIGHT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		  
		//LEFT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		
		//BACK
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		
		//BOTTOM
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		
		// WHEEL #2: FRONT RIGHT
		//FRONT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		
		//RIGHT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		
		//LEFT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		  
		//BACK
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		  
		//BOTTOM
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	    0,0,0,
		0,0,0,
		
		// WHEEL #3: BACK RIGHT
		//FRONT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	  	0,0,0,
		0,0,0,
		
		//RIGHT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	 	0,0,0,
		0,0,0,
		  
		//LEFT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	 	0,0,0,
		0,0,0,
		  
		//BACK
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	  	0,0,0,
		0,0,0,
		  
		//BOTTOM
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	  	0,0,0,
		0,0,0,
		
		// WHEEL #4: BACK LEFT
		//FRONT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
		
		//RIGHT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	  	0,0,0,
		0,0,0,
		  
		//LEFT
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	  	0,0,0,
		0,0,0,
		
		//BACK
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	  	0,0,0,
		0,0,0,
		
		//BOTTOM
		0,0,0,
		0,0,0,
		0,0,0,
		0,0,0,
	  	0,0,0,
		0,0,0,
		
		// SIREN
  //FRONT
		0, 0, 1,
		0, 0, 1,
  		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,

		//RIGHT
		0, 0, 1,
		0, 0, 1,
  		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,

		//TOP
		0, 0, 1,
		0, 0, 1,
  		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,

		//LEFT
		0, 0, 1,
		0, 0, 1,
  		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,

		//BACK
		0, 0, 1,
		0, 0, 1,
  		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
    ];

    var color_2 = colors.map(function(item) { return item/256 });

    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(color_2), gl.STATIC_DRAW);
}

function set_police_normal(gl) {
	
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
		 
    // CAR BUMP 
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
		 
		 // WHEEL #1: FRONT LEFT
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
		 
		// WHEEL #2: FRONT RIGHT
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
		 
		 // WHEEL #3: BACK RIGHT
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
		 
		 // WHEEL #4: BACK LEFT
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
		 
		 //SIREN 
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