CREATE DATABASE db;
USE db;

CREATE TABLE `biblioteca` (
  `idBiblioteca` int(11) NOT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `Juego_idJuego` int(11) NOT NULL,
  `Puntuacion` int(11) NOT NULL,
  `Opinion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `idComentarios` int(11) NOT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `Publicacion_idPublicacion` int(11) NOT NULL,
  `Comentario` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consola`
--

CREATE TABLE `consola` (
  `idConsola` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juego`
--

CREATE TABLE `juego` (
  `idJuego` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` varchar(500) NOT NULL,
  `Cartucho` varchar(500) NOT NULL,
  `Fecha` date NOT NULL,
  `Consola_idConsola` int(11) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `idPublicacion` int(11) NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `Usuario_idUsuario` int(11) NOT NULL,
  `Juego_idJuego` int(11) NOT NULL,
  `Comentario` varchar(230) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `Contrasenia` varchar(45) NOT NULL,
  `Biografia` varchar(45) NOT NULL,
  `Fecha` date NOT NULL,
  `Tipo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `sesion` (
  `idUsuario` int(11) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Tipo` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--
-- ??ndices para tablas volcadas
--

--
-- Indices de la tabla `biblioteca`
--
ALTER TABLE `biblioteca`
  ADD PRIMARY KEY (`idBiblioteca`),
  ADD KEY `Usuario_idUsuario` (`Usuario_idUsuario`,`Juego_idJuego`),
  ADD KEY `Juego_idJuego` (`Juego_idJuego`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`idComentarios`),
  ADD KEY `Usuario_idUsuario` (`Usuario_idUsuario`,`Publicacion_idPublicacion`),
  ADD KEY `Publicacion_idPublicacion` (`Publicacion_idPublicacion`);

--
-- Indices de la tabla `consola`
--
ALTER TABLE `consola`
  ADD PRIMARY KEY (`idConsola`);

--
-- Indices de la tabla `juego`
--
ALTER TABLE `juego`
  ADD PRIMARY KEY (`idJuego`),
  ADD KEY `Consola_idConsola` (`Consola_idConsola`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`idPublicacion`),
  ADD KEY `Usuario_idUsuario` (`Usuario_idUsuario`,`Juego_idJuego`),
  ADD KEY `Juego_idJuego` (`Juego_idJuego`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `biblioteca`
--
ALTER TABLE `biblioteca`
  MODIFY `idBiblioteca` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `idComentarios` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `consola`
--
ALTER TABLE `consola`
  MODIFY `idConsola` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `juego`
--
ALTER TABLE `juego`
  MODIFY `idJuego` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `idPublicacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `biblioteca`
--
ALTER TABLE `biblioteca`
  ADD CONSTRAINT `biblioteca_ibfk_1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON UPDATE CASCADE,
  ADD CONSTRAINT `biblioteca_ibfk_2` FOREIGN KEY (`Juego_idJuego`) REFERENCES `juego` (`idJuego`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`Publicacion_idPublicacion`) REFERENCES `publicacion` (`idPublicacion`) ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `juego`
--
ALTER TABLE `juego`
  ADD CONSTRAINT `juego_ibfk_1` FOREIGN KEY (`Consola_idConsola`) REFERENCES `consola` (`idConsola`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`Juego_idJuego`) REFERENCES `juego` (`idJuego`) ON UPDATE CASCADE,
  ADD CONSTRAINT `publicacion_ibfk_2` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON UPDATE CASCADE;

INSERT INTO `consola` (`idConsola`, `Nombre`) VALUES (1, 'Nintendo 64');
INSERT INTO `consola` (`idConsola`, `Nombre`) VALUES (2, 'NES');

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Super Mario Bros. 3','Mario y Luigi vuelven para enfrentarse a Bowser y sus adorables hijos', 'https://media.redadn.es/imagenes/super-mario-bros-3_121249_caratula-1.jpg' ,'1991/08/30',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Super Mario Bros','Bowser, el rey de los Koopa y villano por excelencia, ha secuestrado a la princesa Peach del Reino Champi????n y la ha encerrado en su castillo. ??Tienes lo que hay que tener para salvarla?', 'https://i.blogs.es/638318/super_mario_bros_logo/1366_2000.jpeg' ,'1987/05/15',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('The Legend of Zelda','Acompa??a a Link en su primera gran aventura nacida de la mente de Shigeru Miyamoto y prep??rate para afrontar terribles enemigos y duros desaf??os en las m??s intrincadas mazmorras. Ay??date de los fabulosos objetos y armas que encontrar??s a lo largo de tu periplo, adem??s de tu fiel espada y buenas dosis de valor e ingenio, y l??nzate a salvar la tierra de Hyrule. ??Aprisa, Zelda te necesita!', 'https://media.redadn.es/imagenes/the-legend-of-zelda_112070_caratula-1.jpg' ,'1987/11/15',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Gauntlet II','Recorre todos y cada uno de los m??s de cien laberintos, indagando en todas las habitaciones secretas en busca de trampas, monstruos, campos de fuerza y villanos, exactamente igual que en la versi??n original.', 'https://media.redadn.es/imagenes/gauntlet-ii_248275_caratula-1.jpg' ,'1991/04/25',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Rygar','Un beatem up lleno de colorido, muchos enemigos, mucha acci??n y una dificultad que pondr?? a prueba a los jugadores m??s expertos en el g??nero. El juego adem??s combina elementos de otros g??neros tales como la aventura o el RPG.', 'https://media.redadn.es/imagenes/rygar_155615_caratula-1.jpg' ,'1990/03/30',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Mega Man 2','Ponte en la piel de Mega Man, que tambi??n ha crecido en poder y habilidad, para hacer frente a las adversidades a trav??s de ocho grandes imperios dominados por un robot diferente cada uno. S??lo despu??s de ser todos destruidos te enfrentar??s con el mism??simo cerebro, el malvado Dr. Wily.', 'https://media.redadn.es/imagenes/mega-man-2_101513_caratula-1.png' ,'1990/12/14',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Mega Man 3','Mega Man 3 del tercer t??tulo de esta saga saga de NES. En esta ocasi??n nuestro protagonista debe acabar con ocho complejos robots que impiden la creaci??n de un nuevo invento destinado a ofrecer la paz al mundo.', 'https://media.redadn.es/imagenes/mega-man-3_101516_caratula-1.png' ,'1990/02/20',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Donkey Kong','??El gigantesco Donkey Kong ha secuestrado a Pauline! No contento con eso, adem??s, se la ha llevado a lo alto de un edificio en obras y no tiene intenci??n de bajar. ??Ser?? Mario capaz de salvarla? ', 'https://media.redadn.es/imagenes/donkey-kong_152737_caratula-1.jpg' ,'1986/10/15',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Castlevania III: Draculas Curse','Se trata de un t??tulo ambientado en el a??o 1476 en el que la Iglesia acude al clan Belmont para acabar con Dr??cula y evitar que su ej??rcito de monstruos destruyan Europa.', 'https://media.redadn.es/imagenes/castlevania-iii-draculas-curse_153774_caratula-1.jpg' ,'1992/12/10',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Mega Man 4','Un duelo cibern??tico se apodera de nuevo de las calles de la ciudad, donde estallan los sonidos de metal fundido enfrent??ndose entre s??. Armado con la nueva Mega Buster, Mega Man deber?? correr, saltar y esquivar en su camino a trav??s de laberintos hacia la ciudadela de Siberia del Dr. Cossack.', 'https://media.redadn.es/imagenes/mega-man-4_235145_caratula-1.jpg' ,'1993/01/21',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Tennis','Haz gala de tu mejor tenis con potentes saques, golpes h??biles, globos imposibles y tiros cruzados a velocidad de v??rtigo, y escala posiciones en la clasificaci??n. En las jugadas conflictivas, tu suerte quedar?? en manos del juez de silla', 'https://media.redadn.es/imagenes/tennis_199208_caratula-1.jpg' ,'1986/01/21',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Mega Man 5','Echale una mano en su nueva aventura a trav??s de ocho nuevos mundos plagados de saltos y disparos. Enfr??ntate en arduas batallas finales contra enemigos de la talla de Gravity Man, Stone Man o Wave Man, y prep??rate para el enfrentamiento entre hermanos rob??ticos en la batalla definitiva.', 'https://media.redadn.es/imagenes/mega-man-5_101522_caratula-1.png' ,'1993/11/18',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('EarthBound Beginnings','Descubre el origen de la saga EarthBound con esta localizaci??n no publicada anteriormente del cl??sico videojuego de rol japon??s Mother.', 'https://media.redadn.es/imagenes/earthbound-beginnings_169725_caratula-1.jpg' ,'1989/07/27',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Faxanadu','Ad??ntrate en el mundo de rol y acci??n de Faxanadu, una aventura llena de magia, monstruos y gloria en la que cada pueblo guarda un nuevo misterio y cada fortaleza un nuevo peligro.', 'https://media.redadn.es/imagenes/faxanadu_151405_caratula-1.jpg' ,'1990/12/28',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Double Dragon','El juego nos presenta a dos hermanos, Billy y Jimmy Lee, cuya misi??n es salvar a Marian, la novia de Billy, quien ha sido secuestrada por los Black Warriors. Estos son una banda de expertos en artes marciales que busca por todos los medios aprender los secretos del SouSetsuKen, una t??cnica de lucha que los dos hermanos dominan.', 'https://media.redadn.es/imagenes/double-dragon_101546_caratula-1.jpg' ,'1990/12/31',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Castlevania','Este cl??sico t??tulo para NES te pone en el papel de Simon Belmont, heroico aventurero que debe enfrentarse al diab??lico Conde Dr??cula y a su infernal ej??rcito de criaturas de la noche.', 'https://media.redadn.es/imagenes/castlevania_152703_caratula-1.jpg' ,'1988/12/19',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Kirbys Adventure','Tras una extra??a siesta en la que no ha logrado so??ar nada, Kirby descubre que la Fuente de los Sue??os se ha secado. ??El causante? Nada m??s y nada menos que el Rey Dedede, quien ha robado la varita Estelar que suple de poder a la fuente, la ha roto en siete pedazos y la ha diseminado por toda Dream Land. El peque??o h??roe de color rosa deber?? encargarse del asunto.', 'https://media.redadn.es/imagenes/kirbys-adventure_145206_caratula-1.jpg' ,'1993/12/01',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Maniac Mansion','En opini??n de Dave, la mansi??n del Dr. Edison siempre ha tenido una pinta sospechosa. M??s all?? de los rumores sobre sus extra??os experimentos, hay que reconocer que no es muy normal vivir al mismo tiempo con la familia y con dos tent??culos ambulantes de colores chillones y aspecto alien??gena... Es por ello que, cuando su novia desaparece, a Dave no le cabe ninguna duda de que el Dr. Edison tiene algo que ver en ello. ??Encontrar?? algo en la mansi??n que le ayude a encontrarla?', 'https://media.redadn.es/imagenes/maniac-mansion_101550_caratula-1.jpg' ,'1992/10/02',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Mega Man','En esta primera entrega de Mega Man nuestro protagonista debe enfrentarse contra los m??s poderosos l??deres y fuerzas de combate de Monsteropolis, una extra??a tierra repleta de humanoides rob??ticos creados por los experimentos err??neamente del Dr. Wily con los seres humanos.', 'https://media.redadn.es/imagenes/mega-man_234623_caratula-1.jpg' ,'1989/12/13',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Contra','El mundo ha sido invadido y s??lo dos veteranos de ??lite se alzan ahora frente a la amenaza de Red Falcon, el emperador alien??gena que amenaza con aniquilar a la humanidad. A trav??s de junglas, fortalezas de acero y la helada tundra, deber??n acabar con todo lo que se mueva y ene??arle a esa escoria invasora que nadie juguetea con ellos ni con el planeta Tierra.', 'https://media.redadn.es/imagenes/contra_142856_caratula-1.jpg' ,'1990/12/28',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Ninja Gaiden','Ryu Hayabusa quiere vengar el asesinato de su padre y para ello emprende camino a Am??rica donde le espera una trama que amenaza a toda la humanidad y que intentar?? destapar. Bajo la piel de este poderoso chico, emprendemos nuestra aventura.', 'https://media.redadn.es/imagenes/ninja-gaiden_156103_caratula-1.jpg' ,'1991/08/15',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('A boy and his Blob: Trouble on Blobolonia','Se trata del juego original de la franquicia que ha tenido un nuevo episodio en Wii, una obra del conocido programador David Crane, por desgracia el juego ha envejecido bastante mal, y su jugabilidad puede resultar muy dura hoy en d??a, por lo que se lo recomendar??a s??lo a fans de la saga o a los que tengan curiosidad por descubrir los or??genes de la franquicia.', 'https://media.redadn.es/imagenes/a-boy-and-his-blob-trouble-on-blobolonia_111295_caratula-1.jpg' ,'1991/08/15',2 );

INSERT INTO `juego` (`Nombre`,`Descripcion`,`Cartucho`,`Fecha`,`Consola_idConsola` ) VALUES 
('Adventures of Lolo','El malvado Devil King amenaza con destruir Eden, as?? que la princesa Lala y el pr??ncipe Lolo salen al rescate. Desgraciadamente, la princesa es raptada y Lolo tiene que seguir en solitario. Usa tu inteligencia para ayudarle a superar las trampas del castillo de Devil King y rescatar a Lala.', 'https://media.redadn.es/imagenes/adventures-of-lolo_146656_caratula-1.jpg' ,'1991/02/21',2 );  


INSERT INTO `usuario` (`Nombre`, `Username`, `Correo`, `Contrasenia`,`Biografia`,`Fecha`,`Tipo`) VALUES ('admin','admin', 'asfasdfsadf', 'admin','asdf','2020/05/10','1');

INSERT INTO `usuario` ( `Nombre`, `Username`, `Correo`, `Contrasenia`,`Biografia`,`Fecha`,`Tipo`) VALUES ('admin2','admin2', 'asfasdfsadf', 'admin2','asdf','2020/05/10','0');

INSERT INTO `publicacion` ( `Fecha`, `Usuario_idUsuario`, `Juego_idJuego`, `Comentario`) VALUES ( current_timestamp(), '1', '19', 'Juego favorito de nuestro querido auxiliar de practicas iniciales');
INSERT INTO `publicacion` ( `Fecha`, `Usuario_idUsuario`, `Juego_idJuego`, `Comentario`) VALUES (current_timestamp(), '2', '2', 'Mi juego favorito aunque no lo termin?? :c');

COMMIT;




/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
