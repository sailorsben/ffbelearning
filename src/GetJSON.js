import fs from 'fs';

export default class GetJSON{
    getJSON(unitName){
    
        let rawUnitData = fs.readFileSync('./JSON/units.json');
        let unitData = JSON.parse(rawUnitData);

        let rawPassiveAbilityData = fs.readFileSync('./JSON/skills_passive.json');
        let passiveAbilityData = JSON.parse(rawPassiveAbilityData);

        let rawActiveAbilityData = fs.readFileSync('./JSON/skills_ability.json');
        let activeAbilityData = JSON.parse(rawActiveAbilityData);

        let unitIDs = [];
        let searchUnitSkills = [];
        let foundPassiveSkills = [];
        let foundActiveSkills = [];

        for (const unitID in unitData){
            try {
                if ((unitData[unitID].name)) {
                    if ((unitData[unitID].name).toLowerCase().includes(unitName.toLowerCase())) {
                        unitIDs.push(unitID);
                    
                        // Populate the skill list for the searched unit
                        unitData[unitID].skills.forEach(skill => {
                            searchUnitSkills.push(skill.id);

                            for (const passiveSkill in passiveAbilityData) {
                                if (skill.id.toString() === passiveSkill.toString()) {
                                    foundPassiveSkills.push(passiveAbilityData[passiveSkill]);
                                }
                            }

                            for (const activeSkill in activeAbilityData) {
                                if (skill.id.toString() === activeSkill.toString()) {
                                    foundActiveSkills.push(activeAbilityData[activeSkill]);
                                }
                            }
                        });
                    }
                }
            }
            catch(err) {
                console.log(unitID);
                console.log(err);
            }
        }

        foundActiveSkills.forEach(ability => {
            for (const abilityID in ability.effects){
                //console.log(ability.effects[abilityID][0]);

                for (const activeAbility in activeAbilityData) {
                    if (ability.effects[abilityID][0].includes(activeAbility.toString())){
                        foundActiveSkills.push((activeAbilityData[activeAbility]));
                    }
                }
            }
        })

        foundActiveSkills.forEach(ability => {
            console.log(ability);
        })
    }
}
