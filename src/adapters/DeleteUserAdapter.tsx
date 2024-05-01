import { useAsync, useFetchAndLoad } from "@/hooks";
import removeUsuario from "@/services/veterinariaUsuarioRemove.service";

interface RemoveUserAdapterProps {
  idUsuario: number;
  idVeterinaria: number;
}

const RemoveUserAdapter = ({
  idUsuario,
  idVeterinaria,
}: RemoveUserAdapterProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(removeUsuario(idUsuario, idVeterinaria));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = () => {};

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
export default RemoveUserAdapter;
