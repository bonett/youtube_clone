export default function (globalState) {
  const state = globalState.appReducer;

  const getThemeApp = () => state.darkMode;
  const getPopularVideos = () => state.popularVideos;
  const getUserSubscription = () => state.userSubscription;

  return {
    getThemeApp,
    getPopularVideos,
    getUserSubscription
  };
}
