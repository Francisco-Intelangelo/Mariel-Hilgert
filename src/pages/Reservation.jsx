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
    <div>
      <h1>Reserva de Turnos</h1>
      <div>
        <h2>Selecciona una fecha:</h2>
        <input type="date" min={getCurrentDate()} onChange={(e) => handleDateChange(e.target.value)} />
      </div>
      <div>
        <h2>Selecciona un horario:</h2>
        <select onChange={(e) => handleTimeChange(e.target.value)}>
          <option value="">Selecciona un horario</option>
          <option value="9:00">9:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          {/* Otros horarios disponibles */}
        </select>
      </div>
      <button onClick={handlePayment}>Ir a la Pasarela de Pago</button>
    </div>
  );
};

export default Reservation