"use strict";

/*
Adapted from:
https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html
https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
*/

/*
createAndCompileShaderfromScript:
finds the shader specifications from the script
tag and then compiles shader

@params {!WebGLRenderingContext} gl
@params {string} scriptId

Ex:
gl: ... from var gl = canvas.getContext("webgl");
scriptId: "blah-blah-vertex-shader"

@return {!WebGLShader} WebGlShader
*/

function createAndCompileShaderFromScript(gl, scriptId) {

	/* Step 1: Create the Shader */

	//get script tag
	var shaderScript = document.getElementById(scriptId);
	if(!shaderScript){
		throw("*** Error: no such scriptId exists " + scriptId);
	}

	//the actual text is the shader specifics
	var shaderSource = shaderScript.text;

	//the type is either VERTEX_SHADER or FRAGMENT_SHADER
	var gl_shaderType = null;
	var shaderType = shaderScript.type;
	if(shaderType == "VERTEX_SHADER"){
		gl_shaderType = gl.VERTEX_SHADER;
	}else if(shaderType == "FRAGMENT_SHADER"){
		gl_shaderType = gl.FRAGMENT_SHADER;
	}else{
		throw("*** Error: shaderType not defined for scriptId " + scriptId);
	}

	
	/* Step 2: Compile the Shader */

	var shader = gl.createShader(gl_shaderType);
	gl.shaderSource(shader, shaderSource);
	gl.compileShader(shader);

	var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (!success) {
		// Something went wrong during compilation; get the error
		throw "could not compile shader:" + gl.getShaderInfoLog(shader);
	}

	return shader;

}


/*
createProgram:
create a program from provided vertex and fragment shaders

@param {!WebGLRenderingContext} gl
@params {!WebGLShader} vertex_shader
@params {!WebGLShader} fragment_shader

@return {!WebGLProgram} program
*/

function createProgram(gl, vertex_shader, fragment_shader) {

	//create program
	var program = gl.createProgram();

	//attach shaders
	gl.attachShader(program, vertex_shader);
	gl.attachShader(program, fragment_shader);

	//link program
	gl.linkProgram(program);

	// Check if it linked.
	var success = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (!success) {
	// something went wrong with the link
		throw ("program failed to link:" + gl.getProgramInfoLog (program));
	}

	return program;

}


/*
createProgramfromScripts:
creates WebGL program from the script tags using functions createProgram and createAndCompileShaderFromScript

@params {!WebGLRenderingContext} gl
@params {string []} shaderScriptIds of script tag ids (in html file) assumed be [vertex-shader, fragment-shader]

Ex:
shaderScriptIds: ["blah-blah-vertex-shader", "blah-blah-fragment-shader"]

@return {!WebGLProgram} program

*/

function createProgramfromScripts(gl, shaderScriptIds) {

	var vertexShader = createAndCompileShaderFromScript(gl, shaderScriptIds[0]);
	var fragmentShader = createAndCompileShaderFromScript(gl, shaderScriptIds[1]);

	return createProgram(gl, vertexShader, fragmentShader);
}


//set the drawingbuffer pixel size match the browser's canvas size
function resize(canvas){

	var browserDisplayWidth = canvas.clientWidth;
	var browserDisplayHeight = canvas.clientHeight;

	//[optimization] we only need to resize if not already set
	if(canvas.width !== browserDisplayWidth || canvas.height !== browserDisplayWidth){
		canvas.width = 	browserDisplayWidth;
		canvas.height = browserDisplayWidth;
	}

}


