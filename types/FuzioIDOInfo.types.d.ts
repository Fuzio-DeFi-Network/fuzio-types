/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export type Addr = string;
export type Decimal = string;
export type Uint128 = string;
export interface InstantiateMsg {
    dev_wallet_list: WalletInfo[];
    fee: Uint128;
}
export interface WalletInfo {
    address: Addr;
    ratio: Decimal;
}
export type ExecuteMsg = {
    update_config: {
        new_config: Config;
    };
} | {
    update_ownership: Action;
};
export type Action = {
    transfer_ownership: {
        expiry?: Expiration | null;
        new_owner: string;
    };
} | "accept_ownership" | "renounce_ownership";
export type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface Config {
    dev_wallet_list: WalletInfo[];
    fee: Uint128;
}
export type QueryMsg = {
    config: {};
};
export type FuzioIDOInfoExecuteMsg = ExecuteMsg;
