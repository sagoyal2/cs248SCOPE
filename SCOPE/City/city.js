function render_City(){
  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("ok... well apparently you don't have webgl2");
    return;
  }

  // Link shaders into a program
  var cube_camera_program = createProgramfromScripts(gl, ["cube-camera-vertex-shader", "cube-camera-fragment-shader"]);

  var position_loc_camera = gl.getAttribLocation(cube_camera_program, "a_position");
  var color_loc_camera = gl.getAttribLocation(cube_camera_program, "a_color");
  var camera_loc_camera = gl.getUniformLocation(cube_camera_program, "cameraPos");
  var obj2world_loc_camera = gl.getUniformLocation(cube_camera_program, "obj2world");
  var obj2world2NDC_loc_camera = gl.getUniformLocation(cube_camera_program, "obj2world2NDC");


  var cube_static_program = createProgramfromScripts(gl, ["cube-static-vertex-shader", "cube-static-fragment-shader"]);

  var position_loc_static = gl.getAttribLocation(cube_static_program, "a_position");
  var color_loc_static = gl.getAttribLocation(cube_static_program, "a_color");
  var obj2world2NDC_loc_static = gl.getUniformLocation(cube_static_program, "obj2world2NDC");


  // Set ___________
  var fieldOfView = 60;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  var zNear = 1;
  var zFar = 2000;

  //camera args
  var cameraPosition = [0, 5, 10];
  //var cameraPosition = [0, 5, 5];
  //var cameraPosition = [0, 3, 5]
  var target = [0, 0, 0];
  var up = [0, 1, 0];

  var light_pos = [1, 1, 1]; 


  var then = 0;
  requestAnimationFrame(drawScene);

  function drawScene(now) {

    now *= 0.00001;
    //cameraPosition[1] -= now;
    cameraPosition[2] -= now;


    // Canvas Setup
    resize(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear everything
    gl.enable(gl.CULL_FACE); //only draw front facing triangles
    gl.enable(gl.DEPTH_TEST); //add depth buffer
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    //Program for Ground
    gl.useProgram(cube_static_program);

    //Create and Set obj2world2NDC
    var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var camera2world = m4.lookAt(cameraPosition, target, up);
    var obj2World = m4.multiply(camera2world, projectObject);
    //var moveObjectInWorld = m4.multiply(m4.yRotation(degToRad(20)), m4.translation(2.0, 0.0, 0.0));
    var moveObjectInWorld = m4.multiply(m4.translation(0, -1/8, 0), m4.scaling(8, 8, 8));
    obj2World = m4.multiply(moveObjectInWorld, obj2World);
    gl.uniformMatrix4fv(obj2world2NDC_loc_static, false, obj2World);


    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc_static, set_ground_position);
    fill_fn(gl, color_loc_static, set_ground_color);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 1*2*3);//Ground = 1 faces, 2 triangles per face, 3 verticies per triangle


    //Program for Buildings
    gl.useProgram(cube_camera_program);

    //Create and Set obj2world2NDC
    var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var camera2world = m4.lookAt(cameraPosition, target, up);
    var obj2World = m4.multiply(camera2world, projectObject);
    var moveObjectInWorld = m4.multiply(m4.yRotation(degToRad(20)), m4.translation(2.0, 0.0, 0.0));
    obj2World = m4.multiply(moveObjectInWorld, obj2World);
    gl.uniformMatrix4fv(obj2world2NDC_loc_camera, false, obj2World);

    //Set obj2world
    gl.uniformMatrix4fv(obj2world_loc_camera, false, moveObjectInWorld);

    //Set cameraPos
    gl.uniform3fv(camera_loc_camera, cameraPosition);

    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc_camera, set_building_position);
    fill_fn(gl, color_loc_camera, set_cube_color);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 6*2*3);//Cube = 6 faces, 2 triangles per face, 3 verticies per triangle

    //Create and Set obj2world2NDC
    var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var camera2world = m4.lookAt(cameraPosition, target, up);
    var obj2World = m4.multiply(camera2world, projectObject);
    //var moveObjectInWorld = m4.multiply(m4.yRotation(-degToRad(20)), m4.translation(-2.0, 0.0, 0.0));
    var moveObjectInWorld = m4.scaling(0.2, 0.2, 0.2);
    obj2World = m4.multiply(moveObjectInWorld, obj2World);
    gl.uniformMatrix4fv(obj2world2NDC_loc_camera, false, obj2World);

    //Set obj2world
    gl.uniformMatrix4fv(obj2world_loc_camera, false, moveObjectInWorld);

    //Set cameraPos
    gl.uniform3fv(camera_loc_camera, cameraPosition);

    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc_camera, set_lamppost_position);
    fill_fn(gl, color_loc_camera, set_lamppost_color);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 13*2*3);//Cube = 6 faces, 2 triangles per face, 3 verticies per triangle


    //Create and Set obj2world2NDC
    var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
    var camera2world = m4.lookAt(cameraPosition, target, up);
    var obj2World = m4.multiply(camera2world, projectObject);
    var moveObjectInWorld = m4.multiply(m4.yRotation(-degToRad(20)), m4.translation(-2.0, 0.0, 0.0));
    //var moveObjectInWorld = m4.identity();
    obj2World = m4.multiply(moveObjectInWorld, obj2World);
    gl.uniformMatrix4fv(obj2world2NDC_loc_camera, false, obj2World);

    //Set obj2world
    gl.uniformMatrix4fv(obj2world_loc_camera, false, moveObjectInWorld);

    //Set cameraPos
    gl.uniform3fv(camera_loc_camera, cameraPosition);

    /*Fill Cube Parameters*/
    fill_fn(gl, position_loc_camera, set_cube_position);
    fill_fn(gl, color_loc_camera, set_cube_color);
    //setWorldViewPerspectiveMatrix
    gl.drawArrays(gl.TRIANGLES, 0, 6*2*3);//Cube = 6 faces, 2 triangles per face, 3 verticies per triangle


    //draw cube again with rotated camera
    requestAnimationFrame(drawScene);
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

render_City();
