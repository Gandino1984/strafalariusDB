USE strafalariusDB;
-- Inserts de datos para clientesdescuento_producto
INSERT INTO `strafalariusDB`.`cliente`(`id_cliente`, `nombre_cliente`, `apellido_cliente`, `telefono_cliente`, `email_cliente`, `direccion_cliente`, `membresia_cliente`)VALUES
(1, 'Aitor', 'Etxebarria', '555123456', 'aitor.etxebarria@example.com', 'Calle Iturribide, Bilbao', 'bronce'),
(2, 'Ane', 'Gomez', '555234567', 'ane.gomez@example.com', 'Plaza Zabalbide, Bilbao', 'plata'),
(3, 'Asier', 'Lopez', '555345678', 'asier.lopez@example.com', 'Calle Licenciado Poza, Bilbao', 'oro'),
(4, 'Ainhoa', 'Martinez', '555456789', 'ainhoa.martinez@example.com', 'Calle Autonomía, Bilbao', 'bronce'),
(5, 'Unai', 'Fernandez', '555567890', 'unai.fernandez@example.com', 'Calle Gran Vía, Bilbao', 'plata'),
(6, 'Maite', 'Rodriguez', '555678901', 'maite.rodriguez@example.com', 'Calle Alameda de Recalde, Bilbao', 'oro'),
(7, 'Iker', 'Alonso', '555789012', 'iker.alonso@example.com', 'Calle Ercilla, Bilbao', 'bronce'),
(8, 'Nerea', 'Garcia', '555890123', 'nerea.garcia@example.com', 'Calle Autonomía, Bilbao', 'plata'),
(9, 'Mikel', 'Sanchez', '555901234', 'mikel.sanchez@example.com', 'Calle Gran Vía, Bilbao', 'oro'),
(10, 'Leire', 'Perez', '555012345', 'leire.perez@example.com', 'Calle Doctor Areilza, Bilbao', 'bronce'),
(11, 'Oier', 'Hernandez', '555123456', 'oier.hernandez@example.com', 'Calle Ercilla, Bilbao', 'plata'),
(12, 'Irati', 'Gutierrez', '555234567', 'irati.gutierrez@example.com', 'Calle Gran Vía, Bilbao', 'oro'),
(13, 'Amaia', 'Iglesias', '555345678', 'amaia.iglesias@example.com', 'Calle Iturribide, Bilbao', 'bronce'),
(14, 'Eneko', 'Vidal', '555456789', 'eneko.vidal@example.com', 'Calle Alameda de Recalde, Bilbao', 'plata'),
(15, 'Miren', 'Sanchez', '555567890', 'miren.sanchez@example.com', 'Calle Doctor Areilza, Bilbao', 'oro'),
(16, 'Iñigo', 'Marquez', '555678901', 'inigo.marquez@example.com', 'Plaza Zabalbide, Bilbao', 'bronce'),
(17, 'Itziar', 'Ramos', '555789012', 'itziar.ramos@example.com', 'Calle Gran Vía, Bilbao', 'plata'),
(18, 'Jon', 'Alvarez', '555890123', 'jon.alvarez@example.com', 'Calle Ercilla, Bilbao', 'oro'),
(19, 'Naiara', 'Gonzalez', '555901234', 'naiara.gonzalez@example.com', 'Calle Autonomía, Bilbao', 'bronce'),
(20, 'Aitor', 'Ortiz', '555012345', 'aitor.ortiz@example.com', 'Calle Doctor Areilza, Bilbao', 'plata'),
(21, 'Ane', 'Diaz', '555123456', 'ane.diaz@example.com', 'Calle Gran Vía, Bilbao', 'oro'),
(22, 'Asier', 'Fernandez', '555234567', 'asier.fernandez@example.com', 'Calle Iturribide, Bilbao', 'bronce'),
(23, 'Ainhoa', 'Sanchez', '555345678', 'ainhoa.sanchez@example.com', 'Calle Alameda de Recalde, Bilbao', 'plata'),
(24, 'Unai', 'Gomez', '555456789', 'unai.gomez@example.com', 'Calle Doctor Areilza, Bilbao', 'oro'),
(25, 'Maite', 'Lopez', '555567890', 'maite.lopez@example.com', 'Calle Ercilla, Bilbao', 'bronce'),
(26, 'Iker', 'Martinez', '555678901', 'iker.martinez@example.com', 'Calle Autonomía, Bilbao', 'plata'),
(27, 'Nerea', 'Fernandez', '555789012', 'nerea.fernandez@example.com', 'Plaza Zabalbide, Bilbao', 'oro'),
(28, 'Mikel', 'Alonso', '555890123', 'mikel.alonso@example.com', 'Calle Gran Vía, Bilbao', 'bronce'),
(29, 'Leire', 'Garcia', '555901234', 'leire.garcia@example.com', 'Calle Iturribide, Bilbao', 'plata'),
(30, 'Oier', 'Sanchez', '555012345', 'oier.sanchez@example.com', 'Calle Alameda de Recalde, Bilbao', 'oro'),
(31, 'Irati', 'Perez', '555123456', 'irati.perez@example.com', 'Calle Ercilla, Bilbao', 'bronce'),
(32, 'Amaia', 'Hernandez', '555234567', 'amaia.hernandez@example.com', 'Calle Autonomía, Bilbao', 'plata'),
(33, 'Eneko', 'Gutierrez', '555345678', 'eneko.gutierrez@example.com', 'Calle Doctor Areilza, Bilbao', 'oro'),
(34, 'Miren', 'Iglesias', '555456789', 'miren.iglesias@example.com', 'Plaza Zabalbide, Bilbao', 'bronce'),
(35, 'Iñigo', 'Vidal', '555567890', 'inigo.vidal@example.com', 'Calle Gran Vía, Bilbao', 'plata'),
(36, 'Itziar', 'Sanchez', '555678901', 'itziar.sanchez@example.com', 'Calle Iturribide, Bilbao', 'oro'),
(37, 'Jon', 'Marquez', '555789012', 'jon.marquez@example.com', 'Calle Alameda de Recalde, Bilbao', 'bronce'),
(38, 'Naiara', 'Ramos', '555890123', 'naiara.ramos@example.com', 'Calle Ercilla, Bilbao', 'plata'),
(39, 'Aitor', 'Alvarez', '555901234', 'aitor.alvarez@example.com', 'Calle Autonomía, Bilbao', 'oro'),
(40, 'Ane', 'Gonzalez', '555012345', 'ane.gonzalez@example.com', 'Plaza Zabalbide, Bilbao', 'bronce'),
(41, 'Asier', 'Ortiz', '555123456', 'asier.ortiz@example.com', 'Calle Gran Vía, Bilbao', 'plata'),
(42, 'Ainhoa', 'Diaz', '555234567', 'ainhoa.diaz@example.com', 'Calle Iturribide, Bilbao', 'oro'),
(43, 'Unai', 'Fernandez', '555345678', 'unai.fernandez@example.com', 'Calle Alameda de Recalde, Bilbao', 'bronce'),
(44, 'Maite', 'Sanchez', '555456789', 'maite.sanchez@example.com', 'Calle Doctor Areilza, Bilbao', 'plata'),
(45, 'Iker', 'Gomez', '555567890', 'iker.gomez@example.com', 'Calle Ercilla, Bilbao', 'oro'),
(46, 'Nerea', 'Lopez', '555678901', 'nerea.lopez@example.com', 'Calle Autonomía, Bilbao', 'bronce'),
(47, 'Mikel', 'Martinez', '555789012', 'mikel.martinez@example.com', 'Calle Gran Vía, Bilbao', 'plata'),
(48, 'Leire', 'Fernandez', '555890123', 'leire.fernandez@example.com', 'Plaza Zabalbide, Bilbao', 'oro'),
(49, 'Oier', 'Alonso', '555901234', 'oier.alonso@example.com', 'Calle Iturribide, Bilbao', 'bronce'),
(50, 'Irati', 'Garcia', '555012345', 'irati.garcia@example.com', 'Calle Alameda de Recalde, Bilbao', 'plata'),
(51, 'Amaia', 'Sanchez', '555123456', 'amaia.sanchez@example.com', 'Calle Doctor Areilza, Bilbao', 'oro'),
(52, 'Eneko', 'Perez', '555234567', 'eneko.perez@example.com', 'Calle Ercilla, Bilbao', 'bronce'),
(53, 'Miren', 'Hernandez', '555345678', 'miren.hernandez@example.com', 'Calle Autonomía, Bilbao', 'plata'),
(54, 'Iñigo', 'Gutierrez', '555456789', 'inigo.gutierrez@example.com', 'Calle Gran Vía, Bilbao', 'oro'),
(55, 'Itziar', 'Iglesias', '555567890', 'itziar.iglesias@example.com', 'Plaza Zabalbide, Bilbao', 'bronce'),
(56, 'Jon', 'Vidal', '555678901', 'jon.vidal@example.com', 'Calle Iturribide, Bilbao', 'plata'),
(57, 'Naiara', 'Sanchez', '555789012', 'naiara.sanchez@example.com', 'Calle Alameda de Recalde, Bilbao', 'oro'),
(58, 'Aitor', 'Marquez', '555890123', 'aitor.marquez@example.com', 'Calle Doctor Areilza, Bilbao', 'bronce'),
(59, 'Ane', 'Ramos', '555901234', 'ane.ramos@example.com', 'Calle Ercilla, Bilbao', 'plata'),
(60, 'Asier', 'Alvarez', '555012345', 'asier.alvarez@example.com', 'Calle Autonomía, Bilbao', 'oro'),
(61, 'Ainhoa', 'Gonzalez', '555123456', 'ainhoa.gonzalez@example.com', 'Calle Gran Vía, Bilbao', 'bronce'),
(62, 'Unai', 'Ortiz', '555234567', 'unai.ortiz@example.com', 'Plaza Zabalbide, Bilbao', 'plata'),
(63, 'Maite', 'Diaz', '555345678', 'maite.diaz@example.com', 'Calle Iturribide, Bilbao', 'oro'),
(64, 'Iker', 'Fernandez', '555456789', 'iker.fernandez@example.com', 'Calle Alameda de Recalde, Bilbao', 'bronce'),
(65, 'Nerea', 'Sanchez', '555567890', 'nerea.sanchez@example.com', 'Calle Doctor Areilza, Bilbao', 'plata'),
(66, 'Mikel', 'Gomez', '555678901', 'mikel.gomez@example.com', 'Calle Ercilla, Bilbao', 'oro'),
(67, 'Leire', 'Lopez', '555789012', 'leire.lopez@example.com', 'Calle Autonomía, Bilbao', 'bronce'),
(68, 'Oier', 'Martinez', '555890123', 'oier.martinez@example.com', 'Calle Gran Vía, Bilbao', 'plata'),
(69, 'Irati', 'Fernandez', '555901234', 'irati.fernandez@example.com', 'Plaza Zabalbide, Bilbao', 'oro'),
(70, 'Amaia', 'Alonso', '555012345', 'amaia.alonso@example.com', 'Calle Iturribide, Bilbao', 'bronce'),
(71, 'Eneko', 'Garcia', '555123456', 'eneko.garcia@example.com', 'Calle Alameda de Recalde, Bilbao', 'plata'),
(72, 'Miren', 'Sanchez', '555234567', 'miren.sanchez@example.com', 'Calle Doctor Areilza, Bilbao', 'oro'),
(73, 'Iñigo', 'Perez', '555345678', 'inigo.perez@example.com', 'Calle Ercilla, Bilbao', 'bronce'),
(74, 'Itziar', 'Hernandez', '555456789', 'itziar.hernandez@example.com', 'Calle Autonomía, Bilbao', 'plata'),
(75, 'Jon', 'Gutierrez', '555567890', 'jon.gutierrez@example.com', 'Calle Gran Vía, Bilbao', 'oro'),
(76, 'Naiara', 'Iglesias', '555678901', 'naiara.iglesias@example.com', 'Plaza Zabalbide, Bilbao', 'bronce'),
(77, 'Aitor', 'Vidal', '555789012', 'aitor.vidal@example.com', 'Calle Iturribide, Bilbao', 'plata'),
(78, 'Ane', 'Sanchez', '555890123', 'ane.sanchez@example.com', 'Calle Alameda de Recalde, Bilbao', 'oro'),
(79, 'Asier', 'Marquez', '555901234', 'asier.marquez@example.com', 'Calle Doctor Areilza, Bilbao', 'bronce'),
(80, 'Ainhoa', 'Ramos', '555012345', 'ainhoa.ramos@example.com', 'Calle Ercilla, Bilbao', 'plata');

