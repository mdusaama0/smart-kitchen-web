/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier {
    onCreateSupplier {
      id
      name
      contact
      address
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier {
    onUpdateSupplier {
      id
      name
      contact
      address
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier {
    onDeleteSupplier {
      id
      name
      contact
      address
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateIngredients = /* GraphQL */ `
  subscription OnCreateIngredients {
    onCreateIngredients {
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
export const onUpdateIngredients = /* GraphQL */ `
  subscription OnUpdateIngredients {
    onUpdateIngredients {
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
export const onDeleteIngredients = /* GraphQL */ `
  subscription OnDeleteIngredients {
    onDeleteIngredients {
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
export const onCreatePurchaseOrder = /* GraphQL */ `
  subscription OnCreatePurchaseOrder {
    onCreatePurchaseOrder {
      id
      supplier
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePurchaseOrder = /* GraphQL */ `
  subscription OnUpdatePurchaseOrder {
    onUpdatePurchaseOrder {
      id
      supplier
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePurchaseOrder = /* GraphQL */ `
  subscription OnDeletePurchaseOrder {
    onDeletePurchaseOrder {
      id
      supplier
      date
      total
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePurchaseDetails = /* GraphQL */ `
  subscription OnCreatePurchaseDetails {
    onCreatePurchaseDetails {
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
export const onUpdatePurchaseDetails = /* GraphQL */ `
  subscription OnUpdatePurchaseDetails {
    onUpdatePurchaseDetails {
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
export const onDeletePurchaseDetails = /* GraphQL */ `
  subscription OnDeletePurchaseDetails {
    onDeletePurchaseDetails {
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
export const onCreateProductRate = /* GraphQL */ `
  subscription OnCreateProductRate {
    onCreateProductRate {
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
export const onUpdateProductRate = /* GraphQL */ `
  subscription OnUpdateProductRate {
    onUpdateProductRate {
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
export const onDeleteProductRate = /* GraphQL */ `
  subscription OnDeleteProductRate {
    onDeleteProductRate {
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
export const onCreateStocks = /* GraphQL */ `
  subscription OnCreateStocks {
    onCreateStocks {
      id
      productID
      productName
      stock
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStocks = /* GraphQL */ `
  subscription OnUpdateStocks {
    onUpdateStocks {
      id
      productID
      productName
      stock
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStocks = /* GraphQL */ `
  subscription OnDeleteStocks {
    onDeleteStocks {
      id
      productID
      productName
      stock
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateOrderDetails = /* GraphQL */ `
  subscription OnCreateOrderDetails {
    onCreateOrderDetails {
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
export const onUpdateOrderDetails = /* GraphQL */ `
  subscription OnUpdateOrderDetails {
    onUpdateOrderDetails {
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
export const onDeleteOrderDetails = /* GraphQL */ `
  subscription OnDeleteOrderDetails {
    onDeleteOrderDetails {
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
