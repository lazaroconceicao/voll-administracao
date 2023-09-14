import { Paper } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

function Tabela() {
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} arial-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">22/03/2022</TableCell>
                            <TableCell>08:30</TableCell>
                            <TableCell>José Lázaro</TableCell>
                            <TableCell>Clínico Geral</TableCell>
                            <TableCell>Marlucia Lima</TableCell>
                            <TableCell>Particular</TableCell>
                        </TableRow>
                    </TableBody>    
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;