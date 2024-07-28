import React, { useState } from 'react';
import './SecurityCheckpoint.css'; // Make sure to create this CSS file

function SecurityCheckpoint() {
  const [currentPart, setCurrentPart] = useState(1);

  const handleNextClick = () => {
    setCurrentPart(currentPart === 1 ? 2 : 1);
  };

  return (
    <div className="security-checkpoint esp">
      {currentPart === 1 && (
        <>
          <h2>Parte 1 - Punto de Control de Seguridad</h2>
          <p>
            ¡Bienvenidos a bordo, nuevos asistentes de servicio de PSA!
            ¡Felicidades por unirse al equipo de PSA! Estamos emocionados de tenerlos a bordo.
            A medida que comienzan este nuevo viaje, es esencial comprender los procedimientos de seguridad en el Aeropuerto BWI. Su cooperación es crucial para mantener un entorno seguro y eficiente para todos los pasajeros.
          </p>
          <h3>Procedimientos de Control de Seguridad</h3>
          <p>
            El Aeropuerto BWI tiene cuatro puntos de control de seguridad. Southwest Airlines opera a través de los Puntos de Control A, B y C. Cada uno de estos puntos de control ofrece diferentes líneas de seguridad: Clear, TSA Pre-Check, Regular y Empleado.
          </p>
          <ol>
            <li>Escanee su placa en el punto de control e ingrese su contraseña. No comparta su contraseña con nadie.</li>
            <li>Presente su placa al oficial de seguridad. Coopere plenamente con los oficiales de seguridad.</li>
            <li>Pase por el escáner de seguridad.</li>
            <li>Presente su placa a otro oficial de seguridad después del escaneo.</li>
          </ol>
          <p>
            Una vez que haya completado estos pasos, estará en el área segura del aeropuerto.
            Al seguir estos procedimientos, contribuye a la seguridad y el bienestar de todos los pasajeros. ¡Gracias por su cooperación!
          </p>
          <p>
            Recuerde: Su rol como asistente de servicio es vital para brindar un excelente servicio al cliente. Esperamos con ansias sus contribuciones al equipo de PSA.
            ¡Bienvenidos nuevamente!
          </p>
        </>
      )}

      {currentPart === 2 && (
        <>
          <h2>Parte 2 - Trabajando en la Puerta</h2>
          <p>
            Su papel principal como agente de sillas de ruedas es asistir a los pasajeros con discapacidades en la navegación por la terminal del aeropuerto. Esto incluye proporcionar transporte en silla de ruedas, asegurar la comodidad del pasajero y atender sus necesidades.
          </p>
          <h3>Puertas Asignadas</h3>
          <p>
            Su enfoque principal será asistir a los pasajeros en las puertas A7 a A16 en la Concourse A, puertas B2 a B15 en la Concourse B, y puertas C8 a C14 en la Concourse C.
          </p>
          <h3>Procedimientos en la Puerta</h3>
          <p>
            Al llegar a su puerta asignada, escanee el código de la puerta y el código QR ubicados cerca de la computadora del agente de puerta. Esto inicia su turno en esa puerta específica.
          </p>
          <p>
            A medida que los pasajeros lleguen, recíbalos cálidamente y ofrezca asistencia. Escanee su pase de abordar para verificar su información. Si necesitan una silla de ruedas, proporciónela y acompáñelos según sea necesario. Esté preparado para ayudar con el equipaje, dirigir a los pasajeros a los baños u otras comodidades, y utilizar el ascensor al transferir pasajeros entre las Concourses A y C.
          </p>
          <p>
            Por ejemplo, James, un agente de sillas de ruedas asignado a la puerta B2, llega a su puesto y escanea los códigos necesarios. Un pasajero, la Sra. Johnson, se acerca a la puerta requiriendo asistencia. James la saluda cálidamente, escanea su pase de abordar y le proporciona una silla de ruedas. La Sra. Johnson indica que necesita usar el baño antes de proceder a su puerta. James la acompaña al baño más cercano, asegurando su comodidad y seguridad durante todo el proceso.
          </p>
          <p>
            Siempre debe haber varias sillas de ruedas disponibles en su puerta para acomodar las necesidades de los pasajeros. Además, trate de no sentarse en una silla de ruedas mientras espera a los pasajeros, ya que esto puede dificultar su capacidad para asistir a otros de manera rápida.
          </p>
        </>
      )}

      <button onClick={handleNextClick}>
        {currentPart === 1 ? 'Siguiente' : 'Anterior'}
      </button>
    </div>
  );
}

export default SecurityCheckpoint;
