CREATE TABLE `posttable` (
  `no` int NOT NULL AUTO_INCREMENT,
  `category_no` int NOT NULL,
  `post_title` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `commnets` int NOT NULL,
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `views` int NOT NULL,
  `recommends` int NOT NULL,
  `Declarations` int NOT NULL,
  `post_create_time` datetime NOT NULL,
  `post_revision_time` datetime NOT NULL,
  `post_delete_time` datetime DEFAULT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `no_UNIQUE` (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci