import { unsplashInstance } from '../axios';

export const useGetThumbnail = async (query) => {
  try {
    const encodedQuery = encodeURIComponent(query);

    const response = await unsplashInstance.get('/search/photos', {
      params: {
        query: encodedQuery,
        count: 10,
      },
    });

    console.log('이미지 응답', response.data);
    return response.data.results[0]?.urls?.regular;
  } catch (error) {
    console.error('이미지 검색 중 오류 발생:', error.message);
    return null;
  }
};
