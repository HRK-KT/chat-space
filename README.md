# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null:false,uniquie:true|
|email|string|null:false,default:""|
|encrypted-password|string|null:false,default:""|
|reser-password-token|string||
|reset_password_sent_at|datetime||
|remember_created_at|datetime||

### Association
- has_many :groups, through: groups_users
- has_many :messages
- has_many :groups_users


## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null:false,unique:true|

### Association
- has_many :users, through: groups_users
- has_many :messages
- has_many :groups_users

## messages table
|Column|Type|Options|
|------|----|-------|
|body|string|null:false|
|groups_users_id|integer||
|image|string||

### Association
- belongs_to :user
- belongs_to :group

## groups_users table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true, null: false|
|group_id|integer|foreign_key: true, null: false|

### Association
- belongs_to :user
- belongs_to :group

