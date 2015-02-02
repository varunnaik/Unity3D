var hazard : GameObject;
var enemy : GameObject;
var spawnValues : Vector3;
var spawnWait : float;
var startWait : float;


private  var score : int;

function Start () {
    SpawnAsteroidWaves ();
    SpawnEnemyWaves ();
    updateScore();
}

function SpawnAsteroidWaves () {
    yield WaitForSeconds (startWait);
    var hazardCount : int;
    var waveWait : float;
    while (true)
    {
    	hazardCount = Random.RandomRange(1,4);
    	waveWait = Random.RandomRange(3.0,15.0);
        for ( var i : int= 0; i < hazardCount; i++) {
            var spawnPosition : Vector3= new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
            var spawnRotation : Quaternion= Quaternion.identity;
            Instantiate (hazard, spawnPosition, spawnRotation);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);
    }
}

function SpawnEnemyWaves () {
	yield WaitForSeconds (startWait);
	var hazardCount : int;
    var waveWait : float;
	while (true)
    {
    	hazardCount = Random.RandomRange(1,4);
    	waveWait = Random.RandomRange(1.0,5.0);
        for ( var i : int= 0; i < hazardCount; i++) {
            var spawnPosition : Vector3= new Vector3 (Random.Range (-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
            var spawnRotation : Quaternion= Quaternion.identity;
            Instantiate (enemy, spawnPosition, spawnRotation);
            yield WaitForSeconds (spawnWait);
        }
        yield WaitForSeconds (waveWait);
    }
}

function OnGUI() {
}

function updateScore() {
}