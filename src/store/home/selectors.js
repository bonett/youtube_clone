export default function (globalState) {
  const state = globalState.home;

  const getStatus = () => state.general;

  return {
    getStatus
  };
}
