class CreateLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :links do |t|
      t.decimal :quantity, default: 0, precision: 5, scale: 2

      t.timestamps
    end
    add_reference :links, :base, foreign_key: true
    add_reference :links, :inventory, foreign_key: true
  end
end
