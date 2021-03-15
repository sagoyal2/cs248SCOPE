function simple_pink_triangle(){

  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
  	console.log("ok... well apparently you don't have webgl2");
    return;
  }


  // Link the two shaders into a program
  var program = createProgramfromScripts(gl, ["pink-triangle-vertex-shader", "pink-triangle-fragment-shader"]);

  // look up where the vertex data needs to go.
  var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  // Create a buffer and put three 2d clip space points in it
  var positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var positions = [
    0, 0,
    0, 0.5,
    0.7, 0,
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Create a vertex array object (attribute state)
  var vao = gl.createVertexArray();

  // and make it the one we're currently working with
  gl.bindVertexArray(vao);

  // Turn on the attribute
  gl.enableVertexAttribArray(positionAttributeLocation);

  // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  var size = 2;          // 2 components per iteration
  var type = gl.FLOAT;   // the data is 32bit floats
  var normalize = false; // don't normalize the data
  var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
  var offset = 0;        // start at the beginning of the buffer
  gl.vertexAttribPointer(
      positionAttributeLocation, size, type, normalize, stride, offset);

  resize(gl.canvas);

  // Tell WebGL how to convert from clip space to pixels
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear the canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  // Bind the attribute/buffer set we want.
  gl.bindVertexArray(vao);

  // draw
  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 3;
  gl.drawArrays(primitiveType, offset, count);	
}


//RENDER
//simple_pink_triangle();
//square();
//cube();

function render_cube_static(){

  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("ok... well apparently you don't have webgl2");
    return;
  }

  // Link the two shaders into a program
  var program = createProgramfromScripts(gl, ["cube-static-vertex-shader", "cube-static-fragment-shader"]);

  // Get location of all [in] variables
  var position_loc = gl.getAttribLocation(program, "a_position");
  var color_loc = gl.getAttribLocation(program, "a_color");
  var obj2world2NDC_loc = gl.getUniformLocation(program, "obj2world2NDC");


  // Set ___________
  var fieldOfView = 60;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 1;
  var zFar = 2000;
  //QUOKKA
  //shouldn't these be negative?

  //camera args
  var cameraPosition = [5, 5, 5];
  var target = [0, 0, 0];
  var up = [0, 1, 0];


  var then = 0;
  requestAnimationFrame(drawScene);

  function drawScene(now) {

    // now *= 0.0001;
    // var deltaTime = now - then;
    // then = now;
    // cameraPosition[0] = 5*Math.cos(now % 2*Math.PI);
    // cameraPosition[2] = 5*Math.sin(now % 2*Math.PI);

    // Canvas Setup
    resize(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear everything
    gl.enable(gl.CULL_FACE); //only draw front facing triangles
    gl.enable(gl.DEPTH_TEST); //add depth buffer
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(program);

    //Create and Set obj2world2NDC
    var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var camera2world = m4.lookAt(cameraPosition, target, up);
    var obj2World = m4.multiply(camera2world, projectObject);
    var moveObjectInWorld = m4.translation(0.0, 0, 0);
    obj2World = m4.multiply(moveObjectInWorld, obj2World);
    gl.uniformMatrix4fv(obj2world2NDC_loc, false, obj2World);


    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc, set_cube_position);
    fill_fn(gl, color_loc, set_cube_color);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 6*2*3);//Cube = 6 faces, 2 triangles per face, 3 verticies per triangle

    //draw cube again with rotated camera
    requestAnimationFrame(drawScene);
  }
}


