Moralis.initialize("V7831pa9kpO6d6tgcpP310IHEHUxGqqtjaDt6qEJ");
Moralis.serverURL("https://ng4y2lkr9vmr.usemoralis.com:2053/server");

const init = async () => {
  hideElement(userItemsSection);
  hideElement(userInfo);
  hideElement(createItemForm);
  window.web3 = await Moralis.Web3.enable();
  window.tokenContract = new web3.eth.Contract(
    tokenContractAbi,
    TOKEN_CONTRACT_ADDRESS
  );
  window.marketplaceContract = new web3.eth.Contract(
    marketplaceContractAbi,
    MARKETPLACE_CONTRACT_ADDRESS
  );
  initUser();
  loadItems();

  const soldItemsQuery = new Moralis.Query("SoldItems");
  const soldItemsSubscription = await soldItemsQuery.subscribe();
  soldItemsSubscription.on("create", onItemSold);

  const itemsAddedQuery = new Moralis.Query("ItemsForSale");
  const itemsAddedSubscription = await itemsAddedQuery.subscribe();
  itemsAddedSubscription.on("create", onItemAdded);
};
