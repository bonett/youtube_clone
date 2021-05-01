export default function (globalState) {
  const state = globalState.appReducer;

  const getVideoList = () => state.videoList;
  const getThemeApp = () => state.darkMode;

  return {
    getVideoList,
    getThemeApp
  };
}
