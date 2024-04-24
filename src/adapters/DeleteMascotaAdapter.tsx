import { useAsync, useFetchAndLoad } from "@/hooks";
import { UserInfo } from "@/models";
import { DeleteMascota } from "@/models/deleteMascota";
import { update } from "@/redux/states/user";
import { AppStore } from "@/redux/store";
import deleteMascota from "@/services/mascotaDelete.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteMascotaAdapter = ({ id }: DeleteMascota) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);

  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () => await callEndpoint(deleteMascota({ id }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    const updatedUserState = {
      ...userState,
      mascotas: data,
    };
    dispatch(update(updatedUserState));

    navigate(`/mascotas`, { replace: true });

    const datalocal = localStorage.getItem("user");
    const datalocalobj = datalocal
      ? (JSON.parse(datalocal) as UserInfo)
      : { mascotas: [] };
    datalocalobj.mascotas = data;
    localStorage.setItem("user", JSON.stringify(datalocalobj));
  };

  useAsync(getApiData, adaptUser, () => {});
  return (
    <p>
      {loading ? (
        <img src="/public/assets/loader.svg" alt="loading" width={30} />
      ) : (
        ""
      )}
    </p>
  );
};
export default DeleteMascotaAdapter;
