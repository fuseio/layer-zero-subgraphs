export const getChainName = (chainId: i32): string => {
  if (chainId == 101) {
    return "Ethereum";
  }
  if (chainId == 102) {
    return "BNB";
  }
  if (chainId == 109) {
    return "Polygon";
  }
  if (chainId == 110) {
    return "Arbitrum";
  }
  if (chainId == 111) {
    return "Optimism";
  }
  if (chainId == 138) {
    return "Fuse";
  }
  return "Unknown";
};