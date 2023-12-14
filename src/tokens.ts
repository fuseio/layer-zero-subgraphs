import { Address, BigInt, log } from "@graphprotocol/graph-ts";

export function getSymbol(address: Address): string {
  // hard coded override
  if (address.toHex() == "0x28c3d1cd466ba22f6cae51b1a4692a831696391a") {
    return "USDC";
  }
  if (address.toHex() == "0x5622f6dc93e08a8b717b149677930c38d5d50682") {
    return "WETH";
  }
  if (address.toHex() == "0x68c9736781e9316ebf5c3d49fe0c1f45d2d104cd") {
    return "USDT";
  }

  return "Unknown";
}

export function getDecimals(address: Address): i32 {
  // hard coded override
  if (address.toHex() == "0x28c3d1cd466ba22f6cae51b1a4692a831696391a") {
    return 6;
  }
  if (address.toHex() == "0x5622f6dc93e08a8b717b149677930c38d5d50682") {
    return 18;
  }
  if (address.toHex() == "0x68c9736781e9316ebf5c3d49fe0c1f45d2d104cd") {
    return 6;
  }

  return 18;
}

export function getFuseAddress(chainId: number): Address {
  if (chainId == 109) {
    return Address.fromString("0x6b021b3f68491974bE6D4009fEe61a4e3C708fD6");
  }
  if (chainId == 111) {
    return Address.fromString("0xe453d6649643F1F460C371dC3D1da98F7922fe51");
  }
  if (chainId == 110) {
    return Address.fromString("0x6b021b3f68491974bE6D4009fEe61a4e3C708fD6");
  }
  return Address.fromString("0x0000000000000000000000000000000000000000");
}
