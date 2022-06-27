# web-app-test
A web app for testing.
A node-express-mysql app for testing purposes.

## Requirements:
I. Configure mysql database
II. Configure runtime variables
III. Configure server application

## I. Configure mysql database
Create a mysql database and note the server host name, user name, password,
and:
(1) Name the database 'chemistry' OR
(2) Change the name to your choosing in schemas > chemical_elements.sql 

Source the chemicel_elements schema to the created database.

## II. Configure runtime variables
Enter node runtime environment variables as follows:
(1) HOST='your-server-host'
(2) PORT='your-server-port'
(3) NODE_ENV='production-or-development'
(4) MYSQL_DATABASE_HOST='your-mysql-server-host'
(5) MYSQL_DATABASE_USER='your-mysql-server-user'
(6) MYSQL_DATABASE_PASS='your-mysql-server-password'
(7) MYSQL_DATABASE_NAME='your-mysql-server-database'

## III. Configure server application
Change the template engine's view path to its full path relative to the host
server's root folder. For example on aws-ec2-linux-2:

app.set('views', '/home/ec2-user/web-app-test/views');

The inclusiong of the views full path is not strictly needed to run the
application on a server but useful - in one use case, for automating
application restart on system reboot using systemd services.