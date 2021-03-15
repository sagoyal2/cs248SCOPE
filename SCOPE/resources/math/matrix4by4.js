/*
This is a library for 4 by 4 matrix math operations

Adapted from:
1. //https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html
2. Stanford CS248 Assignment 3
*/


let MatType = Float32Array;

function radToDeg(r) {
	return r * 180 / Math.PI;
}

function degToRad(d) {
	return d * Math.PI / 180;
}


var m4 = {

	identity: function () {
		return [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		];
	},

	translation: function (tx, ty, tz) {
		return [
			1, 0, 0, tx,
			0, 1, 0, ty,
			0, 0, 1, tz,
			0, 0, 0, 1
		];
	},

	xRotation: function(angleInRadians) {
		var c = Math.cos(angleInRadians);
		var s = Math.sin(angleInRadians);
 
		return [
			1, 0, 0, 0,
			0, c, -s, 0,
			0, s, c, 0,
			0, 0, 0, 1,
		];
 	 },
 
	yRotation: function(angleInRadians) {
		var c = Math.cos(angleInRadians);
		var s = Math.sin(angleInRadians);

		return [
			c, 0, s, 0,
			0, 1, 0, 0,
			-s, 0, c, 0,
			0, 0, 0, 1,
		];
	},
 
	zRotation: function(angleInRadians) {
		var c = Math.cos(angleInRadians);
		var s = Math.sin(angleInRadians);

		return [
			c, -s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1,
		];
	},
 
	scaling: function(sx, sy, sz) {
	return [
		sx, 0,  0,  0,
		0, sy,  0,  0,
		0,  0, sz,  0,
		0,  0,  0,  1,
		];
	},

  	transpose: function transpose(m, dst) {
    return [ 
    	m[0], m[4],  m[8], m[12],
    	m[1], m[5],  m[9], m[13],
    	m[2], m[6], m[10], m[14],
    	m[3], m[7], m[11], m[15],
    	];
  	},

	// translate: function(m, tx, ty, tz) {
	// 	return m4.multiply(m4.translation(tx, ty, tz), m);
	// },

	// xRotate: function(m, angleInRadians) {
	// 	return m4.multiply(m4.xRotation(angleInRadians), m);
	// },

	// yRotate: function(m, angleInRadians) {
	// 	return m4.multiply(m4.yRotation(angleInRadians), m);
	// },

	// zRotate: function(m, angleInRadians) {
	// 	return m4.multiply(m4.zRotation(angleInRadians), m);
	// },

	// scale: function(m, sx, sy, sz) {
	// 	return m4.multiply(m4.scaling(sx, sy, sz), m);
	// },


	multiply: function(a, b) {
		var a00 = a[0 * 4 + 0];
		var a01 = a[0 * 4 + 1];
		var a02 = a[0 * 4 + 2];
		var a03 = a[0 * 4 + 3];
		var a10 = a[1 * 4 + 0];
		var a11 = a[1 * 4 + 1];
		var a12 = a[1 * 4 + 2];
		var a13 = a[1 * 4 + 3];
		var a20 = a[2 * 4 + 0];
		var a21 = a[2 * 4 + 1];
		var a22 = a[2 * 4 + 2];
		var a23 = a[2 * 4 + 3];
		var a30 = a[3 * 4 + 0];
		var a31 = a[3 * 4 + 1];
		var a32 = a[3 * 4 + 2];
		var a33 = a[3 * 4 + 3];

		var b00 = b[0 * 4 + 0];
		var b01 = b[0 * 4 + 1];
		var b02 = b[0 * 4 + 2];
		var b03 = b[0 * 4 + 3];
		var b10 = b[1 * 4 + 0];
		var b11 = b[1 * 4 + 1];
		var b12 = b[1 * 4 + 2];
		var b13 = b[1 * 4 + 3];
		var b20 = b[2 * 4 + 0];
		var b21 = b[2 * 4 + 1];
		var b22 = b[2 * 4 + 2];
		var b23 = b[2 * 4 + 3];
		var b30 = b[3 * 4 + 0];
		var b31 = b[3 * 4 + 1];
		var b32 = b[3 * 4 + 2];
		var b33 = b[3 * 4 + 3];

		return [
			a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
			a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31,
			a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32,
			a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33,
			a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30,
			a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31,
			a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32,
			a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33,
			a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30,
			a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31,
			a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32,
			a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33,
			a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30,
			a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31,
			a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32,
			a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33,
		];
	},

	multiply_2: function (a, b) {
		var b00 = b[0 * 4 + 0];
		var b01 = b[0 * 4 + 1];
		var b02 = b[0 * 4 + 2];
		var b03 = b[0 * 4 + 3];
		var b10 = b[1 * 4 + 0];
		var b11 = b[1 * 4 + 1];
		var b12 = b[1 * 4 + 2];
		var b13 = b[1 * 4 + 3];
		var b20 = b[2 * 4 + 0];
		var b21 = b[2 * 4 + 1];
		var b22 = b[2 * 4 + 2];
		var b23 = b[2 * 4 + 3];
		var b30 = b[3 * 4 + 0];
		var b31 = b[3 * 4 + 1];
		var b32 = b[3 * 4 + 2];
		var b33 = b[3 * 4 + 3];
		var a00 = a[0 * 4 + 0];
		var a01 = a[0 * 4 + 1];
		var a02 = a[0 * 4 + 2];
		var a03 = a[0 * 4 + 3];
		var a10 = a[1 * 4 + 0];
		var a11 = a[1 * 4 + 1];
		var a12 = a[1 * 4 + 2];
		var a13 = a[1 * 4 + 3];
		var a20 = a[2 * 4 + 0];
		var a21 = a[2 * 4 + 1];
		var a22 = a[2 * 4 + 2];
		var a23 = a[2 * 4 + 3];
		var a30 = a[3 * 4 + 0];
		var a31 = a[3 * 4 + 1];
		var a32 = a[3 * 4 + 2];
		var a33 = a[3 * 4 + 3];
		return [
			b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
			b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
			b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
			b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
			b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
			b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
			b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
			b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
			b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
			b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
			b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
			b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
			b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
			b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
			b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
			b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
		];
	},


	projection: function(width, height, depth) {
	// Note: This matrix flips the Y axis so 0 is at the top.
	// Should I try playing with it and make it so that Y axis 0 is
	// at the bottom?

	/*

	Top Left is (0,0)... so sad... :(
	(0,0)-----------(1,0)
	|					|
	|					|
	|					|
	|					|
	|					|
	|					|
	(0,1)-----------(1,1)

	*/

		// return [
		// 	2 / width, 0, 0, 0,
		// 	0, -2 / height, 0, 0,
		// 	0, 0, 2 / depth, 0,
		// 	-1, 1, 0, 1, //this is centering the matrix
		// ];

		//this changes (0,0) to the bottom left
		return [
			2 / width, 0, 0, 0,
			0, 2 / height, 0, 0,
			0, 0, 2 / depth, 0,
			-1, -1, 0, 1, //this is centering the matrix
		];


	/*
	afterwards the coordinates look like this:

	(-1,1)-----------(1,1)
	|					|
	|					|
	|		(0,0)		|
	|					|
	|					|
	|					|
	(-1,-1)-----------(1,-1)

	*/


	/*

			y+
			|    / z- (zFar = -1) move_z = -437 something
			|   /
			|  /
			| /
		 	|_____________x+ (z value is centered at -360)
		    / 				 https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html
		   /
		  /
	 	 /
		/ z+ (zNear = 1) move_z = 0
	*/


	},

	createPerspectiveMatrix: function(fovy, aspect, near, far) {
		var f = 1.0 / Math.tan(degToRad(fovy)/2.0);
		var rangeInv = 1.0 / (near - far);

		return [
			f / aspect, 0, 0, 0,
			0, f, 0, 0,
			0, 0, (near + far) * rangeInv, -1,
			0, 0, near * far * rangeInv * 	2, 0
		];

	},

 	normalize: function(v) {
		var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
		// make sure we don't divide by 0.
		return [
		  v[0] / length,
		  v[1] / length,
		  v[2] / length,
		];
  	},

  	//a x b
  	cross: function(a, b) {
		return [
			a[1] * b[2] - a[2] * b[1],
			a[2] * b[0] - a[0] * b[2],
			a[0] * b[1] - a[1] * b[0]
		];
  	},

  	//a-b
  	subtractVectors: function(a, b){
		return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  	},

	lookAt: function(cameraPosition, target, up) {
		var zAxis = this.normalize(
		this.subtractVectors(cameraPosition, target));
		var xAxis = this.normalize(this.cross(up, zAxis));
		var yAxis = this.normalize(this.cross(zAxis, xAxis));

		var m = [
			xAxis[0], xAxis[1], xAxis[2], 0,
			yAxis[0], yAxis[1], yAxis[2], 0,
			zAxis[0], zAxis[1], zAxis[2], 0,
			cameraPosition[0], cameraPosition[1], cameraPosition[2], 1,
		];

		return m4.inverse(m);
	},

	// createWorldToCameraMatrix: function(eye, target, up) {
	// 	var w_axis = this.normalize(this.subtractVectors(target, eye));
	// 	var u_axis = this.normalize(this.cross(w_axis, up));
	// 	var v_axis = this.normalize(this.cross(u_axis, w_axis));

		
	// 	  // m[0] = u; //map to x-axis
	// 	  // m[1] = v; //map to y-axis
	// 	  // m[2] =  -w; //map to negative z-axis
		
	// 	var camera2world = [ 
	// 	u_axis[0],  v_axis[1],-w_axis[2], eye[0],
	// 	u_axis[0],  v_axis[1],-w_axis[2], eye[1],
	// 	u_axis[0],  v_axis[1],-w_axis[2], eye[2],
	// 		    0,          0,         0, 1,
	// 	];

	// 	return this.inverse(camera2world);
	// },

	// createWorldToCameraMatrix : function(eye, target, up){

	// 	var w_axis = this.normalize(this.subtractVectors(target, eye));
	// 	var u_axis = this.normalize(this.cross(w_axis, up));
	// 	var v_axis = this.normalize(this.cross(u_axis, w_axis));

		
	// 	  m[0] = u; //map to x-axis
	// 	  m[1] = v; //map to y-axis
	// 	  m[2] =  -w; //map to negative z-axis
		
	// 	var m = [ 
	// 	u_axis[0],  u_axis[1], u_axis[2], 0,
	// 	v_axis[0],  v_axis[1], v_axis[2], 0,
	// 	-w_axis[0],-w_axis[1],-w_axis[2], 0,
	// 		    0,          0,         0, 1,
	// 	];

	// 	return this.multiply(m, this.translation(-eye[0], -eye[1], -eye[2]));

	// },

	inverse: function(m, dst) {
		dst = dst || new MatType(16);
		var m00 = m[0 * 4 + 0];
		var m01 = m[0 * 4 + 1];
		var m02 = m[0 * 4 + 2];
		var m03 = m[0 * 4 + 3];
		var m10 = m[1 * 4 + 0];
		var m11 = m[1 * 4 + 1];
		var m12 = m[1 * 4 + 2];
		var m13 = m[1 * 4 + 3];
		var m20 = m[2 * 4 + 0];
		var m21 = m[2 * 4 + 1];
		var m22 = m[2 * 4 + 2];
		var m23 = m[2 * 4 + 3];
		var m30 = m[3 * 4 + 0];
		var m31 = m[3 * 4 + 1];
		var m32 = m[3 * 4 + 2];
		var m33 = m[3 * 4 + 3];
		var tmp_0  = m22 * m33;
		var tmp_1  = m32 * m23;
		var tmp_2  = m12 * m33;
		var tmp_3  = m32 * m13;
		var tmp_4  = m12 * m23;
		var tmp_5  = m22 * m13;
		var tmp_6  = m02 * m33;
		var tmp_7  = m32 * m03;
		var tmp_8  = m02 * m23;
		var tmp_9  = m22 * m03;
		var tmp_10 = m02 * m13;
		var tmp_11 = m12 * m03;
		var tmp_12 = m20 * m31;
		var tmp_13 = m30 * m21;
		var tmp_14 = m10 * m31;
		var tmp_15 = m30 * m11;
		var tmp_16 = m10 * m21;
		var tmp_17 = m20 * m11;
		var tmp_18 = m00 * m31;
		var tmp_19 = m30 * m01;
		var tmp_20 = m00 * m21;
		var tmp_21 = m20 * m01;
		var tmp_22 = m00 * m11;
		var tmp_23 = m10 * m01;

		var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
		    (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
		var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
		    (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
		var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
		    (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
		var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
		    (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

		var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

		dst[0] = d * t0;
		dst[1] = d * t1;
		dst[2] = d * t2;
		dst[3] = d * t3;
		dst[4] = d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
		      (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
		dst[5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
		      (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
		dst[6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
		      (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
		dst[7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
		      (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
		dst[8] = d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
		      (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
		dst[9] = d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
		      (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
		dst[10] = d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
		      (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
		dst[11] = d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
		      (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
		dst[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
		      (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
		dst[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
		      (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
		dst[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
		      (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
		dst[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
		      (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));

		return dst;
  }

}

















































