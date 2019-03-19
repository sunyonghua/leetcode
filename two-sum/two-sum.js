// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
console.time('计时器');
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
console.timeEnd('计时器');
twoSum([11, 15, 7, 2,], 9);
var twoSum2 = function (nums, target) {
};
twoSum2([11, 15, 7, 2,], 9);
