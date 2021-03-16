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

//render_City();




function render_litter_lamppost(){
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
  var cameraPosition = [-12, 15, -15];
  //var cameraPosition = [0, 35, 0.1];
  //var cameraPosition = [0, 35, 0.1];
  var target = [0, 0, 0];
  var up = [0, 1, 0];

  var groundPlaneDim = 12.0;


  var then = 0;
  requestAnimationFrame(drawScene);

  function drawScene(now) {

    //var cameraPosition = [2, 15, 13]; -2
    //var cameraPosition = [-12, 15, -15]; +2
    now *= 0.00001;
    cameraPosition[0] += 2*now;
    cameraPosition[1] -= 0.5*now;
    cameraPosition[2] += 2*now;

    // Canvas Setup
    resize(gl.canvas);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //clear everything
    gl.enable(gl.CULL_FACE); //only draw front facing triangles
    gl.enable(gl.DEPTH_TEST); //add depth buffer
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);


    //Program for Ground
    gl.useProgram(cube_static_program);
    add_ground_plane();

    //Program for Buildings / Lampposts / Cars
    gl.useProgram(cube_camera_program);

    //Add Lamppost
    var numLampPost = 20;
    litter_lampposts(numLampPost);

    //Add Big Buildings
    add_building(-6.0, 4, 1.6, 3.2, 6, 2.3); 
    add_building(.5, 2, -10, 4.7, 4, 1);
    add_building(3.5, 4, -3.0, 1.8, 5.7, 1.3);
    add_building(3.5, 4, -3.0, 1.8, 5.7, 1.3);
    add_building(4.6, 2, 3.2, 0.9, 4, 4.5);

    //Add Small Buildings
    add_building(2.4, 1, 0.5, .8, 2.1, 1.2);
    add_building(2.4, 1, 3.5, .8, 2.4, 1.2);
    add_building(2.4, 1, 6.5, .8, 2.2, 1.2);
    add_building(-10, 1, -8.5, 1.2, 2.3, 2);
    add_building(-10, 1, -3.4, 1.2, 2.2,1.5);
    add_building(-3.3, 1.2, -6.5,  .9, 2.7, 1.5);

    function add_building(tx, ty, tz, sx, sy, sz){
      //Create and Set obj2world2NDC
      var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
      var camera2world = m4.lookAt(cameraPosition, target, up);
      var obj2World = m4.multiply(camera2world, projectObject);
      var moveObjectInWorld = m4.multiply(m4.scaling(sx, sy, sz), m4.translation(tx, ty, tz));
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
    }

    function add_ground_plane(){
      //Create and Set obj2world2NDC
      var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
      var camera2world = m4.lookAt(cameraPosition, target, up);
      var obj2World = m4.multiply(camera2world, projectObject);
      //var moveObjectInWorld = m4.multiply(m4.yRotation(degToRad(20)), m4.translation(2.0, 0.0, 0.0));
      var moveObjectInWorld = m4.multiply(m4.translation(-1/groundPlaneDim, -1/groundPlaneDim, -1/groundPlaneDim), m4.scaling(groundPlaneDim, groundPlaneDim, groundPlaneDim));
      obj2World = m4.multiply(moveObjectInWorld, obj2World);
      gl.uniformMatrix4fv(obj2world2NDC_loc_static, false, obj2World);


      /*Fill Cube Parameters*/
      fill_fn(gl, position_loc_static, set_ground_position);
      fill_fn(gl, color_loc_static, set_ground_color);
      //setWorldViewPerspectiveMatrix
      gl.drawArrays(gl.TRIANGLES, 0, 1*2*3);//Ground = 1 faces, 2 triangles per face, 3 verticies per triangle
    
    }

    function litter_lampposts(numLampPost){
      /*********** Lamppost **************/
      //Create and Set obj2world2NDC
      var projectObject = m4.createPerspectiveMatrix(fieldOfView, aspect, zNear, zFar);
      var camera2world = m4.lookAt(cameraPosition, target, up);
      var obj2World = m4.multiply(camera2world, projectObject);
      
      for(let i  = 0; i < numLampPost; i++){
        let x_pos = i - numLampPost/2;
        //x_pos *= groundPlaneDim/2;

        for(let j  = 0; j < numLampPost; j++){
          let z_pos = j - numLampPost/2;
          //z_pos *= groundPlaneDim/2;

          //console.log("x_pos: " + x_pos + ", z_pos: " + z_pos);
          if(searchForArray(lamps, [i,j])){

            var moveObjectInWorld = m4.multiply(m4.scaling(0.2, 0.2, 0.2), m4.translation(x_pos, -0.4, z_pos));
            var obj2world2NDC = m4.multiply(moveObjectInWorld, obj2World);
            gl.uniformMatrix4fv(obj2world2NDC_loc_camera, false, obj2world2NDC);

            //Set obj2world
            gl.uniformMatrix4fv(obj2world_loc_camera, false, moveObjectInWorld);

            //Set cameraPos
            gl.uniform3fv(camera_loc_camera, cameraPosition);

            /*Fill Cube Parameters*/
            fill_fn(gl, position_loc_camera, set_lamppost_position);
            fill_fn(gl, color_loc_camera, set_lamppost_color);
            //setWorldViewPerspectiveMatrix
            gl.drawArrays(gl.TRIANGLES, 0, 13*2*3);//Cube = 6 faces, 2 triangles per face, 3 verticies per triangle

          }
        }   
      }
    }

    //draw cube again with rotated camera
    requestAnimationFrame(drawScene);
  }

}

//https://stackoverflow.com/questions/19543514/check-whether-an-array-exists-in-an-array-of-arrays
function searchForArray(haystack, needle){
  var i, j, current;
  for(i = 0; i < haystack.length; ++i){
    if(needle.length === haystack[i].length){
      current = haystack[i];
      for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
      if(j === needle.length)
        return true;
    }
  }
  return false;
}

var lamps = [ [0,18], [2, 18], [4, 18], [6, 18], [8, 18], [10, 18], [16, 18], [19, 18],
              [0,15], [2, 15], [4, 15], [6, 15], [8, 15], [11, 17], [11, 15], [16, 16], [19, 16], 
                                                                              [16, 14], [19, 14],
              [8, 13], [11, 13], [16,12], [19, 12], [8, 11], [11, 11], [16, 10], [19, 10],
              [2, 9], [4, 9], [6, 9], [8, 9], [11, 9], [16, 8], [19, 8],
              [2, 7], [11, 7], [6, 6], [8, 6], [16, 6], [19, 6],
              [2, 5], [5, 5], [11, 5], [13, 5], [15, 5], [8, 4], [2, 3], [5, 3],
              [8, 2], [10, 2], [12, 2], [14, 2], [16, 2], [19, 2],
              [2, 1], [5, 1], [16, 0], [19, 0],
            ];

render_litter_lamppost();








