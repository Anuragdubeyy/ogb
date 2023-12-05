export const DOMAIN = import.meta.env.VITE_SERVER_DOMAIN + "/api/v1";

export const API_URL = {
    //barter page
    GET_BARTER_AVAILABLE:`${DOMAIN}/barter/ornament/fetch/admin `


}


export type RowType = {
    getIsSelected: () => boolean;
    toggleSelected: (value: boolean) => void;
    getValue: (key: string) => any;
    original: any;
    index: number;
  };