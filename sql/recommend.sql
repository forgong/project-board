CREATE TABLE `recommendtable` (
  `no` int NOT NULL AUTO_INCREMENT,
  `post_no` int NOT NULL,
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recommend_time` datetime NOT NULL,
  `recommend_delete_time` datetime DEFAULT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `no_UNIQUE` (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci