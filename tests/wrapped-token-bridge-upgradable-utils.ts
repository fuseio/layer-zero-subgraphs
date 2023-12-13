import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
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
} from "../generated/WrappedTokenBridgeUpgradable/WrappedTokenBridgeUpgradable"

export function createMessageFailedEvent(
  _srcChainId: i32,
  _srcAddress: Bytes,
  _nonce: BigInt,
  _payload: Bytes,
  _reason: Bytes
): MessageFailed {
  let messageFailedEvent = changetype<MessageFailed>(newMockEvent())

  messageFailedEvent.parameters = new Array()

  messageFailedEvent.parameters.push(
    new ethereum.EventParam(
      "_srcChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_srcChainId))
    )
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam(
      "_srcAddress",
      ethereum.Value.fromBytes(_srcAddress)
    )
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam("_nonce", ethereum.Value.fromUnsignedBigInt(_nonce))
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam("_payload", ethereum.Value.fromBytes(_payload))
  )
  messageFailedEvent.parameters.push(
    new ethereum.EventParam("_reason", ethereum.Value.fromBytes(_reason))
  )

  return messageFailedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRegisterTokenEvent(
  localToken: Address,
  remoteChainId: i32,
  remoteToken: Address
): RegisterToken {
  let registerTokenEvent = changetype<RegisterToken>(newMockEvent())

  registerTokenEvent.parameters = new Array()

  registerTokenEvent.parameters.push(
    new ethereum.EventParam(
      "localToken",
      ethereum.Value.fromAddress(localToken)
    )
  )
  registerTokenEvent.parameters.push(
    new ethereum.EventParam(
      "remoteChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(remoteChainId))
    )
  )
  registerTokenEvent.parameters.push(
    new ethereum.EventParam(
      "remoteToken",
      ethereum.Value.fromAddress(remoteToken)
    )
  )

  return registerTokenEvent
}

export function createRetryMessageSuccessEvent(
  _srcChainId: i32,
  _srcAddress: Bytes,
  _nonce: BigInt,
  _payloadHash: Bytes
): RetryMessageSuccess {
  let retryMessageSuccessEvent = changetype<RetryMessageSuccess>(newMockEvent())

  retryMessageSuccessEvent.parameters = new Array()

  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_srcChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_srcChainId))
    )
  )
  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_srcAddress",
      ethereum.Value.fromBytes(_srcAddress)
    )
  )
  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam("_nonce", ethereum.Value.fromUnsignedBigInt(_nonce))
  )
  retryMessageSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "_payloadHash",
      ethereum.Value.fromFixedBytes(_payloadHash)
    )
  )

  return retryMessageSuccessEvent
}

export function createSetMinDstGasEvent(
  _dstChainId: i32,
  _type: i32,
  _minDstGas: BigInt
): SetMinDstGas {
  let setMinDstGasEvent = changetype<SetMinDstGas>(newMockEvent())

  setMinDstGasEvent.parameters = new Array()

  setMinDstGasEvent.parameters.push(
    new ethereum.EventParam(
      "_dstChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_dstChainId))
    )
  )
  setMinDstGasEvent.parameters.push(
    new ethereum.EventParam(
      "_type",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_type))
    )
  )
  setMinDstGasEvent.parameters.push(
    new ethereum.EventParam(
      "_minDstGas",
      ethereum.Value.fromUnsignedBigInt(_minDstGas)
    )
  )

  return setMinDstGasEvent
}

export function createSetPrecrimeEvent(precrime: Address): SetPrecrime {
  let setPrecrimeEvent = changetype<SetPrecrime>(newMockEvent())

  setPrecrimeEvent.parameters = new Array()

  setPrecrimeEvent.parameters.push(
    new ethereum.EventParam("precrime", ethereum.Value.fromAddress(precrime))
  )

  return setPrecrimeEvent
}

export function createSetTrustedRemoteEvent(
  _remoteChainId: i32,
  _path: Bytes
): SetTrustedRemote {
  let setTrustedRemoteEvent = changetype<SetTrustedRemote>(newMockEvent())

  setTrustedRemoteEvent.parameters = new Array()

  setTrustedRemoteEvent.parameters.push(
    new ethereum.EventParam(
      "_remoteChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_remoteChainId))
    )
  )
  setTrustedRemoteEvent.parameters.push(
    new ethereum.EventParam("_path", ethereum.Value.fromBytes(_path))
  )

  return setTrustedRemoteEvent
}

export function createSetTrustedRemoteAddressEvent(
  _remoteChainId: i32,
  _remoteAddress: Bytes
): SetTrustedRemoteAddress {
  let setTrustedRemoteAddressEvent = changetype<SetTrustedRemoteAddress>(
    newMockEvent()
  )

  setTrustedRemoteAddressEvent.parameters = new Array()

  setTrustedRemoteAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_remoteChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_remoteChainId))
    )
  )
  setTrustedRemoteAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_remoteAddress",
      ethereum.Value.fromBytes(_remoteAddress)
    )
  )

  return setTrustedRemoteAddressEvent
}

export function createSetUseCustomAdapterParamsEvent(
  useCustomAdapterParams: boolean
): SetUseCustomAdapterParams {
  let setUseCustomAdapterParamsEvent = changetype<SetUseCustomAdapterParams>(
    newMockEvent()
  )

  setUseCustomAdapterParamsEvent.parameters = new Array()

  setUseCustomAdapterParamsEvent.parameters.push(
    new ethereum.EventParam(
      "useCustomAdapterParams",
      ethereum.Value.fromBoolean(useCustomAdapterParams)
    )
  )

  return setUseCustomAdapterParamsEvent
}

export function createSetWithdrawalFeeBpsEvent(
  withdrawalFeeBps: i32
): SetWithdrawalFeeBps {
  let setWithdrawalFeeBpsEvent = changetype<SetWithdrawalFeeBps>(newMockEvent())

  setWithdrawalFeeBpsEvent.parameters = new Array()

  setWithdrawalFeeBpsEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawalFeeBps",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(withdrawalFeeBps))
    )
  )

  return setWithdrawalFeeBpsEvent
}

export function createUnwrapTokenEvent(
  localToken: Address,
  remoteToken: Address,
  remoteChainId: i32,
  to: Address,
  amount: BigInt
): UnwrapToken {
  let unwrapTokenEvent = changetype<UnwrapToken>(newMockEvent())

  unwrapTokenEvent.parameters = new Array()

  unwrapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "localToken",
      ethereum.Value.fromAddress(localToken)
    )
  )
  unwrapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "remoteToken",
      ethereum.Value.fromAddress(remoteToken)
    )
  )
  unwrapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "remoteChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(remoteChainId))
    )
  )
  unwrapTokenEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  unwrapTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return unwrapTokenEvent
}

export function createWrapTokenEvent(
  localToken: Address,
  remoteToken: Address,
  remoteChainId: i32,
  to: Address,
  amount: BigInt
): WrapToken {
  let wrapTokenEvent = changetype<WrapToken>(newMockEvent())

  wrapTokenEvent.parameters = new Array()

  wrapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "localToken",
      ethereum.Value.fromAddress(localToken)
    )
  )
  wrapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "remoteToken",
      ethereum.Value.fromAddress(remoteToken)
    )
  )
  wrapTokenEvent.parameters.push(
    new ethereum.EventParam(
      "remoteChainId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(remoteChainId))
    )
  )
  wrapTokenEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  wrapTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return wrapTokenEvent
}
