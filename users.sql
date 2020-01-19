-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2020 at 08:38 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `dob` date DEFAULT NULL,
  `sex` enum('MALE','FEMALE') DEFAULT NULL,
  `createdDate` datetime NOT NULL,
  `modifieDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `phone`, `dob`, `sex`, `createdDate`, `modifieDate`) VALUES
(2, 'ttaitha', 'ghdfyu@gmail.com', 2147483647, '2020-01-16', 'FEMALE', '2020-01-11 17:07:56', '2020-01-11 20:33:10'),
(4, 'Trsers', 'rgw2gmil.com', 2147483647, '2019-10-15', 'MALE', '2020-01-11 18:23:02', NULL),
(5, 'Tables', 'test@table.com', 2147483647, '2020-01-17', 'MALE', '2020-01-11 20:02:46', NULL),
(6, 'Tabdfg', 'restt@table.com', 2147483647, '2020-01-15', 'FEMALE', '2020-01-11 20:08:39', '2020-01-11 20:09:18'),
(7, 'rasjs', 'kulis@dsgsg.com', 92030304, '2020-01-17', 'FEMALE', '2020-01-11 20:10:10', NULL),
(8, 'meser', 'mesr@ytesf.com', 2147483647, '2020-01-15', 'FEMALE', '2020-01-11 20:21:36', '2020-01-11 20:37:48'),
(9, 'Trsgsh', 'jdfdjdj@shddj.com', 2147483647, '2020-01-22', 'MALE', '2020-01-11 20:32:36', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
