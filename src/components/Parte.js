import React, { useState, useRef, Component, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SignatureCanvas from "react-signature-canvas"
import logo from "../media/Logo Nettronica.png"
import jsPDF from "jspdf";



function Parte() {

  const signatureRef = useRef(null);
  const signatureRefCliente = useRef(null);
  const [inputs, setInputs] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [timeDifference, setTimeDifference] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const [selectedOption, setSelectedOption] = useState(null);

  function handleChange(selectedOption) {
    setSelectedOption(selectedOption);
  }
  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  function calcTimeDifference() {
    const timeStart = new Date(`01/01/2000 ${startTime}`);
    const timeEnd = new Date(`01/01/2000 ${endTime}`);
    const timeDiff = timeEnd.getTime() - timeStart.getTime();
    const timeDiffInSeconds = timeDiff / 1000;
    const hours = Math.floor(timeDiffInSeconds / 3600);
    const minutes = Math.floor((timeDiffInSeconds - (hours * 3600)) / 60);
    const seconds = Math.floor(timeDiffInSeconds - (hours * 3600) - (minutes * 60));
    setTimeDifference(`${hours} horas ${minutes} minutos`);
  }

  const [cliente, setCliente] = useState("");
  const [encargado, setEncargado] = useState("");
  const [equipo, setEquipo] = useState("");
  const [modelo, setModelo] = useState("");
  const [serie, setSerie] = useState("");
  const [trabajo, setTrabajo] = useState("");
  const [materiales, setMateriales] = useState("");
  const [empleado, setEmpleado] = useState("");
  
  const submitInfo = () =>{
    const doc = new jsPDF();
    doc.text("Hello World!", 10, 10);
    const pdfObject = doc.output();
    console.log(cliente + empleado)
    doc.save('hola.pdf')

  const emailContent ={
    cliente: cliente,
    encargado: encargado,
    equipo: equipo,
    modelo: modelo,
    serie: serie,
    trabajo: trabajo,
    empleado: empleado,
    inputs: inputs,
    attachments: {
      filename: doc,
      content: doc.output('datapdf')
    }
  };

    
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
    // enviar la firma a un servidor o almacenarla en el estado del componente
  };
  const handleSavecliente = () => {
    const signaturecliente = signatureRefCliente.current.toDataURL();
    // enviar la firma a un servidor o almacenarla en el estado del componente

  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };


  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" className="img" style={styles.logo} />
      <div style={styles.containeer}>

        <div className="container">
            <div className="row pt-5 mx-auto">
              <label style={styles.labelEmpleado}>
                Empleado:
              </label>

              <br></br>
              <label>
                <select id="Empleado" value={empleado} style={styles.select} onChange={(event) => {setEmpleado(event.target.value)}}  required>
                  <option value="Jesus">Jesus</option>
                  <option value="Jacinto">Jacinto</option>
                  <option value="Bernardo">Bernardo</option>
                  <option value="Nathan">Nathan</option>
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
                onChange={(event) => {setCliente(event.target.value)}}  required/>
              </div>
              <br></br>
              <label style={styles.labelEmpleado}>
                Fecha:
              </label>
              <DatePicker className="fecha" style={styles.fecha} selected={selectedDate} onChange={handleDateChange} />
              <br></br>
              <div className="col-8 form-group pt2 mx-auto">
                <input style={styles.encargado} placeholder="Encargado" id="Encargado" 
                onChange={(event) => {setEncargado(event.target.value)}}  required />
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
                 onChange={(event) => {setEquipo(event.target.value)}}  required/>
              </div>
              <br></br>
              <div className="col-8 form-group pt2 mx-auto">
                <input style={styles.modelo} placeholder="Modelo" id="Modelo" 
                onChange={(event) => {setModelo(event.target.value)}}  required />
              </div>
              <br></br>
              <div>
                <input style={styles.nºserie} placeholder="NºSerie" id="NºSerie" 
                onChange={(event) => {setSerie(event.target.value)}}  required />
              </div>
              <br></br>
              <div>
                <textarea style={styles.textarea} placeholder="Trabajo Realizado" id="textInput" name="trabajo" onChange={(event) => {setTrabajo(event.target.value)}} />
              </div>
              <br></br>
              <form onSubmit={handleSubmit}>
                {inputs.map((value, index) => (
                  <div key={index}>
                    <input style={styles.materiales} type="text" placeholder="Materiales" value={value} onChange={(event) => handleInputChange(event, index)} />
                  </div>
                ))}
                <button style={styles.btnTiempo} type="button" onClick={handleAddInput} >Añadir Materiales</button>
                <button style={styles.btnTiempo} type="submit">Guardar</button>
              </form>
              <div>
                <label style={styles.labelEmpleado}>Firma Tecnico:</label>
                <SignatureCanvas canvasProps={styles.firma} ref={signatureRef} />
                <button style={styles.btnTiempo} onClick={handleSave}>Guardar Firma</button>
              </div>
              <div>
                <label style={styles.labelEmpleado}>Firma Cliente:</label>
                <SignatureCanvas canvasProps={styles.firma} ref={signatureRefCliente} />
                <button style={styles.btnTiempo} onClick={handleSavecliente}>Guardar Firma</button>
              </div>
              <div style={styles.contrato}>
                <label style={styles.labelEmpleado}>Cubre contrato:</label>
                <br></br>
                <input
                  style={styles.checkk}
                  type="checkbox"
                  id="checkbox-id"
                  checked={isChecked}
                  onChange={handleCheck}
                />
                <label style={styles.checktext} htmlFor="checkbox-id">Si</label>
                <input
                  style={styles.checkk}
                  type="checkbox"
                  id="checkbox2-id"
                  checked={!isChecked}
                  onChange={handleCheck}
                />
                <label style={styles.checktext} htmlFor="checkbox2-id">No</label>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "350px",
    width: "400px",
    padding: "10px",
  },
  containeer: {
    position: "absolute",
    height: "0px",
    width: "380px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",


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
    width: "393px",
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
    width: "300px",
  },
  logo: {
    position: "absolute",
    width: "400px",
    textAlign: "center",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    height: "110px",
    maxWidth: "400px",
    minWidth: "400px",

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