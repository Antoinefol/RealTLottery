import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x9cF5c34Cfc9BbFDD62F473df942B10Bd58B09d5b";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/VFVeT3J9yUX9SZs4FStpZUZSJyIUolda",
  },
};
