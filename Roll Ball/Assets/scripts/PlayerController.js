#pragma strict

var speed : float = 1.0;

private var count = 0;

function Start () {
	count = 0;
}

function Update () {

}

function FixedUpdate(){
	var moveHorizontal : float =  Input.GetAxis ("Horizontal");
	var moveVertical : float =  Input.GetAxis ("Vertical");
	
	var movement = Vector3(moveHorizontal, 0, moveVertical);
	
	rigidbody.AddForce(movement * speed * Time.deltaTime);
}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == "PickUp") {
		other.gameObject.SetActive(false);
	}
}