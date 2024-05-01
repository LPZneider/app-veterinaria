/* eslint-disable @typescript-eslint/no-explicit-any */
import DeleteTratamientoAdapter from "@/adapters/DeleteTratamientoAdapter";
import { useAsync, useFetchAndLoad } from "@/hooks";
import { AppStore } from "@/redux/store";
import getTratamientoId from "@/services/TratamientoId.service";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function createData(
  id: number,
  name: string,
  estado: number,
  history: [
    {
      date: string;
    }
  ]
) {
  return {
    id,
    name,
    estado,
    history,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const veterinarioState = useSelector((store: AppStore) => store.veterinario);
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const [deleteM, setDeleteM] = React.useState(false);

  const handleDelete = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = () => {
    setDeleteM(true);
    setShowConfirmDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.estado}</TableCell>
        <TableCell align="right">
          <Button color="secondary" variant="contained">
            Editar
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button
            className="Button"
            variant="outlined"
            color="secondary"
            onClick={handleDelete}
          >
            Eliminar
          </Button>
          {showConfirmDialog && (
            <div className="dialog__remove">
              <div className="dialog__remove__mascota">
                <p>¿Estás seguro de eliminar este tratamiento?</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConfirmDelete}
                >
                  Sí
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleCancelDelete}
                >
                  No
                </Button>
              </div>
            </div>
          )}
          {deleteM && (
            <DeleteTratamientoAdapter
              id={row.id}
              idVeterinario={veterinarioState.veterinarios.id}
            />
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Informacion
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Descripcion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

interface PropsTabla {
  idVeterinario: number;
}

const TablaTratamientos: React.FC<PropsTabla> = ({
  idVeterinario,
}: PropsTabla) => {
  const [tratamientos, setTratamientos] = React.useState<
    ReturnType<typeof createData>[]
  >([]);

  const params = useParams();
  const pacienteIdString = params.mipaciente;
  const pacienteId = parseInt(pacienteIdString ?? "0");
  const { callEndpoint } = useFetchAndLoad();

  const getApiData = async () =>
    await callEndpoint(getTratamientoId(idVeterinario, pacienteId));

  const adaptUser = (data: any) => {
    console.log(data);
    if (data.length > 0) {
      setTratamientos((oldState) => {
        // Mapeamos los elementos de 'data' a un nuevo array de datos tratados
        const newData = data.map((element: any) => {
          return createData(element.id, element.nombre, 100, [
            { date: element.descripcion },
          ]);
        });
        return [...oldState, ...newData];
      });
    }
  };
  React.useEffect(() => {
    return () => {
      setTratamientos([]);
    };
  }, []);
  useAsync(getApiData, adaptUser, () => {});

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre (tratamiento)</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tratamientos.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaTratamientos;
