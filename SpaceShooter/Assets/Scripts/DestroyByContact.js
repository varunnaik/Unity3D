var explosion : GameObject;
var playerExplosion : GameObject;

function OnTriggerEnter(other : Collider) 
{
    if (other.tag == "Boundary") {
        return;
    }
	Debug.Log("COLLIDE " + other.tag+ " " + this.tag);
    Instantiate(explosion, transform.position, transform.rotation);

    if (other.tag == "Player" || this.tag == "Player") {
        Instantiate(playerExplosion, other.transform.position, other.transform.rotation);        
    }
    
    Destroy(other.gameObject);
    Destroy(gameObject);
}