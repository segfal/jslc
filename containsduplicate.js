


const containsDuplicate = (nums) => {
    let table = {}
    for(let i = 0;i<nums.length;i++){
        if(nums[i] in table){
            return true
        }
        table[nums[i]] = i
    }
    return false
}


//export
module.exports = containsDuplicate
