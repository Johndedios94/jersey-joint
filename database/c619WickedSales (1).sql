-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 31, 2019 at 09:35 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `c619WickedSales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(4, '2019-10-07 21:18:56');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(5, 6, 3, 7999, '2019-10-31 21:23:06', '2019-10-31 21:23:06', 4);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` smallint(6) NOT NULL,
  `image` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image`, `productId`) VALUES
(1, 'images/LarryBird.jpeg', 1),
(2, 'images/Mutumbo.jpeg', 2),
(5, 'images/KobeBryant.jpeg', 3),
(6, 'images/Shaq.jpeg\r\n', 4),
(7, 'images/Caruso.jpeg', 5),
(8, 'images/Iverson.jpeg', 6),
(9, 'images/Hakeem.jpeg', 7),
(10, 'images/TimDuncan.jpeg', 8);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `shortDescription` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `shortDescription`, `longDescription`) VALUES
(1, 'Larry Bird Jersey', 5999, 'Larry Bird Boston Celtics Jersey', 'Impress your peers by wearing this classic Larry Bird Jersey. This green and white throw back is guaranteed to impress your friends and family.'),
(2, 'Mutumbo Jersey', 4999, 'Dikembe Mutumbo Denver Nuggets Jersey', 'No, No, No way you don\'t buy this Dikembe Mutumbo Jersey! If you buy this jersey, you are guaranteed to get at least 10 blocks per game, and 20 rebounds.'),
(3, 'Black Mamba Jersey', 9999, 'Kobe Bryant Los Angeles Lakers Jersey', 'The legendary black mamba jersey coming at you in all black. Defeat the streets in this intimidating jersey today!'),
(4, 'Shaq Jersey', 8999, 'Shaq Los Angeles Lakers Jersey', 'Easily dominate the court with this Shaquille O\'neal Jersey. Your free throws might not be that great, but you will be able to dunk like no other.'),
(5, 'GOAT Jersey', 4999, 'GOAT Los Angeles Lakers Jersey', 'This is considered to be a bargain deal considering how Alex Caruso is projected to be a future All Star in the upcoming season.'),
(6, 'Allen Iverson Jersey', 7999, 'Allen Iverson Philadelphia 76ers Jersey', 'Practice? What\'s practice? With the purchase of this throwback Allen Iverson Jersey, you wont need to practice, you\'ll automatically be the best point guard the league has never seen!'),
(7, 'Hakeem Olajuwan', 4999, 'Hakeem Olajuwan Houston Rockets Jersey', 'This vintage Hakeem Olajuwan Jersey brings you back to the days of the Houston Rockets. Purchase this throwback Jersey and grow 3 inches taller!'),
(8, 'Tim Duncan Jersey', 8999, 'San Antonio Spurs Tim Duncan Jersey', 'Dominate the field with this classic Tim Duncan Jersey. At this price, it is considered a steal. Buy it today!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
