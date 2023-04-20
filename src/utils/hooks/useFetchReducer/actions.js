export const actions = {
  FETCHED: 'FETCHED',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED',
};

export const fetched = () => ({
  type: actions.FETCHED,
});

export const resolved = (data) => ({
  type: actions.RESOLVED,
  data,
});

export const rejected = (error) => ({
  type: actions.REJECTED,
  error,
});