-- Inserts de datos para productos
INSERT INTO `strafalariusDB`.`producto` (`id_producto`, `nombre_producto`, `talla_producto`, `color_producto`, `estacion_producto`, `precio_producto`, `descuento_producto`) VALUES
(1, 'Camiseta básica', 'M', 'Blanco', 'Verano', 15, 10),
(2, 'Pantalones vaqueros', '32', 'Azul', 'Primavera', 40, 20),
(3, 'Vestido floral', 'S', 'Rosa', 'Verano', 50, 15),
(4, 'Chaqueta de cuero', 'L', 'Negro', 'Otoño', 100, NULL),
(5, 'Sudadera con capucha', 'XL', 'Gris', 'Invierno', 35, 25),
(6, 'Falda plisada', 'M', 'Azul marino', 'Primavera', 30, 10),
(7, 'Abrigo de lana', 'L', 'Gris', 'Invierno', 80, 30),
(8, 'Jersey de punto', 'M', 'Blanco', 'Otoño', 45, NULL),
(9, 'Pantalón chino', '34', 'Beige', 'Verano', 50, 15),
(10, 'Camisa a rayas', 'S', 'Azul y blanco', 'Primavera', 55, 20),
(11, 'Parka impermeable', 'XL', 'Verde oliva', 'Otoño', 70, 10),
(12, 'Vestido de fiesta', 'M', 'Negro', 'Invierno', 120, 20),
(13, 'Camiseta estampada', 'L', 'Blanco', 'Primavera', 25, NULL),
(14, 'Pantalones cortos', 'M', 'Azul claro', 'Verano', 20, 15),
(15, 'Traje formal', '52', 'Gris oscuro', 'Otoño', 200, 30),
(16, 'Bufanda de lana', 'Única', 'Rojo', 'Invierno', 15, 10),
(17, 'Chaleco acolchado', 'XL', 'Negro', 'Primavera', 60, 25),
(18, 'Sudadera sin capucha', 'M', 'Gris oscuro', 'Otoño', 30, NULL),
(19, 'Pantalones deportivos', 'L', 'Negro', 'Verano', 25, 20),
(20, 'Vestido de encaje', 'S', 'Blanco', 'Primavera', 70, 15),
(21, 'Gabardina', 'M', 'Beige', 'Otoño', 90, 25),
(22, 'Jersey cuello alto', 'L', 'Gris', 'Invierno', 50, NULL),
(23, 'Camisa vaquera', 'M', 'Azul', 'Primavera', 35, 10),
(24, 'Chaqueta ligera', 'XL', 'Verde militar', 'Verano', 40, 20),
(25, 'Falda lápiz', 'S', 'Negro', 'Otoño', 60, 15),
(26, 'Cazadora bomber', 'M', 'Azul marino', 'Invierno', 75, 30),
(27, 'Polo clásico', 'L', 'Blanco', 'Primavera', 30, NULL),
(28, 'Shorts cargo', 'M', 'Kaki', 'Verano', 25, 10),
(29, 'Traje de baño', 'L', 'Azul', 'Verano', 45, 25),
(30, 'Blazer informal', 'XL', 'Gris claro', 'Primavera', 80, 20);

