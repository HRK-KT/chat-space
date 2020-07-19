class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :body
      t.integer :group_id, foreign_key: true, null: false
      t.integer :user_id, foreign_key: true, null: false
      t.string :image
      t.timestamps
    end
  end
end
