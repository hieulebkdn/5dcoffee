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

ActiveRecord::Schema.define(version: 20180727145029) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bases", force: :cascade do |t|
    t.string "name", null: false
    t.string "codename", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.string "sku", null: false
    t.string "name", null: false
    t.string "unit", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_inventories_on_name"
    t.index ["sku"], name: "index_inventories_on_sku"
  end

  create_table "links", force: :cascade do |t|
    t.decimal "quantity", precision: 5, scale: 2, default: "0.0"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "base_id"
    t.bigint "inventory_id"
    t.index ["base_id"], name: "index_links_on_base_id"
    t.index ["inventory_id"], name: "index_links_on_inventory_id"
  end

  add_foreign_key "links", "bases", column: "base_id"
  add_foreign_key "links", "inventories"
end
