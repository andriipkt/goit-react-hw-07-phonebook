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
  console.log('fulfilled loading off');
  return {
    ...state,
    isLoading: false,
  };
};

export const handleFulfilledFetch = (state, action) => {
  console.log('fetch ALL fulfilled');
  return {
    ...state,
    items: action.payload,
  };
};
export const handleFulfilledAdd = (state, action) => {
  console.log('new contact fulfield');
  return {
    ...state,
    items: [...state.items, action.payload],
  };
};

export const handleFulfilledDelete = (state, action) => {
  console.log('delete fulfiled', action);
  // state.items = state.items.filter(contact => contact.id !== action.payload.id);
  return {
    ...state,
    items: state.items.filter(contact => contact.id !== action.payload.id),
  };
};