function render_cube_shadow(){

  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("ok... well apparently you don't have webgl2");
    return;
  }

  // Link the two shaders into a program
  var program = createProgramfromScripts(gl, ["cube-shadow-vertex-shader", "cube-shadow-fragment-shader"]);

  // Get location of all [in] variables
  var position_loc = gl.getAttribLocation(program, "a_position");
  var normal_loc = gl.getAttribLocation(program, "a_normal");
  var light_dir_loc = gl.getUniformLocation(program, "v_light_dir");
  var obj2world2NDC_loc = gl.getUniformLocation(program, "obj2world2NDC");

  // Set ___________
  var fieldOfView = 60;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 1;
  var zFar = 2000;
  //QUOKKA
  //shouldn't these be negative?

  //camera args
  var cameraPosition = [5, 5, 5];
  //var cameraPosition = [0, 5, 5];
  //var cameraPosition = [0, 3, 5]
  var target = [0, 0, 0];
  var up = [0, 1, 0];

  var light_pos = [1, 1, 1]; 

  // light_pos[1] = 1*Math.cos(degToRad(45));
  // light_pos[2] = 1*Math.sin(degToRad(45));

  var then = 0;
  requestAnimationFrame(drawScene);

  function drawScene(now) {

    // now *= 0.0001;
    // var deltaTime = now - then;
    // then = now;
    // cameraPosition[0] = 5*Math.cos(now % 2*Math.PI);
    // cameraPosition[1] = 5*Math.sin(now % 2*Math.PI);
    //light_pos[0] = 5*Math.cos(now % 2*Math.PI);
    //light_pos[2] = 5*Math.sin(now % 2*Math.PI);


    // Canvas Setup
    resize(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear everything
    gl.enable(gl.CULL_FACE); //only draw front facing triangles
    gl.enable(gl.DEPTH_TEST); //add depth buffer
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(program);

    //Create and Set obj2world2NDC
    var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var camera2world = m4.lookAt(cameraPosition, target, up);
    var obj2World = m4.multiply(camera2world, projectObject);
    var moveObjectInWorld = m4.translation(0.0, 0, 0);
    obj2World = m4.multiply(moveObjectInWorld, obj2World);
    gl.uniformMatrix4fv(obj2world2NDC_loc, false, obj2World);


    //Set light_dir
    gl.uniform3fv(light_dir_loc, m4.normalize(light_pos));

    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc, set_cube_position);
    fill_fn(gl, normal_loc, set_cube_normal);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 6*2*3);//Cube = 6 faces, 2 triangles per face, 3 verticies per triangle

    //draw cube again with rotated camera
    requestAnimationFrame(drawScene);
  }
}

function render_f(){

  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("ok... well apparently you don't have webgl2");
    return;
  }

  // Link the two shaders into a program
  var program = createProgramfromScripts(gl, ["cube-vertex-shader", "cube-fragment-shader"]);

  // Get location of all [in] variables
  var position_loc = gl.getAttribLocation(program, "a_position");
  var normal_loc = gl.getAttribLocation(program, "a_normal");
  var light_dir_loc = gl.getUniformLocation(program, "v_light_dir");
  var obj2world2NDC_loc = gl.getUniformLocation(program, "obj2world2NDC");
  //var world2cameraInverseTranspose_loc = gl.getUniformLocation(program, "world2cameraInverseTranspose"); //https://webgl2fundamentals.org/webgl/lessons/webgl-3d-lighting-directional.html


  // Set ___________
  var fieldOfView = 60;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 1;
  var zFar = 2000;
  //QUOKKA
  //shouldn't these be negative?

  //camera args
  var cameraPosition = [200, 200, 100];
  var target = [0, 0, 0];
  var up = [0, 1, 0];

  var light_dir = [0.5, 0.7, 1];

  drawScene();

  function drawScene() {

    // Canvas Setup
    resize(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear everything
    gl.enable(gl.CULL_FACE); //only draw front facing triangles
    gl.enable(gl.DEPTH_TEST); //add depth buffer
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(program);

    var proj = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var world2Camera = m4.lookAt(cameraPosition, target, up);
    var obj2world2NDC = m4.multiply(world2Camera, proj);
    gl.uniformMatrix4fv(obj2world2NDC_loc, false, obj2world2NDC);


    //Set light_dir
    gl.uniform3fv(light_dir_loc, m4.normalize(light_dir));

    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc, set_f_position);
    fill_fn(gl, normal_loc, set_f_normal);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 2*3*2*3);//Cube = 6 faces, 2 triangles per face, 3 verticies per triangle
  }
}

/*
fill_fn:
function will create a buffer and apply the passed in function, 
to the attribute location

@params {!WebGLRenderingContext} gl
@params {function} _fn

Ex: 
_fn: set_N3d, set_N3dNormal, etc.
*/
function fill_fn(gl, attribute_location, _fn) {
  var _buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, _buffer);
  _fn(gl);

  /*
  Read below 3 commands as follows: 
    "Hey GPU, please recall that I've already filled the positionBuffer which if of ARRAY_BUFFER type,
    now I'm asking you to take a pointer to positionLocation (which is the actual vertex we are going to color),
    and point to that positionBuffer."
  */
  gl.enableVertexAttribArray(attribute_location);
  gl.bindBuffer(gl.ARRAY_BUFFER, _buffer);
  var size = 3; //how many dimensions each vertex is (3 means each vertex is in xyz)
  var type = gl.FLOAT;
  var normalize = false;
  var stride = 0;
  var offset = 0;
  gl.vertexAttribPointer(attribute_location, size, type, normalize, stride, offset);

}

