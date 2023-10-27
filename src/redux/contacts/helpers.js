export const handlePending = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

export const handleRejected = (state, action) => {
  return {
    ...state,
    error: action.payload,
    isLoading: false,
  };
};

export const handleFulfilled = (state, action) => {
  return {
    ...state,
    isLoading: false,
  };
};

export const handleFulfilledFetch = (state, action) => {
  return {
    ...state,
    items: action.payload,
  };
};
export const handleFulfilledAdd = (state, action) => {
  return {
    ...state,
    items: [...state.items, action.payload],
  };
};

export const handleFulfilledDelete = (state, action) => {
  return {
    ...state,
    items: state.items.filter(contact => contact.id !== action.payload.id),
  };
};
