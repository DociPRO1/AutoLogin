-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Gen 08, 2024 alle 11:32
-- Versione del server: 10.4.22-MariaDB
-- Versione PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `automobili`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `modelli`
--

CREATE TABLE `modelli` (
  `id` varchar(2) DEFAULT NULL,
  `nome` varchar(11) DEFAULT NULL,
  `codMarca` varchar(8) DEFAULT NULL,
  `nPorte` varchar(6) DEFAULT NULL,
  `cilindrata` varchar(10) DEFAULT NULL,
  `colore` varchar(9) DEFAULT NULL,
  `anno` varchar(4) DEFAULT NULL,
  `prezzo` varchar(6) DEFAULT NULL,
  `targa` varchar(7) DEFAULT NULL,
  `km` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `modelli`
--

INSERT INTO `modelli` (`id`, `nome`, `codMarca`, `nPorte`, `cilindrata`, `colore`, `anno`, `prezzo`, `targa`, `km`) VALUES
('1', 'Panda', '6', '4', '1200', 'rosso', '2012', '9500', 'FF777BT', '8000'),
('2', 'Tipo', '6', '4', '1600', 'grigio', '2016', '14500', 'FD575TW', '6000'),
('3', 'A3', '3', '2', '1000', 'grigio', '2010', '26000', 'FA875WE', '10000'),
('4', 'TT', '3', '2', '1800', 'nero', '2014', '32000', 'FD383YA', '20000'),
('5', 'Serie1', '4', '3', '1600', 'bianco', '2015', '22000', 'FB291FN', '15000'),
('8', 'I10', '7', '4', '1100', 'arancione', '2014', '9000', 'DX190SI', '28000'),
('9', 'I20', '7', '4', '1200', 'celeste', '2013', '11500', 'JN441AY', '20000'),
('10', 'I30', '7', '4', '1400', 'blu', '2014', '15500', 'IC275BX', '10000'),
('11', 'Baleno', '9', '4', '1200', 'grigio', '2016', '17000', 'GG223MO', '8000'),
('12', 'Scross', '9', '4', '1600', 'marrone', '2016', '28000', 'KA107BK', '15000'),
('13', 'Soul', '13', '4', '1600', 'giallo', '2015', '18000', 'BX145AN', '8000'),
('14', 'Rio', '13', '4', '1200', 'bianco', '2013', '14000', 'FB572NE', '30000'),
('15', 'Picanto', '13', '2', '1000', 'viola', '2014', '9000', 'SW718NA', '12000'),
('16', 'Juke', '15', '2', '1600', 'nero', '2013', '22000', 'EA431VS', '3000'),
('17', 'X-trail', '15', '4', '1600', 'nero', '2016', '35000', 'YN441DC', '20000'),
('18', 'Civic', '8', '4', '1400', 'blu', '2016', '22000', 'DX210XN', '10000'),
('19', 'HRV', '8', '4', '1500', 'verde', '2015', '15487', 'BB456EE', '52136'),
('20', 'NSX', '8', '2', '3500', 'rosso', '2016', '186000', 'JX302SL', '30000'),
('21', 'GranTurismo', '14', '2', '4200', 'nero', '2007', '116000', 'CB230SL', '15000'),
('22', '911', '16', '2', '2900', 'blu', '2011', '108000', 'BZ220TS', '10000'),
('23', 'Elise', '11', '2', '1600', 'arancione', '2012', '67000', 'EX120JE', '10000'),
('24', 'XE', '10', '4', '2000', 'rosso', '2014', '38000', 'TK145XL', '15000'),
('1', 'Panda', '6', '4', '1200', 'rosso', '2012', '9500', 'FF777BT', '8000'),
('2', 'Tipo', '6', '4', '1600', 'grigio', '2016', '14500', 'FD575TW', '6000'),
('5', 'Serie1', '4', '3', '1600', 'bianco', '2015', '22000', 'FB291FN', '15000'),
('8', 'I10', '7', '4', '1100', 'arancione', '2014', '9000', 'DX190SI', '28000'),
('9', 'I20', '7', '4', '1200', 'celeste', '2013', '11500', 'JN441AY', '20000'),
('10', 'I30', '7', '4', '1400', 'blu', '2014', '15500', 'IC275BX', '10000'),
('11', 'Baleno', '9', '4', '1200', 'grigio', '2016', '17000', 'GG223MO', '8000'),
('12', 'Scross', '9', '4', '1600', 'marrone', '2016', '28000', 'KA107BK', '15000'),
('13', 'Soul', '13', '4', '1600', 'giallo', '2015', '18000', 'BX145AN', '8000'),
('14', 'Rio', '13', '4', '1200', 'bianco', '2013', '14000', 'FB572NE', '30000'),
('15', 'Picanto', '13', '2', '1000', 'viola', '2014', '9000', 'SW718NA', '12000'),
('16', 'Juke', '15', '2', '1600', 'nero', '2013', '22000', 'EA431VS', '3000'),
('17', 'X-trail', '15', '4', '1600', 'nero', '2016', '35000', 'YN441DC', '20000'),
('18', 'Civic', '8', '4', '1400', 'blu', '2016', '22000', 'DX210XN', '10000'),
('19', 'HRV', '8', '4', '1500', 'verde', '2015', '15487', 'BB456EE', '52136'),
('20', 'NSX', '8', '2', '3500', 'rosso', '2016', '186000', 'JX302SL', '30000'),
('21', 'GranTurismo', '14', '2', '4200', 'nero', '2007', '116000', 'CB230SL', '15000'),
('22', '911', '16', '2', '2900', 'blu', '2011', '108000', 'BZ220TS', '10000'),
('23', 'Elise', '11', '2', '1600', 'arancione', '2012', '67000', 'EX120JE', '10000'),
('24', 'XE', '10', '4', '2000', 'rosso', '2014', '38000', 'TK145XL', '15000');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
