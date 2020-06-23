CREATE TABLE `categorytable` (
  `no` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `category_UNIQUE` (`category`),
  UNIQUE KEY `no_UNIQUE` (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci