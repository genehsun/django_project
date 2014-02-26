-- CREATE DATABASE  IF NOT EXISTS `app_hwakimblog` /*!40100 DEFAULT CHARACTER SET utf8 */;
-- USE `app_hwakimblog`;
-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: app_hwakimblog
-- ------------------------------------------------------
-- Server version	5.5.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogapp_post`
--

DROP TABLE IF EXISTS `blogapp_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogapp_post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `content` longtext NOT NULL,
  `published` datetime NOT NULL,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `slug` (`slug`),
  KEY `blogapp_post_790e6d98` (`published`),
  KEY `blogapp_post_337b96ff` (`author_id`),
  KEY `blogapp_post_42dc49bc` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogapp_post`
--

/*!40000 ALTER TABLE `blogapp_post` DISABLE KEYS */;
INSERT INTO `blogapp_post` VALUES (1,'First blog','first-blog','<p>This is a test blog.How about building a personal blog.OK.Python and Django Framework are good choice.</p>\r\n<p>Sometimes,we need try,try, and try again.Try to write a blog website . Try to write a photo website.... Just try for fun.You will find it\'s a funny way to be professional.</p>','2013-07-12 14:13:21',1,1),(2,'Test blog','test-blog','<address><strong><span style=\"color: #333333; font-family: \'Trebuchet MS\', Geneva, Verdana, sans-serif; line-height: 18px;\">So you\'ve got a growing Java application with a nice feature set. Unfortunately adding new features gets harder over time and things start breaking in unexpected places. Chances are that your application is not as modular as it could be. Relax, it\'s not (just) your fault. Plain Java is notoriously lacking in the</span></strong></address>','2013-07-16 14:30:20',1,2),(4,'Django Framework','django-framework','<p>django is a web frame work built with python</p>','2013-07-24 14:35:44',1,6),(5,'Build a website','build-a-website','<p>build a personal website to write some article about programming. You can do it . Just do it .</p>','2013-07-24 14:37:57',1,1),(6,'Test code highlight','test-code-highlight','<p>This is the code below:&nbsp;</p>\r\n<pre><code class=\"python\">\r\ndef clear_url_caches():\r\n    global _resolver_cache\r\n    global _ns_resolver_cache\r\n    global _callable_cache\r\n    _resolver_cache.clear()\r\n    _ns_resolver_cache.clear()\r\n    _callable_cache.clear()\r\n\r\ndef set_script_prefix(prefix):\r\n    \"\"\"\r\n    Sets the script prefix for the current thread.\r\n    \"\"\"\r\n    if not prefix.endswith(\'/\'):\r\n        prefix += \'/\'\r\n    _prefixes.value = prefix\r\n\r\n</code></pre>','2013-08-08 12:05:43',1,7),(7,'中文测试','chinese-test','<p><span>中文（Chinese），一般特指</span><a href=\"http://baike.baidu.com/view/1712.htm\" target=\"_blank\">汉字</a><span>，即</span><a href=\"http://baike.baidu.com/view/1711.htm\" target=\"_blank\">汉语</a><span>的</span><a href=\"http://baike.baidu.com/view/32894.htm\" target=\"_blank\">文字</a><span>表达形式。但有时</span><a href=\"http://baike.baidu.com/view/297380.htm\" target=\"_blank\">广义</a><span>的概念也有所扩展，即既包括书写体系，也包括发音体系。中文的使用人数在15亿以上，范围包括</span><a href=\"http://baike.baidu.com/view/61891.htm\" target=\"_blank\">中国</a><span>（含香港、</span><a href=\"http://baike.baidu.com/view/2816.htm\" target=\"_blank\">澳门</a><span>、台湾地区）、</span><a href=\"http://baike.baidu.com/view/3593.htm\" target=\"_blank\">新加坡</a><span>、马来西亚、印度尼西亚、泰国、越南、柬埔寨、缅甸以及世界各地的华人社区。</span></p>','2013-08-08 13:51:06',1,3);
/*!40000 ALTER TABLE `blogapp_post` ENABLE KEYS */;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  KEY `auth_permission_1bb8f392` (`content_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add permission',1,'add_permission'),(2,'Can change permission',1,'change_permission'),(3,'Can delete permission',1,'delete_permission'),(4,'Can add group',2,'add_group'),(5,'Can change group',2,'change_group'),(6,'Can delete group',2,'delete_group'),(7,'Can add user',3,'add_user'),(8,'Can change user',3,'change_user'),(9,'Can delete user',3,'delete_user'),(10,'Can add content type',4,'add_contenttype'),(11,'Can change content type',4,'change_contenttype'),(12,'Can delete content type',4,'delete_contenttype'),(13,'Can add session',5,'add_session'),(14,'Can change session',5,'change_session'),(15,'Can delete session',5,'delete_session'),(16,'Can add site',6,'add_site'),(17,'Can change site',6,'change_site'),(18,'Can delete site',6,'delete_site'),(19,'Can add log entry',7,'add_logentry'),(20,'Can change log entry',7,'change_logentry'),(21,'Can delete log entry',7,'delete_logentry'),(22,'Can add category',8,'add_category'),(23,'Can change category',8,'change_category'),(24,'Can delete category',8,'delete_category'),(25,'Can add post',9,'add_post'),(26,'Can change post',9,'change_post'),(27,'Can delete post',9,'delete_post'),(28,'Can add about',10,'add_about'),(29,'Can change about',10,'change_about'),(30,'Can delete about',10,'delete_about'),(31,'Can add Tag',11,'add_tag'),(32,'Can change Tag',11,'change_tag'),(33,'Can delete Tag',11,'delete_tag'),(34,'Can add Tagged Item',12,'add_taggeditem'),(35,'Can change Tagged Item',12,'change_taggeditem'),(36,'Can delete Tagged Item',12,'delete_taggeditem');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_425ae3c4` (`group_id`),
  KEY `auth_group_permissions_1e014c8f` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_3da3d3d8` (`expire_date`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('c4b5c851d288c96c138424dad27c095c','OTMzNzdlODJiZGY5Yzc4NTlkYTAwZDAyY2RiZTIxNTI3NzBmMGZiYjqAAn1xAShVEl9hdXRoX3Vz\nZXJfYmFja2VuZHECVSlkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZHED\nVQ1fYXV0aF91c2VyX2lkcQSKAQF1Lg==\n','2013-07-29 12:59:42'),('3a6d8a7baf76f7c3c7cddfe3516b4ed9','OTMzNzdlODJiZGY5Yzc4NTlkYTAwZDAyY2RiZTIxNTI3NzBmMGZiYjqAAn1xAShVEl9hdXRoX3Vz\nZXJfYmFja2VuZHECVSlkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZHED\nVQ1fYXV0aF91c2VyX2lkcQSKAQF1Lg==\n','2013-08-19 14:32:46'),('ca0bc751ac5bf07466641f4e25830754','OTMzNzdlODJiZGY5Yzc4NTlkYTAwZDAyY2RiZTIxNTI3NzBmMGZiYjqAAn1xAShVEl9hdXRoX3Vz\nZXJfYmFja2VuZHECVSlkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZHED\nVQ1fYXV0aF91c2VyX2lkcQSKAQF1Lg==\n','2013-08-22 12:02:20'),('4ab5d5351ee30d5ab4d9debc4289cb69','OTMzNzdlODJiZGY5Yzc4NTlkYTAwZDAyY2RiZTIxNTI3NzBmMGZiYjqAAn1xAShVEl9hdXRoX3Vz\nZXJfYmFja2VuZHECVSlkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZHED\nVQ1fYXV0aF91c2VyX2lkcQSKAQF1Lg==\n','2013-08-22 12:50:04');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_403f60f` (`user_id`),
  KEY `auth_user_groups_425ae3c4` (`group_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;

--
-- Table structure for table `blogapp_category`
--

DROP TABLE IF EXISTS `blogapp_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogapp_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`),
  KEY `blogapp_category_63f17a16` (`parent_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogapp_category`
--

/*!40000 ALTER TABLE `blogapp_category` DISABLE KEYS */;
INSERT INTO `blogapp_category` VALUES (1,'Normal Article','normal-article','a category for normal article',NULL),(2,'Java','java','about java',NULL),(3,'杂记','note','杂记',NULL),(4,'JavaScript','javascript','about javascript language',NULL),(5,'Web Development','web-development','about web development. django webframework',NULL),(6,'Django','django','about django ',5),(7,'Code','code','code testing',NULL);
/*!40000 ALTER TABLE `blogapp_category` ENABLE KEYS */;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_user_permissions_403f60f` (`user_id`),
  KEY `auth_user_user_permissions_1e014c8f` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_403f60f` (`user_id`),
  KEY `django_admin_log_1bb8f392` (`content_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2013-07-12 14:14:19',1,8,'1','Normal Article',1,''),(2,'2013-07-12 14:48:51',1,9,'1','First blog',1,''),(3,'2013-07-15 13:04:19',1,10,'1','关于我',1,''),(4,'2013-07-15 14:30:25',1,10,'1','关于我',2,'Changed detail.'),(5,'2013-07-16 13:13:27',1,10,'2','about me',1,''),(6,'2013-07-16 13:14:16',1,10,'2','about me',3,''),(7,'2013-07-16 14:30:40',1,8,'2','Java',1,''),(8,'2013-07-16 14:30:42',1,9,'2','test blog',1,''),(9,'2013-07-17 12:46:39',1,9,'2','test blog',2,'Changed tags.'),(10,'2013-07-17 12:46:56',1,9,'1','First blog',2,'Changed tags.'),(11,'2013-07-21 11:14:11',1,9,'2','Test blog',2,'Changed title, content and tags.'),(12,'2013-07-21 11:19:49',1,9,'2','Test blog',2,'Changed tags.'),(13,'2013-07-24 12:03:03',1,8,'3','杂记',1,''),(14,'2013-07-24 12:03:06',1,9,'3','钱难赚',1,''),(15,'2013-07-24 14:32:29',1,8,'4','JavaScript',1,''),(16,'2013-07-24 14:33:34',1,8,'5','Web Development',1,''),(17,'2013-07-24 14:33:56',1,8,'6','Django',1,''),(18,'2013-07-24 14:35:52',1,9,'4','Django Framework',1,''),(19,'2013-07-24 14:38:07',1,9,'5','Build a website',1,''),(20,'2013-08-08 12:06:00',1,8,'7','Code',1,''),(21,'2013-08-08 12:06:03',1,9,'6','Test code highlight',1,''),(22,'2013-08-08 12:12:59',1,9,'6','Test code highlight',2,'Changed content and tags.'),(23,'2013-08-08 12:16:06',1,9,'6','Test code highlight',2,'Changed content and tags.'),(24,'2013-08-08 12:26:44',1,9,'6','Test code highlight',2,'Changed content and tags.'),(25,'2013-08-08 12:30:39',1,9,'6','Test code highlight',2,'Changed content and tags.'),(26,'2013-08-08 12:55:10',1,9,'6','Test code highlight',2,'Changed content and tags.'),(27,'2013-08-08 12:58:46',1,9,'6','Test code highlight',2,'Changed content and tags.'),(28,'2013-08-08 13:41:08',1,9,'3','钱难赚',3,''),(29,'2013-08-08 13:46:49',1,9,'1','First blog',2,'Changed content and tags.'),(30,'2013-08-08 13:47:55',1,9,'2','Test blog',2,'Changed content and tags.'),(31,'2013-08-08 13:48:26',1,9,'5','Build a website',2,'Changed tags and category.'),(32,'2013-08-08 13:49:44',1,9,'6','Test code highlight',2,'Changed content and tags.'),(33,'2013-08-08 13:53:05',1,9,'7','中文测试',2,'Changed tags.'),(34,'2013-08-08 13:54:19',1,9,'6','Test code highlight',2,'Changed content and tags.');
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;

--
-- Table structure for table `taggit_taggeditem`
--

DROP TABLE IF EXISTS `taggit_taggeditem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taggit_taggeditem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_id` int(11) NOT NULL,
  `object_id` int(11) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tag_id_refs_id_3781c07b` (`tag_id`),
  CONSTRAINT `tag_id_refs_id_3781c07b` FOREIGN KEY (`tag_id`) REFERENCES `taggit_tag` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taggit_taggeditem`
--

/*!40000 ALTER TABLE `taggit_taggeditem` DISABLE KEYS */;
INSERT INTO `taggit_taggeditem` VALUES (7,5,4,9),(18,2,1,9),(19,1,2,9),(20,3,2,9),(21,8,5,9),(22,6,5,9),(23,7,5,9),(25,12,7,9),(26,9,6,9);
/*!40000 ALTER TABLE `taggit_taggeditem` ENABLE KEYS */;

--
-- Table structure for table `django_site`
--

DROP TABLE IF EXISTS `django_site`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_site` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_site`
--

/*!40000 ALTER TABLE `django_site` DISABLE KEYS */;
INSERT INTO `django_site` VALUES (1,'example.com','example.com');
/*!40000 ALTER TABLE `django_site` ENABLE KEYS */;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(75) NOT NULL,
  `password` varchar(128) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `last_login` datetime NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'sunhuaqin','','','gene.h.sun@gmail.com','pbkdf2_sha256$10000$lWWFtjstXOwd$qwWCfpzQBRmaBhVbyBmuEzLu0/qBE7UaK6K+j82Wzkg=',1,1,1,'2013-08-08 12:50:04','2013-07-10 13:27:15');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;

