import React from "react";
import imagenPagosCreditos from "../../assets/imgs/tarjetasdecredito.png";
import imagenPagosSucursal from "../../assets/imgs/sucursalpago.png";
import imagenTransporte from "../../assets/imgs/transporte.png";
import imagenVuelos from "../../assets/imgs/vuelos.png";
import imagenGrupos from "../../assets/imgs/grupos.png";
import imagenHoteles from "../../assets/imgs/hoteles.png";
import imagenCarga from "../../assets/imgs/carga.png";

const Pagos = () => {
  return (
    <div className="Pagos">
      <h1 className="title_pagos">Pago seguro</h1>
      <div className="metodos_pago">
        <div className="info_tarjetasCredito">
          <p>Tarjeta de credito, tarjeta de debito y pago electronico </p>
          <img src={imagenPagosCreditos} id="tarjetasCredito" />
        </div>
        <div className="info_sucursal">
          <p>Efectivo en cualquiera de las sucursales participantes</p>
          <img src={imagenPagosSucursal} id="PagosSucursal" />
        </div>
      </div>
      <h3 className="title_servicios">Servicios disponibles</h3>
      <div className="info_servicios">
        <div className="info_transporte">
          <img src={imagenTransporte} id="imagenTransporte" />
          <p className="title_cardServicio">Transporte</p>
          <p className="txt_cardServicio">Renta un auto o reserva un shuttle</p>
        </div>
        <div className="info_vuelos">
          <img src={imagenVuelos} id="imagenVuelos" />
          <p className="title_cardServicio">Vuelos + Hoteles</p>
          <p className="txt_cardServicio">Encuentra las mejores ofertas para tus viaje</p>
        </div>
        <div className="info_grupos">
          <img src={imagenGrupos} id="imagenGrupos" />
          <p className="title_cardServicio">Grupos</p>
          <p className="txt_cardServicio">Obten una cotizacion para grupo de mas de 9 personas </p>
        </div>
        <div className="info_hoteles">
          <img src={imagenHoteles} id="imagenHoteles" />
          <p className="title_cardServicio">Hoteles</p>
          <p className="txt_cardServicio">reserva en cualquier habitacion en cualquier parte del mundo</p>
        </div>
        <div className="info_carga">
          <img src={imagenCarga} id="imagenCarga" />
          <p className="title_cardServicio">Carga</p>
          <p className="txt_cardServicio">Contamos con servicio de carga y mensajeria</p>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
