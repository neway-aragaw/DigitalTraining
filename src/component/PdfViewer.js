import React from 'react';
import './SecurityCheckpoint.css'; // Asegúrate de crear este archivo CSS

function SecurityCheckpoint() {
  return (
    <div className="security-checkpoint">
      <h2>Parte 1 - Punto de control de seguridad</h2>
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
    </div>
  );
}

export default SecurityCheckpoint;
