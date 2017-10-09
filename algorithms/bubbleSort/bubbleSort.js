const bubbleSort = nums => {
  let swapped = false

  do {
    swapped = false
    for (let i = 0, l = nums.length; i < l; i++) {
      if (nums[i] > nums[i+1]) {
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return nums
}
module.exports = bubbleSort
