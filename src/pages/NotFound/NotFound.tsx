import React, { FC } from 'react';
import styled from '@emotion/styled';

interface NotFoundProps {

}
export const NotFound: FC<NotFoundProps> = (props) => {


  return (
    <>

      <h1>404 - Página no encontrada</h1>
      <h2>Yo había ponido mi página aquí</h2>
      <img src="https://plantillasdememes.com/img/plantillas/yo-habia-ponido-mis-cosas-aqui01561772600.jpg" alt="Gatomeme había ponido" width="200px" />

      <p>Lo sentimos mucho, la página que buscas no ha podido ser encontrada, hemos dado aviso a las brigadas de busqueda, pero aún no tenemos noticias suyas.</p>
      <p>Puedes unirte a la busqueda, para ello, dirigite a <a href="/">nuestra página principal</a> y comienza la búsqueda desde alli.</p>
      <p>Muchas gracias por tu comprensión y ayuda, de parte nuestra y de la familia de la página extraviada</p>
    </>
  );
};
