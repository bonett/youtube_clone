export default function (globalState) {
  const state = globalState.videos;

  const getAllVideos = () => state.videos;

  return {
    getAllVideos
  };
}
