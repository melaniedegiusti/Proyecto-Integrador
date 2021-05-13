CREATE SCHEMA autos;

USE autos;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT , 
nombre VARCHAR (50) NOT NULL, 
apellido VARCHAR (50) NOT NULL,
mail VARCHAR (200) NOT NULL,  
telefono INT(10) NOT NULL,
fecha DATE NOT NULL
);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
image VARCHAR (500) NOT NULL, 
nombre VARCHAR (50) NOT NULL, 
descripcion VARCHAR (500) NOT NULL,
fecha DATE NOT NULL,
user_id INT UNSIGNED,

FOREIGN KEY (user_id) REFERENCES usuarios (id)
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT ,
texto VARCHAR (500) NOT NULL, 
creacion DATE NOT NULL, 
user_id INT UNSIGNED NOT NULL, 
product_id INT UNSIGNED NOT NULL, 

FOREIGN KEY (user_id) REFERENCES usuarios (id),
FOREIGN KEY (product_id) REFERENCES productos (id)
);


INSERT INTO usuarios VALUES (default, "Luisa", "Nazar", "lnazar@udesa.edu.ar", "01136730839", "2001-04-04");
INSERT INTO usuarios VALUES (default, "Pepito", "Gomez", "pepitogomez@udesa.edu.ar", "01136730899", "2003-06-04");
INSERT INTO usuarios VALUES (default, "Juan", "Sanchez", "jsanchez@udesa.edu.ar", "04117730839", "2005-04-04");
INSERT INTO usuarios VALUES (default, "Milagros", "Coppola", "mcoppola@udesa.edu.ar", "01199730839", "2020-04-04");
INSERT INTO usuarios VALUES (default, "Simon", "James", "Simonj@udesa.edu.ar", "01136890839", "2001-04-04");

INSERT INTO productos VALUES (default, "/images/a200.jpg", "Mercedes Benz a200", "El Mercedes-Benz Clase A (A 160) es un automóvil de lujo del segmento C,producido por el fabricante alemán Mercedes-Benz desde el año 1997. Es el primer modelo de la marca con tracción delantera, y todos sus motores son de cuatro cilindros en línea. El Clase A tiene su motor en posición delantera transversal, algo también inusual en los modelos de Mercedes-Benz. El Clase A es el modelo de entrada a la marca", "2020-05-02", 1);
INSERT INTO productos VALUES (default, "/images/smart.jpg", "Mercedes Benz Smart", " El Smart Fortwo es un microcoche biplaza producido por el fabricante alemán Smart desde el año 1998. Existe en versiones coupé (denominada comercialmente city-coupé) y descapotable (cabrio). Durante un tiempo se produjo una versión extrema denominada Crossblade, sin techo y con puertas huecas. Smart fue fundada para producir automóviles enfocados al uso suburbano", "2018-02-08", 1);
INSERT INTO productos VALUES (default, "/images/renegade.jpg", "Jeep Renegade", "El Jeep Renegade Trailhawk es la versión todoterreno del Jeep Renegade. Sólo está disponible con el motor 2.0 MultiJet de 170 CV, sistema de tracción total Active Drive Low y caja de cambios automática de 9 relaciones", "2019-05-01", 5);
INSERT INTO productos VALUES (default, "/images/polo.jpg", "Volkswagen Polo", "El Volkswagen Polo es un automóvil de turismo del segmento B producido por el fabricante alemán de automóviles Volkswagen desde 1975", "2018-09-08", 2);
INSERT INTO productos VALUES (default, "/images/scirocco.jpg", "Volkswagen Scirocco", "El Volkswagen Scirocco es un automóvil deportivo compacto producido por el fabricante alemán Volkswagen entre los años 1974 y 1992 en su primera versión, con reediciones posteriores hasta la actualidad. Es un hatchback de tres puertas con motor delantero y tracción delantera", "2017-07-12", 5);
INSERT INTO productos VALUES (default, "/images/audi-a1.jpg", "Audio A1", "El nuevo Audi A1 Sportback redefine el segmento compacto. Su llamativo diseño deportivo caracteriza a la segunda generación del exitoso auto compacto.  Con sus sistemas de infoentretenimiento el A1 Sportback te mantiene siempre conectado", "2016-01-06", 4);
INSERT INTO productos VALUES (default, "/images/gol.jpg", "Volkswagen Gol", "Renovado, más moderno y más audaz, pero con la calidad y el confort de siempre. Así es el Gol", "2020-08-09", 3);
INSERT INTO productos VALUES (default, "/images/patriot.jpg", "Jeep Patriot", "El Jeep Patriot (MK74) es un SUV crossover compacto de cinco puertas y motor delantero fabricado y comercializado por Jeep", "2021-05-07", 3);
INSERT INTO productos VALUES (default, "/images/golf.jpg", "Volkswagen Golf", "El Volkswagen Golf es un automóvil del segmento C producido por el fabricante alemán de automóviles Volkswagen desde 1974", "2016-10-04", 4);
INSERT INTO productos VALUES (default, "/images/lancer.jpg", "Mitsubishi Lancer", "Se trata de uno de los autos más exitosos de la historia del automóvil, en todas sus versiones, coupé o sedán, por sus características y famosas cualidades de durabilidad, versatilidad, rendimiento y su magnífico palmarés en el mundo de Rallys", "2018-09-08", 2);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04" , 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamanñ perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3, 1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);

INSERT INTO comentarios VALUES (default, "Lo recontra recomiendo para la ciudad, es facil de estacionar, posee alta tecnologia. Excelente compra", "2020-01-04", 1, 1);
INSERT INTO comentarios VALUES (default, "El mejor auto que tuve hasta el momento, tiene tamaño perfecto, comodo para viajar", "2019-10-07", 2, 1);
INSERT INTO comentarios VALUES (default, "Precio calidad excelentes. Estoy muy conforme con el auto y brindan muy buen servicio", "2017-07-08", 3,1);
INSERT INTO comentarios VALUES (default, "Velocidad inigualable, buscaba un auto rapido y mediano. Encontre lo que queria!", "2014-08-07", 4, 1);
INSERT INTO comentarios VALUES (default, "Es el mejor auto que tuve, super recomendable. Muy veloz", "2016-08-09", 5, 1);






