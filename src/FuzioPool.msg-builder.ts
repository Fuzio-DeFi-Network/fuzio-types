/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Decimal, Uint128, Denom, Addr, InstantiateMsg, WalletInfo, ExecuteMsg, Expiration, Timestamp, Uint64, TokenSelect, QueryMsg, MigrateMsg, BalanceResponse, FeeResponse, InfoResponse, Token1ForToken2PriceResponse, Token2ForToken1PriceResponse } from "./FuzioPool.types";
import { CamelCasedProperties } from "type-fest";
export abstract class FuzioPoolExecuteMsgBuilder {
  static addLiquidity = ({
    expiration,
    maxToken2,
    minLiquidity,
    token1Amount
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    add_liquidity: unknown;
  }>["add_liquidity"]>): ExecuteMsg => {
    return {
      add_liquidity: ({
        expiration,
        max_token2: maxToken2,
        min_liquidity: minLiquidity,
        token1_amount: token1Amount
      } as const)
    };
  };
  static removeLiquidity = ({
    amount,
    expiration,
    minToken1,
    minToken2
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    remove_liquidity: unknown;
  }>["remove_liquidity"]>): ExecuteMsg => {
    return {
      remove_liquidity: ({
        amount,
        expiration,
        min_token1: minToken1,
        min_token2: minToken2
      } as const)
    };
  };
  static swap = ({
    expiration,
    inputAmount,
    inputToken,
    minOutput
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    swap: unknown;
  }>["swap"]>): ExecuteMsg => {
    return {
      swap: ({
        expiration,
        input_amount: inputAmount,
        input_token: inputToken,
        min_output: minOutput
      } as const)
    };
  };
  static passThroughSwap = ({
    expiration,
    inputToken,
    inputTokenAmount,
    outputAmmAddress,
    outputMinToken
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    pass_through_swap: unknown;
  }>["pass_through_swap"]>): ExecuteMsg => {
    return {
      pass_through_swap: ({
        expiration,
        input_token: inputToken,
        input_token_amount: inputTokenAmount,
        output_amm_address: outputAmmAddress,
        output_min_token: outputMinToken
      } as const)
    };
  };
  static swapAndSendTo = ({
    expiration,
    inputAmount,
    inputToken,
    minToken,
    recipient
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    swap_and_send_to: unknown;
  }>["swap_and_send_to"]>): ExecuteMsg => {
    return {
      swap_and_send_to: ({
        expiration,
        input_amount: inputAmount,
        input_token: inputToken,
        min_token: minToken,
        recipient
      } as const)
    };
  };
  static updateConfig = ({
    devWalletLists,
    feePercentDenominator,
    feePercentNumerator,
    owner
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    update_config: unknown;
  }>["update_config"]>): ExecuteMsg => {
    return {
      update_config: ({
        dev_wallet_lists: devWalletLists,
        fee_percent_denominator: feePercentDenominator,
        fee_percent_numerator: feePercentNumerator,
        owner
      } as const)
    };
  };
}
export abstract class FuzioPoolQueryMsgBuilder {
  static balance = ({
    address
  }: CamelCasedProperties<Extract<QueryMsg, {
    balance: unknown;
  }>["balance"]>): QueryMsg => {
    return {
      balance: ({
        address
      } as const)
    };
  };
  static info = (): QueryMsg => {
    return {
      info: ({} as const)
    };
  };
  static token1ForToken2Price = ({
    token1Amount
  }: CamelCasedProperties<Extract<QueryMsg, {
    token1_for_token2_price: unknown;
  }>["token1_for_token2_price"]>): QueryMsg => {
    return {
      token1_for_token2_price: ({
        token1_amount: token1Amount
      } as const)
    };
  };
  static token2ForToken1Price = ({
    token2Amount
  }: CamelCasedProperties<Extract<QueryMsg, {
    token2_for_token1_price: unknown;
  }>["token2_for_token1_price"]>): QueryMsg => {
    return {
      token2_for_token1_price: ({
        token2_amount: token2Amount
      } as const)
    };
  };
  static fee = (): QueryMsg => {
    return {
      fee: ({} as const)
    };
  };
}