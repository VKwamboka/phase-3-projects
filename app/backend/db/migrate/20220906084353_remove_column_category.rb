class RemoveColumnCategory < ActiveRecord::Migration[6.1]
  def change
    remove_column :inspirations, :category, :string
  end
end
