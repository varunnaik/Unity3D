﻿#pragma strict

var speed : float = 1.0;

function Start () {

}

function Update () {

}

function FixedUpdate(){
	var moveHorizontal : float =  Input.GetAxis ("Horizontal");
	var moveVertical : float =  Input.GetAxis ("Vertical");
	
	var movement = Vector3(moveHorizontal, 0, moveVertical);
	
	rigidbody.AddForce(movement * speed * Time.deltaTime);
}