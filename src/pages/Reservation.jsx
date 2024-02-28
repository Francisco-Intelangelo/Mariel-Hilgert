import "../components/Reservation/Reservation.css"
import { useState } from "react";

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handlePayment = () => {
    // Aquí iría la lógica para procesar el pago y realizar la reserva
    if (selectedDate && selectedTime) {
      // Lógica de pasarela de pago y reserva
      alert(`¡Reserva realizada para el ${selectedDate} a las ${selectedTime}!`);
    } else {
      alert('Por favor selecciona una fecha y un horario antes de continuar.');
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
        <h3 className="reservation-title-form">Selecciona una fecha y hora</h3>
        <input className="reservation-input" type="date" min={getCurrentDate()} onChange={(e) => handleDateChange(e.target.value)} />
        <select className="reservation-select" id="select-reservation-id" onChange={(e) => handleTimeChange(e.target.value)}>
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