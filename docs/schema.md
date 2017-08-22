# Schema Information

## user
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
avatar          | string    | default "avatar.png"
password_digest | string    | not null
bio             | string    |
session_token   | string    | not null, indexed, unique

## song
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
genre       | string    | not null
song_url    | string    | not null
song_art    | string    | default "sample_record.png"
user_id     | integer   | not null, foreign key (references user), indexed

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references user), indexed, unique with followee_id
followee_id | integer   | not null, foreign_key (references user), indexed


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references songs), indexed
user_id     | integer   | not null, foreign key (references tags), indexed
body        | string    | not null
