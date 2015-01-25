#pragma strict

var tumble : float;

function Start () : void {
    rigidbody.angularVelocity = Random.insideUnitSphere * tumble; 
}