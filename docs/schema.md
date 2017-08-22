# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username              | string   | not null (can pull username from email, user can edit later)
email        | string    | not null, indexed, unique
gender           | string    |
age           | string    |
name           | string    | not null
location           | string    |
about           | text    |
website           | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## pins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description       | text    |
pin_origin | string | not null
author_id   | integer   | not null, foreign key (references users), indexed
board_id | integer   | not null, foreign key (references board), indexed

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
collaborator_id | integer | foreign key (references users), indexed
category_id | integer | foreign key (references topics), indexed
cover_id | integer | foreign key (references pins), indexed, only one cover_id per board
description | text    |

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
following_id | integer | foreign key (references users), indexed
board_id      | integer   | foreign key (references boards), indexed
topic_id | integer | foreign key (references topics), indexed


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
pin_id | integer | not null (references pin), indexed
body | text | not null
