import {
  UnwrapToken as UnwrapTokenEvent,
  WrapToken as WrapTokenEvent,
} from "../generated/WrappedTokenBridgeUpgradable/WrappedTokenBridgeUpgradable";
import { TokenBridged } from "../generated/schema";
import { getChainName } from "./layerzero";
import { getDecimals, getSymbol } from "./tokens";

export function handleUnwrapToken(event: UnwrapTokenEvent): void {
  let entity = new TokenBridged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sourceChainId = 138;
  entity.destChainId = event.params.remoteChainId;
  entity.localToken = event.params.localToken;
  entity.remoteToken = event.params.remoteToken;
  entity.user = event.params.to;
  entity.amount = event.params.amount;

  entity.token = getSymbol(event.params.localToken);
  entity.decimals = getDecimals(event.params.localToken);
  entity.sourceChain = "Fuse";
  entity.destChain = getChainName(event.params.remoteChainId);

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWrapToken(event: WrapTokenEvent): void {
  let entity = new TokenBridged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.sourceChainId = event.params.remoteChainId;
  entity.destChainId = 138;
  entity.localToken = event.params.localToken;
  entity.remoteToken = event.params.remoteToken;
  entity.user = event.params.to;
  entity.amount = event.params.amount;

  entity.token = getSymbol(event.params.localToken);
  entity.decimals = getDecimals(event.params.localToken);
  entity.sourceChain = getChainName(event.params.remoteChainId);
  entity.destChain = "Fuse";

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
