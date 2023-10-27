export const handlePending = (state, action) => {
  console.log('pending');
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

export const handleRejected = (state, action) => {
  console.log('rejected');
  console.log('rej message', action.error);
  return {
    ...state,
    error: action.payload,
    isLoading: false,
  };
};

export const handleFulfilled = (state, action) => {
  console.log('fulfilled');
  return {
    ...state,
    isLoading: false,
  };
};

export const handleFulfilledfetch = (state, action) => {
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

/* const handleFulfilledDelete = (state, action) => {
  return {
    ...state,
  };
}; */
