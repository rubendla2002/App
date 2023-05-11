import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from "react-signature-canvas"
import logo from "./img/LOGOPDF.png"
import jsPDF from "jspdf";
import telefono from "./img/telefono.png"
import correo from "./img/correo.png"
import informacion from "./img/informacion.png"



function Parte() {

  const [isChecked, setIsChecked] = useState(false);
  const signatureRef = useRef(null);
  const signatureRefCliente = useRef(null);
  const [inputs, setInputs] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeDifference, setTimeDifference] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date.toLocaleDateString('es', { weekday: "long", year: "numeric", month: "short", day: "numeric" }))
  }


  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }
  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function calcTimeDifference() {
    const timeStart = new Date(`01/01/2000 ${startTime}`);
    const timeEnd = new Date(`01/01/2000 ${endTime}`);
    const timeDiff = timeEnd.getTime() - timeStart.getTime();
    const timeDiffInSeconds = timeDiff / 1000;
    const hours = Math.floor(timeDiffInSeconds / 3600);
    const minutes = Math.floor((timeDiffInSeconds - (hours * 3600)) / 60);
    setTimeDifference(`${hours} horas ${minutes} minutos`);
  }

  const [cliente, setCliente] = useState("");
  const [encargado, setEncargado] = useState("");
  const [equipo, setEquipo] = useState("");
  const [modelo, setModelo] = useState("");
  const [serie, setSerie] = useState("");
  const [trabajo, setTrabajo] = useState("");
  const [empleado, setEmpleado] = useState("");

  const submitInfo = () => {
    const doc = new jsPDF();
    doc.addImage(logo, 'PNG', 10, 8, 50, 25);
    doc.setFontSize(12);
    doc.text("PARTE DE VISITA", 150, 10);
    doc.text("SERVICIO TÉCNICO", 147, 15);
    doc.addImage(telefono, 'PNG', 144, 18, 5, 5)
    doc.addImage(correo, 'PNG', 145, 24, 3, 3.5)
    doc.addImage(informacion, 'PNG', 145, 29.5, 3.5, 3)
    doc.setFontSize(10);
    doc.text("928 18 89 49", 150, 22);
    doc.text("administracion@cifpvilladeaguimes.es", 150, 27);
    doc.text("www.cifpvilladeaguimes.es", 150, 32);
    doc.setLineWidth(0.5);
    doc.line(200, 40, 8, 40);
    doc.line(8, 40, 8, 290);
    doc.line(200, 40, 200, 290);
    doc.line(200, 290, 8, 290);
    doc.setFontSize(12);
    doc.text(cliente, 28, 50);
    doc.text(selectedDate.toLocaleDateString('es', { weekday: "long", year: "numeric", month: "short", day: "numeric" }).toUpperCase(), 135, 50);
    doc.text(encargado, 37, 63);
    doc.text(startTime, 145, 63);
    doc.text(endTime, 183, 63);
    doc.text(inputs, 18, 221, { lineHeightFactor: 1.5, maxWidth: 80 });
    doc.text(trabajo, 20, 110, { align: 'justify', lineHeightFactor: 1.5, maxWidth: 165 })
    doc.text(equipo, 28, 75);
    doc.text(modelo, 98, 75);
    doc.text(serie, 160, 75);
    doc.text(timeDifference, 158, 270)
    doc.addImage(signatureRef.current.toDataURL(), 'JPEG', 107, 215, 40, 40)
    doc.addImage(signatureRefCliente.current.toDataURL(), 'JPEG', 155, 215, 40, 40)
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold');
    doc.text("Cliente:  ", 10, 50);
    doc.text("Fecha:  ", 118, 50);
    doc.text("Encargado:  ", 10, 63);
    doc.text("Hora Inicial: ", 118, 63);
    doc.text("Hora Final: ", 158, 63);
    doc.text("Equipo:  ", 10, 75);
    doc.text("Modelo:  ", 80, 75);
    doc.text("Nº Serie:  ", 140, 75);
    doc.line(200, 85, 8, 85);
    doc.text("Trabajo Realizado", 80, 100);
    doc.line(190, 103, 15, 103);
    doc.line(190, 103, 190, 200);
    doc.line(15, 103, 15, 200);
    doc.line(190, 200, 15, 200);
    doc.text("Materiales", 45, 211)
    doc.line(100, 215, 15, 215);
    doc.line(100, 215, 100, 280);
    doc.line(15, 215, 15, 280);
    doc.line(100, 280, 15, 280);
    doc.text("Firma Tecnico:  ", 107, 211)
    doc.text("Firma Cliente:  ", 155, 211)
    console.log(cliente + " " + empleado)
    doc.text("Tiempo trabajado:  ", 120, 270)
    doc.text("Cubre contrato:  " + (isChecked ? "SI" : "NO" ), 120, 280)
    doc.save(empleado +'  Parte.pdf');


  }

  const handleAddInput = () => {
    setInputs([...inputs, '']);

  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };


  const handleSave = () => {
    const signature = signatureRef.current.toDataURL();
    console.log(signature)
  };
  const handleSavecliente = () => {
    const signaturecliente = signatureRefCliente.current.toDataURL();
    console.log(signaturecliente)

  };






  return (
    <div style={styles.container} className="container">
      <div style={styles.containeer}>
      <img src={logo} alt="logo" className="img" style={styles.logo} />

        <div className="containeer">
          <div className="row pt-5 mx-auto">
            <label style={styles.labelEmpleado}>
              Empleado:
            </label>
            <br></br>
            <label>
              <select id="Empleado" value={empleado} style={styles.select} onChange={(event) => { setEmpleado(event.target.value) }} required>
                <option value="Jesus">Jesus</option>
                <option value="Jacinto">Jacinto</option>
                <option value="Bernardo">Bernardo</option>
                <option value="Nathan">Manuel</option>
                <option value="Nathan">Ruben</option>
              </select>
              <p style={styles.labelEmpleado}> Selecionado: {empleado}</p>
            </label>
            <br></br>
            <label style={styles.labelEmpleado}>
              Cliente:
            </label>
            <br></br>
            <div className="col-8 form-group pt2 mx-auto">
              <input style={styles.cliente} placeholder="Cliente" id="cliente"
                onChange={(event) => { setCliente(event.target.value) }} required />
            </div>
            <br></br>
            <label style={styles.labelEmpleado}>
              Fecha:
            </label>
            <DatePicker className="fecha" style={styles.fecha} selected={selectedDate} onChange={handleDateChange} />
            <br></br>
            <div className="col-8 form-group pt2 mx-auto">
              <input style={styles.encargado} placeholder="Encargado" id="Encargado"
                onChange={(event) => { setEncargado(event.target.value) }} required />
            </div>
            <div>
              <label style={styles.labelEmpleado}>
                Tiempo Inicial: <br></br>
                <input style={styles.hora} name="tiempoInicial" type="time" value={startTime} onChange={handleStartTimeChange} />
              </label>
              <br />
              <label style={styles.labelEmpleado}>
                Tiempo Final: <br></br>
                <input style={styles.hora} name="tiempoFinal" type="time" value={endTime} onChange={handleEndTimeChange} />
              </label>
              <br />
              <button style={styles.btnTiempo} onClick={calcTimeDifference}>Tiempo de direfencia</button>
              <br />
              {timeDifference && (
                <div style={styles.labelEmpleado} name="tiempoTotal">
                  Tiempo trabajando: {timeDifference}
                </div>
              )}
            </div>
            <div className="col-8 form-group pt2 mx-auto">
              <input style={styles.equipo} placeholder="Equipo" id="Equipo"
                onChange={(event) => { setEquipo(event.target.value) }} required />
            </div>
            <br></br>
            <div className="col-8 form-group pt2 mx-auto">
              <input style={styles.modelo} placeholder="Modelo" id="Modelo"
                onChange={(event) => { setModelo(event.target.value) }} required />
            </div>
            <br></br>
            <div>
              <input style={styles.nºserie} placeholder="NºSerie" id="NºSerie"
                onChange={(event) => { setSerie(event.target.value) }} required />
            </div>
            <br></br>
            <div>
              <textarea style={styles.textarea} placeholder="Trabajo Realizado" id="textInput" name="trabajo" onChange={(event) => { setTrabajo(event.target.value) }} />
            </div>
            <br></br>
            <form onSubmit={handleSubmit}>
              {inputs.map((value, index) => (
                <div key={index}>
                  <input style={styles.materiales} type="text" placeholder="Materiales" value={value} onChange={(event) => handleInputChange(event, index)} />
                </div>
              ))}
              <button style={styles.btnTiempo} type="button" onClick={handleAddInput} >Añadir Materiales</button>
            </form>
            <div>
              <label style={styles.labelEmpleado}>Firma Tecnico:</label>
              <SignatureCanvas canvasProps={styles.firma} ref={signatureRef} />
            </div>
            <div>
              <label style={styles.labelEmpleado}>Firma Cliente:</label>
              <SignatureCanvas canvasProps={styles.firma} ref={signatureRefCliente} />
            </div>
            <div style={styles.contrato}>
              <label style={styles.labelEmpleado}>Cubre contrato:</label>
              <br></br>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Checkbox label
              </label>
            </div>
            <br></br>
            <div style={styles.divParte}>
              <button style={styles.btnTiempo} type="submit" onClick={submitInfo}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parte;

const styles = {
  container: {
    marginTop: "120px",
    height: "0px",
    width: "350px",
    left: "50%",
    
  },
  containeer: {
    position: "absolute",
    height: "0px",
    width: "350px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    maxWidth: "700px",
    minWidth: "350px",
    
  },
  labelEmpleado: {
    fontFamily: 'arial',
    fontSize: '20px',
    color: '#000',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "8px",

  },
  select: {
    padding: "5px 10px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
    textAlign: "center",

  },
  cliente: {
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  fechatext: {
    fontFamily: 'cursive',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "8px",
  },
  fecha: {
    fontSize: "14pt",
    borderRadius: "10px",
    marginTop: "5px",
  },
  encargado: {
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  firma: {
    width: "320px",
    height: "200px",
    border: "2px solid red",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: 'white',
  },
  firmatext: {
    fontFamily: 'cursive',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: "8px",

  },
  equipo: {
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  modelo: {
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  nºserie: {
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  textarea: {
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
    marginTop: "5px",
    height: "150px",
    width: "200px",
    minWidth: "200px",
    maxWidth: "350px",
  },
  logo: {
    position: "relative",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    left: "175px",
    color: "white",
    height: "220px",
    maxWidth: "700px",
    minWidth: "350px",
    marginTop: "15px",


  },
  hora: {
    padding: "10px 20px",
    margin: "10px 0",
    border: "1px solid black",
    borderRadius: "50px",
    fontSize: "11pt",
  },
  btnTiempo: {
    padding: "5px 3px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "50px",
    fontSize: "11pt",
    backgroundColor: "#000",
    color: "white",
  },
  checktext: {
    fontFamily: 'arial',
    fontSize: '18px',
    color: '#000',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "8px",
  },
  contrato: {
    padding: "20px 40px",
    display: "flex",
    position: "absolute",
  },
  materiales: {
    padding: "20px 40px",
    margin: "10px 0",
    border: "2px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
  },
  btnParte: {
    padding: "10px 20px",
    margin: "10px 0",
    border: "1px solid black",
    borderRadius: "10px",
    fontSize: "11pt",
    backgroundColor: "#B4B4B6",
    color: "black",
    alignItems: "center",
  },
  divParte: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
  }

}
