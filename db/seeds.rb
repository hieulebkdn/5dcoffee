# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

list_base = [["72 Le Dinh Duong", "72"], ["155 Trieu Nu Vuong", "155"], ["Upper Dorm","Dorm"],
["Chin's Kitchen","Chin"], ["The Locals Bean", "Bean"]]
existing_base = Base.all.map { |b| b.name }
list_base.each do |n, c|
  unless existing_base.include?(n)
    Base.create name: n, codename: c
  end
end

list_inventory = [
  ["SC","Sua chua","thùng"],
  ["NS","Nuoc suoi","lốc"],
  ["TN","Thuoc ngua","cây"],
  ["TM","Thuoc meo","cây"],
  ["TL","Thuoc mal","cây"],
  ["BH","Bo huc","thùng"],
  ["DH","Dunhill","cây"]
]
existing_inventory = Inventory.pluck :sku
list_inventory.each do |sku, name, unit|
  unless existing_inventory.include?(sku)
    Inventory.create sku: sku, name: name, unit: unit
  end
end

2.times do |base_id|
  7.times do |inven_id|
    Link.create base_id: base_id+1, inventory_id: inven_id+1, quantity: rand(10)
  end
end
