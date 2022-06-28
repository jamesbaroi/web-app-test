# Web-App-Test
A node-express-mysql application for testing purposes. The app renders a
landing page and a link to a table of the chemical elements. 

## Requirements:
I. Configure mysql database

II. Set runtime variables

III. Configure server application

### I. Configure mysql database
(1) Create a mysql database and note the server host name, user name, and
password.

(2) Name the created database 'chemistry' or change the name to your choosing
in schemas > chemical_elements.sql.

(3) Source the chemicel_elements schema to the created database.

### II. Set runtime variables
Enter node runtime environment variables as follows:

(1) HOST='your-server-host'

(2) PORT='your-server-port'

(3) NODE_ENV='production-or-development'

(4) MYSQL_DATABASE_HOST='your-mysql-server-host'

(5) MYSQL_DATABASE_USER='your-mysql-server-user'

(6) MYSQL_DATABASE_PASS='your-mysql-server-password'

(7) MYSQL_DATABASE_NAME='your-mysql-server-database'

### III. Configure server application
Change the template engine's view path in app.js to its full path relative to
the host server's root folder. For example on aws-ec2-linux-2:

app.set('views', '/home/ec2-user/web-app-test/views');

The the full path is not strictly needed to run the application on a server but
useful - in one use case, for automating application restart on system reboot
using systemd services.