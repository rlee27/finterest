# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170926231445) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "author_id",   null: false
    t.integer  "topic_id"
    t.integer  "cover_id"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["author_id"], name: "index_boards_on_author_id", using: :btree
    t.index ["cover_id"], name: "index_boards_on_cover_id", using: :btree
    t.index ["topic_id"], name: "index_boards_on_topic_id", using: :btree
  end

  create_table "fins", force: :cascade do |t|
    t.integer  "board_id",        null: false
    t.integer  "pin_id",          null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "pin_description"
    t.integer  "user_id",         null: false
    t.index ["board_id"], name: "index_fins_on_board_id", using: :btree
    t.index ["pin_id"], name: "index_fins_on_pin_id", using: :btree
    t.index ["user_id"], name: "index_fins_on_user_id", using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.string   "followable_type"
    t.integer  "followable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "user_id",         null: false
    t.index ["followable_type", "followable_id"], name: "index_follows_on_followable_type_and_followable_id", using: :btree
    t.index ["user_id"], name: "index_follows_on_user_id", using: :btree
  end

  create_table "pins", force: :cascade do |t|
    t.string   "pin_url"
    t.integer  "author_id",          null: false
    t.integer  "board_id",           null: false
    t.text     "description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "topic_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["author_id"], name: "index_pins_on_author_id", using: :btree
    t.index ["board_id"], name: "index_pins_on_board_id", using: :btree
    t.index ["topic_id"], name: "index_pins_on_topic_id", using: :btree
  end

  create_table "topics", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",               null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.string   "gender"
    t.string   "age"
    t.string   "name",                null: false
    t.string   "location"
    t.text     "about"
    t.string   "website"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
  end

end
