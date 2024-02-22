import { AxiosResponse } from "axios";
import { useEffect } from "react";

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFunction: (data: any) => void,
  returnFunction: () => void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((result) => {
      if (isActive) successFunction(result.data);
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};
