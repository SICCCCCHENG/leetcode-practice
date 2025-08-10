var threeSum = function(nums) {
    let resArr = []
    let temp = []
    for(let j = 0; j < nums.length-2; j++){
        temp = twoSum(j+1, nums, (0-nums[j]))
        if(temp.length !== 0){
            for(let ele of temp){
                ele.push(nums[j])
            }
            resArr = [...resArr, ...temp]
        }
        temp = []
    }
    return resArr
};

function twoSum(start, arr, target){
    const res = []
    const map = new Map()
    for(let i = start; i < arr.length; i++){
        if(map.has(target - arr[i])){
            res.push([target - arr[i], arr[i]])
        }else{
            map.set(arr[i], i)
        }
    }
    return res
}

console.log(threeSum([-1,0,1,2,-1,-4]));