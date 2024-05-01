/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAsync, useFetchAndLoad } from "@/hooks";
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
import { useParams } from "react-router-dom";

function createData(
  name: string,
  estado: number,
  editar: JSX.Element,
  eliminar: JSX.Element,
  history: [
    {
      date: string;
    }
  ]
) {
  return {
    name,
    calories: estado,
    fat: editar,
    carbs: eliminar,
    history,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
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
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
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
const rows: ReturnType<typeof createData>[] = [];
const TablaTratamientos: React.FC<PropsTabla> = ({
  idVeterinario,
}: PropsTabla) => {
  const params = useParams();
  const pacienteIdString = params.mipaciente;
  const pacienteId = parseInt(pacienteIdString ?? "0");
  const { callEndpoint } = useFetchAndLoad();

  const getApiData = async () =>
    await callEndpoint(getTratamientoId(idVeterinario, pacienteId));

  const adaptUser = (data: any) => {
    console.log(data);
    if (data.length > 0) {
      data.forEach((element: any) => {
        rows.push(
          createData(
            element.nombre,
            100,
            <Button color="secondary" variant="contained">
              Editar
            </Button>,
            <Button color="secondary" variant="outlined">
              Eliminar
            </Button>,
            [{ date: element.descripcion }]
          )
        );
      });
    }
  };
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaTratamientos;
