-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2021 at 01:57 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sentmail`
--
CREATE DATABASE IF NOT EXISTS `sentmail` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sentmail`;

-- --------------------------------------------------------

--
-- Table structure for table `maillogmasters`
--

DROP TABLE IF EXISTS `maillogmasters`;
CREATE TABLE `maillogmasters` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  `createddate` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `maillogmasters`
--

INSERT INTO `maillogmasters` (`id`, `email`, `status`, `data`, `createddate`) VALUES
(1, 'sasik074@gmail.com', 'Success', '{\"accepted\":[\"sasik074@gmail.com\"],\"rejected\":[],\"envelopeTime\":868,\"messageTime\":842,\"messageSize\":750,\"response\":\"250 2.0.0 OK  1620431618 z27sm5677084pfr.46 - gsmtp\",\"envelope\":{\"from\":\"sasik074@gmail.com\",\"to\":[\"sasik074@gmail.com\"]},\"messageId\":\"<2df', NULL),
(2, 'sasikumar@gmail.com', 'Success', '{\"accepted\":[\"sasikumar@gmail.com\"],\"rejected\":[],\"envelopeTime\":901,\"messageTime\":929,\"messageSize\":751,\"response\":\"250 2.0.0 OK  1620431618 h20sm5154561pfv.6 - gsmtp\",\"envelope\":{\"from\":\"sasik074@gmail.com\",\"to\":[\"sasikumar@gmail.com\"]},\"messageId\":\"<17', NULL),
(3, 'sasikumar9260@gmail.com', 'Success', '{\"accepted\":[\"sasikumar9260@gmail.com\"],\"rejected\":[],\"envelopeTime\":882,\"messageTime\":1144,\"messageSize\":755,\"response\":\"250 2.0.0 OK  1620431619 d17sm5229764pjz.9 - gsmtp\",\"envelope\":{\"from\":\"sasik074@gmail.com\",\"to\":[\"sasikumar9260@gmail.com\"]},\"messag', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mailmasters`
--

DROP TABLE IF EXISTS `mailmasters`;
CREATE TABLE `mailmasters` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `createddate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mailmasters`
--

INSERT INTO `mailmasters` (`id`, `firstname`, `lastname`, `email`, `age`, `createddate`) VALUES
(1, 'Sasikumar', 'S', 'sasikumar9260@gmail.com', 27, '2021-05-08 00:00:00'),
(2, 'Sasikumar', 'S', 'sasik074@gmail.com', 27, '2021-05-08 00:00:00'),
(3, 'Sasikumar', 'S', 'sasikumar@gmail.com', 27, '2021-05-07 23:28:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `maillogmasters`
--
ALTER TABLE `maillogmasters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mailmasters`
--
ALTER TABLE `mailmasters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `maillogmasters`
--
ALTER TABLE `maillogmasters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mailmasters`
--
ALTER TABLE `mailmasters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
