class Link < ApplicationRecord
  belongs_to :inventory
  belongs_to :base
  delegate :name, :unit, to: :inventory, allow_nil: true, prefix: true
  delegate :name, to: :base, allow_nil: true, prefix: true
end
