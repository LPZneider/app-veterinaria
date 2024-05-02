import { useAsync, useFetchAndLoad } from "@/hooks";
import getVeterinariasId from "@/services/veterinariasId.service";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./VeterinariasDetalle.css";
import { Navbar } from "@/components/Navbar";
import { propsNavUserVeterinaria } from "@/utilities";
import { Roles, VeterinariaInfo } from "@/models";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { Alert, Button } from "@mui/material";
import AddUserAdapter from "@/adapters/AddUserAdapter";
import RemoveUserAdapter from "@/adapters/DeleteUserAdapter";

export type VeterinariasDetalleProps = {
  // types...
};

const EmptyVeteState: VeterinariaInfo = {
  id: 0,
  nombre: "",
  direccion: "",
  usuarios: [],
  veterinarios: [],
  rol: Roles.NO_REGISTRADO,
  productos: [],
  registro: {
    email: "",
    password: "",
  },
};

const VeterinariasDetalle: React.FC<VeterinariasDetalleProps> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const [anular, setAnular] = useState(false);
  const [suscribirse, setSuscribirse] = useState(false);
  const params = useParams();
  const veterinariaIdString = params.veterinariaId;
  const veterinariaId = parseInt(veterinariaIdString ?? "0");
  const { loading, callEndpoint } = useFetchAndLoad();

  const getApiData = async () =>
    await callEndpoint(getVeterinariasId(veterinariaId));

  const [veterinaria, setVeterinaria] =
    useState<VeterinariaInfo>(EmptyVeteState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adaptUser = (data: any) => {
    setVeterinaria(data);
  };

  useAsync(getApiData, adaptUser, () => {});
  return (
    <div className="veterinariadetalle home">
      <Navbar {...propsNavUserVeterinaria} />
      {loading ? (
        <img src="/public/assets/loader.svg" alt="loading" width={30} />
      ) : (
        <div className="veterinaria__detalle">
          <section className="imagen_veterinaria">
            <img
              src={`/public/assets/dog${Math.floor(Math.random() * 5) + 1}.svg`}
              alt="icono mascota"
            />
          </section>
          <section className="informacion__veterinaria">
            <h1>{veterinaria.nombre}</h1>

            <div className="alerta">
              {veterinaria.usuarios.find((usuario) => {
                return usuario.id === userState.id;
              }) ? (
                <>
                  <Alert
                    severity="success"
                    variant="outlined"
                    action={
                      <Button
                        color="success"
                        size="small"
                        variant="contained"
                        onClick={() => setAnular(!anular)}
                      >
                        Anular
                      </Button>
                    }
                  >
                    Estas suscrito
                  </Alert>
                  {anular && (
                    <RemoveUserAdapter
                      idUsuario={userState.id}
                      idVeterinaria={veterinaria.id}
                    />
                  )}
                </>
              ) : (
                <>
                  <Alert
                    severity="info"
                    variant="outlined"
                    action={
                      <Button
                        color="success"
                        size="small"
                        variant="contained"
                        onClick={() => setSuscribirse(!suscribirse)}
                      >
                        Suscribirse
                      </Button>
                    }
                  >
                    No estas suscrito
                  </Alert>
                  {suscribirse && (
                    <AddUserAdapter
                      idUsuario={userState.id}
                      idVeterinaria={veterinaria.id}
                    />
                  )}
                </>
              )}
            </div>

            <p className="texto__veterinaria">
              En cada veterinaria, florece un jardín de amor y compromiso, una
              sinfonía silenciosa de entrega hacia cada ser que busca su ayuda.
              Con su toque gentil y su mente llena de conocimiento, ellas cuidan
              y protegen, recordándonos la importancia de cada criatura en el
              mosaico de la vida.
            </p>

            <h2>Veterinarios inscritos</h2>
            <div className="info">
              {veterinaria.veterinarios &&
                veterinaria.veterinarios.map((vete) => (
                  <section key={vete.nombre} className="item__veterinaria">
                    <section className="item__image__veterinaria">
                      <img
                        src={`/public/assets/dog${
                          Math.floor(Math.random() * 5) + 1
                        }.svg`}
                        alt="icono mascota"
                      />
                    </section>
                    <article className="info__veterinaria">
                      <h2 className="titulo__veterinaria">{vete.nombre}</h2>
                    </article>
                  </section>
                ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default VeterinariasDetalle;
