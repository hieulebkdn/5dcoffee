class CreateBases < ActiveRecord::Migration[5.1]
  def change
    create_table :bases do |t|
      t.string :name, null: false
      t.string :codename, null: false

      t.timestamps
    end
  end
end
