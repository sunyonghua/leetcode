// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
var twoSum2 = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        console.log(map[i] === complement);
        if (map[i] === complement) {
            console.log([map[i], nums[i]]);
            // return [map[i],nums[i]]
        }
        map[i] = complement;
    }
};
console.log(twoSum2([2, 7, 11, 15], 9));
