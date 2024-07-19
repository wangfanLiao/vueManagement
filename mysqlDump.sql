-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: vuemanagement
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'wly','123456',NULL),(2,'xiaowang','123456',NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `overtime_list`
--

DROP TABLE IF EXISTS `overtime_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `overtime_list` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `start_time` varchar(99) NOT NULL,
  `end_time` varchar(99) NOT NULL,
  `overtime` int DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `username` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `overtime_list`
--

LOCK TABLES `overtime_list` WRITE;
/*!40000 ALTER TABLE `overtime_list` DISABLE KEYS */;
INSERT INTO `overtime_list` VALUES (11,'2024-07-02 18:00:00','2024-07-02 20:00:00',2,'2024-07-02 06:31:16','wly'),(12,'2024-07-02 18:00:00','2024-07-02 20:00:00',2,'2024-07-02 06:31:18','wly'),(13,'2024-07-02 18:00:00','2024-07-02 20:00:00',2,'2024-07-02 06:31:19','wly'),(14,'2024-07-03 18:00:00','2024-07-03 20:00:00',2,'2024-07-02 07:47:14','wly'),(15,'2024-07-04 18:00:00','2024-07-05 20:00:00',26,'2024-07-02 08:03:31','wly'),(16,'2024-07-09 18:00:00','2024-07-09 20:00:00',2,'2024-07-02 08:29:11','wly'),(17,'2024-07-10 18:00:00','2024-07-10 20:00:00',2,'2024-07-02 08:29:42','wly'),(18,'2024-07-02 18:00:00','2024-07-02 20:00:00',2,'2024-07-02 08:29:52','wly'),(19,'2024-07-03 18:00:00','2024-07-03 20:00:00',2,'2024-07-02 08:33:06','wly'),(20,'2024-07-02 18:00:00','2024-07-02 20:00:00',2,'2024-07-02 08:45:01','wly'),(21,'2024-07-02 18:00:00','2024-07-02 20:00:00',2,'2024-07-02 08:56:36','wly'),(28,'2024-07-05 02:00:00','2024-07-05 04:00:00',2,'2024-07-04 06:48:40','xiaowang'),(29,'2024-07-05 02:00:00','2024-07-05 04:00:00',2,'2024-07-04 06:48:40','xiaowang'),(30,'2024-07-05 02:00:00','2024-07-05 04:00:00',2,'2024-07-04 06:48:41','xiaowang'),(34,'2024-07-06 02:00:00','2024-07-06 04:00:00',2,'2024-07-04 23:51:58','xiaowang'),(35,'2024-07-06 02:00:00','2024-07-06 04:00:00',2,'2024-07-04 23:52:08','xiaowang'),(43,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:25','xiaowang'),(44,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:30','xiaowang'),(45,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:31','xiaowang'),(46,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:34','xiaowang'),(47,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:35','xiaowang'),(48,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:40','xiaowang'),(49,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:41','xiaowang'),(50,'2024-07-10 02:00:00','2024-07-10 04:00:00',2,'2024-07-08 01:14:42','xiaowang'),(51,'2024-07-05 02:00:00','2024-07-05 04:00:00',2,'2024-07-08 01:15:38','xiaowang'),(52,'2024-07-05 02:00:00','2024-07-05 04:00:00',2,'2024-07-08 01:17:16','xiaowang'),(53,'2024-07-06 02:00:00','2024-07-06 04:00:00',2,'2024-07-08 01:18:25','xiaowang'),(54,'2024-07-09 02:00:00','2024-07-09 04:00:00',2,'2024-07-08 01:20:14','xiaowang'),(66,'2024-07-25 18:00:00','2024-07-25 20:00:00',2,'2024-07-12 07:04:19','wly');
/*!40000 ALTER TABLE `overtime_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userlist`
--

DROP TABLE IF EXISTS `userlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userlist` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `username` varchar(50) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
  `mg_state` varchar(100) NOT NULL,
  `role_name` varchar(100) NOT NULL,
  `type` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`,`email`,`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userlist`
--

LOCK TABLES `userlist` WRITE;
/*!40000 ALTER TABLE `userlist` DISABLE KEYS */;
INSERT INTO `userlist` VALUES (1,'wly','15840932375','kingsCosmicDestroyer@Gw.com',NULL,'1','至高王CosmicDestroyer',1),(2,'xiaowang','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(3,'xiaodi02','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(4,'xiaodi03','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(5,'xiaodi04','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(6,'xiaodi05','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(7,'xiaodi06','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(8,'xiaodi07','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(9,'xiaodi08','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(10,'xiaodi09','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(11,'xiaodi010','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(12,'xiaodi011','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(13,'xiaodi012','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(15,'xiaodi013','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(16,'xiaodi014','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(17,'xiaodi015','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1),(18,'xiaodi016','15840932485','xiaodi@Gw.com',NULL,'1','至高王的小弟',1);
/*!40000 ALTER TABLE `userlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-19 16:38:33
