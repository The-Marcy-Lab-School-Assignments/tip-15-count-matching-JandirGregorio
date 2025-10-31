/**
 * Count Items Matching a Rule
 *
 * Given an array of items where each item is [type, color, name],
 * and a rule defined by ruleKey and ruleValue, return the number of
 * items that match the rule.
 *
 * @param {string[][]} items
 * @param {"type"|"color"|"name"} ruleKey
 * @param {string} ruleValue
 * @returns {number}
 */
function countMatches(items, ruleKey, ruleValue) {
    let index;
    //iterate through the every row
    /* [[type, color, name]] 
    [["phone","blue","pixel"],
    ["computer","silver","lenovo"],
    ["phone","gold","iphone"]]*/
    if(ruleKey === 'type'){
        index = 0;
    }
    if(ruleKey === 'color'){
        index = 1;
    }
    if(ruleKey === 'name'){
        index = 2;
    }
    
    return items.filter(item => item[index] === ruleValue).length;
}

module.exports = countMatches;