import "../components/Reservation/Reservation.css"
import { useState } from "react";

const Reservation = () => {
  const [selectedName, setSelectedName] = useState(null);
  const [selectedSurname, setSelectedSurname] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleNameChange = (name) =>{
    const nameMayus = name
    nameMayus.charAt(0).toUpperCase() + nameMayus.slice(1)
    setSelectedName(nameMayus)
  }
  const handleSurnameChange = (surname) =>{
    const surnameMayus = surname
    surnameMayus.charAt(0).toUpperCase() + surnameMayus.slice(1)
    setSelectedSurname(surnameMayus)
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handlePayment = () => {
    // Aquí iría la lógica para procesar el pago y realizar la reserva
    if (selectedName && selectedSurname && selectedDate && selectedTime) {
      // Lógica de pasarela de pago y reserva
      alert(`Gracias por tu reserva ${selectedName.charAt(0).toUpperCase() + selectedName.slice(1)} ${selectedSurname.charAt(0).toUpperCase() + selectedSurname.slice(1)}, reserva realizada para el ${selectedDate} a las ${selectedTime}!`);
    } else {
      alert('Por favor complete todos los campos antes de continuar.');
    }
  };

  // Función para obtener la fecha actual en formato YYYY-MM-DD
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <section className="reservation-container">
      <article className="reservation">
      <h1 className="reservation-title">Reserva de Turnos</h1>
      <form className="reservation-form">
        <h3 className="reservation-title-form">Nombre y apellido</h3>
        <input onChange={(e) => handleNameChange(e.target.value)} placeholder="Nombre" className="reservation-input"/>
        <input onChange={(e) => handleSurnameChange(e.target.value)} placeholder="Apellido" className="reservation-input"/>
        <h3 className="reservation-title-form">Selecciona una fecha y hora</h3>
        <input className="reservation-input" type="date" min={getCurrentDate()} onChange={(e) => handleDateChange(e.target.value)} />
        <select className="reservation-input" id="select-reservation-id" onChange={(e) => handleTimeChange(e.target.value)}>
          <option value="">Selecciona un horario</option>
          <option>9:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          {/* Otros horarios disponibles */}
        </select>
      </form>
      <button className="btn-reservation" onClick={handlePayment}>Reservar Turno</button>
      </article>
    </section>
  );
};

export default Reservation