function render_building(){

  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("ok... well apparently you don't have webgl2");
    return;
  }

  // Link the two shaders into a program
  var program = createProgramfromScripts(gl, ["cube-shadow-vertex-shader", "cube-shadow-fragment-shader"]);

  // Get location of all [in] variables
  var position_loc = gl.getAttribLocation(program, "a_position");
  var normal_loc = gl.getAttribLocation(program, "a_normal");
  var light_dir_loc = gl.getUniformLocation(program, "v_light_dir");
  var obj2world2NDC_loc = gl.getUniformLocation(program, "obj2world2NDC");
  //var world2cameraInverseTranspose_loc = gl.getUniformLocation(program, "world2cameraInverseTranspose"); //https://webgl2fundamentals.org/webgl/lessons/webgl-3d-lighting-directional.html


  // Set ___________
  var fieldOfView = 60;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 1;
  var zFar = 2000;
  //QUOKKA
  //shouldn't these be negative?

  //camera args
  var cameraPosition = [5, 5, 5];
  var target = [0, 0, 0];
  var up = [0, 1, 0];

  var light_dir = [0.5, 0.7, 1];

  drawScene();

  function drawScene() {

    // Canvas Setup
    resize(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear everything
    gl.enable(gl.CULL_FACE); //only draw front facing triangles
    gl.enable(gl.DEPTH_TEST); //add depth buffer
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(program);

    // //Create and Set obj2world2NDC
    // var proj = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    // var world2Camera = m4.createWorldToCameraMatrix(cameraPosition, target, up);
    // var viewMatrix = m4.inverse(world2Camera);
    // var world2CameraNDC = m4.multiply(proj, world2Camera);
    // var obj2world = m4.identity();
    // var obj2world2NDC = m4.multiply(world2CameraNDC, obj2world);
    // gl.uniformMatrix4fv(obj2world2NDC_loc, false, obj2world2NDC);

    var proj = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var world2Camera = m4.lookAt(cameraPosition, target, up);
    var proj2Camera = m4.multiply(world2Camera, proj);
    gl.uniformMatrix4fv(obj2world2NDC_loc, false, proj2Camera);

    //Create and Set world2cameraInverseTranspose 
    // world2cameraInverseTranspose = m4.transpose(m4.inverse(world2Camera));
    // gl.uniformMatrix4fv(world2cameraInverseTranspose_loc, false, world2cameraInverseTranspose);

    //Set light_dir
    gl.uniform3fv(light_dir_loc, m4.normalize(light_dir));

    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc, set_building_position);
    fill_fn(gl, normal_loc, set_building_normal);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 6*2*3);//Cube = 6 faces, 2 triangles per face, 3 vertices per triangle
  }
}

function render_window(){

  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("ok... well apparently you don't have webgl2");
    return;
  }

  // Link the two shaders into a program
  var program = createProgramfromScripts(gl, ["cube-shadow-vertex-shader", "cube-shadow-fragment-shader"]);

  // Get location of all [in] variables
  var position_loc = gl.getAttribLocation(program, "a_position");
  var normal_loc = gl.getAttribLocation(program, "a_normal");
  var light_dir_loc = gl.getUniformLocation(program, "v_light_dir");
  var obj2world2NDC_loc = gl.getUniformLocation(program, "obj2world2NDC");

  // Set ___________
  var fieldOfView = 60;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 1;
  var zFar = 2000;
  //QUOKKA
  //shouldn't these be negative?

  //camera args
  var cameraPosition = [5, 5, 5];
  var target = [0, 0, 0];
  var up = [0, 1, 0];

  var light_dir = [0.5, 0.7, 1];

  drawScene();

  function drawScene() {

    // Canvas Setup
    resize(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear everything
    gl.enable(gl.CULL_FACE); //only draw front facing triangles
    gl.enable(gl.DEPTH_TEST); //add depth buffer
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(program);
    
    var proj = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var world2Camera = m4.lookAt(cameraPosition, target, up);
    var proj2Camera = m4.multiply(world2Camera, proj);
    gl.uniformMatrix4fv(obj2world2NDC_loc, false, proj2Camera);

    //Set light_dir
    gl.uniform3fv(light_dir_loc, m4.normalize(light_dir));

    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc, set_window_position);
    fill_fn(gl, normal_loc, set_window_normal);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 6*2*3);//Cube = 6 faces, 2 triangles per face, 3 vertices per triangle
  }
}


//render_cube_shadow();
//render_cube_static();
//render_cube();
//render_f();
//render_building();
render_window();



// function square(){

//   // Get A WebGL context
//   var canvas = document.querySelector("#c");
//   var gl = canvas.getContext("webgl2");
//   if (!gl) {
//   	console.log("ok... well apparently you don't have webgl2");
//     return;
//   }


