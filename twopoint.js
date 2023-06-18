



const twoSum = (nums, target) => {

    let table = {}
    for(let i = 0;i<nums.length;i++){
        table[nums[i]] = i
        if(target-nums[i] in table ){
            return [table[target-nums[i]], i]
        }
    }
    return []

}




module.exports = twoSum