--
-- Table structure for table `taggit_tag`
--

DROP TABLE IF EXISTS `taggit_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taggit_tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taggit_tag`
--

/*!40000 ALTER TABLE `taggit_tag` DISABLE KEYS */;
INSERT INTO `taggit_tag` VALUES (1,'test','test'),(2,'haha','haha'),(3,'wohehe','wohehe'),(4,'钱',''),(5,'django','django'),(6,'website','website'),(7,'you','you'),(8,'programming','programming'),(9,'code','code'),(12,'中文','_1');
/*!40000 ALTER TABLE `taggit_tag` ENABLE KEYS */;

--
-- Table structure for table `blogapp_about`
--

DROP TABLE IF EXISTS `blogapp_about`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogapp_about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `detail` longtext NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subject` (`subject`),
  UNIQUE KEY `slug` (`slug`),
  KEY `blogapp_about_337b96ff` (`author_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogapp_about`
--

/*!40000 ALTER TABLE `blogapp_about` DISABLE KEYS */;
INSERT INTO `blogapp_about` VALUES (1,'关于我','about-me','一个成长中的程序员。\r\n\r\nE-mail: gene.h.sun@gmail.com',1);
/*!40000 ALTER TABLE `blogapp_about` ENABLE KEYS */;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_label` (`app_label`,`model`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'permission','auth','permission'),(2,'group','auth','group'),(3,'user','auth','user'),(4,'content type','contenttypes','contenttype'),(5,'session','sessions','session'),(6,'site','sites','site'),(7,'log entry','admin','logentry'),(8,'category','blogapp','category'),(9,'post','blogapp','post'),(10,'about','blogapp','about'),(11,'Tag','taggit','tag'),(12,'Tagged Item','taggit','taggeditem');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-08-08 22:02:22

