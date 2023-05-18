/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Addr, Uint128, Config, WalletInfo } from "./FuzioNativePrediction.types";
export interface FuzioNativePredictionMessage {
    contractAddress: string;
    sender: string;
    updateConfig: ({ config }: {
        config: Config;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    betBull: ({ amount, roundId }: {
        amount: Uint128;
        roundId: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    betBear: ({ amount, roundId }: {
        amount: Uint128;
        roundId: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    closeRound: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    collectWinnings: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    collectionWinningRound: ({ roundId }: {
        roundId: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    halt: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    resume: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addAdmin: ({ newAdmin }: {
        newAdmin: Addr;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeAdmin: ({ oldAdmin }: {
        oldAdmin: Addr;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    modifyDevWallet: ({ newDevWallets }: {
        newDevWallets: WalletInfo[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class FuzioNativePredictionMessageComposer implements FuzioNativePredictionMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    updateConfig: ({ config }: {
        config: Config;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    betBull: ({ amount, roundId }: {
        amount: Uint128;
        roundId: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    betBear: ({ amount, roundId }: {
        amount: Uint128;
        roundId: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    closeRound: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    collectWinnings: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    collectionWinningRound: ({ roundId }: {
        roundId: Uint128;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    halt: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    resume: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    addAdmin: ({ newAdmin }: {
        newAdmin: Addr;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeAdmin: ({ oldAdmin }: {
        oldAdmin: Addr;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    modifyDevWallet: ({ newDevWallets }: {
        newDevWallets: WalletInfo[];
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
