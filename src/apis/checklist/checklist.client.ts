import { ICheckList } from '@interfaces/checklist';
import { ResponseAPI, ResponseDTO } from '@interfaces/common';
import { http } from '@libs/http.client';

const checklistApi = {
  /**
   * @description 서비스에서 제공하는 체크리스트 받아오는 api 함수
   */
  get: async () => await http.get<ResponseDTO<ICheckList>>('/checklist'),

  /**
   * @description 체크리스트 등록
   */
  post: async (body: ICheckList) => await http.post<ResponseAPI>('/checklist', body),
};
export default checklistApi;
