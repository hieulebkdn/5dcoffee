class CreateInventories < ActiveRecord::Migration[5.1]
  def change
    create_table :inventories do |t|
      t.string :sku, null: false
      t.string :name, null: false
      t.string :unit, null: false

      t.timestamps
    end
    add_index :inventories, :sku
    add_index :inventories, :name
  end
end
