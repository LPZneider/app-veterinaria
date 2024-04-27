import { useAsync, useFetchAndLoad } from "@/hooks";
import addUsuario from "@/services/veterinariaUsuarioAdd.service";

interface AddUserAdapterProps {
  idUsuario: number;
  idVeterinaria: number;
}

const AddUserAdapter = ({ idUsuario, idVeterinaria }: AddUserAdapterProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(addUsuario(idUsuario, idVeterinaria));

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
export default AddUserAdapter;
