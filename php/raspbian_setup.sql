// Apache in /etc/apache2
// Root Directory can be changed in /etc/apache2/sites-available/000-default.conf
sudo apt-get update && sudo apt-get -y dist-upgrade && sudo apt-get install -y apache2

// PHP
sudo apt install php php-mbstring

// PDO Extension
sudo apt-get install php-mysql

// MySql
sudo apt-get install mariadb-server
/ Sign In
sudo mysql -u root -p // pw = "toor"

// Change root password
USE mysql;
UPDATE user SET password=PASSWORD('pw') WHERE User='root' AND Host = 'localhost';
FLUSH PRIVILEGES;
exit;

sudo mysql -u root -p

// Create own user
CREATE USER 'IhrName'@'localhost' IDENTIFIED BY 'IhrPasswort';
GRANT ALL PRIVILEGES ON *.* TO 'IhrName'@'localhost' WITH GRANT OPTION;
exit;

// Sign in with new user
sudo mysql -u oscarphp -p

SHOW DATBASES;
SHOW TABLES;

// imageapp.users vs nur users

