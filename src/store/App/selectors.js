export default function (globalState) {
  const state = globalState.appReducer;

  const getThemeApp = () => state.darkMode;
  const getPopularVideos = () => state.popularVideos;
  const getUserSubscription = () => state.userSubscription;
  const getQueryType = () => state.queryType;
  const getLoadingState = () => state.showLoader;

  return {
    getThemeApp,
    getPopularVideos,
    getUserSubscription,
    getQueryType,
    getLoadingState
  };
}
