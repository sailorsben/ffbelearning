import fs from 'fs';

export default class GetJSON{
    getJSON(unitName){
    
        let rawUnitData = fs.readFileSync('./JSON/units.json');
        let unitData = JSON.parse(rawUnitData);

        //console.log(unitData);
    
        for (const unitID in unitData) {
             
        }
    }
}
