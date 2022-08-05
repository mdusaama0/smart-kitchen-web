/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      id
      name
      products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      categoryID
      unitID
      category {
        id
        name
        createdAt
        updatedAt
      }
      unit {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      categoryProductsId
      unitProductsId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categoryID
        unitID
        createdAt
        updatedAt
        categoryProductsId
        unitProductsId
      }
      nextToken
    }
  }
`;
export const getSupplier = /* GraphQL */ `
  query GetSupplier($id: ID!) {
    getSupplier(id: $id) {
      id
      name
      contact
      address
      createdAt
      updatedAt
    }
  }
`;
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contact
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      cost
      imageURL
      price
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cost
        imageURL
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredients = /* GraphQL */ `
  query GetIngredients($id: ID!) {
    getIngredients(id: $id) {
      id
      recipeId
      category
      product
      productId
      qty
      unit
      createdAt
      updatedAt
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeId
        category
        product
        productId
        qty
        unit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPurchaseOrder = /* GraphQL */ `
  query GetPurchaseOrder($id: ID!) {
    getPurchaseOrder(id: $id) {
      id
      supplier
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const listPurchaseOrders = /* GraphQL */ `
  query ListPurchaseOrders(
    $filter: ModelPurchaseOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchaseOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        supplier
        date
        total
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPurchaseDetails = /* GraphQL */ `
  query GetPurchaseDetails($id: ID!) {
    getPurchaseDetails(id: $id) {
      id
      purchaseOrderId
      product
      productID
      category
      quantity
      unit
      rate
      amount
      createdAt
      updatedAt
    }
  }
`;
export const listPurchaseDetails = /* GraphQL */ `
  query ListPurchaseDetails(
    $filter: ModelPurchaseDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchaseDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        purchaseOrderId
        product
        productID
        category
        quantity
        unit
        rate
        amount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductRate = /* GraphQL */ `
  query GetProductRate($id: ID!) {
    getProductRate(id: $id) {
      id
      productID
      productName
      rate
      avgRate
      createdAt
      updatedAt
    }
  }
`;
export const listProductRates = /* GraphQL */ `
  query ListProductRates(
    $filter: ModelProductRateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductRates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        productName
        rate
        avgRate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStocks = /* GraphQL */ `
  query GetStocks($id: ID!) {
    getStocks(id: $id) {
      id
      productID
      productName
      stock
      createdAt
      updatedAt
    }
  }
`;
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $filter: ModelStocksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        productName
        stock
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      orderNumber
      amount
      status
      paymentId
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderNumber
        amount
        status
        paymentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrderDetails = /* GraphQL */ `
  query GetOrderDetails($id: ID!) {
    getOrderDetails(id: $id) {
      id
      name
      price
      qty
      orderId
      createdAt
      updatedAt
    }
  }
`;
export const listOrderDetails = /* GraphQL */ `
  query ListOrderDetails(
    $filter: ModelOrderDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        qty
        orderId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
