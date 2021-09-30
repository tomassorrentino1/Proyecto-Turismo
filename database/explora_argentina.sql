-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2021 at 02:13 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
use explora_argentina;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `explora_argentina`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `idCategory` int(11) NOT NULL,
  `type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idCategory`, `type`) VALUES
(1, 'Aventura'),
(2, 'Familiar'),
(3, 'Parejas');

-- --------------------------------------------------------

--
-- Table structure for table `destination`
--

CREATE TABLE `destination` (
  `idDestination` int(11) NOT NULL,
  `place` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `destination`
--

INSERT INTO `destination` (`idDestination`, `place`) VALUES
(1, 'Cordoba'),
(2, 'Salta'),
(3, 'Tierra del Fueg'),
(4, 'San Carlos de B'),
(5, 'Chubut'),
(6, 'Buenos Aires'),
(7, 'Santa Cruz');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `products` (
  `idProduct` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(70) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`idProduct`, `name`, `destination_id`, `description`, `price`, `image`, `category_id`) VALUES
(1, 'Paquete Los Gig', 1, '¿Que incluye? 7 dias de Hospedaje, Desayunos, tour de escalada y traslado al aeropuerto', '50000', '/img/cordoba.jpg', 1),
(2, 'Paquete Córdoba', 1, '¿Que incluye? 7 dias de Hospedaje, desayunos, cenas y traslado al aeropuerto', '40000', '/img/cordoba.jpg', 2),
(3, 'Paquete Salta', 2, '¿Que incluye? 9 dias de Hospedaje, Desayunos, cenas y traslado al aeropuerto', '45000', '/img/salta.jpg', 3),
(4, 'Paquete Catedral', 4, '¿Que incluye? 5 dias de hospedaje, desayunos, pase al Cerro Catedral y traslado al aeropuerto', '48000', '/img/Bariloche.jpg', 1),
(5, 'Paquete Bariloche', 4, '¿Que incluye? 8 dias de hospedaje, desayunos, excursion a Villa la Angostura y traslado al aeropuerto', '77000', '/img/Bariloche.jpg', 2),
(6, 'Paquete Peninsula de Valdés', 5, '¿Que incluye? 7 dias de Hospedaje, Desayunos, tour de escalada y traslado al aeropuerto', '52000', '/img/Peninsula Valdes.jpg', 3),
(7, 'Paquete Buenos Aires', 6, '¿Que incluye? 7 dias de hospedaje, desayunos, city tour y traslado al aeropuerto', '50000', '/img/Buenos Aires.jpg', 2),
(8, 'Paquete Calafate', 7, '¿Que incluye? 7 dias de hospedaje, desayunos, excursion al Glaciar y traslado al aeropuerto', '80000', '/img/Calafate.jpg', 1),
(9, 'Paquete Ushuaia', 3, '¿Que incluye? 8 dias de hospedaje, desayunos, excursion al Faro del Fin del Mundo y traslado al aeropuerto', '70000', '/img/Ushuaia.jpg', 2),
(10, 'Paquete reserva Lapataia', 3, '¿Que incluye? 8 dias de hospedaje, desayunos, excursion a la reserva Lapataia y traslado al aeropuertoo', '90000', '/img/Ushuaia.jpg', 1),
(11, 'Paquete Delta', 6, '¿Que incluye? 7 dias de hospedaje, desayunos, paseo por el detal y traslado al aeropuerto', '40000', '/img/Buenos Aires.jpg', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `image` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `image`) VALUES
(1, 'Tomas', 'Sorrentino', 'tomas33sorrentino@gmail.com', 'tomassorrentino', 'user_1.jpg'),
(2, 'Lautaro', 'Messa', 'tutimessa@hotmail.com', 'lautaromessa', 'user_2.jpg'),
(3, 'Nicolas', 'Tognella', 'nicolastognella@gmail.com', 'nicolastognella', 'user_3.jpg'),
(4, 'Mauro', 'Patat', 'mauropatat@hotmail.com', 'mauropatat', 'user_4.jpg'),
(5, 'Lucia', 'Reami', 'luciareami@columbia.edu', 'luciareami', 'user_5.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indexes for table `destination`
--
ALTER TABLE `destination`
  ADD PRIMARY KEY (`idDestination`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `categories` (`category_id`),
  ADD KEY `destinations` (`destination_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `categories` FOREIGN KEY (`category_id`) REFERENCES `category` (`idCategory`),
  ADD CONSTRAINT `destinations` FOREIGN KEY (`destination_id`) REFERENCES `destination` (`idDestination`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
