import { useAsync, useFetchAndLoad } from "@/hooks";
import { PublicRoutes, RegisterProps } from "@/models";
import getRegister from "@/services/register.service";
import { useNavigate } from "react-router-dom";

const RegisterAdapter = ({ nombre, email, password, idRol }: RegisterProps) => {
  const navigate = useNavigate();
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiData = async () =>
    await callEndpoint(getRegister({ nombre, email, password, idRol }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    console.log(data);
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
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
export default RegisterAdapter;
