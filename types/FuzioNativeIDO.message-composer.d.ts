/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "./FuzioNativeIDO.types";
export interface FuzioNativeIDOMessage {
    contractAddress: string;
    sender: string;
    buyToken: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claimToken: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeAdmin: ({ address }: {
        address: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdrawTokenNotSoldByAdmin: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class FuzioNativeIDOMessageComposer implements FuzioNativeIDOMessage {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    buyToken: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    claimToken: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    changeAdmin: ({ address }: {
        address: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    withdrawTokenNotSoldByAdmin: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
}