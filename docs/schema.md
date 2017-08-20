# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email        | string    | not null, indexed, unique
gender           | string    | not null
age           | string    | not null
name           | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## pins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description       | text    |
image_url        | text      | not null
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
image_url        | string    | not null

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
follower_id | integer | foreign key (references users), indexed
board_id      | integer   | foreign key (references boards), indexed
topic_id | integer | foreign key (references topics), indexed
