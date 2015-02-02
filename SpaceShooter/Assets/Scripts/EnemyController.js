#pragma strict

var shot : GameObject;
var shotSpawn : Transform;
var nextFire : float;

function Start () {
	StartShooting ();
}

function StartShooting () {
	while (true)
    {
		Instantiate(shot, shotSpawn.position, shotSpawn.rotation);
		audio.Play();
        yield WaitForSeconds (nextFire);
    }
	
}