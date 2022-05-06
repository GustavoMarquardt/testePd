-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Maio-2022 às 18:29
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `testepd`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `employes`
--

DROP TABLE IF EXISTS `employes`;
CREATE TABLE IF NOT EXISTS `employes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `estimatedHours` int(10) NOT NULL,
  `squadId` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `employes`
--

INSERT INTO `employes` (`id`, `nome`, `estimatedHours`, `squadId`) VALUES
(14, 'ttt', 4, 13),
(13, 'GUGU ', 5, 11),
(10, 'gugu fofo', 8, 11),
(9, 'gugu nini', 6, 11),
(8, 'gugu kawaii', 4, 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reports`
--

DROP TABLE IF EXISTS `reports`;
CREATE TABLE IF NOT EXISTS `reports` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(500) NOT NULL,
  `employeeId` int(10) DEFAULT NULL,
  `spendHours` int(10) DEFAULT NULL,
  `dataNow` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `reports`
--

INSERT INTO `reports` (`id`, `descricao`, `employeeId`, `spendHours`, `dataNow`) VALUES
(11, 'gugu teste ', 8, 10, '2022-04-04'),
(10, 'tsdadsa', 9, 5, '2022-05-03'),
(9, 'testeee', 8, 6, '2022-05-03'),
(12, '432', 13, 4, '2022-05-04'),
(13, '31', 14, 2, '2022-05-04');

-- --------------------------------------------------------

--
-- Estrutura da tabela `squads`
--

DROP TABLE IF EXISTS `squads`;
CREATE TABLE IF NOT EXISTS `squads` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `squads`
--

INSERT INTO `squads` (`id`, `nome`) VALUES
(18, ''),
(17, ''),
(16, ''),
(11, 'squad Gusatvo'),
(13, 'gustavo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
