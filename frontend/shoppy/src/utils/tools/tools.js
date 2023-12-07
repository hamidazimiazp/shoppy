const textShortener = (txt, len) => {
  return txt.split(" ").slice(0, len).join(" ") + "...";
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().trim().includes(search.toLowerCase().trim())
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filtredProducts = products.filter((product) =>
    category === "all" ? product : product.category === category
  );
  return filtredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams, setQuery, setSearch) => {
  const categoryQ = searchParams.get("category");
  const searchQ = searchParams.get("search");
  if (categoryQ) setQuery((query) => ({ ...query, category: categoryQ }));
  if (searchQ) {
    setQuery((query) => ({ ...query, search: searchQ }));
    setSearch(searchQ);
  }
};

const sumItems = (list) => {
  const itemsCounter = list.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = list
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);

  return {
    itemsCounter,
    totalPrice,
  };
};

const isInCart = (state, id) => {
  const status = !!state.selectedItems.find((item) => item.id === id);
  return status;
};

const quantityCounts = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  }
  return state.selectedItems[index].quantity;
};

export {
  textShortener,
  searchProducts,
  filterProducts,
  createQueryObject,
  getInitialQuery,
  sumItems,
  isInCart,
  quantityCounts,
};
