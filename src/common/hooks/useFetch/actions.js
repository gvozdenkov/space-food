export const actions = {
  REQUEST_STARTED: 'REQUEST_STARTED',
  REQUEST_SUCCESSFUL: 'REQUEST_SUCCESSFUL',
  REQUEST_FAILED: 'REQUEST_FAILED',
};

export const requestStarted = () => ({
  type: actions.REQUEST_STARTED,
});

export const requestSuccessful = ({ data }) => ({
  type: actions.REQUEST_SUCCESSFUL,
  data,
});

export const requestFailed = ({ error }) => ({
  type: actions.REQUEST_FAILED,
  error,
});
