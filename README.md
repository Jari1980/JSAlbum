# Album API - Docker Commands

## Start the Application
From project root:
```bash
docker-compose up --build
```
This will create the DockerImage and application will be running

In order to check the database in Docker Desktop<br>
1, Select containers on the left hand side<br>
2, Expand jsalbum(this project)<br>
3, Select mongo-1<br>
4, Click Exec in header<br>
5, Run Mongo shell<br>
```bash
mongosh
```
6, Switch to database
```
use albums
```
7, List all collections
```
show collections
```
8, View all albums
```
db.albums.find()
```
