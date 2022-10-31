import React from 'react'
import { useSelector } from 'react-redux';
 
const InfoReservacion = ({handleAsientos, objetoApiVulos, addArrayNumeros}) => {

  const valores = objetoApiVulos?.paisOrigen; 
  const siglas = valores?.slice(0,3);
  const valores1 = objetoApiVulos?.paisDestino; 
  const siglas1 = valores1?.slice(0,3);


  const totalPersonas = objetoApiVulos?.totalPersonas;
  const valorMaletas = useSelector(state => state.valorMaletas);

  const tlAdultos = totalPersonas?.adultos * 450;
  const tlNiños = totalPersonas?.niños * 350;
  const tlBebes = totalPersonas?.bebes * 250;
  const totalTarifaBase = tlAdultos + tlNiños + tlBebes;
  const sumaValoresMaletas = valorMaletas.reduce((a,b) => a+b);
  const costoMaletas = sumaValoresMaletas

  const total = Number(costoMaletas) + Number(totalTarifaBase)


  return (
    <>
      <div className="info__reservacion">
        <div className="info__reservacion--container1">
          <p>Tu reservacion</p>
          <div className="info__div">
            <div className="info__pasajeros" id="info__pasajeros">
              <p>pasajeros</p>
              <div>
                <p>{objetoApiVulos?.totalPersonas?.adultos} adultos</p>
                <p>{objetoApiVulos?.totalPersonas?.niños} niños</p>
                <p>{objetoApiVulos?.totalPersonas?.bebes} bebes</p>
              </div>
            </div>
            <div className="info__date">
              <div className="info__div--date">
                <p className="p">Vuelo de salida</p>
                <div className="info__div--text">
                  <div className="info__salida">

                    <p>{siglas}</p>
                    <p>_____</p>
                    <p>{siglas1}</p>
                  </div>
                  <div className="info__hora">
                    <p>05:45 PM </p>
                    <p>06:47 PM</p>
                  </div>
                  <p className="fecha__text">{objetoApiVulos?.fechaSalida}</p>
                </div>
              </div>
              <div className="info__div--date">
                <p className="p">Vuelo de regreso</p>
                <div className="info__div--text">
                  <div className="info__salida">
                    <p>{siglas1}</p>
                    <p>_____</p>
                    <p>{siglas}</p>
                  </div>
                  <div className="info__hora">
                    <p>05:45 PM </p>
                    <p>06:47 PM</p>
                  </div>
                  <p className="fecha__text">{objetoApiVulos?.fechaLlegada}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="title_costoVuelo">Costo Vuelo</h4>
          <div className="card_costoVuelo">
            <div className="tarifa_base">
              <p>Tarifa base</p>
              <p>${totalTarifaBase} USD</p>
            </div>
            <div className="costo_equipaje">
              <p>Costo equipaje</p>
              <p>${costoMaletas} USD</p>
            </div>
            <div className="costo_total">
              <p>Total</p>
              <p>${total} USD</p>
            </div>
          </div>
        </div>
        <div>
          {
            valorMaletas !== 0 &&
            <button onClick={() => handleAsientos()} className="btn_seleccionarAsientos" >Seleccionar asientos</button>
          }
          <button onClick={() => addArrayNumeros()} className="btn_seleccionarAsientos" >Guardar selecciones</button>
        </div>
      </div>
    </>
 
  )
}
 
export default InfoReservacion;


  // const [totalTarifaBase, serTotalTarifaBase] = useState("")
  // const [total, setTotal] = useState("");


  // const [numTarifa, setNumTarifa] = useState("")
  // console.log(Number(numTarifa))


  // const string = sumaValoresMaletas.toString();
  // const stringNum = sumaValoresMaletas.toString().length;
  // const totalValor = sumaValoresMaletas + Number(numTarifa);
  // const stringTotal = totalValor.toString();
  // const stringTotalNum = totalValor.toString().length;

  // useEffect(() => {
  //   if (stringNum > 3) {
  //     const addPuntoEnUno = string.slice(0,1);
  //     const addPuntoBody = string.slice(1,string.length);
  //     const stringConcatenado = `${addPuntoEnUno}.${addPuntoBody}`;
  //     setConstoMaletas(stringConcatenado);
  //   }else{
  //     setConstoMaletas(string);
  //   }
  //   if (stringTotalNum > 3){
  //     const addPuntoEnUno = stringTotal.slice(0,1);
  //     const addPuntoBody = stringTotal.slice(1,stringTotal.length);
  //     const stringTotalConcatenado = `${addPuntoEnUno}.${addPuntoBody}`;
  //     setTotal(stringTotalConcatenado);
  //   }else{
  //     setTotal(stringTotal);
  //   }
  // }, [stringNum, stringTotal]);


  // useEffect(() => {
  //   const arrTarifa = [];
  //   const tlAdultos = totalPersonas?.adultos;
  //   const tlNiños = totalPersonas?.niños;
  //   const tlBebes = totalPersonas?.bebes;
  //   const tarifaAdultos = tlAdultos !== 0 ? tlAdultos * 450 : tlAdultos;
  //   const tarifaNiños = tlNiños !== 0 ? tlNiños * 350 : tlNiños;
  //   const tarifaBebes = tlBebes !== 0 ? tlBebes * 250 : tlBebes;

  //   arrTarifa.push(tarifaAdultos, tarifaNiños, tarifaBebes)

  //   const arrayTarifaTotal = arrTarifa.reduce((a,b) => a+b);
  //   const stringTarifaBase = arrayTarifaTotal.toString();
  //   const stringTarifaBaseNum = arrayTarifaTotal.toString().length;

  //   if(stringTarifaBaseNum > 3){
  //     const stringTarifaBaseRecorteHead = stringTarifaBase.slice(0,1);
  //     const stringTarifaBaseRecorteBody = stringTarifaBase.slice(1,stringTarifaBase.length);
  //     const stringTarifaBaseTerm = `${stringTarifaBaseRecorteHead}.${stringTarifaBaseRecorteBody}`;
  //     setNumTarifa(stringTarifaBase)
  //     serTotalTarifaBase(stringTarifaBaseTerm);
  //   }else{
  //     setNumTarifa(stringTarifaBase)
  //     serTotalTarifaBase(stringTarifaBase);
  //   }
  // }, [totalPersonas])