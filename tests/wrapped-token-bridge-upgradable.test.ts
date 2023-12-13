import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { MessageFailed } from "../generated/schema"
import { MessageFailed as MessageFailedEvent } from "../generated/WrappedTokenBridgeUpgradable/WrappedTokenBridgeUpgradable"
import { handleMessageFailed } from "../src/wrapped-token-bridge-upgradable"
import { createMessageFailedEvent } from "./wrapped-token-bridge-upgradable-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _srcChainId = 123
    let _srcAddress = Bytes.fromI32(1234567890)
    let _nonce = BigInt.fromI32(234)
    let _payload = Bytes.fromI32(1234567890)
    let _reason = Bytes.fromI32(1234567890)
    let newMessageFailedEvent = createMessageFailedEvent(
      _srcChainId,
      _srcAddress,
      _nonce,
      _payload,
      _reason
    )
    handleMessageFailed(newMessageFailedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MessageFailed created and stored", () => {
    assert.entityCount("MessageFailed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MessageFailed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_srcChainId",
      "123"
    )
    assert.fieldEquals(
      "MessageFailed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_srcAddress",
      "1234567890"
    )
    assert.fieldEquals(
      "MessageFailed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_nonce",
      "234"
    )
    assert.fieldEquals(
      "MessageFailed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_payload",
      "1234567890"
    )
    assert.fieldEquals(
      "MessageFailed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_reason",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
