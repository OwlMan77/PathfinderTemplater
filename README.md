#Pathfinder Stat Templater

##What we are doing?

MVP

* Making a mongoose model of Monster: 
	* **name**:string, 
	* **CR**: integer, 
	* **stats**
	* **armourClass**: Object {**total**: integer, **touch**: integer, 
	* **flatFooted**: integer}, 
	* **hp**:integer, 
	* **fort**:integer, 
	* **ref**:integer, 
	* **will**:integer, 
	* **DR**:object{**damageReduction**: integer, **DRPierce**: string }, 
	* **immunities**: array, 
	* **typeOfMonster**: Object{**Family**: string, **species**: array},
	* **weaknesses**: array, 
	* **spellLikeAbilities**: array of Objects [{**name**: integer, **description**: text, **uses**: integer }],
	* **melee**:Object{ **name**: string, **noOfDie**: number **damageDie**: integer, }
	* **specialAttacks**: array of Objects [{**name**:string, description: text}] 
	* **specialQuality**: array

* make a model of Template
* make a new monster with the template added.