-- Inserts de datos para vendedores
INSERT INTO `strafalariusDB`.`vendedor` (`id_vendedor`, `nombre_vendedor`, `origen_vendedor`, `categoria_vendedor`) VALUES
(1, 'Juan', 'Bilbao', '1'),
(2, 'María', 'Donostia', '0'),
(3, 'Pedro', 'Vitoria', '1'),
(4, 'Ana', 'Bilbao', '0'),
(5, 'Carlos', 'Irun', '1'),
(6, 'Laura', 'San Sebastián', '0'),
(7, 'Miguel', 'Bilbao', '1'),
(8, 'Sofía', 'Vitoria', '0'),
(9, 'Luis', 'Bilbao', '1'),
(10, 'Elena', 'Donostia', '0'),
(11, 'Javier', 'Vitoria', '1'),
(12, 'Paula', 'Bilbao', '0'),
(13, 'Daniel', 'Irun', '1'),
(14, 'Lucía', 'San Sebastián', '0'),
(15, 'Andrés', 'Bilbao', '1'),
(16, 'Martina', 'Donostia', '0'),
(17, 'Diego', 'Vitoria', '1'),
(18, 'Carla', 'Bilbao', '0'),
(19, 'Alejandro', 'Irun', '1'),
(20, 'Valentina', 'San Sebastián', '0'),
(21, 'Pablo', 'Bilbao', '1'),
(22, 'Eva', 'Donostia', '0'),
(23, 'Adrián', 'Vitoria', '1'),
(24, 'Natalia', 'Bilbao', '0'),
(25, 'Mario', 'Irun', '1'),
(26, 'Julia', 'San Sebastián', '0'),
(27, 'Alberto', 'Bilbao', '1'),
(28, 'Isabel', 'Donostia', '0'),
(29, 'Gabriel', 'Vitoria', '1'),
(30, 'Sara', 'Bilbao', '0'),
(31, 'Alejandra', 'Irun', '1'),
(32, 'Tomás', 'San Sebastián', '0'),
(33, 'Santiago', 'Bilbao', '1'),
(34, 'Laura', 'Donostia', '0'),
(35, 'Eduardo', 'Vitoria', '1'),
(36, 'Carmen', 'Bilbao', '0'),
(37, 'Manuel', 'Irun', '1'),
(38, 'Lorena', 'San Sebastián', '0'),
(39, 'Rafael', 'Bilbao', '1'),
(40, 'Nuria', 'Donostia', '0'),
(41, 'Víctor', 'Vitoria', '1'),
(42, 'Marina', 'Bilbao', '0'),
(43, 'Raúl', 'Irun', '1'),
(44, 'Beatriz', 'San Sebastián', '0'),
(45, 'Iván', 'Bilbao', '1'),
(46, 'Elena', 'Donostia', '0'),
(47, 'Andrea', 'Vitoria', '1'),
(48, 'David', 'Bilbao', '0'),
(49, 'Patricia', 'Irun', '1'),
(50, 'Jorge', 'San Sebastián', '0'),
(51, 'Natalia', 'Bilbao', '1'),
(52, 'Fernando', 'Donostia', '0'),
(53, 'Cristina', 'Vitoria', '1'),
(54, 'Juan', 'Bilbao', '0'),
(55, 'María', 'Donostia', '1'),
(56, 'Pedro', 'Vitoria', '0'),
(57, 'Ana', 'Bilbao', '1'),
(58, 'Carlos', 'Irun', '0'),
(59, 'Laura', 'San Sebastián', '1'),
(60, 'Miguel', 'Bilbao', '0'),
(61, 'Sofía', 'Vitoria', '1'),
(62, 'Luis', 'Bilbao', '0'),
(63, 'Elena', 'Donostia', '1'),
(64, 'Javier', 'Vitoria', '0'),
(65, 'Paula', 'Bilbao', '1'),
(66, 'Daniel', 'Irun', '0'),
(67, 'Lucía', 'San Sebastián', '1'),
(68, 'Andrés', 'Bilbao', '0'),
(69, 'Martina', 'Donostia', '1'),
(70, 'Diego', 'Vitoria', '0'),
(71, 'Carla', 'Bilbao', '1'),
(72, 'Alejandro', 'Irun', '0'),
(73, 'Valentina', 'San Sebastián', '1'),
(74, 'Pablo', 'Bilbao', '0'),
(75, 'Eva', 'Donostia', '1'),
(76, 'Adrián', 'Vitoria', '0'),
(77, 'Natalia', 'Bilbao', '1'),
(78, 'Mario', 'Irun', '0'),
(79, 'Julia', 'San Sebastián', '1'),
(80, 'Alberto', 'Bilbao', '0');