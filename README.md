#Pathfinder Stat Templater

##What we are doing?

MVP

* Making a mongoose model of Monster: 
	* **name**:string, 
	* **cr**: integer, 
	* **stats** object{ **str**: integer, **dex**: integer, **con**: integer, 	**intel**: integer, **cha**: integer, **wis**: interger}
	* **armourClass**: Object {**total**: integer, **touch**: integer,  **flatFooted**: integer, natural: interger}, 
	* **hp**:integer, 
	* **fort**:integer, 
	* **ref**:integer, 
	* **will**:integer, 
	* **dr**:object{**damageReduction**: integer, **drPierce**: string }, 
	* **immunities**: array,
	* **resistances**: array of objects [{**resistType**: string, **resistancePower**: integer }]  
	* **typeOfMonster**: Object{**Family**: string, **species**: array},
	* **weaknesses**: array, 
	* **spellLikeAbilities**: array of Objects [{**name**: integer, **description**: text, **uses**: integer }],
	* **melee**: array of Objects [{ **name**: string, **noOfDie**: number **damageDie**: integer}]
	* **specialAttacks**: array of Objects [{**name**:string, description: text}] 
	* **specialQuality**: array

* make a model of Template:
	* **name**: string
	* **typeOfMonster**: Object{**Family**: string, **species**: array}
	* **cr**: integer
	* **stats** object{ **str**: integer, **dex**: integer, **con**: integer, 	**intel**: integer, **cha**: integer, **wis**: interger}
	* **acBonus**: integer
	* **melee**: array of Objects [{ **name**: string, **noOfDie**: number **damageDie**: integer}]
	* **specialAttacks**: array of Objects [{**name**:string, description: text}] 
	* **specialQuality**: array 

* make a new monster with the template added.