CREATE TABLE `declarationtable` (
  `no` int NOT NULL,
  `post_no` int NOT NULL,
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `declaration_body` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `declaration_time` datetime NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `no_UNIQUE` (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci