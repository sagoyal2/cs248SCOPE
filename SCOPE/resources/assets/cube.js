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
		-1,   1,   1,
		 1,   1,   1,
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

function set_f_position(gl) {
  var positions = new Float32Array([
          // left column back
          0,   0,  0,
          0, 150,  0,
          30,   0,  0,
          0, 150,  0,
          30, 150,  0,
          30,   0,  0,

          // top rung back
          30,   0,  0,
          100,   0,  0,
          30,  30,  0,
          30,  30,  0,
          100,   0,  0,
          100,  30,  0,

          // middle rung back
          30,  60,  0,
          30,  90,  0,
          67,  60,  0,
          30,  90,  0,
          67,  90,  0,
          67,  60,  0,

          //ALL CORRECT below
          // left column front
            0,   0,  30,
           30,   0,  30,
            0, 150,  30,
            0, 150,  30,
           30,   0,  30,
           30, 150,  30,

          // top rung front
           30, 150,  30,
           30, 120,  30,
          100, 150,  30,
          100, 150,  30,
           30, 120,  30,
          100, 120,  30,


          // middle rung front
           30,  60,  30,
           67,  60,  30,
           30,  90,  30,
           30,  90,  30,
           67,  60,  30,
           67,  90,  30,

          // // top
          //   0,   0,   0,
          // 100,   0,   0,
          // 100,   0,  30,
          //   0,   0,   0,
          // 100,   0,  30,
          //   0,   0,  30,

          // // top rung right
          // 100,   0,   0,
          // 100,  30,   0,
          // 100,  30,  30,
          // 100,   0,   0,
          // 100,  30,  30,
          // 100,   0,  30,

          // // under top rung
          // 30,   30,   0,
          // 30,   30,  30,
          // 100,  30,  30,
          // 30,   30,   0,
          // 100,  30,  30,
          // 100,  30,   0,

          // // between top rung and middle
          // 30,   30,   0,
          // 30,   60,  30,
          // 30,   30,  30,
          // 30,   30,   0,
          // 30,   60,   0,
          // 30,   60,  30,

          // // top of middle rung
          // 30,   60,   0,
          // 67,   60,  30,
          // 30,   60,  30,
          // 30,   60,   0,
          // 67,   60,   0,
          // 67,   60,  30,

          // // right of middle rung
          // 67,   60,   0,
          // 67,   90,  30,
          // 67,   60,  30,
          // 67,   60,   0,
          // 67,   90,   0,
          // 67,   90,  30,

          // // bottom of middle rung.
          // 30,   90,   0,
          // 30,   90,  30,
          // 67,   90,  30,
          // 30,   90,   0,
          // 67,   90,  30,
          // 67,   90,   0,

          // // right of bottom
          // 30,   90,   0,
          // 30,  150,  30,
          // 30,   90,  30,
          // 30,   90,   0,
          // 30,  150,   0,
          // 30,  150,  30,

          // // bottom
          // 0,   150,   0,
          // 0,   150,  30,
          // 30,  150,  30,
          // 0,   150,   0,
          // 30,  150,  30,
          // 30,  150,   0,

          // // left side
          // 0,   0,   0,
          // 0,   0,  30,
          // 0, 150,  30,
          // 0,   0,   0,
          // 0, 150,  30,
          // 0, 150,   0,
  ]);

  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
}
function set_f_normal(gl) {
  var normals = new Float32Array([
          // left column front
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,

          // top rung front
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,

          // middle rung front
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,

          // left column back
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,

          // top rung back
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,

          // middle rung back
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,

          // top
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,

          // top rung right
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,

          // under top rung
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,

          // between top rung and middle
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,

          // top of middle rung
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,

          // right of middle rung
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,

          // bottom of middle rung.
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,

          // right of bottom
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,

          // bottom
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,

          // left side
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
  ]);
  gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
}
