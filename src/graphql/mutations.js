/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createSupplier = /* GraphQL */ `
  mutation CreateSupplier(
    $input: CreateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    createSupplier(input: $input, condition: $condition) {
      id
      name
      contact
      address
      createdAt
      updatedAt
    }
  }
`;
export const updateSupplier = /* GraphQL */ `
  mutation UpdateSupplier(
    $input: UpdateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    updateSupplier(input: $input, condition: $condition) {
      id
      name
      contact
      address
      createdAt
      updatedAt
    }
  }
`;
export const deleteSupplier = /* GraphQL */ `
  mutation DeleteSupplier(
    $input: DeleteSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    deleteSupplier(input: $input, condition: $condition) {
      id
      name
      contact
      address
      createdAt
      updatedAt
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createIngredients = /* GraphQL */ `
  mutation CreateIngredients(
    $input: CreateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    createIngredients(input: $input, condition: $condition) {
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
export const updateIngredients = /* GraphQL */ `
  mutation UpdateIngredients(
    $input: UpdateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    updateIngredients(input: $input, condition: $condition) {
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
export const deleteIngredients = /* GraphQL */ `
  mutation DeleteIngredients(
    $input: DeleteIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    deleteIngredients(input: $input, condition: $condition) {
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
export const createPurchaseOrder = /* GraphQL */ `
  mutation CreatePurchaseOrder(
    $input: CreatePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    createPurchaseOrder(input: $input, condition: $condition) {
      id
      supplier
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const updatePurchaseOrder = /* GraphQL */ `
  mutation UpdatePurchaseOrder(
    $input: UpdatePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    updatePurchaseOrder(input: $input, condition: $condition) {
      id
      supplier
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const deletePurchaseOrder = /* GraphQL */ `
  mutation DeletePurchaseOrder(
    $input: DeletePurchaseOrderInput!
    $condition: ModelPurchaseOrderConditionInput
  ) {
    deletePurchaseOrder(input: $input, condition: $condition) {
      id
      supplier
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const createPurchaseDetails = /* GraphQL */ `
  mutation CreatePurchaseDetails(
    $input: CreatePurchaseDetailsInput!
    $condition: ModelPurchaseDetailsConditionInput
  ) {
    createPurchaseDetails(input: $input, condition: $condition) {
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
export const updatePurchaseDetails = /* GraphQL */ `
  mutation UpdatePurchaseDetails(
    $input: UpdatePurchaseDetailsInput!
    $condition: ModelPurchaseDetailsConditionInput
  ) {
    updatePurchaseDetails(input: $input, condition: $condition) {
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
export const deletePurchaseDetails = /* GraphQL */ `
  mutation DeletePurchaseDetails(
    $input: DeletePurchaseDetailsInput!
    $condition: ModelPurchaseDetailsConditionInput
  ) {
    deletePurchaseDetails(input: $input, condition: $condition) {
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
export const createProductRate = /* GraphQL */ `
  mutation CreateProductRate(
    $input: CreateProductRateInput!
    $condition: ModelProductRateConditionInput
  ) {
    createProductRate(input: $input, condition: $condition) {
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
export const updateProductRate = /* GraphQL */ `
  mutation UpdateProductRate(
    $input: UpdateProductRateInput!
    $condition: ModelProductRateConditionInput
  ) {
    updateProductRate(input: $input, condition: $condition) {
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
export const deleteProductRate = /* GraphQL */ `
  mutation DeleteProductRate(
    $input: DeleteProductRateInput!
    $condition: ModelProductRateConditionInput
  ) {
    deleteProductRate(input: $input, condition: $condition) {
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
export const createStocks = /* GraphQL */ `
  mutation CreateStocks(
    $input: CreateStocksInput!
    $condition: ModelStocksConditionInput
  ) {
    createStocks(input: $input, condition: $condition) {
      id
      productID
      productName
      stock
      createdAt
      updatedAt
    }
  }
`;
export const updateStocks = /* GraphQL */ `
  mutation UpdateStocks(
    $input: UpdateStocksInput!
    $condition: ModelStocksConditionInput
  ) {
    updateStocks(input: $input, condition: $condition) {
      id
      productID
      productName
      stock
      createdAt
      updatedAt
    }
  }
`;
export const deleteStocks = /* GraphQL */ `
  mutation DeleteStocks(
    $input: DeleteStocksInput!
    $condition: ModelStocksConditionInput
  ) {
    deleteStocks(input: $input, condition: $condition) {
      id
      productID
      productName
      stock
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderDetails = /* GraphQL */ `
  mutation CreateOrderDetails(
    $input: CreateOrderDetailsInput!
    $condition: ModelOrderDetailsConditionInput
  ) {
    createOrderDetails(input: $input, condition: $condition) {
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
export const updateOrderDetails = /* GraphQL */ `
  mutation UpdateOrderDetails(
    $input: UpdateOrderDetailsInput!
    $condition: ModelOrderDetailsConditionInput
  ) {
    updateOrderDetails(input: $input, condition: $condition) {
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
export const deleteOrderDetails = /* GraphQL */ `
  mutation DeleteOrderDetails(
    $input: DeleteOrderDetailsInput!
    $condition: ModelOrderDetailsConditionInput
  ) {
    deleteOrderDetails(input: $input, condition: $condition) {
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
