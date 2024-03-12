import {
  SendToken as SendTokenEvent,
  ReceiveToken as ReceiveTokenEvent,
} from "../generated/OriginalTokenBridgeUpgradableForPolygon/OriginalTokenBridgeUpgradable";
import { TokenBridged } from "../generated/schema";
import { getChainName } from "./layerzero";
import { getFuseAddress } from "./tokens";

export function handleSendToken(
  event: SendTokenEvent,
  chainId: i32
): TokenBridged {
  let entity = new TokenBridged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sourceChainId = 138;
  entity.destChainId = chainId;
  entity.localToken = getFuseAddress(138);
  entity.remoteToken = getFuseAddress(chainId);
  entity.user = event.params.to;
  entity.amount = event.params.amount;

  entity.token = "FUSE";
  entity.decimals = 18;
  entity.sourceChain = "Fuse";
  entity.destChain = getChainName(chainId);

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  return entity;
}

export function handleSendTokenPolygon(event: SendTokenEvent): void {
  let entity = handleSendToken(event, 109);
  entity.save();
}

export function handleSendTokenOptimism(event: SendTokenEvent): void {
  let entity = handleSendToken(event, 111);
  entity.save();
}

export function handleSendTokenArbitrum(event: SendTokenEvent): void {
  let entity = handleSendToken(event, 110);
  entity.save();
}

export function handleSendTokenEthereum(event: SendTokenEvent): void {
  let entity = handleSendToken(event, 101);
  entity.save();
}

export function handleRecieveToken(
  event: ReceiveTokenEvent,
  chainId: i32
): TokenBridged {
  let entity = new TokenBridged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sourceChainId = chainId;
  entity.destChainId = 138;
  entity.localToken = getFuseAddress(138);
  entity.remoteToken = getFuseAddress(chainId);
  entity.user = event.params.to;
  entity.amount = event.params.amount;

  entity.token = "FUSE";
  entity.decimals = 18;
  entity.sourceChain = getChainName(chainId);
  entity.destChain = "Fuse";

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  return entity;
}

export function handleReceiveTokenPolygon(event: ReceiveTokenEvent): void {
  let entity = handleRecieveToken(event, 109);
  entity.save();
}

export function handleReceiveTokenOptimism(event: ReceiveTokenEvent): void {
  let entity = handleRecieveToken(event, 111);
  entity.save();
}

export function handleReceiveTokenArbitrum(event: ReceiveTokenEvent): void {
  let entity = handleRecieveToken(event, 110);
  entity.save();
}

export function handleReceiveTokenEthereum(event: ReceiveTokenEvent): void {
  let entity = handleRecieveToken(event, 101);
  entity.save();
}