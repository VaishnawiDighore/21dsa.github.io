function twosum(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        const total = nums[start] + nums[end];
      if (total > target) {
        end--;
      } else if (total < target) {
        start++;
      } else {
        return [start + 1, end + 1];
      }
    }
  };
let ans = twosum([4,6,8,10],12)

console.log(ans);