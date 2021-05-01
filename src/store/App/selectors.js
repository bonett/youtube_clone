export default function (globalState) {
  const state = globalState.appReducer;

  const getThemeApp = () => state.darkMode;
  const getPopularVideos = () => state.popularVideos;

  return {
    getThemeApp,
    getPopularVideos
  };
}
