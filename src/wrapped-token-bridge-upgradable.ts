import {
  MessageFailed as MessageFailedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RegisterToken as RegisterTokenEvent,
  RetryMessageSuccess as RetryMessageSuccessEvent,
  SetMinDstGas as SetMinDstGasEvent,
  SetPrecrime as SetPrecrimeEvent,
  SetTrustedRemote as SetTrustedRemoteEvent,
  SetTrustedRemoteAddress as SetTrustedRemoteAddressEvent,
  SetUseCustomAdapterParams as SetUseCustomAdapterParamsEvent,
  SetWithdrawalFeeBps as SetWithdrawalFeeBpsEvent,
  UnwrapToken as UnwrapTokenEvent,
  WrapToken as WrapTokenEvent
} from "../generated/WrappedTokenBridgeUpgradable/WrappedTokenBridgeUpgradable"
import {
  MessageFailed,
  OwnershipTransferred,
  RegisterToken,
  RetryMessageSuccess,
  SetMinDstGas,
  SetPrecrime,
  SetTrustedRemote,
  SetTrustedRemoteAddress,
  SetUseCustomAdapterParams,
  SetWithdrawalFeeBps,
  UnwrapToken,
  WrapToken
} from "../generated/schema"

export function handleMessageFailed(event: MessageFailedEvent): void {
  let entity = new MessageFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._srcChainId = event.params._srcChainId
  entity._srcAddress = event.params._srcAddress
  entity._nonce = event.params._nonce
  entity._payload = event.params._payload
  entity._reason = event.params._reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegisterToken(event: RegisterTokenEvent): void {
  let entity = new RegisterToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.localToken = event.params.localToken
  entity.remoteChainId = event.params.remoteChainId
  entity.remoteToken = event.params.remoteToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRetryMessageSuccess(
  event: RetryMessageSuccessEvent
): void {
  let entity = new RetryMessageSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._srcChainId = event.params._srcChainId
  entity._srcAddress = event.params._srcAddress
  entity._nonce = event.params._nonce
  entity._payloadHash = event.params._payloadHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMinDstGas(event: SetMinDstGasEvent): void {
  let entity = new SetMinDstGas(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._dstChainId = event.params._dstChainId
  entity._type = event.params._type
  entity._minDstGas = event.params._minDstGas

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetPrecrime(event: SetPrecrimeEvent): void {
  let entity = new SetPrecrime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.precrime = event.params.precrime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTrustedRemote(event: SetTrustedRemoteEvent): void {
  let entity = new SetTrustedRemote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._remoteChainId = event.params._remoteChainId
  entity._path = event.params._path

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTrustedRemoteAddress(
  event: SetTrustedRemoteAddressEvent
): void {
  let entity = new SetTrustedRemoteAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._remoteChainId = event.params._remoteChainId
  entity._remoteAddress = event.params._remoteAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetUseCustomAdapterParams(
  event: SetUseCustomAdapterParamsEvent
): void {
  let entity = new SetUseCustomAdapterParams(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.useCustomAdapterParams = event.params.useCustomAdapterParams

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetWithdrawalFeeBps(
  event: SetWithdrawalFeeBpsEvent
): void {
  let entity = new SetWithdrawalFeeBps(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.withdrawalFeeBps = event.params.withdrawalFeeBps

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnwrapToken(event: UnwrapTokenEvent): void {
  let entity = new UnwrapToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.localToken = event.params.localToken
  entity.remoteToken = event.params.remoteToken
  entity.remoteChainId = event.params.remoteChainId
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWrapToken(event: WrapTokenEvent): void {
  let entity = new WrapToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.localToken = event.params.localToken
  entity.remoteToken = event.params.remoteToken
  entity.remoteChainId = event.params.remoteChainId
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
