/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Coin } from "./FuzioNativeIDO.types";
export interface FuzioNativeIDOMessage {
    contractAddress: string;
    sender: string;
    buyToken: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claimToken: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeAdmin: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdrawTokenNotSoldByAdmin: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class FuzioNativeIDOMessageComposer implements FuzioNativeIDOMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    buyToken: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claimToken: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeAdmin: ({ address }: {
        address: string;
    }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdrawTokenNotSoldByAdmin: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}