//   // Link the two shaders into a program
//   var program = createProgramfromScripts(gl, ["pink-triangle-vertex-shader", "pink-triangle-fragment-shader"]);

//   // look up where the vertex data needs to go.
//   var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

//   // Create a buffer and put three 2d clip space points in it
//   var positionBuffer = gl.createBuffer();

//   // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
//   gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

//   var positions = [
//     0, 0,
//     0, 0.5,
//     0.5, 0,
//     0.5, 0,
//     0, 0.5, 
//     0.5, 0.5,
//   ];
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

//   // Create a vertex array object (attribute state)
//   var vao = gl.createVertexArray();

//   // and make it the one we're currently working with
//   gl.bindVertexArray(vao);

//   // Turn on the attribute
//   gl.enableVertexAttribArray(positionAttributeLocation);

//   // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
//   var size = 2;          // 2 components per iteration
//   var type = gl.FLOAT;   // the data is 32bit floats
//   var normalize = false; // don't normalize the data
//   var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
//   var offset = 0;        // start at the beginning of the buffer
//   gl.vertexAttribPointer(
//       positionAttributeLocation, size, type, normalize, stride, offset);

//   resize(gl.canvas);

//   // Tell WebGL how to convert from clip space to pixels
//   gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

//   // Clear the canvas
//   gl.clearColor(0, 0, 0, 0);
//   gl.clear(gl.COLOR_BUFFER_BIT);

//   // Tell it to use our program (pair of shaders)
//   gl.useProgram(program);

//   // Bind the attribute/buffer set we want.
//   gl.bindVertexArray(vao);

//   // draw
//   var primitiveType = gl.TRIANGLES;
//   var offset = 0;
//   var count = 6;
//   gl.drawArrays(primitiveType, offset, count);	
// }



// function cube(){

//   // Get A WebGL context
//   var canvas = document.querySelector("#c");
//   var gl = canvas.getContext("webgl2");
//   if (!gl) {
//   	console.log("ok... well apparently you don't have webgl2");
//     return;
//   }


//   // Link the two shaders into a program
//   var program = createProgramfromScripts(gl, ["pink-triangle-vertex-shader", "pink-triangle-fragment-shader"]);

//   // look up where the vertex data needs to go.
//   var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

//   // Create a buffer and put three 2d clip space points in it
//   var positionBuffer = gl.createBuffer();

//   // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
//   gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

//   var positions = [
//     // front face
//     -1.0, -1.0,  1.0,
//      1.0, -1.0,  1.0,
//     1.0,  1.0,  1.0,
//     -1.0,  1.0,  1.0,
    
//     // back face 
//     -1.0, -1.0, -1.0,
//     -1.0,  1.0, -1.0,
//     1.0,  1.0, -1.0,
//     1.0, -1.0, -1.0,
    
//     // bottom face 
//     -1.0, -1.0, -1.0,
//      1.0, -1.0, -1.0,
//     1.0, -1.0,  1.0,
//     -1.0, -1.0,  1.0,
    
//     // right face 
//     1.0, -1.0, -1.0,
//     1.0,  1.0, -1.0,
//     1.0,  1.0,  1.0,
//     1.0, -1.0,  1.0,
    
//     // left face
//     -1.0, -1.0, -1.0,
//     -1.0, -1.0,  1.0,
//     -1.0,  1.0,  1.0,
//     -1.0,  1.0, -1.0,
//   ];
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

//   // Create a vertex array object (attribute state)
//   var vao = gl.createVertexArray();

//   // and make it the one we're currently working with
//   gl.bindVertexArray(vao);

//   // Turn on the attribute
//   gl.enableVertexAttribArray(positionAttributeLocation);

//   // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
//   var size = 3;          // 2 components per iteration
//   var type = gl.FLOAT;   // the data is 32bit floats
//   var normalize = false; // don't normalize the data
//   var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
//   var offset = 0;        // start at the beginning of the buffer
//   gl.vertexAttribPointer(
//       positionAttributeLocation, size, type, normalize, stride, offset);

//   resize(gl.canvas);

//   // Tell WebGL how to convert from clip space to pixels
//   gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

//   // Clear the canvas
//   gl.clearColor(0, 0, 0, 0);
//   gl.clear(gl.COLOR_BUFFER_BIT);

//   // Tell it to use our program (pair of shaders)
//   gl.useProgram(program);

//   // Bind the attribute/buffer set we want.
//   gl.bindVertexArray(vao);

//   // draw
//   var primitiveType = gl.TRIANGLES;
//   var offset = 0;
//   var count = 36;
//   gl.drawArrays(primitiveType, offset, count);	
// }





