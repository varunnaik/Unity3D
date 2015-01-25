#pragma strict

var speed = 10;

class Boundary
{
    var xMin : float;
    var xMax : float;
    var zMin : float;
    var zMax : float;
}

var boundary : Boundary;
var tilt : float;

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis('Horizontal');
	var moveVertical = Input.GetAxis('Vertical');
	
	var movement = Vector3(moveHorizontal, 0.0, moveVertical);
	rigidbody.velocity = movement * speed;	
	
	rigidbody.position = new Vector3(
		Mathf.Clamp(rigidbody.position.x, boundary.xMin, boundary.xMax),
		0,
		Mathf.Clamp(rigidbody.position.z, boundary.zMin, boundary.zMax)
	);
	rigidbody.rotation = Quaternion.Euler(0, 0, rigidbody.velocity.x * -tilt);

}