public int maxSubArray(int[] nums) {
 
    int n = nums.length;
    int maximumSubArraySum = Integer.MIN_VALUE;
    int start = 0;
    int end = 0;
 
    for (int left = 0; left < n; left++) {
 
        int runningWindowSum = 0;
 
        for (int right = left; right < n; right++) {
            runningWindowSum += nums[right];
 
            if (runningWindowSum > maximumSubArraySum) {
                maximumSubArraySum = runningWindowSum;
                start = left;
                end = right;
            }
        }
    }
    logger.info("Found Maximum Subarray between {} and {}", start, end);
    return maximumSubArraySum;
}
