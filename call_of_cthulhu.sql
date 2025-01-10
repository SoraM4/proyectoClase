-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-01-2025 a las 14:24:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `call_of_cthulhu`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `biography`
--

CREATE TABLE `biography` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `biography`
--

INSERT INTO `biography` (`id`, `title`, `text`) VALUES
(1, 'Infancia y orígenes familiares', 'Howard Phillips Lovecraft nació el 20 de agosto de 1890 en Providence, Rhode Island, en el seno de una familia de clase media alta con raíces puritanas. Su padre, Winfield Scott Lovecraft, era un vendedor itinerante, y su madre, Sarah Susan Phillips, provenía de una familia prominente. Sin embargo, su infancia estuvo marcada por tragedias tempranas. Su padre fue internado en un hospital psiquiátrico cuando Lovecraft tenía solo tres años, debido a un colapso mental probablemente relacionado con sífilis, y murió cinco años después.'),
(2, 'Una niñez solitaria', 'Lovecraft fue criado principalmente por su madre, sus dos tías y su abuelo, Whipple Van Buren Phillips, en un ambiente victoriano lleno de restricciones y excentricidades. Desde pequeño, Lovecraft mostró una gran inteligencia y pasión por la literatura, especialmente por la mitología griega y romana. Sin embargo, su madre lo sobreprotegió, convenciéndolo de que era demasiado débil y feo para interactuar con otros niños, lo que fomentó su aislamiento social.'),
(3, 'Educación autodidacta y amor por la literatura', 'Aunque su educación formal fue intermitente debido a problemas de salud, Lovecraft se convirtió en un ávido lector y autodidacta. A los ocho años, comenzó a escribir poesía inspirada en Homero, Edgar Allan Poe y los cuentos góticos. Más tarde, se sumergió en la astronomía y las ciencias, desarrollando un interés que influiría profundamente en su escritura de ficción.'),
(4, 'Tragedias familiares', 'La muerte de su abuelo en 1904 supuso un golpe devastador para Lovecraft, tanto emocional como financiero. La familia perdió gran parte de su riqueza, obligándolos a mudarse a una modesta casa en Providence. Este evento marcó el inicio de un período de depresión severa para Lovecraft, quien incluso contempló el suicidio durante su adolescencia.'),
(5, 'Primeros escritos y dificultades personales', 'Durante su juventud, Lovecraft comenzó a escribir cuentos, aunque muchos de estos primeros trabajos no fueron publicados. Se convirtió en un recluso, evitando el contacto social y dedicándose a estudiar y escribir. Sin embargo, su amor por las ciencias y su fascinación por lo desconocido lo llevaron a desarrollar las bases de su futura obra literaria.'),
(6, 'Aislamiento y contacto con el mundo literario', 'En 1914, Lovecraft comenzó a publicar ensayos y poesía en revistas amateur, uniéndose a la United Amateur Press Association (UAPA). Esta comunidad le permitió conectar con otros escritores, lo que gradualmente lo sacó de su aislamiento. Aquí fue donde comenzó a desarrollar su estilo distintivo de terror cósmico.'),
(7, 'El horror cósmico como estilo único', 'Lovecraft es reconocido como el creador del horror cósmico, un género que explora la insignificancia del ser humano en un universo vasto y hostil. Sus historias se centran en seres extraterrestres y deidades antiguas, como Cthulhu, que encarnan fuerzas incomprensibles e indiferentes hacia la humanidad. Este enfoque lo diferenciaba de otros autores de terror de la época.'),
(8, 'Cuentos iniciales y consolidación de su estilo', 'A partir de la década de 1920, Lovecraft comenzó a escribir algunos de sus relatos más famosos, como \"Dagon\" y \"The Call of Cthulhu\". Estas historias exploraban temas de locura, conocimiento prohibido y horror cósmico, sentando las bases de lo que se conocería como el \"Círculo de Lovecraft\", un grupo de autores influenciados por su obra.'),
(9, 'Matrimonio y breve estancia en Nueva York', 'En 1924, Lovecraft se casó con Sonia H. Greene, una escritora y empresaria judía. La pareja se mudó a Nueva York, pero el matrimonio fue problemático desde el principio. Las tensiones financieras y las dificultades de Lovecraft para adaptarse a la vida urbana contribuyeron a su separación dos años después. Este período fue particularmente difícil para Lovecraft, quien desarrolló una aversión hacia las grandes ciudades y las comunidades inmigrantes.'),
(10, 'Regreso a Providence y producción literaria', 'Tras su separación, Lovecraft regresó a Providence, donde vivió el resto de su vida. Este retorno marcó su período más productivo como escritor. Durante los años 1930, escribió obras maestras como \"At the Mountains of Madness\", \"The Shadow Over Innsmouth\" y \"The Colour Out of Space\", consolidando su legado literario.'),
(11, 'Filosofía y cosmovisión', 'Lovecraft era un materialista y ateo convencido, lo que influyó profundamente en su obra. Creía que el universo era indiferente a la existencia humana, una idea que se refleja en sus relatos de horror cósmico. Sin embargo, su pensamiento también estuvo marcado por prejuicios raciales y xenófobos, que han sido objeto de crítica en años recientes.'),
(12, 'Colaboraciones y círculo literario', 'Lovecraft mantuvo correspondencia con otros escritores de la época, como Robert E. Howard, Clark Ashton Smith y August Derleth. A través de estas cartas, no solo influyó en sus contemporáneos, sino que también fomentó la expansión de su \"mitología de Cthulhu\", permitiendo que otros autores contribuyeran a su universo ficticio.'),
(13, 'Dificultades económicas', 'A pesar de su prolífica producción literaria, Lovecraft nunca logró éxito financiero. Publicó la mayoría de sus obras en revistas pulp, como \"Weird Tales\", que pagaban muy poco. Su situación económica se deterioró constantemente, obligándolo a depender de la ayuda de amigos y familiares.'),
(14, 'Últimos años y enfermedad', 'En los últimos años de su vida, Lovecraft sufrió de desnutrición y problemas de salud relacionados con el cáncer intestinal. A pesar de su enfermedad, continuó escribiendo y manteniendo correspondencia hasta pocos meses antes de su muerte. Falleció el 15 de marzo de 1937, a los 46 años, en Providence.'),
(15, 'Legado póstumo', 'Aunque Lovecraft murió prácticamente desconocido, su obra ha ganado reconocimiento póstumo y se ha convertido en una influencia central en la literatura de terror y ciencia ficción. Su estilo único y su mitología han inspirado a generaciones de escritores, cineastas y artistas. A pesar de las controversias que rodean su vida y opiniones, el impacto de H.P. Lovecraft en la cultura popular sigue siendo inmenso y perdurable.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

CREATE TABLE `characters` (
  `ID` int(11) NOT NULL,
  `character_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`character_data`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`ID`, `character_data`) VALUES
(483190, '{\"STR\":45,\"CON\":50,\"SIZ\":65,\"DEX\":85,\"APP\":50,\"INT\":45,\"POW\":55,\"EDU\":70,\"Luck\":35,\"Age\":20,\"MOV\":8,\"Occupation\":\"ANTIQUARIAN\",\"skills\":{\"Actuaci\\u00f3n\":5,\"Ametralladora\":10,\"Antropolog\\u00eda\":1,\"Arco\":15,\"Armas de Fuego\":0,\"Armas Pesadas\":10,\"Arqueolog\\u00eda\":1,\"Arte Fino\":5,\"Arte\\/Artesan\\u00eda\":5,\"Artiller\\u00eda\":1,\"Astronom\\u00eda\":1,\"Biolog\\u00eda\":1,\"Bot\\u00e1nica\":1,\"Buceo\":1,\"Buscar\":25,\"Cerrajer\\u00eda\":1,\"Charlataner\\u00eda\":5,\"Ciencia\":1,\"Combate\":0,\"Conducir Autom\\u00f3vil\":20,\"Conocimiento\":1,\"Contabilidad\":5,\"Cr\\u00e9dito\":30,\"Criptograf\\u00eda\":1,\"Demoliciones\":1,\"Derecho\":5,\"Disfraz\":5,\"Electricidad\":10,\"Electr\\u00f3nica\":1,\"Encanto\":15,\"Escalar\":20,\"Escopeta\":25,\"Escuchar\":20,\"Espada\":43,\"Esquivar\":0,\"Farmacolog\\u00eda\":1,\"Falsificaci\\u00f3n\":5,\"Fisica\":1,\"Fotograf\\u00eda\":5,\"Garrote\":15,\"Geolog\\u00eda\":1,\"Hacha\":15,\"Hipnosis\":1,\"Historia\":5,\"Idioma (Otro)\":70,\"Idioma (Propio)\":0,\"Inform\\u00e1tica\":5,\"Ingenier\\u00eda\":1,\"Intimidar\":15,\"Juego de Manos\":10,\"Lanza\":20,\"Lanzallamas\":10,\"Lanzar\":20,\"Leer Labios\":1,\"L\\u00e1tigo\":5,\"Matem\\u00e1ticas\":10,\"Mayal\":10,\"Mec\\u00e1nica\":10,\"Medicina\":1,\"Medicina Forense\":1,\"Meteorolog\\u00eda\":1,\"Mitos de Cthulhu\":0,\"Montar\":5,\"Motosierra\":10,\"Nadar\":20,\"Naturaleza\":10,\"Ocultismo\":5,\"Operar Maquinaria Pesada\":1,\"Orientarse\":10,\"Persuadir\":10,\"Pilotar\":1,\"Pistola\":20,\"Posesi\\u00f3n de Cr\\u00e9ditos\":0,\"Primeros Auxilios\":30,\"Psicoan\\u00e1lisis\":1,\"Psicolog\\u00eda\":10,\"Qu\\u00edmica\":1,\"Rastrear\":10,\"Rifle\":25,\"Saltar\":20,\"Sigilo\":20,\"Subfusil\":15,\"Supervivencia\":10,\"Tasaci\\u00f3n\":5,\"Uso de Biblioteca\":20,\"Zoolog\\u00eda\":1},\"ID\":483190}'),
(722359, '{\"STR\":75,\"CON\":35,\"SIZ\":40,\"DEX\":30,\"APP\":40,\"INT\":50,\"POW\":65,\"EDU\":56,\"Luck\":30,\"Age\":23,\"MOV\":8,\"Occupation\":\"ANTIQUARIAN\",\"skills\":{\"Actuaci\\u00f3n\":5,\"Ametralladora\":47,\"Antropolog\\u00eda\":1,\"Arco\":15,\"Armas de Fuego\":0,\"Armas Pesadas\":10,\"Arqueolog\\u00eda\":1,\"Arte Fino\":5,\"Arte\\/Artesan\\u00eda\":5,\"Artiller\\u00eda\":1,\"Astronom\\u00eda\":1,\"Biolog\\u00eda\":1,\"Bot\\u00e1nica\":1,\"Buceo\":1,\"Buscar\":25,\"Cerrajer\\u00eda\":1,\"Charlataner\\u00eda\":5,\"Ciencia\":1,\"Combate\":0,\"Conducir Autom\\u00f3vil\":20,\"Conocimiento\":1,\"Contabilidad\":5,\"Criptograf\\u00eda\":1,\"Demoliciones\":1,\"Derecho\":5,\"Disfraz\":5,\"Electricidad\":10,\"Electr\\u00f3nica\":1,\"Encanto\":15,\"Escalar\":20,\"Escopeta\":25,\"Escuchar\":20,\"Espada\":20,\"Esquivar\":15,\"Farmacolog\\u00eda\":1,\"Falsificaci\\u00f3n\":5,\"Fisica\":1,\"Fotograf\\u00eda\":5,\"Garrote\":15,\"Geolog\\u00eda\":1,\"Hacha\":15,\"Hipnosis\":1,\"Historia\":5,\"Idioma (Otro)\":1,\"Idioma (Propio)\":56,\"Inform\\u00e1tica\":5,\"Ingenier\\u00eda\":1,\"Intimidar\":15,\"Juego de Manos\":10,\"Lanza\":20,\"Lanzallamas\":10,\"Lanzar\":20,\"Leer Labios\":1,\"L\\u00e1tigo\":5,\"Matem\\u00e1ticas\":10,\"Mayal\":10,\"Mec\\u00e1nica\":10,\"Medicina\":1,\"Medicina Forense\":1,\"Meteorolog\\u00eda\":1,\"Mitos de Cthulhu\":0,\"Montar\":5,\"Motosierra\":10,\"Nadar\":20,\"Naturaleza\":10,\"Ocultismo\":5,\"Operar Maquinaria Pesada\":1,\"Orientarse\":10,\"Persuadir\":10,\"Pilotar\":1,\"Pistola\":20,\"Posesi\\u00f3n de Cr\\u00e9ditos\":0,\"Primeros Auxilios\":30,\"Psicoan\\u00e1lisis\":1,\"Psicolog\\u00eda\":10,\"Qu\\u00edmica\":1,\"Rastrear\":10,\"Rifle\":25,\"Saltar\":20,\"Sigilo\":20,\"Subfusil\":15,\"Supervivencia\":10,\"Tasaci\\u00f3n\":5,\"Uso de Biblioteca\":20,\"Zoolog\\u00eda\":1},\"ID\":722359}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `occupations`
--

CREATE TABLE `occupations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `skills` text NOT NULL,
  `credit_rating_min` int(11) NOT NULL,
  `credit_rating_max` int(11) NOT NULL,
  `occupation_skill_points_formula` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `occupations`
--

INSERT INTO `occupations` (`id`, `name`, `skills`, `credit_rating_min`, `credit_rating_max`, `occupation_skill_points_formula`) VALUES
(1, 'ANTIQUARIAN', 'Appraise, Art/Craft (any), History, Library Use, Other Language, one interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade), Spot Hidden, any one other skill.', 30, 70, 'EDU * 4'),
(2, 'ARTIST', 'Art/Craft (any), History or Natural World, one interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade), Other Language, Psychology, Spot Hidden, any two other skills.', 9, 50, 'EDU * 2 + (POW * 2 OR DEX * 2)'),
(3, 'ATHLETE', 'Climb, Jump, Fighting (Brawl), Ride, one interpersonal skill (Charm, Fast Talk, Intimidate, or Persuade), Swim, Throw, any one other skill.', 9, 70, 'EDU * 2 + (DEX * 2 OR STR * 2)'),
(4, 'AUTHOR', 'Art (Literature), History, Library Use, Natural World or Occult, Other Language, Own Language, Psychology, any one other skill.', 9, 30, 'EDU * 4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills`
--

CREATE TABLE `skills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `base_percentage` int(11) NOT NULL,
  `is_modern` tinyint(1) DEFAULT 0,
  `is_uncommon` tinyint(1) DEFAULT 0,
  `is_grouped` tinyint(1) DEFAULT 0,
  `parent_skill` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `skills`
--

INSERT INTO `skills` (`id`, `name`, `base_percentage`, `is_modern`, `is_uncommon`, `is_grouped`, `parent_skill`) VALUES
(1, 'Actuación', 5, 0, 0, 1, 'Arte/Artesanía'),
(2, 'Ametralladora', 10, 0, 0, 1, 'Armas de Fuego'),
(3, 'Antropología', 1, 0, 0, 0, NULL),
(4, 'Arco', 15, 0, 0, 1, 'Armas de Fuego'),
(5, 'Armas de Fuego', 0, 0, 0, 1, NULL),
(6, 'Armas Pesadas', 10, 0, 0, 1, 'Armas de Fuego'),
(7, 'Arqueología', 1, 0, 0, 0, NULL),
(8, 'Arte Fino', 5, 0, 0, 1, 'Arte/Artesanía'),
(9, 'Arte/Artesanía', 5, 0, 0, 1, NULL),
(10, 'Artillería', 1, 0, 1, 0, NULL),
(11, 'Astronomía', 1, 0, 0, 1, 'Ciencia'),
(12, 'Biología', 1, 0, 0, 1, 'Ciencia'),
(13, 'Botánica', 1, 0, 0, 1, 'Ciencia'),
(14, 'Buceo', 1, 0, 1, 0, NULL),
(15, 'Buscar', 25, 0, 0, 0, NULL),
(16, 'Cerrajería', 1, 0, 0, 0, NULL),
(17, 'Charlatanería', 5, 0, 0, 0, NULL),
(18, 'Ciencia', 1, 0, 0, 1, NULL),
(19, 'Combate', 0, 0, 0, 1, NULL),
(20, 'Conducir Automóvil', 20, 0, 0, 0, NULL),
(21, 'Conocimiento', 1, 0, 1, 1, NULL),
(22, 'Contabilidad', 5, 0, 0, 0, NULL),
(23, 'Crédito', 0, 0, 0, 0, NULL),
(24, 'Criptografía', 1, 0, 0, 1, 'Ciencia'),
(25, 'Demoliciones', 1, 0, 1, 0, NULL),
(26, 'Derecho', 5, 0, 0, 0, NULL),
(27, 'Disfraz', 5, 0, 0, 0, NULL),
(28, 'Electricidad', 10, 0, 0, 0, NULL),
(29, 'Electrónica', 1, 1, 0, 0, NULL),
(30, 'Encanto', 15, 0, 0, 0, NULL),
(31, 'Escalar', 20, 0, 0, 0, NULL),
(32, 'Escopeta', 25, 0, 0, 1, 'Armas de Fuego'),
(33, 'Escuchar', 20, 0, 0, 0, NULL),
(34, 'Espada', 20, 0, 0, 1, 'Combate'),
(35, 'Esquivar', 0, 0, 0, 0, NULL),
(36, 'Farmacología', 1, 0, 0, 1, 'Ciencia'),
(37, 'Falsificación', 5, 0, 0, 1, 'Arte/Artesanía'),
(38, 'Fisica', 1, 0, 0, 1, 'Ciencia'),
(39, 'Fotografía', 5, 0, 0, 1, 'Arte/Artesanía'),
(40, 'Garrote', 15, 0, 0, 1, 'Combate'),
(41, 'Geología', 1, 0, 0, 1, 'Ciencia'),
(42, 'Hacha', 15, 0, 0, 1, 'Combate'),
(43, 'Hipnosis', 1, 0, 1, 0, NULL),
(44, 'Historia', 5, 0, 0, 0, NULL),
(45, 'Idioma (Otro)', 1, 0, 0, 1, NULL),
(46, 'Idioma (Propio)', 0, 0, 0, 0, NULL),
(47, 'Informática', 5, 1, 0, 0, NULL),
(48, 'Ingeniería', 1, 0, 0, 1, 'Ciencia'),
(49, 'Intimidar', 15, 0, 0, 0, NULL),
(50, 'Juego de Manos', 10, 0, 0, 0, NULL),
(51, 'Lanza', 20, 0, 0, 1, 'Combate'),
(52, 'Lanzallamas', 10, 0, 0, 1, 'Armas de Fuego'),
(53, 'Lanzar', 20, 0, 0, 0, NULL),
(54, 'Leer Labios', 1, 0, 1, 0, NULL),
(55, 'Látigo', 5, 0, 0, 1, 'Combate'),
(56, 'Matemáticas', 10, 0, 0, 1, 'Ciencia'),
(57, 'Mayal', 10, 0, 0, 1, 'Combate'),
(58, 'Mecánica', 10, 0, 0, 0, NULL),
(59, 'Medicina', 1, 0, 0, 0, NULL),
(60, 'Medicina Forense', 1, 0, 0, 1, 'Ciencia'),
(61, 'Meteorología', 1, 0, 0, 1, 'Ciencia'),
(62, 'Mitos de Cthulhu', 0, 0, 0, 0, NULL),
(63, 'Montar', 5, 0, 0, 0, NULL),
(64, 'Motosierra', 10, 0, 0, 1, 'Combate'),
(65, 'Nadar', 20, 0, 0, 0, NULL),
(66, 'Naturaleza', 10, 0, 0, 0, NULL),
(67, 'Ocultismo', 5, 0, 0, 0, NULL),
(68, 'Operar Maquinaria Pesada', 1, 0, 0, 0, NULL),
(69, 'Orientarse', 10, 0, 0, 0, NULL),
(70, 'Persuadir', 10, 0, 0, 0, NULL),
(71, 'Pilotar', 1, 0, 0, 1, NULL),
(72, 'Pistola', 20, 0, 0, 1, 'Armas de Fuego'),
(73, 'Posesión de Créditos', 0, 0, 0, 0, NULL),
(74, 'Primeros Auxilios', 30, 0, 0, 0, NULL),
(75, 'Psicoanálisis', 1, 0, 0, 0, NULL),
(76, 'Psicología', 10, 0, 0, 0, NULL),
(77, 'Química', 1, 0, 0, 1, 'Ciencia'),
(78, 'Rastrear', 10, 0, 0, 0, NULL),
(79, 'Rifle', 25, 0, 0, 1, 'Armas de Fuego'),
(80, 'Saltar', 20, 0, 0, 0, NULL),
(81, 'Sigilo', 20, 0, 0, 0, NULL),
(82, 'Subfusil', 15, 0, 0, 1, 'Armas de Fuego'),
(83, 'Supervivencia', 10, 0, 0, 1, NULL),
(84, 'Tasación', 5, 0, 0, 0, NULL),
(85, 'Uso de Biblioteca', 20, 0, 0, 0, NULL),
(86, 'Zoología', 1, 0, 0, 1, 'Ciencia');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `biography`
--
ALTER TABLE `biography`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `occupations`
--
ALTER TABLE `occupations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `biography`
--
ALTER TABLE `biography`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=881065;

--
-- AUTO_INCREMENT de la tabla `occupations`
--
ALTER TABLE `occupations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `skills`
--
ALTER TABLE `skills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
